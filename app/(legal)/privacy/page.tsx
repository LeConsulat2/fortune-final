//app/(legal)/privacy/page.tsx

export const metadata = {
  title: 'Privacy Policy | yourfortune.cool',
  description:
    'Privacy policy for yourfortune.cool – how we handle your data, AI processing, and advertising cookies.',
};

export default function PrivacyPage() {
  return (
    <main className="prose prose-invert max-w-4xl mx-auto p-6 text-gray-100">
      <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
        <p className="text-gray-300 mb-8">
          <strong>Last updated:</strong> 15 January 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            1. Who we are
          </h2>
          <p className="text-gray-300 leading-relaxed">
            yourfortune.cool (&quot;we&quot;, &quot;our&quot;) is a
            privacy-first fortune experience operated from Auckland, New
            Zealand. Contact:{' '}
            <a
              href="mailto:wecreate5000@gmail.com"
              className="text-orange-400 hover:text-orange-300"
            >
              wecreate5000@gmail.com
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            2. What data we collect
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
                    Storage
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-600 p-3 text-gray-300">
                    Name (optional), birth date, gender, occupation, quiz
                    responses
                  </td>
                  <td className="border border-gray-600 p-3 text-gray-300">
                    Generate personalized AI fortunes
                  </td>
                  <td className="border border-gray-600 p-3 text-gray-300">
                    Browser session only; cleared on tab close/refresh
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-600 p-3 text-gray-300">
                    IP address, browser info, usage data
                  </td>
                  <td className="border border-gray-600 p-3 text-gray-300">
                    Site functionality and advertising (Google AdSense)
                  </td>
                  <td className="border border-gray-600 p-3 text-gray-300">
                    Temporary processing by third parties
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-300 mt-4 leading-relaxed">
            No personal data is permanently stored on our servers. Everything is
            processed temporarily and cleared automatically.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            3. Advertising cookies
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li className="leading-relaxed">
              <strong>
                Third-party vendors, including Google, use cookies to serve ads
                based on a user&apos;s prior visits to this or other websites.
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
                  className="text-orange-400 hover:text-orange-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Ads Settings
                </a>{' '}
                or at{' '}
                <a
                  href="https://www.aboutads.info"
                  className="text-orange-400 hover:text-orange-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.aboutads.info
                </a>
                .
              </strong>
            </li>
          </ul>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Advertising cookies load <strong>only after consent</strong> via our
            EU-compliant banner.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            4. No child-directed data
          </h2>
          <p className="text-gray-300 leading-relaxed">
            This site is not directed to children under 13. We have set AdSense
            to <em>Not child-directed</em> and do not knowingly collect data
            from children under 13.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            5. International transfers
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Ad servers and AI providers may operate outside New Zealand. Google
            LLC participates in the EU-US Data Privacy Framework.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            6. Your choices
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              • Click &quot;Cookie Settings&quot; in the footer to change
              consent.
            </li>
            <li>• Opt-out links above for personalized advertising.</li>
            <li>• Delete your data: Just close the tab or refresh the page.</li>
            <li>• Email us at any time with concerns about data practices.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">7. Changes</h2>
          <p className="text-gray-300 leading-relaxed">
            We may update this policy; the date above will change accordingly.
            Continued use of yourfortune.cool means you accept the most recent
            version.
          </p>
        </section>
      </div>
    </main>
  );
}
