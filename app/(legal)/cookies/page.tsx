export const metadata = {
  title: 'Cookie Policy | Fortune-Final',
  description:
    'Learn how Fortune-Final uses cookies, including future implementation of Google AdSense cookies.',
};

export default function CookiesPage() {
  return (
    <main className="prose prose-invert max-w-4xl mx-auto p-6 text-gray-100">
      <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-white mb-6">Cookie Policy</h1>
        <p className="text-gray-300 mb-8">
          <strong>Last updated:</strong> July&nbsp;11,&nbsp;2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            1. What are cookies?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Cookies are small text files placed on your device to store data.
            They help websites remember your preferences and improve your user
            experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            2. How Fortune-Final uses cookies
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Fortune-Final is designed to work <strong>without</strong> cookies
            by default. However, we plan to introduce optional cookies for
            Google AdSense to keep the service free. These advertising cookies
            will load <strong>only after</strong> you grant consent through our
            EU-compliant banner.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            3. Types of cookies we may use
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              • <strong>Essential Cookies:</strong> Strictly necessary for core
              site functionality, e.g.&nbsp;cookie-consent status.
            </li>
            <li>
              • <strong>Performance Cookies:</strong> Anonymous analytics to
              measure loading times and improve performance (none at the
              moment).
            </li>
            <li>
              • <strong>Advertising Cookies:</strong> Google AdSense &amp;
              partners to deliver relevant ads once enabled.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            4. Managing your cookie preferences
          </h2>
          <p className="text-gray-300 leading-relaxed">
            You can manage or delete cookies in your browser settings at any
            time. When we launch AdSense, you will also see a &quot;Cookie
            Settings&quot; link that lets you opt-in or opt-out of advertising
            cookies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">5. Contact</h2>
          <p className="text-gray-300 leading-relaxed">
            Questions? Email&nbsp;
            <a
              href="mailto:privacy@example.com"
              className="text-purple-400 hover:text-purple-300"
            >
              privacy@example.com
            </a>
            .
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            6. Changes to this Cookie Policy
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We may update this policy to reflect changes in technology or
            legislation. Any amendments will be announced via an in-app banner,
            and the &quot;Last updated&quot; date at the top of this page will
            change accordingly.
          </p>
        </section>
      </div>
    </main>
  );
}
