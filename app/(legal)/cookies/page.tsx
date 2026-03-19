export const metadata = {
  title: 'Cookie Policy | your-fortune',
  description:
    'Learn how your-fortune uses cookies, including technical cookies and future plans for advertising cookies with your consent.',
};

export default function CookiesPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 md:py-16">
      <div className="rounded-2xl bg-card/50 border border-border p-8 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Cookie Policy</h1>
        <p className="text-muted-foreground mb-10">
          <strong>Last updated:</strong> March&nbsp;19,&nbsp;2026
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              1. What are cookies?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files stored on your device that help
              websites function properly and remember information between visits.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              2. Categories of Cookies We Use
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use two categories of cookies:
            </p>

            <div className="bg-blue-500/5 p-5 rounded-xl border border-blue-500/15 mb-4">
              <h3 className="text-base font-semibold text-blue-400 mb-2">
                Essential/Technical Cookies
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                These cookies are necessary for the website to function properly.
                They enable basic functionalities like session management and
                server-side rendering, and may include remembering your consent
                choice. These cannot be switched off as the site would not work
                without them.
              </p>
            </div>

            <div className="bg-amber-500/5 p-5 rounded-xl border border-amber-500/15">
              <h3 className="text-base font-semibold text-amber-400 mb-2">
                Advertising Cookies (Future)
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Currently, we do <strong className="text-foreground">not</strong> use advertising cookies. However, if we
                introduce advertising in the future (e.g., via Google AdSense),
                these cookies would be served to provide personalized ads. They
                would help us keep the service free by showing relevant
                advertisements. These cookies will only be set after you give
                explicit consent.
              </p>
            </div>

            <div className="bg-muted/20 p-4 rounded-xl border border-border mt-4">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">
                  We do NOT use any analytics or behavioural tracking cookies set
                  by us.
                </strong>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              3. Your Control
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If we introduce advertising cookies, you will have clear control.
              You will be able to withdraw your consent at any time via a
              &quot;Cookie Settings&quot; option (e.g., in the footer). This will
              stop advertising cookies from loading on future page visits.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              4. More Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              For more details about our data handling practices, please see our{' '}
              <a href="/privacy">Privacy Policy</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              5. Managing cookies through your browser
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You can control cookies through your browser settings:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong className="text-foreground">Chrome:</strong> Settings → Privacy and Security → Cookies</li>
              <li>• <strong className="text-foreground">Firefox:</strong> Settings → Privacy & Security → Cookies</li>
              <li>• <strong className="text-foreground">Safari:</strong> Preferences → Privacy → Cookies</li>
              <li>• <strong className="text-foreground">Edge:</strong> Settings → Cookies and Site Permissions</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Note: Blocking essential cookies may affect site functionality.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              6. Data retention
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Essential technical cookies are temporary and expire when you close
              your browser or after a short period. We do not store personal data
              in cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              7. Contact
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Questions about our cookie usage? Email us at&nbsp;
              <a href="mailto:wecreate5000@gmail.com">
                wecreate5000@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              8. Updates to this policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We&apos;ll update this page if our cookie usage changes. The date at
              the top reflects the latest version.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
