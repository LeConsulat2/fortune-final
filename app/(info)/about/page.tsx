//app/(info)/about/page.tsx

export const metadata = {
  title: 'About Us | your-fortune',
  description:
    'Learn about your-fortune: a privacy-focused AI fortune service inspired by Korean fortune sites.',
};

export default function AboutPage() {
  return (
    <main className="prose prose-invert max-w-4xl mx-auto p-6 text-gray-100">
      <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
        <h1 className="text-4xl font-bold text-white mb-6">
          About your-fortune
        </h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            What This Is
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Your-Fortune offers a free, interactive way to gain personalized
            insights into your life. Rather than generic horoscopes from just a
            birth date, we use your unique details and responses to thoughtful
            prompts to generate tailored fortunes for specific categories like
            work, love life, exams, mental health, and more.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Inspiration
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Unlike traditional fortune platforms that rely solely on your
            birthdate to deliver generic predictions, this experience invites
            you to choose the category that matters most to you today—like, how
            your today might unfold, love, work, or wellbeing—and answer a
            thoughtfully designed quiz. Your responses guide an AI that
            doesn&apos;t just guess, but reflects: generating fortune readings
            with emotional depth, subtle nuance, and insights that feel
            uncannily personal.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-300 leading-relaxed">
            You choose a category that matters to you and answer a few
            meaningful questions based on your current state of mind. From
            there, a quiet system helps piece together a reflection—rooted in
            your answers, shaped to feel relevant and grounded. Everything runs
            entirely in your browser—no logins, no data storage, no tracking.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Privacy Approach
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Built with privacy in mind. Your data isn&apos;t stored on servers,
            there&apos;s no user tracking, and everything disappears when you
            close the tab. Simple and clean.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">Categories</h2>
          <p className="text-gray-300 leading-relaxed">
            Current categories include your general day, work life,
            relationships, academic performance, and mental wellness. The
            service is designed to expand to more specific areas like sports
            performance, creative projects, or other life aspects.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Technical Details
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Built with Next.js 15, React 19, and Tailwind CSS. Uses stateless
            Edge Functions for processing with zero backend storage. The AI
            integration provides contextual responses based on your inputs.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            The Project
          </h2>
          <p className="text-gray-300 leading-relaxed">
            This is a side project built in my spare time, offered as a free
            service. It&apos;s operated from Auckland, New Zealand, with the
            goal of providing something useful without the complexity of
            accounts or data collection.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Future Plans
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Potential expansions include more fortune categories, different
            cultural fortune-telling styles, and multi-language support. All
            additions will maintain the same privacy-first, no-registration
            approach.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
          <p className="text-gray-300 leading-relaxed">
            Questions or feedback? Email&nbsp;
            <a
              href="mailto:wecreate5000@gmail.com"
              className="text-purple-400 hover:text-purple-300"
            >
              wecreate5000@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
