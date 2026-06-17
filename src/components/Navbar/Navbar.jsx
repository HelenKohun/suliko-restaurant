import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import BookingButton from "./BookingButton";
import LangSwitcher from "./LangSwitcher";
import CartButton from "./CartButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`top-0 right-0 left-0 z-50 ${location.pathname !== "/" && location.pathname !== "/contact" && location.pathname !== "/wine" ? "bg-wine sticky" : "absolute"}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-9">
        <Logo />

        {/* Desktop navigation */}
        <div className="hidden lg:block">
          <NavLinks />
        </div>

        {/* Desktop right side */}
        <div className="hidden items-center gap-4 lg:flex">
          <LangSwitcher />
          <span className="text-[10px] tracking-widest text-white/70 uppercase lg:block">
            Warszawa, Mokotów
          </span>
          <BookingButton />
          <CartButton />
        </div>

        {/* Mobile right side */}
        <div className="flex items-center gap-4 lg:hidden">
          <LangSwitcher />

          {/* Burger menu */}

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="relative flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`absolute h-px w-6 bg-white/90 transition-transform duration-300 ${
                isOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />

            <span
              className={`absolute h-px w-6 bg-white/90 transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`absolute h-px w-6 bg-white/90 transition-transform duration-300 ${
                isOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="bg-wine/95 mx-6 rounded p-6 backdrop-blur-md lg:hidden">
          <NavLinks mobile />

          <div className="mt-6 flex justify-center">
            <BookingButton />
          </div>
          <div className="mt-6 flex justify-center">
            <CartButton />
          </div>
        </div>
      )}
    </header>
  );
}
