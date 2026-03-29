import type { ReactNode } from 'react';
import { cn } from '../common/Button';

function StageFrame({
  kind,
  className,
  aside,
  hero,
  footer,
}: {
  kind: string;
  className?: string;
  aside?: ReactNode;
  hero: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <section className={cn('stage-frame', `stage-frame-${kind}`, className)}>
      {aside ? <aside className="stage-frame__aside">{aside}</aside> : null}
      <div className="stage-frame__hero">{hero}</div>
      {footer ? <div className="stage-frame__footer">{footer}</div> : null}
    </section>
  );
}

export const IdentityGateStage = (props: Omit<Parameters<typeof StageFrame>[0], 'kind'>) => (
  <StageFrame kind="identity" {...props} />
);
export const JourneyGatewayStage = (props: Omit<Parameters<typeof StageFrame>[0], 'kind'>) => (
  <StageFrame kind="gateway" {...props} />
);
export const GreatHallStage = (props: Omit<Parameters<typeof StageFrame>[0], 'kind'>) => (
  <StageFrame kind="hall" {...props} />
);
export const ScholarDossierStage = (props: Omit<Parameters<typeof StageFrame>[0], 'kind'>) => (
  <StageFrame kind="dossier" {...props} />
);
export const ArchiveStage = (props: Omit<Parameters<typeof StageFrame>[0], 'kind'>) => (
  <StageFrame kind="archive" {...props} />
);
export const ResearchStacksStage = (props: Omit<Parameters<typeof StageFrame>[0], 'kind'>) => (
  <StageFrame kind="research" {...props} />
);
export const SageBlueprintStage = (props: Omit<Parameters<typeof StageFrame>[0], 'kind'>) => (
  <StageFrame kind="sage" {...props} />
);
export const ConstellationStage = (props: Omit<Parameters<typeof StageFrame>[0], 'kind'>) => (
  <StageFrame kind="constellation" {...props} />
);
export const QuestScrollStage = (props: Omit<Parameters<typeof StageFrame>[0], 'kind'>) => (
  <StageFrame kind="quest" {...props} />
);
export const MethodologyStage = (props: Omit<Parameters<typeof StageFrame>[0], 'kind'>) => (
  <StageFrame kind="method" {...props} />
);
export const DeepStudyStage = (props: Omit<Parameters<typeof StageFrame>[0], 'kind'>) => (
  <StageFrame kind="deep" {...props} />
);
export const TrialStage = (props: Omit<Parameters<typeof StageFrame>[0], 'kind'>) => (
  <StageFrame kind="trial" {...props} />
);
export const CompletionStage = (props: Omit<Parameters<typeof StageFrame>[0], 'kind'>) => (
  <StageFrame kind="completion" {...props} />
);
export const GuildHallStage = (props: Omit<Parameters<typeof StageFrame>[0], 'kind'>) => (
  <StageFrame kind="guild" {...props} />
);
