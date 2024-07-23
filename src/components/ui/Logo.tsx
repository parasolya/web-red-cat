import Link from "next/link";
import LogoIcon from "/public/logo-red-cat2.svg";

const Logo = () => {
  return (
    <Link
      className="outline-none shadow-none cursor-pointer"
      href="/"
      aria-label="home"
    >
      <LogoIcon />
    </Link>
  );
};

export default Logo;
