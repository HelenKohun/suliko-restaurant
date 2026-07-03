import { MoveRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CheckoutContactStep({ register, errors, onNext }) {
  const { t } = useTranslation();
  return (
    <form className="mt-8">
      <div>
        <label
          className="font-body text-gold mb-2 block text-[11px] tracking-widest uppercase"
          htmlFor="checkout-fullname"
        >
          {t("checkout.main-content.left-card.step-1.form.name")} *
        </label>

        <input
          id="checkout-fullname"
          {...register("fullname", {
            required: t(
              "checkout.main-content.left-card.step-1.form.name-error1",
            ),
            validate: (value) =>
              value.trim().length >= 2 ||
              t("checkout.main-content.left-card.step-1.form.name-error2"),
          })}
          type="text"
          placeholder="Anna Kowalska"
          className="border-text/20 font-body text-text placeholder:text-text-muted/60 focus-visible:border-wine focus-visible:ring-wine/30 bg-cream/70 w-full rounded border px-4 py-3 text-sm transition-shadow duration-200 outline-none focus-visible:ring-1"
        />
        {errors.fullname && (
          <span className="font-body mt-1 text-[10px] text-red-400">
            {errors.fullname.message}
          </span>
        )}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div>
          <label
            className="font-body text-gold mb-2 block text-[11px] tracking-widest uppercase"
            htmlFor="checkout-phone"
          >
            {t("checkout.main-content.left-card.step-1.form.phone")} *
          </label>

          <input
            id="checkout-phone"
            {...register("phone", {
              required: t(
                "checkout.main-content.left-card.step-1.form.phone-error1",
              ),
              pattern: {
                value: /^(?:\+48\s?)?(?:\d{3}[\s-]?){2}\d{3}$/,
                message: t(
                  "checkout.main-content.left-card.step-1.form.phone-error2",
                ),
              },
            })}
            type="tel"
            placeholder="+48 000 000 000"
            className="border-text/20 font-body text-text placeholder:text-text-muted/60 focus-visible:border-wine focus-visible:ring-wine/30 bg-cream/70 w-full rounded border px-4 py-3 text-sm transition-shadow duration-200 outline-none focus-visible:ring-1"
          />
          {errors.phone && (
            <span className="font-body mt-1 text-[10px] text-red-400">
              {errors.phone.message}
            </span>
          )}
        </div>

        <div>
          <label
            className="font-body text-gold mb-2 block text-[11px] tracking-widest uppercase"
            htmlFor="checkout-email"
          >
            {t("checkout.main-content.left-card.step-1.form.email")} *
          </label>

          <input
            id="checkout-email"
            {...register("email", {
              required: t(
                "checkout.main-content.left-card.step-1.form.email-error1",
              ),
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: t(
                  "checkout.main-content.left-card.step-1.form.email-error2",
                ),
              },
            })}
            type="email"
            placeholder="anna@example.com"
            className="border-text/20 font-body text-text placeholder:text-text-muted/60 focus-visible:border-wine focus-visible:ring-wine/30 bg-cream/70 w-full rounded border px-4 py-3 text-sm transition-shadow duration-200 outline-none focus-visible:ring-1"
          />

          {errors.email && (
            <span className="font-body mt-1 text-[10px] text-red-400">
              {errors.email.message}
            </span>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={onNext}
        className="bg-wine font-body hover:bg-wine-light focus-visible:ring-gold focus-visible:ring-offset-cream mt-8 flex w-full items-center justify-center gap-2 rounded px-8 py-4 text-[12px] tracking-widest text-white uppercase transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        {t("checkout.main-content.left-card.step-1.form.step1-btn")}
        <MoveRight size={13} />
      </button>
    </form>
  );
}
