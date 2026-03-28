import { useProgressStore } from '../../store/useProgressStore';

export const rewardEngine = {
  grantXp: (amount: number) => {
    useProgressStore.getState().addXp(amount);
  },
  grantBadge: (badgeId: string) => {
    console.log(`Granted badge: ${badgeId}`);
  }
};
