export const metadata = {
  title: 'Privacy Policy | your-fortune',
  description:
    'Privacy policy for your-fortune — how we handle your data, session storage, AI processing, and our approach to cookies and future advertising.',
};

export default function PrivacyPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 md:py-16">
      <div className="rounded-2xl bg-card/50 border border-border p-8 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-10">
          <strong>Last updated:</strong> July 17, 2025
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              1. Who we are
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              your-fortune (&quot;we&quot;, &quot;our&quot;) is a privacy-first
              fortune experience operated from Auckland, New Zealand.
              Contact:&nbsp;
              <a href="mailto:wecreate5000@gmail.com">
                wecreate5000@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              2. Our Privacy-First Approach
            </h2>
            <div className="bg-emerald-500/5 p-5 rounded-xl border border-emerald-500/15 mb-4">
              <p className="text-emerald-400 font-semibold mb-2">
                Zero Server Storage Guarantee
              </p>
              <p className="text-muted-foreground leading-relaxed">
                your-fortune stores <strong className="text-foreground">no personal data</strong> on our
                servers. Everything stays within your browser session and
                disappears automatically when you close the tab or refresh the
                page.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              3. What data we collect and process
            </h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-muted/30">
                    <th className="border-b border-border p-3 text-left text-foreground">Data Type</th>
                    <th className="border-b border-border p-3 text-left text-foreground">Purpose</th>
                    <th className="border-b border-border p-3 text-left text-foreground">Storage</th>
                    <th className="border-b border-border p-3 text-left text-foreground">Retention</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr>
                    <td className="border-b border-border/50 p-3">Name (optional)</td>
                    <td className="border-b border-border/50 p-3">Fortune personalization</td>
                    <td className="border-b border-border/50 p-3">Browser only</td>
                    <td className="border-b border-border/50 p-3">Tab close/refresh</td>
                  </tr>
                  <tr>
                    <td className="border-b border-border/50 p-3">Birth date</td>
                    <td className="border-b border-border/50 p-3">Zodiac sign calculation</td>
                    <td className="border-b border-border/50 p-3">Browser only</td>
                    <td className="border-b border-border/50 p-3">Tab close/refresh</td>
                  </tr>
                  <tr>
                    <td className="border-b border-border/50 p-3">Gender (optional)</td>
                    <td className="border-b border-border/50 p-3">Fortune customization</td>
                    <td className="border-b border-border/50 p-3">Browser only</td>
                    <td className="border-b border-border/50 p-3">Tab close/refresh</td>
                  </tr>
                  <tr>
                    <td className="border-b border-border/50 p-3">Occupation</td>
                    <td className="border-b border-border/50 p-3">Career-related insights</td>
                    <td className="border-b border-border/50 p-3">Browser only</td>
                    <td className="border-b border-border/50 p-3">Tab close/refresh</td>
                  </tr>
                  <tr>
                    <td className="p-3">Quiz responses</td>
                    <td className="p-3">Personalized fortunes</td>
                    <td className="p-3">Browser only</td>
                    <td className="p-3">Tab close/refresh</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              4. How we process your data
            </h2>
            <div className="bg-blue-500/5 p-5 rounded-xl border border-blue-500/15 mb-4">
              <h3 className="text-base font-semibold text-blue-400 mb-2">
                Stateless Processing
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                When you generate a fortune, your data is sent to a serverless
                function, which instantly returns your result.
                <strong className="text-foreground"> Nothing is logged or saved</strong> in the process.
              </p>
            </div>

            <div className="bg-muted/20 p-5 rounded-xl border border-border">
              <h3 className="text-base font-semibold text-foreground mb-3">
                Data Flow
              </h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>1. You enter information &rarr; Stored in browser session</p>
                <p>2. You request fortune &rarr; Data sent to our AI processing function</p>
                <p>3. AI generates response &rarr; Returned to your browser</p>
                <p>4. You close tab/refresh &rarr; All data automatically deleted</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              5. Third-party processing
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To provide AI-generated fortunes, we use external services that
              temporarily process your data:
            </p>
            <div className="bg-amber-500/5 p-5 rounded-xl border border-amber-500/15 mb-4">
              <h3 className="text-base font-semibold text-amber-400 mb-2">
                AI Processing
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Your session data and responses are sent to{' '}
                <strong className="text-foreground">Google&apos;s Gemini API</strong> (US-based) to generate
                personalized fortunes. Google processes this data according to
                their own privacy policy but does not store it for training
                purposes when accessed through our API integration.
              </p>
            </div>
            <div className="bg-muted/20 p-5 rounded-xl border border-border">
              <h3 className="text-base font-semibold text-foreground mb-2">
                Hosting & Infrastructure
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our application is hosted on <strong className="text-foreground">Vercel</strong> (US-based)
                using edge functions for global performance. No personal data is
                stored on Vercel servers — only the application code and temporary
                request processing.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              6. Cookies and Future Advertising
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We currently use only essential technical cookies necessary for
              the website to function. We do <strong className="text-foreground">not</strong> use any analytics, tracking,
              or advertising cookies today. However, we may introduce advertising
              in the future (e.g., via Google AdSense) to support the service.
              If we do, any advertising cookies will only be set after you
              provide explicit consent through a dedicated consent banner. You
              can find more detailed information in our{' '}
              <a href="/cookies">Cookie Policy</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              7. Data security and session management
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              All communication is encrypted using HTTPS. Your session data lives
              in your browser only and is wiped when you refresh, close the tab,
              or clear storage. Our infrastructure is stateless &mdash; meaning no
              information is remembered or retained between requests.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              8. Age recommendations
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              While your-fortune is suitable for all ages, we recommend that users
              under 13 use the Service under parental guidance. We do not
              knowingly collect personally identifiable information from children,
              and all data processing is temporary and session-based regardless of
              user age.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              9. International data processing
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Your data may be temporarily processed by our third-party services
              (Google, Vercel) which operate globally, including in the United
              States. Since no data is permanently stored, there are no lasting
              international transfers or data residency concerns.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              10. Your control and rights
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong className="text-foreground">Delete your data:</strong> Just close the tab or refresh</li>
              <li>• <strong className="text-foreground">Start fresh:</strong> Clear browser sessionStorage</li>
              <li>• <strong className="text-foreground">Ask anything:</strong> Contact us at any time with concerns</li>
              <li>• <strong className="text-foreground">Data portability:</strong> Since no data is stored, there&apos;s nothing to export</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              11. AI-generated content disclaimer
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              All fortunes are generated by artificial intelligence for
              entertainment, reflection, and personal insight &mdash; not as
              professional advice. Please use discretion and common sense when
              interpreting any AI-generated content.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              12. Updates to this policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We&apos;ll update this policy if anything changes. You can always
              find the latest version on this page. Continued use of your-fortune
              means you accept the most recent version.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              13. Contact
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Questions about privacy or data practices? Email us at&nbsp;
              <a href="mailto:wecreate5000@gmail.com">
                wecreate5000@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
