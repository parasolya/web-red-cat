import { LinkButtonProp } from '@/@types';
import clsx from 'clsx';
import Link from 'next/link';

const LinkButton: React.FC<LinkButtonProp> = ({ children, href, className, ...rest }) => {
  return (
    <Link className={clsx('text-xs ', className)} href={href} {...rest}>
    {children}
    </Link>
  )
}

export default LinkButton