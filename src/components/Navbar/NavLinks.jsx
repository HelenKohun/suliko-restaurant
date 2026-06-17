import { navigationLinks } from "../../data/navigationLinks";
import NavLinkItem from "./NavLinkItem";

export default function NavLinks({ mobile = false, onClick }) {
  // List of navigation links
  const navLinks = navigationLinks.map((link) => (
    <NavLinkItem
      onClick={onClick}
      key={link.path}
      path={link.path}
      labelKey={link.labelKey}
    />
  ));

  return (
    <ul
      className={
        mobile ? "flex flex-col items-center gap-4" : "flex items-center gap-8"
      }
    >
      {navLinks}
    </ul>
  );
}
