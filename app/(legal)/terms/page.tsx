export const metadata = {
  title: 'Terms & Conditions | Fortune-Final',
  description:
    'Read the terms and conditions governing your use of the Fortune-Final application.',
};

export default function TermsPage() {
  return (
    <main className="prose prose-invert max-w-4xl mx-auto p-6 text-gray-100">
      <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-white mb-6">
          Terms &amp; Conditions
        </h1>
        <p className="text-gray-300 mb-8">
          <strong>Last updated:</strong> July&nbsp;11,&nbsp;2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-300 leading-relaxed">
            By accessing or using Fortune-Final (&quot;Service&quot;), you agree
            to be bound by these Terms &amp; Conditions (&quot;Terms&quot;). If
            you do not agree, please refrain from using the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            2. Eligibility
          </h2>
          <p className="text-gray-300 leading-relaxed">
            You must be at least 13&nbsp;years old to use the Service. By using
            Fortune-Final, you affirm that you meet this age requirement and
            have the legal capacity to enter into these Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">3. Privacy</h2>
          <p className="text-gray-300 leading-relaxed">
            Our Privacy Policy explains how we handle your data. By using the
            Service, you agree to the practices described therein.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            4. Intellectual Property
          </h2>
          <p className="text-gray-300 leading-relaxed">
            All content and software associated with Fortune-Final, excluding
            AI-generated fortunes, are the property of Fortune-Final Ltd. and
            protected by copyright, trademark, and other laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            5. User Conduct
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              • You agree not to use the Service for any unlawful purpose.
            </li>
            <li>
              • You agree not to attempt to reverse-engineer or disrupt the
              Service.
            </li>
            <li>
              • You agree not to use automated scripts to collect content
              without permission.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            6. Disclaimer
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Fortunes are generated for entertainment and self-reflection only.
            Fortune-Final Ltd. provides no guarantees of accuracy and accepts no
            liability for decisions made based on AI-generated content.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            7. Limitation of Liability
          </h2>
          <p className="text-gray-300 leading-relaxed">
            To the maximum extent permitted by law, Fortune-Final Ltd. shall not
            be liable for any indirect, incidental, or consequential damages
            arising out of your use of the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            8. Modification of Terms
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We may revise these Terms from time to time. Continued use after an
            update constitutes acceptance of the revised Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">9. Contact</h2>
          <p className="text-gray-300 leading-relaxed">
            Questions about these Terms? Email&nbsp;
            <a
              href="mailto:legal@example.com"
              className="text-purple-400 hover:text-purple-300"
            >
              legal@example.com
            </a>
            .
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            10. Governing Law
          </h2>
          <p className="text-gray-300 leading-relaxed">
            These Terms are governed by the laws of New&nbsp;Zealand, without
            regard to conflict-of-law principles. You consent to the exclusive
            jurisdiction of the courts in Auckland for any dispute arising out
            of these Terms or your use of the Service.
          </p>
        </section>
      </div>
    </main>
  );
}
