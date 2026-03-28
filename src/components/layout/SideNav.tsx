import { NavLink } from 'react-router-dom';
import { Book, Map, Library, Users, Gift, LogOut, User } from 'lucide-react';
import { useProgressStore } from '../../store/useProgressStore';
import { cn } from '../common/Button';

const navItems = [
  { icon: Map, label: 'Sanctum', path: '/dashboard' },
  { icon: Book, label: 'Courses', path: '/courses' },
  { icon: Library, label: 'Library', path: '/library' },
  { icon: Users, label: 'Social', path: '/community' },
  { icon: Gift, label: 'Rewards', path: '/reward' },
  { icon: User, label: 'Profile', path: '/profile' },
];

export const SideNav = () => {
  const logout = useProgressStore((state) => state.logout);

  return (
    <nav className="w-24 flex flex-col items-center py-8 border-r-2 border-[var(--color-wood-light)] bg-[var(--color-wood-dark)]/90 backdrop-blur-md z-20">
      <div className="flex flex-col gap-8 flex-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                'flex flex-col items-center gap-2 text-[var(--color-parchment-dark)] hover:text-[var(--color-cyan-glow)] transition-colors',
                isActive && 'text-[var(--color-cyan-glow)] text-glow'
              )
            }
          >
            <div className="p-3 rounded-full border border-transparent hover:border-[var(--color-cyan-glow)] hover:box-glow transition-all">
              <item.icon size={28} />
            </div>
            <span className="text-xs font-display">{item.label}</span>
          </NavLink>
        ))}
      </div>
      <button
        onClick={logout}
        className="flex flex-col items-center gap-2 text-[var(--color-parchment-dark)] hover:text-red-400 transition-colors mt-auto"
      >
        <div className="p-3 rounded-full border border-transparent hover:border-red-400 transition-all">
          <LogOut size={28} />
        </div>
        <span className="text-xs font-display">Logout</span>
      </button>
    </nav>
  );
};
