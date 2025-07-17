//app/(info)/contact/page.tsx

export const metadata = {
  title: 'Contact | Your-Fortune',
  description:
    'Contact information for Your-Fortune support, media, or partnerships.',
};

export default function ContactPage() {
  return (
    <main className="prose prose-invert max-w-4xl mx-auto p-6 text-gray-100">
      <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-white mb-6">Contact</h1>

        <div className="space-y-8 text-gray-300">
          <section className="text-center">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 text-xl">
                <span className="text-2xl">📧</span>
                <span className="text-orange-400 hover:text-orange-300 transition-colors select-all cursor-text">
                  {['wecreate5000', 'gmail.com'].join('@')}
                </span>
              </div>

              <div className="flex items-center justify-center gap-3 text-xl">
                <span className="text-2xl">📍</span>
                <span>Auckland, New Zealand</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              What to Contact About
            </h2>
            <ul className="space-y-2">
              <li>• Questions about the website & service</li>
              <li>• Technical issues</li>
              <li>• General feedback</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Response Time
            </h2>
            <p className="leading-relaxed">
              We aim to respond within 48 hours on business days. For urgent
              matters, please include &quot;URGENT&quot; in your subject line.
            </p>
          </section>

          <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-600">
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong>Note:</strong> Content and features are provided for
              entertainment purposes only. For specialized inquiries, please
              consult a qualified expert.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
