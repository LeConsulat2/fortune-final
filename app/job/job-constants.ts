import { Briefcase, Clipboard } from 'lucide-react';

export const jobOptions = [
  {
    name: 'Your Current Work',
    icon: Briefcase, // ✅ JSX 아님
    path: '/quiz/job',
    description: 'Daily fortune for your workplace and career',
  },
  {
    name: 'Job Interview',
    icon: Clipboard, // ✅
    path: '/quiz/interview',
    description: 'Guidance for interviews and preparation',
  },
];
