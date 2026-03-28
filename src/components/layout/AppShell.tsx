import { Outlet } from 'react-router-dom';
import { SideNav } from './SideNav';
import { useProgressStore } from '../../store/useProgressStore';

export const AppShell = () => {
  const userId = useProgressStore((state) => state.userId);

  if (!userId) {
    return <Outlet />;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[var(--color-wood-dark)] text-[var(--color-parchment)]">
      <SideNav />
      <main className="flex-1 overflow-y-auto relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />
        <div className="relative z-10 p-8 h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
