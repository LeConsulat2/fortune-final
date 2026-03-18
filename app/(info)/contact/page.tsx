export const metadata = {
  title: 'Contact | Your-Fortune',
  description:
    'Contact information for Your-Fortune support, media, or partnerships.',
};

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 md:py-16">
      <div className="rounded-2xl bg-card/50 border border-border p-8 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Contact</h1>

        <div className="space-y-8">
          <section className="text-center">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 text-lg md:text-xl">
                <span className="text-2xl">📧</span>
                <span className="text-primary hover:text-primary/80 transition-colors select-all cursor-text">
                  {['wecreate5000', 'gmail.com'].join('@')}
                </span>
              </div>

              <div className="flex items-center justify-center gap-3 text-lg md:text-xl text-foreground/80">
                <span className="text-2xl">📍</span>
                <span>Auckland, New Zealand</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              What to Contact About
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Questions about the website & service</li>
              <li>• Technical issues</li>
              <li>• General feedback</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Response Time
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We aim to respond within 48 hours on business days. For urgent
              matters, please include &quot;URGENT&quot; in your subject line.
            </p>
          </section>

          <div className="bg-muted/30 p-4 rounded-lg border border-border">
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Note:</strong> Content and features are provided for
              entertainment purposes only. For specialized inquiries, please
              consult a qualified expert.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
