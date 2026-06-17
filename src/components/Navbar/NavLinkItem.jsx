import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NavLinkItem({ path, labelKey, onClick }) {
  const { t } = useTranslation();
  return (
    <li>
      <NavLink
        to={path}
        end={path === "/"}
        onClick={onClick}
        className={({ isActive }) =>
          `font-body text-[12px] tracking-widest uppercase transition-colors duration-200 ${isActive ? "text-gold" : "text-white/80 hover:text-white"}`
        }
      >
        {t(labelKey)}
      </NavLink>
    </li>
  );
}
