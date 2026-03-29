import { ArcaneCanvas } from '../scene/ArcaneCanvas';

export const SceneLighting = ({
  variant,
}: {
  variant: 'hall' | 'library' | 'deep' | 'planner' | 'constellation';
}) => {
  return <ArcaneCanvas variant={variant} className="odyssey-scene__effects" />;
};
