import { EEffects } from '../data';

export const getEffectIndex = (effect: string | number) =>
  typeof effect === 'number' ? effect : EEffects[effect as any];
