import { LinkButtonProp } from '@/@types';
import clsx from 'clsx';
import Link from 'next/link';

const LinkButton: React.FC<LinkButtonProp> = ({ children, href, className }) => {
  return (
    <Link className={clsx('text-xs ', className)} href={href}>
    {children}
    </Link>
  )
}

export default LinkButton