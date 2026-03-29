import { LogOut } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useProgressStore } from '../../store/useProgressStore';
import { cn } from '../common/Button';
import { primaryNavigationItems, secondaryNavigationItems } from '../../config/navigation';

export const SideNav = () => {
  const logout = useProgressStore((state) => state.logout);

  return (
    <nav className="odyssey-side-nav">
      <div className="odyssey-side-nav__rail" />

      <div className="odyssey-side-nav__group">
        <span className="odyssey-side-nav__group-label">Core Paths</span>
        {primaryNavigationItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn('odyssey-side-nav__item', isActive && 'odyssey-side-nav__item-active')
            }
          >
            <div className="odyssey-side-nav__icon">
              <item.icon size={26} />
            </div>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>

      <div className="odyssey-side-nav__group odyssey-side-nav__group-secondary">
        <span className="odyssey-side-nav__group-label">Knowledge Wing</span>
        {secondaryNavigationItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn('odyssey-side-nav__item odyssey-side-nav__item-secondary', isActive && 'odyssey-side-nav__item-active')
            }
          >
            <div className="odyssey-side-nav__icon">
              <item.icon size={24} />
            </div>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>

      <button onClick={logout} className="odyssey-side-nav__item odyssey-side-nav__item-secondary mt-auto">
        <div className="odyssey-side-nav__icon">
          <LogOut size={24} />
        </div>
        <span>Exit</span>
      </button>
    </nav>
  );
};
