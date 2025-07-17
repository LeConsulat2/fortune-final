// components/cookie-consent-banner.tsx - REVISED
'use client';

import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if user has already acknowledged the cookie policy
    const hasAcknowledged = localStorage.getItem(
      'cookie-policy-acknowledged-v2',
    ); // Added v2 for this specific version
    if (!hasAcknowledged) {
      setShowBanner(true);
    }
  }, []);

  const handleAcknowledge = () => {
    // User acknowledges they've seen the policy for essential cookies
    localStorage.setItem('cookie-policy-acknowledged-v2', 'true');
    setShowBanner(false);
    // IMPORTANT: Still NO AdSense script loading here, as per your current policy
    // If you introduce AdSense, this logic will need to change to
    // load AdSense ONLY if 'accepted'
  };

  const handleLearnMore = () => {
    // Redirect to cookie policy page where users can learn more
    window.location.href = '/cookies';
  };

  // Don't render on server side or if already acknowledged/closed
  if (!mounted || !showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 shadow-lg">
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex items-start gap-4">
          <Cookie className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />

          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2">
              Our Cookie Policy
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              We use essential cookies to make our site work. We currently do
              NOT use advertising or tracking cookies, but if we introduce them
              in the future (e.g., Google AdSense), we will ask for your
              explicit consent first. Learn more in our{' '}
              <a
                href="/cookies"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                Cookie Policy
              </a>
              .
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleAcknowledge}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Got it!
              </button>

              <button
                onClick={handleLearnMore}
                className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>

          <button
            onClick={() => setShowBanner(false)} // Allows closing without acknowledging for current session
            className="text-gray-400 hover:text-white p-1 rounded-lg transition-colors"
            aria-label="Close cookie banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
