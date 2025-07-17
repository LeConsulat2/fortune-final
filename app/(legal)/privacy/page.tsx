// app/(legal)/privacy/page.tsx - REVISED
export const metadata = {
  title: 'Privacy Policy | your-fortune',
  description:
    'Privacy policy for your-fortune — how we handle your data, session storage, AI processing, and our approach to cookies and future advertising.',
};

export default function PrivacyPage() {
  return (
    <main className="prose prose-invert max-w-4xl mx-auto p-6 text-gray-100">
      <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
        <p className="text-gray-300 mb-8">
          <strong>Last updated:</strong> July 17, 2025 {/* Updated date */}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            1. Who we are
          </h2>
          <p className="text-gray-300 leading-relaxed">
            your-fortune (&quot;we&quot;, &quot;our&quot;) is a privacy-first
            fortune experience operated from Auckland, New Zealand.
            Contact:&nbsp;
            <a
              href="mailto:wecreate5000@gmail.com"
              className="text-purple-400 hover:text-purple-300"
            >
              wecreate5000@gmail.com
            </a>
            .
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
              your-fortune stores <strong>no personal data</strong> on our
              servers. Everything stays within your browser session and
              disappears automatically when you close the tab or refresh the
              page.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            3. What data we collect and process
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-600 text-sm">
              <thead>
                <tr className="bg-gray-700">
                  <th className="border border-gray-600 p-3 text-left">
                    Data Type
                  </th>
                  <th className="border border-gray-600 p-3 text-left">
                    Purpose
                  </th>
                  <th className="border border-gray-600 p-3 text-left">
                    Storage
                  </th>
                  <th className="border border-gray-600 p-3 text-left">
                    Retention
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-600 p-3">
                    Name (optional, default as &quot;Anonymous&quot;)
                  </td>
                  <td className="border border-gray-600 p-3">
                    Fortune personalization
                  </td>
                  <td className="border border-gray-600 p-3">
                    Browser session only
                  </td>
                  <td className="border border-gray-600 p-3">
                    Tab close/refresh
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-600 p-3">Birth date</td>
                  <td className="border border-gray-600 p-3">
                    Zodiac sign calculation
                  </td>
                  <td className="border border-gray-600 p-3">
                    Browser session only
                  </td>
                  <td className="border border-gray-600 p-3">
                    Tab close/refresh
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-600 p-3">
                    Gender (optional)
                  </td>
                  <td className="border border-gray-600 p-3">
                    Fortune customization
                  </td>
                  <td className="border border-gray-600 p-3">
                    Browser session only
                  </td>
                  <td className="border border-gray-600 p-3">
                    Tab close/refresh
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-600 p-3">Occupation</td>
                  <td className="border border-gray-600 p-3">
                    Career-related insights
                  </td>
                  <td className="border border-gray-600 p-3">
                    Browser session only
                  </td>
                  <td className="border border-gray-600 p-3">
                    Tab close/refresh
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-600 p-3">Quiz responses</td>
                  <td className="border border-gray-600 p-3">
                    Personalized fortunes
                  </td>
                  <td className="border border-gray-600 p-3">
                    Browser session only
                  </td>
                  <td className="border border-gray-600 p-3">
                    Tab close/refresh
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
              When you generate a fortune, your data is sent to a serverless
              function, which instantly returns your result.
              <strong>Nothing is logged or saved</strong> in the process.
            </p>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
            <h3 className="text-lg font-semibold text-gray-200 mb-2">
              Data Flow
            </h3>
            <div className="text-sm text-gray-300">
              <p className="mb-2">
                1. You enter information &rarr; Stored in browser session
              </p>
              <p className="mb-2">
                2. You request fortune &rarr; Data sent to our AI processing
                function
              </p>
              <p className="mb-2">
                3. AI generates response &rarr; Returned to your browser
              </p>
              <p>
                4. You close tab/refresh &rarr; All data automatically deleted
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            5. Third-party processing
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            To provide AI-generated fortunes, we use external services that
            temporarily process your data:
          </p>
          <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-500/30">
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">
              AI Processing
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Your session data and responses are sent to{' '}
              <strong>OpenAI&apos;s API</strong>
              (US-based) to generate personalized fortunes. OpenAI processes
              this data according to their own privacy policy but does not store
              it for training purposes when accessed through our API
              integration.
            </p>
          </div>
          <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600 mt-4">
            <h3 className="text-lg font-semibold text-gray-200 mb-2">
              Hosting & Infrastructure
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Our application is hosted on <strong>Vercel</strong> (US-based)
              using edge functions for global performance. No personal data is
              stored on Vercel servers - only the application code and temporary
              request processing.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            6. Cookies and Future Advertising
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We currently use only **essential technical cookies** necessary for
            the website to function. We do **NOT** use any analytics, tracking,
            or advertising cookies today. However, we may introduce advertising
            in the future (e.g., via Google AdSense) to support the service.
            **If we do, any advertising cookies will only be set after you
            provide explicit consent through a dedicated consent banner.** You
            can find more detailed information about our cookie usage in our{' '}
            <a
              href="/cookies"
              className="text-purple-400 hover:text-purple-300"
            >
              Cookie Policy
            </a>
            .
          </p>
          {/* Include AdSense opt-out links here IF you had AdSense currently enabled on THIS site.
              Since you don't, it's better not to list them here to avoid confusion.
              The Cookie Policy can mention where future opt-outs would be. */}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            7. Data security and session management
          </h2>
          <p className="text-gray-300 leading-relaxed">
            All communication is encrypted using HTTPS. Your session data lives
            in your browser only and is wiped when you refresh, close the tab,
            or clear storage. Our infrastructure is stateless &mdash; meaning no
            information is remembered or retained between requests.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            8. Age recommendations
          </h2>
          <p className="text-gray-300 leading-relaxed">
            While your-fortune is suitable for all ages, we recommend that users
            under 13 use the Service under parental guidance. We do not
            knowingly collect personally identifiable information from children,
            and all data processing is temporary and session-based regardless of
            user age.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            9. International data processing
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Your data may be temporarily processed by our third-party services
            (OpenAI, Vercel) which operate globally, including in the United
            States. Since no data is permanently stored, there are no lasting
            international transfers or data residency concerns.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            10. Your control and rights
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              • <strong>Delete your data:</strong> Just close the tab or refresh
            </li>
            <li>
              • <strong>Start fresh:</strong> Clear browser sessionStorage
            </li>
            <li>
              • <strong>Ask anything:</strong> Contact us at any time with
              concerns
            </li>
            <li>
              • <strong>Data portability:</strong> Since no data is stored,
              there&apos;s nothing to export
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            11. AI-generated content disclaimer
          </h2>
          <p className="text-gray-300 leading-relaxed">
            All fortunes are generated by artificial intelligence for
            entertainment, reflection, and personal insight &mdash; not as
            professional advice. Please use discretion and common sense when
            interpreting any AI-generated content.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            12. Updates to this policy
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We&apos;ll update this policy if anything changes. You can always
            find the latest version on this page. Continued use of your-fortune
            means you accept the most recent version.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            13. Contact
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Questions about privacy or data practices? Email us at&nbsp;
            <a
              href="mailto:wecreate5000@gmail.com"
              className="text-purple-400 hover:text-purple-300"
            >
              wecreate5000@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
