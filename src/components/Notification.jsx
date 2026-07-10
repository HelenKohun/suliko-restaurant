import { Link } from "react-router-dom";
import { Check, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Notification({ notification, setNotification }) {
  const { t } = useTranslation();
  return (
    <div
      role="status"
      aria-live="polite"
      className="bg-dark-wine text-cream border-gold/30 fixed right-4 bottom-4 left-4 z-100 rounded border p-5 shadow-2xl sm:right-6 sm:left-auto sm:w-95"
    >
      <div className="flex items-center gap-6">
        <span className="bg-gold text-dark-wine flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
          <Check size={16} aria-hidden="true" />
        </span>

        <div className="min-w-0 flex-1">
          <p className="font-body text-gold text-[11px] tracking-widest uppercase">
            {t("menuPage.notification.added")}
          </p>

          <p className="font-heading mt-1 text-xl">
            {t(
              `menuData.${notification.categoryId}.dishes.${notification.dishId}.name`,
            )}
          </p>

          <Link
            to="/cart"
            className="font-body text-gold border-gold/60 hover:text-cream focus-visible:ring-gold mt-4 inline-flex rounded border px-4 py-2 text-[11px] tracking-widest uppercase transition-colors focus-visible:ring-2 focus-visible:outline-none"
          >
            {t("menuPage.notification.goToCart")}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setNotification(null)}
          aria-label={t("menuPage.notification.close")}
          className="text-cream/60 hover:text-cream focus-visible:ring-gold rounded p-1 transition-colors focus-visible:ring-2 focus-visible:outline-none"
        >
          <X size={17} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
