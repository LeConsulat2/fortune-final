export const metadata = {
  title: 'Privacy Policy | Fortune-Final',
  description:
    'Privacy policy for Fortune-Final - how we handle your data, session storage, and AI processing.',
};

export default function PrivacyPage() {
  return (
    <main className="prose prose-invert max-w-4xl mx-auto p-6 text-gray-100">
      <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
        <p className="text-gray-300 mb-8">
          <strong>Last updated:</strong> July 11, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            1. Who we are
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Fortune-Final (&quot;we&quot;, &quot;our&quot;) is a privacy-first
            AI-powered fortune application operated in Auckland, New Zealand.
            Contact:{' '}
            <a
              href="mailto:fortune@example.com"
              className="text-purple-400 hover:text-purple-300"
            >
              fortune@example.com
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            2. Our Privacy-First Approach
          </h2>
          <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30 mb-4">
            <p className="text-green-400 font-semibold mb-2">
              Zero Server Storage Guarantee
            </p>
            <p className="text-gray-300 leading-relaxed">
              Fortune-Final stores <strong>absolutely no personal data</strong>{' '}
              on our servers. All your information remains in your browser
              session and is automatically deleted when you close the tab or
              refresh the page.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            3. What data we collect and process
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-600 bg-gray-900/50">
              <thead>
                <tr className="bg-gray-700">
                  <th className="border border-gray-600 p-3 text-left text-white">
                    Data
                  </th>
                  <th className="border border-gray-600 p-3 text-left text-white">
                    Purpose
                  </th>
                  <th className="border border-gray-600 p-3 text-left text-white">
                    Storage Location
                  </th>
                  <th className="border border-gray-600 p-3 text-left text-white">
                    Retention
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-600 p-3 text-gray-300">
                    Name, gender (optional)
                  </td>
                  <td className="border border-gray-600 p-3 text-gray-300">
                    Personalize fortune tone and style
                  </td>
                  <td className="border border-gray-600 p-3 text-gray-300">
                    Browser sessionStorage only
                  </td>
                  <td className="border border-gray-600 p-3 text-gray-300">
                    Session only
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-600 p-3 text-gray-300">
                    Birth date
                  </td>
                  <td className="border border-gray-600 p-3 text-gray-300">
                    Calculate zodiac sign for astrological insights
                  </td>
                  <td className="border border-gray-600 p-3 text-gray-300">
                    Browser sessionStorage only
                  </td>
                  <td className="border border-gray-600 p-3 text-gray-300">
                    Session only
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-600 p-3 text-gray-300">
                    Occupation (optional)
                  </td>
                  <td className="border border-gray-600 p-3 text-gray-300">
                    Tailor career and life advice
                  </td>
                  <td className="border border-gray-600 p-3 text-gray-300">
                    Browser sessionStorage only
                  </td>
                  <td className="border border-gray-600 p-3 text-gray-300">
                    Session only
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-600 p-3 text-gray-300">
                    Quiz responses
                  </td>
                  <td className="border border-gray-600 p-3 text-gray-300">
                    Generate personalized fortune content
                  </td>
                  <td className="border border-gray-600 p-3 text-gray-300">
                    Browser sessionStorage only
                  </td>
                  <td className="border border-gray-600 p-3 text-gray-300">
                    Session only
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-300 mt-4 leading-relaxed">
            <strong>Important:</strong> No emails, payment details, or
            persistent identifiers are collected. All data is stored using the
            browser&apos;s sessionStorage API under the key
            &quot;fortune-user-memory&quot;.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            4. How we process your data
          </h2>
          <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30 mb-4">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">
              Stateless Processing
            </h3>
            <p className="text-gray-300 leading-relaxed">
              When you generate a fortune, your data is sent to our Edge API
              function, which immediately processes it with help of AI model and
              returns your personalized fortune.{' '}
              <strong>No data is logged, stored, or retained</strong> by our
              servers during this process.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
              <h4 className="font-semibold text-white mb-2">Data Flow:</h4>
              <ol className="space-y-2 text-gray-300 text-sm">
                <li>1. Your data is collected in your browser session</li>
                <li>
                  2. When you request a fortune, data is sent to our Edge API
                </li>
                <li>3. Our API sends your data to OpenAI for processing</li>
                <li>4. OpenAI generates your personalized fortune</li>
                <li>5. The fortune is returned to your browser</li>
                <li>
                  6. <strong>No data is stored anywhere in this process</strong>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            5. Third-party data processors
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
              <h4 className="font-semibold text-white mb-2">
                OpenAI (GPT-4o-mini)
              </h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>
                  • <strong>Purpose:</strong> AI-powered fortune generation
                </li>
                <li>
                  • <strong>Data shared:</strong> Your profile and quiz
                  responses
                </li>
                <li>
                  • <strong>Location:</strong> United States
                </li>
                <li>
                  • <strong>Retention:</strong> OpenAI may retain data per their
                  privacy policy
                </li>
                <li>
                  • <strong>Privacy Policy:</strong>{' '}
                  <a
                    href="https://openai.com/privacy"
                    className="text-purple-400 hover:text-purple-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://openai.com/privacy
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
              <h4 className="font-semibold text-white mb-2">
                Vercel (Hosting)
              </h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>
                  • <strong>Purpose:</strong> Application hosting and Edge
                  functions
                </li>
                <li>
                  • <strong>Data shared:</strong> Technical request data only
                </li>
                <li>
                  • <strong>Location:</strong> Global edge network
                </li>
                <li>
                  • <strong>Retention:</strong> Standard web server logs (no
                  personal data)
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            6. Advertising cookies (Future Implementation)
          </h2>
          <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-500/30 mb-4">
            <p className="text-yellow-400 font-semibold mb-2">
              Coming Soon: Google AdSense
            </p>
            <p className="text-gray-300 leading-relaxed">
              We plan to implement Google AdSense for revenue. When implemented,
              cookies will <strong>only load after explicit consent</strong> via
              our EU-compliant consent banner.
            </p>
          </div>

          <ul className="space-y-3 text-gray-300">
            <li className="leading-relaxed">
              <strong>
                Third-party vendors, including Google, will use cookies to serve
                ads based on a user&apos;s prior visits to this or other
                websites.
              </strong>
            </li>
            <li className="leading-relaxed">
              <strong>
                Google&apos;s use of cookies enables it and its partners to
                serve ads to users based on their visit to this and/or other
                sites.
              </strong>
            </li>
            <li className="leading-relaxed">
              <strong>
                Users can opt-out of personalised advertising in{' '}
                <a
                  href="https://adssettings.google.com"
                  className="text-purple-400 hover:text-purple-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Ads Settings
                </a>{' '}
                or at{' '}
                <a
                  href="https://www.aboutads.info"
                  className="text-purple-400 hover:text-purple-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.aboutads.info
                </a>
                .
              </strong>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            7. Data security and session management
          </h2>
          <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30 mb-4">
            <h4 className="font-semibold text-green-400 mb-2">
              Automatic Data Deletion
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Your data is automatically deleted in the following scenarios:
            </p>
            <ul className="space-y-1 text-gray-300 text-sm mt-2">
              <li>• When you close your browser tab</li>
              <li>• When you refresh the page</li>
              <li>• When your browser session expires</li>
              <li>• When you clear your browser data</li>
            </ul>
          </div>

          <p className="text-gray-300 leading-relaxed">
            All data transmission between your browser and our servers is
            encrypted using industry-standard HTTPS protocols. Our Edge
            functions are stateless and maintain no memory between requests.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            8. Age restrictions and child safety
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Fortune-Final is designed for users aged 13 and above. We do not
            knowingly collect personal information from children under 13. If
            you believe we have inadvertently collected information from a child
            under 13, please contact us immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            9. International data transfers
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Your data may be processed by OpenAI in the United States for
            fortune generation. OpenAI participates in relevant data protection
            frameworks and maintains appropriate security measures. Since we
            store no data ourselves, there are no other international transfers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            10. Your rights and choices
          </h2>
          <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30 mb-4">
            <h4 className="font-semibold text-blue-400 mb-2">
              Complete Control Over Your Data
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Since all data is stored in your browser session, you have
              complete control over your information at all times.
            </p>
          </div>

          <ul className="space-y-2 text-gray-300">
            <li>
              • <strong>Delete your data:</strong> Simply refresh the page or
              close the tab
            </li>
            <li>
              • <strong>Start over:</strong> Clear your browser&apos;s session
              storage
            </li>
            <li>
              • <strong>Opt-out of cookies:</strong> Use the &quot;Cookie
              Settings&quot; link (when implemented)
            </li>
            <li>
              • <strong>Contact us:</strong> Email us with any privacy concerns
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            11. Disclaimer about AI-generated content
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Fortune-Final generates content using artificial intelligence for
            entertainment purposes only. AI-generated fortunes should not be
            considered professional advice for medical, legal, financial, or
            other serious life decisions. We are not responsible for decisions
            made based on AI-generated content.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            12. Changes to this privacy policy
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We may update this privacy policy from time to time. Any changes
            will be reflected in the &quot;Last updated&quot; date at the top of
            this page. We encourage you to review this policy periodically.
            Continued use of Fortune-Final after changes constitutes acceptance
            of the updated policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            13. Contact us
          </h2>
          <p className="text-gray-300 leading-relaxed">
            If you have any questions about this privacy policy or our data
            practices, please contact us at:{' '}
            <a
              href="mailto:fortune@example.com"
              className="text-purple-400 hover:text-purple-300"
            >
              fortune@example.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
