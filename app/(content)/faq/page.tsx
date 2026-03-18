export const metadata = {
  title: 'FAQ | Your-Fortune',
  description:
    'Frequently asked questions about Your-Fortune and AI-generated fortunes.',
};

const FAQS = [
  {
    q: 'How are my fortunes generated?',
    a: 'Your fortune is shaped by the answers you provide — capturing your current mindset, emotions, and perspective. From there, a lightweight system interprets those patterns to offer reflections that feel timely and personal. Nothing is saved or sent — everything happens within your browser while the page is open.',
  },
  {
    q: 'Is Your-Fortune free?',
    a: 'Yes — Your-Fortune is completely free to use. We believe thoughtful, emotionally aware tools should be accessible to everyone, with no hidden costs or surprises.',
  },
  {
    q: 'Do you store my personal information?',
    a: "No. All of your responses live temporarily in your browser's session storage. Once you close or refresh the tab, everything disappears automatically.",
  },
  {
    q: 'Can I reset or delete my data?',
    a: 'Absolutely. Just refresh the page, close the tab, or clear your browser data to start fresh.',
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

export default function FaqPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 md:py-16">
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
