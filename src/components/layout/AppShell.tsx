import { Outlet, useLocation } from 'react-router-dom';
import { SideNav } from './SideNav';
import { useProgressStore } from '../../store/useProgressStore';
import { WoodFooterBar } from './WoodFooterBar';
import { SceneBackdrop } from './SceneBackdrop';
import { SceneLighting } from './SceneLighting';
import { getSceneGroup, getSceneLightingVariant } from '../../config/routes';

export const AppShell = () => {
  const userId = useProgressStore((state) => state.userId);
  const location = useLocation();

  if (!userId) {
    return <Outlet />;
  }

  const sceneGroup = getSceneGroup(location.pathname);
  const canvasVariant = getSceneLightingVariant(sceneGroup);

  return (
    <div className={`odyssey-app-shell odyssey-app-shell-${sceneGroup}`}>
      <SideNav />
      <div className="odyssey-app-shell__body">
        <main className="odyssey-app-shell__viewport">
          <SceneBackdrop group={sceneGroup} />
          <div className="odyssey-scene__grid" />
          <SceneLighting variant={canvasVariant} />
          <div className="odyssey-app-shell__content">
            <Outlet />
          </div>
        </main>
        <WoodFooterBar compact />
      </div>
    </div>
  );
};
