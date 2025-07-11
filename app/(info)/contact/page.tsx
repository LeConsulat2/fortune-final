export const metadata = {
  title: 'Contact | Fortune-Final',
  description:
    'Reach out to the Fortune-Final team for support, media, or partnerships.',
};

export default function ContactPage() {
  return (
    <main className="prose prose-invert max-w-3xl mx-auto p-6 text-gray-100">
      <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-white mb-6">Contact Us</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Customer Support
          </h2>
          <p className="text-gray-300 leading-relaxed mb-2">
            Email:&nbsp;
            <a
              href="mailto:support@example.com"
              className="text-purple-400 hover:text-purple-300"
            >
              support@example.com
            </a>
          </p>
          <p className="text-gray-300 text-sm">
            We aim to respond within 48&nbsp;hours on business days.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Press &amp; Media
          </h2>
          <p className="text-gray-300 leading-relaxed mb-2">
            Email:&nbsp;
            <a
              href="mailto:press@example.com"
              className="text-purple-400 hover:text-purple-300"
            >
              press@example.com
            </a>
          </p>
          <p className="text-gray-300 text-sm">
            For interviews, media kits, or speaking engagements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Partnerships
          </h2>
          <p className="text-gray-300 leading-relaxed mb-2">
            Email:&nbsp;
            <a
              href="mailto:partners@example.com"
              className="text-purple-400 hover:text-purple-300"
            >
              partners@example.com
            </a>
          </p>
          <p className="text-gray-300 text-sm">
            We&apos;re open to collaborating with wellness platforms, lifestyle
            brands, and content creators.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Registered Address
          </h2>
          <address className="not-italic text-gray-300 leading-relaxed">
            Fortune-Final Ltd.
            <br />
            Level&nbsp;3, 75 Karangahape Road
            <br />
            Auckland&nbsp;1010
            <br />
            New&nbsp;Zealand
          </address>
        </section>
      </div>
    </main>
  );
}
