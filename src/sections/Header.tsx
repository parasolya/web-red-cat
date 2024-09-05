"use client";

import { usePathname, useRouter } from "next/navigation";
import NavMenu from "@/components/common/NavMenu";
import Logo from "@/components/ui/Logo";
import { useEffect, useState } from "react";
// import Logo from '../components/ui/Logo';
// import BurgerMenu from '@/components/BurgerMenu';
// import Button from '@/components/ui/Button';

const Header = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [pendingSection, setPendingSection] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const navbar = document.getElementById("navbar");
      if (navbar && !navbar.contains(event.target as Node)) {
        setIsMenuToggled(false);
      setPendingSection(null);
    }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onMenuToggled = () => {
    setIsMenuToggled(!isMenuToggled);
  };

  const handleClick = (to: string) => {
    if (pathname === "/policy") {
      setPendingSection(to);
      router.push("/");
    }
    return;
  };

  useEffect(() => {
    if (pathname === "/" && pendingSection) {
      const section = document.getElementById(pendingSection);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      setPendingSection(null);
    }
  }, [pathname, pendingSection]);

  return (
    <>
      <header className="absolute left-0 top-9 md:top-6 z-20 w-full text-white bg-white bg-opacity-20">
        <div className="container flex justify-between items-center">
          <Logo />

          <NavMenu className="notMd:hidden" onClick={handleClick} />

          {/* 
          {!isMenuToggled && (
            <div id="navbar" className="md:hidden"> */}
          {/* <Button
                type="button"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                menu
              </Button> */}
          {/* </div>
          )} */}
        </div>

        {/* {isMenuToggled && (
          <BurgerMenu className="md:hidden" handleMenuToggled={onMenuToggled} />
        )} */}
      </header>
    </>
  );
};

export default Header;
