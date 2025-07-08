//app/job/job-constants.ts

import { Briefcase, ClipboardList } from 'lucide-react';

export const jobOptions = [
  {
    name: 'Your Current Work',
    icon: Briefcase, // ✅ JSX 아님
    path: '/quiz/job',
    description: 'Daily fortune for your workplace and career',
  },
  {
    name: 'Job Interview',
    icon: ClipboardList, // ✅
    path: '/quiz/interview',
    description: 'Guidance for interviews and preparation',
  },
];
