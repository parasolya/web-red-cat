import { NavMenyProps } from '@/@types';
import { navData } from '@/data';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { Link as LinkScroll } from 'react-scroll';

const NavMenu: React.FC<NavMenyProps> = ({ className, classNameList, classNameLink, onClick }) => {
  const pathname = usePathname();
  return (
    <nav className={className}>
      <ul className={clsx('flex items-end lg:items-center justify-between gap-6 lg:gap-8', classNameList)}>
        {navData.map(({ id, to, section }) => (
          <li key={id}>
            <LinkScroll
              className={clsx('outline-none shadow-none cursor-pointer  hover:underline focus:underline transition', classNameLink)}
              activeClass="active"
              to={to}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              tabIndex={0}
              onClick={() => onClick(to)}
              // href='#'
              // ignoreCancelEvents={true}
            >
              {section}
            </LinkScroll>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;