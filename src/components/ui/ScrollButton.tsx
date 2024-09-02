import { ScrollButtonProp } from '@/@types';
import clsx from 'clsx';
import { Link as LinkScroll } from 'react-scroll';

const ScrollButton: React.FC<ScrollButtonProp> = ({
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
          `w-full h-[53px] md:h-[50px] lg:h-[60px] box-border text-white font-semibold text-xl  bg-primary bg-opacity-60 hover:bg-opacity-100 transition`,
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

export default ScrollButton;
