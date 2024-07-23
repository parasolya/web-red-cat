import { LinkButtonProp } from '@/@types';
import clsx from 'clsx';
import { Link as LinkScroll } from 'react-scroll';

const LinkButton: React.FC<LinkButtonProp> = ({
  variant,
  to,
  children,
  className,
  handleMenuToggled
}) => {
 

  return (
    <LinkScroll
      className={clsx(
        'flex items-center justify-center cursor-pointer',
        variant === 'main' &&
          `w-[120px] box-border px-4 py-1 border-2 rounded-full border-black`,
        className
      )}
   
      to={to}
      activeClass="active"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      tabIndex={0}
      onClick={handleMenuToggled}
    >
      {children}
    </LinkScroll>
  );
};

export default LinkButton;
