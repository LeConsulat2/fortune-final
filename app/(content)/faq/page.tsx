export const metadata = {
  title: 'FAQ | Your-Fortune',
  description:
    'Frequently asked questions about Your-Fortune and AI-generated fortunes.',
};

const FAQS = [
  {
    q: 'How are my fortunes generated?',
    a: 'Your fortune is shaped by the profile and quiz answers you provide. These are sent securely to an AI (powered by OpenAI) which generates a personalised reading. Your profile is saved locally in your browser so you don\'t have to re-enter it each visit — nothing is stored on our servers.',
  },
  {
    q: 'Is Your-Fortune free?',
    a: 'Your-Fortune is currently free to use. We believe thoughtful, emotionally aware tools should be accessible to everyone. Future premium features may be introduced, but a free tier will always be part of the experience.',
  },
  {
    q: 'Do you store my personal information?',
    a: "No personal data is stored on our servers. Your profile (name, birth date, occupation, quiz answers) is saved in your browser's localStorage so returning visits are seamless — it stays on your device only. Your fortune result is held in sessionStorage and disappears when you close or refresh the tab.",
  },
  {
    q: 'Can I reset or delete my data?',
    a: 'Yes. To reset your profile (name, quiz answers, etc.), clear your browser\'s localStorage via your browser settings or use the reset option in the app. Your fortune result clears automatically when you close or refresh the tab.',
  },
  {
    q: 'How accurate are the fortunes?',
    a: "The fortunes are designed for reflection and emotional clarity — not prediction. While we aim for relevance and insight, they're not a substitute for professional advice.",
  },
  {
    q: 'Which browsers and devices do you support?',
    a: 'Your-Fortune works smoothly on all modern browsers (Chrome, Firefox, Safari, Edge), across both desktop and mobile devices. A stable internet connection and JavaScript support are required.',
  },
  {
    q: 'Will you translate fortunes into other languages?',
    a: 'Multi-language support is part of our roadmap. Currently, you can choose to receive fortunes in English, Korean, Japanese, Chinese, or Vietnamese at the end of the quiz.',
  },
  {
    q: 'How can I report an issue or suggest a feature?',
    a: 'We\u2019d love to hear from you. Email wecreate5000@gmail.com with your feedback or suggestions.',
  },
  {
    q: 'Can I share my fortune on social media?',
    a: "Absolutely. You're welcome to share your fortune by taking a screenshot and posting it to your social platforms. Since nothing is stored, your result will be lost if you close or refresh the page — so if it resonates with you, save it while you can.",
  },
  {
    q: 'Do you offer a dark-mode toggle?',
    a: 'The app is designed dark-first to reduce eye strain and suit OLED displays. A light-mode toggle is planned and will be added soon in Settings.',
  },
  {
    q: 'How often do you update the prompts and models?',
    a: 'We review prompts and tune the system monthly to keep the experience fresh, grounded, and emotionally relevant.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

export default function FaqPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="rounded-2xl bg-card/50 border border-border p-8 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <details key={i} className="group bg-muted/20 rounded-xl border border-border overflow-hidden">
              <summary className="cursor-pointer px-5 py-4 text-base font-semibold text-foreground select-none flex items-center justify-between gap-4">
                {faq.q}
                <span className="text-muted-foreground/40 group-open:rotate-45 transition-transform text-xl leading-none shrink-0">+</span>
              </summary>
              <div className="px-5 pb-5">
                <p className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </main>
  );
}
