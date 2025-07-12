export const metadata = {
  title: 'Privacy Policy | your-fortune',
  description:
    'Privacy policy for your-fortune — how we handle your data, session storage, and AI processing.',
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
            your-fortune (&quot;we&quot;, &quot;our&quot;) is a privacy-first
            fortune experience operated from Auckland, New Zealand.
            Contact:&nbsp;
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
          {/* ... keep your data table as-is — it's good ... */}
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

          {/* Optional: update Data Flow if you'd like to remove OpenAI mention */}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            5. Third-party processing
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Our backend providers process temporary request data to deliver
            results. None of them receive or store identifiable user
            information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            6. Cookies and future advertising
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We do not use any tracking or advertising cookies today. If we
            introduce ads in the future, they will be shown only after you grant
            clear, explicit consent — never by default.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            7. Data security and session management
          </h2>
          <p className="text-gray-300 leading-relaxed">
            All communication is encrypted using HTTPS. Your session data lives
            in your browser only and is wiped when you refresh, close the tab,
            or clear storage. Our infrastructure is stateless — meaning no
            information is remembered or retained between requests.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            8. Age restrictions
          </h2>
          <p className="text-gray-300 leading-relaxed">
            your-fortune is intended for users aged 13 and up. We do not
            knowingly collect or store data from anyone under 13. If you believe
            this has occurred, please contact us immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            9. International data
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Our cloud and processing infrastructure may span multiple regions
            depending on availability and performance. However, since no data is
            permanently stored, there are no lasting international transfers.
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
              • <strong>Start fresh:</strong> Clear sessionStorage
            </li>
            <li>
              • <strong>Ask anything:</strong> Contact us at any time with
              concerns
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            11. AI-generated content disclaimer
          </h2>
          <p className="text-gray-300 leading-relaxed">
            All fortunes are generated for reflection and emotional exploration
            — not as professional advice. Please use discretion and common sense
            when reading or sharing content created by our system.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            12. Updates to this policy
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We’ll update this policy if anything changes. You can always find
            the latest version on this page. Continued use of your-fortune means
            you accept the most recent version.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            13. Contact
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Questions about privacy or data practices? Email us at&nbsp;
            <a
              href="mailto:fortune@example.com"
              className="text-purple-400 hover:text-purple-300"
            >
              fortune@example.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
