export const appRoutes = {
  root: '/',
  login: '/login',
  welcome: '/welcome',
  dashboard: '/dashboard',
  courses: '/courses',
  planner: '/planner',
  reward: '/reward',
  profile: '/profile',
  library: '/library',
  community: '/community',
  questCompleted: '/quest/completed',
} as const;

export const routePatterns = {
  quest: '/quest/:questId',
  studyMethod: '/task/:taskId/study-method',
  deepWork: '/task/:taskId/deep-work',
  alchemistTrial: '/task/:taskId/alchemist-trial',
} as const;

export type SceneGroup = 'entrance' | 'hall' | 'archives' | 'sage' | 'constellation' | 'quest' | 'guild';
export type SceneLightingVariant = 'hall' | 'library' | 'planner' | 'constellation' | 'deep';

export function buildQuestRoute(questId: string) {
  return `/quest/${questId}`;
}

export function buildStudyMethodRoute(taskId: string) {
  return `/task/${taskId}/study-method`;
}

export function buildDeepWorkRoute(taskId: string) {
  return `/task/${taskId}/deep-work`;
}

export function buildAlchemistTrialRoute(taskId: string) {
  return `/task/${taskId}/alchemist-trial`;
}

export function getSceneGroup(pathname: string): SceneGroup {
  if (pathname.startsWith(appRoutes.welcome)) return 'entrance';
  if (pathname.startsWith(appRoutes.planner)) return 'sage';
  if (pathname.startsWith(appRoutes.reward)) return 'constellation';
  if (pathname.startsWith('/quest/') || pathname.startsWith('/task/')) return 'quest';
  if (pathname.startsWith(appRoutes.community)) return 'guild';
  if (pathname.startsWith(appRoutes.courses) || pathname.startsWith(appRoutes.library)) return 'archives';
  return 'hall';
}

export function getSceneLightingVariant(sceneGroup: SceneGroup): SceneLightingVariant {
  switch (sceneGroup) {
    case 'archives':
      return 'library';
    case 'sage':
      return 'planner';
    case 'constellation':
      return 'constellation';
    case 'quest':
      return 'deep';
    case 'entrance':
      return 'hall';
    default:
      return 'hall';
  }
}
