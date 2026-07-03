import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function OrderConfirmation() {
  const { t } = useTranslation();
  return (
    <div className="bg-cream text-text min-h-[70vh] px-6 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-body text-gold text-[10px] tracking-[0.35em] uppercase">
          {t("checkout.main-content.confirmation.confirmation")}
        </p>

        <h1 className="font-heading mt-6 text-5xl font-light sm:text-6xl">
          {t("checkout.main-content.confirmation.thanks")}
        </h1>

        <p className="font-body text-text-muted mx-auto mt-6 max-w-xl text-sm leading-7">
          {t("checkout.main-content.confirmation.info1")} <br />{" "}
          {t("checkout.main-content.confirmation.info2")}
        </p>

        <div className="border-gold/30 bg-card mx-auto mt-10 max-w-md rounded border px-8 py-6">
          <div className="border-gold/20 flex justify-between border-b pb-3">
            <span className="font-body text-text-muted text-sm">
              {t("checkout.main-content.confirmation.order-num")}
            </span>
            <span className="font-heading text-wine text-xl">#SLK-2026</span>
          </div>

          <div className="mt-4 flex justify-between">
            <span className="font-body text-text-muted text-sm">
              {t("checkout.main-content.confirmation.order-time")}
            </span>
            <span className="font-body text-text text-sm">
              {t("checkout.main-content.confirmation.order-min")}
            </span>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/menu"
            className="border-wine/30 text-wine font-body hover:bg-wine hover:text-cream focus-visible:ring-gold focus-visible:ring-offset-cream inline-flex items-center justify-center rounded border px-8 py-4 text-[12px] tracking-widest uppercase transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            {t("checkout.main-content.confirmation.menu-btn")}
          </Link>

          <Link
            to="/"
            className="border-wine/30 text-wine font-body hover:bg-wine hover:text-cream focus-visible:ring-gold focus-visible:ring-offset-cream inline-flex items-center justify-center rounded border px-8 py-4 text-[12px] tracking-widest uppercase transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            {t("checkout.main-content.confirmation.home-btn")}
          </Link>
        </div>
      </div>
    </div>
  );
}
