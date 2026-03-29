import { BookOpen, Crown, Library, ScrollText, Sparkles, Users } from 'lucide-react';
import { appRoutes } from './routes';

export const primaryNavigationItems = [
  { icon: Sparkles, label: 'Sanctum', path: appRoutes.dashboard },
  { icon: BookOpen, label: 'Courses', path: appRoutes.courses },
  { icon: Users, label: 'Social', path: appRoutes.community },
  { icon: Crown, label: 'Reward', path: appRoutes.reward },
] as const;

export const secondaryNavigationItems = [
  { icon: ScrollText, label: 'Blueprint', path: appRoutes.planner },
  { icon: Library, label: 'Archives', path: appRoutes.library },
] as const;
