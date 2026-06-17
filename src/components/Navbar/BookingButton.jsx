import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function BookingButton() {
  const { t } = useTranslation();

  return (
    <Link
      to="/booking"
      className="font-body border-gold/50 bg-gold hover:bg-gold/10 rounded-xs border px-5 py-3 text-[12px] tracking-widest text-white uppercase transition-colors duration-200"
    >
      {t("nav.booking_btn")}
    </Link>
  );
}
