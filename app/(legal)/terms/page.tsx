export const metadata = {
  title: 'Terms & Conditions | your-fortune',
  description:
    'Read the terms and conditions governing your use of the your-fortune application.',
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
            By accessing or using your-fortune (“the Service”), you agree to be
            bound by these Terms &amp; Conditions (“Terms”). If you do not
            accept these Terms in full, you may not use the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            2. Eligibility
          </h2>
          <p className="text-gray-300 leading-relaxed">
            The Service is designed for individuals aged 13 years and older. If
            you are under 13, you may only use the Service under the supervision
            and consent of a parent or legal guardian. While the app does
            request a birth date to determine zodiac signs, this information is
            never stored or transmitted, and no personally identifiable
            information is collected or retained.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">3. Privacy</h2>
          <p className="text-gray-300 leading-relaxed">
            Your use of the Service is also governed by our{' '}
            <a
              href="/privacy"
              className="text-purple-400 hover:text-purple-300"
            >
              Privacy Policy
            </a>
            , which outlines how we handle session data and browser-based
            storage. By using your-fortune, you acknowledge and accept our
            privacy practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            4. Intellectual Property
          </h2>
          <p className="text-gray-300 leading-relaxed">
            All software, branding, design assets, and written content
            associated with your-fortune are the intellectual property of its
            creators and are protected under international copyright and
            trademark laws. AI-generated fortune content is ephemeral and
            user-specific and does not constitute published intellectual
            property.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            5. User Conduct
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              • You agree not to use the Service for any unlawful, harmful, or
              abusive purpose.
            </li>
            <li>
              • You may not attempt to access, copy, reverse-engineer, or
              exploit any part of the Service or its underlying architecture.
            </li>
            <li>
              • Automated scraping, cloning, or replication of generated content
              or API endpoints is strictly prohibited.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            6. Disclaimer
          </h2>
          <p className="text-gray-300 leading-relaxed">
            The Service provides AI-generated content solely for purposes of
            entertainment, reflection, and personal insight. It is not intended
            as a substitute for professional advice of any kind — including
            medical, psychological, legal, or financial guidance. Your use of
            such content is entirely at your own discretion and risk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            7. Limitation of Liability
          </h2>
          <p className="text-gray-300 leading-relaxed">
            To the fullest extent permitted by law, your-fortune and its
            operators shall not be liable for any direct, indirect, incidental,
            special, or consequential damages arising from your use of the
            Service — including reliance on any generated content, technical
            malfunctions, or interruptions in access.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            8. Modification of Terms
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We reserve the right to revise these Terms at any time. Updated
            versions will be posted to this page, and the date above will
            reflect the latest revision. Your continued use of the Service
            constitutes acceptance of any changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            9. Governing Law
          </h2>
          <p className="text-gray-300 leading-relaxed">
            These Terms and any disputes arising from them shall be governed by
            the laws of New Zealand. You agree to submit to the exclusive
            jurisdiction of the courts located in Auckland, New Zealand.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            10. Contact
          </h2>
          <p className="text-gray-300 leading-relaxed">
            If you have questions about these Terms or wish to clarify any part
            of your rights, please email us at&nbsp;
            <a
              href="mailto:legal@example.com"
              className="text-purple-400 hover:text-purple-300"
            >
              legal@example.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
