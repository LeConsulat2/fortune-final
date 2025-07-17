'use client';

import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if user has already made a choice
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    // Initialize Google AdSense if not already loaded
    if (typeof window !== 'undefined' && !window.adsbygoogle) {
      const script = document.createElement('script');
      script.src =
        'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ADSENSE_ID';
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
    // Block AdSense by not loading the script
    // Remove any existing AdSense scripts
    const existingScripts = document.querySelectorAll(
      'script[src*="googlesyndication"]',
    );
    existingScripts.forEach((script) => script.remove());
  };

  const handleCustomize = () => {
    // Redirect to cookie policy page where users can learn more
    window.location.href = '/cookies';
  };

  // Don't render on server side
  if (!mounted || !showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 shadow-lg">
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex items-start gap-4">
          <Cookie className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />

          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2">
              Cookie Settings
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              We use cookies to enhance your experience and show relevant ads
              through Google AdSense. These cookies help us provide personalized
              content and measure site performance. You can manage your
              preferences or learn more in our{' '}
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
                onClick={handleAcceptAll}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Accept All
              </button>

              <button
                onClick={handleDecline}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Decline
              </button>

              <button
                onClick={handleCustomize}
                className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Customize
              </button>
            </div>
          </div>

          <button
            onClick={() => setShowBanner(false)}
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
