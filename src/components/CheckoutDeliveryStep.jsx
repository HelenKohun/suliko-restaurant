import { useTranslation } from "react-i18next";
import { MoveRight } from "lucide-react";

export default function CheckoutDeliveryStep({
  deliveryMethod,
  register,
  errors,
  paymentMethod,
  onNext,
}) {
  const { t } = useTranslation();
  return (
    <form className="mt-8">
      <div>
        <p className="font-body text-gold mb-2 text-[11px] tracking-widest uppercase">
          {t("checkout.main-content.left-card.step-2.form.delivery-method")} *
        </p>

        <div className="grid grid-cols-2 gap-3">
          <label
            className={`font-body flex cursor-pointer items-center justify-center gap-2 rounded border px-4 py-3 text-[12px] tracking-widest uppercase transition-colors duration-200 ${
              deliveryMethod === "delivery"
                ? "border-wine bg-wine text-cream"
                : "border-text/20 text-text hover:border-wine/50 bg-transparent"
            }`}
          >
            <input
              type="radio"
              {...register("deliveryMethod", {
                required: t(
                  "checkout.main-content.left-card.step-2.form.delivery-pickup-error",
                ),
              })}
              value="delivery"
              className="sr-only"
            />
            {t("checkout.main-content.left-card.step-2.form.delivery")}
          </label>

          <label
            className={`font-body flex cursor-pointer items-center justify-center gap-2 rounded border px-4 py-3 text-[12px] tracking-widest uppercase transition-colors duration-200 ${
              deliveryMethod === "pickup"
                ? "border-wine bg-wine text-cream"
                : "border-text/20 text-text hover:border-wine/50 bg-transparent"
            }`}
          >
            <input
              type="radio"
              {...register("deliveryMethod", {
                required: t(
                  "checkout.main-content.left-card.step-2.form.delivery-pickup-error",
                ),
              })}
              value="pickup"
              className="sr-only"
            />
            {t("checkout.main-content.left-card.step-2.form.pickup")}
          </label>

          {errors.deliveryMethod && (
            <span className="font-body mt-1 block text-[10px] text-red-400">
              {errors.deliveryMethod.message}
            </span>
          )}
        </div>
      </div>
      {deliveryMethod === "delivery" && (
        <>
          <div>
            <label className="font-body text-gold mt-3 mb-2 block text-[11px] tracking-widest uppercase">
              {t("checkout.main-content.left-card.step-2.form.address")} *
            </label>

            <input
              {...register("address", {
                required:
                  deliveryMethod === "delivery"
                    ? t(
                        "checkout.main-content.left-card.step-2.form.address-error",
                      )
                    : false,
              })}
              type="text"
              placeholder="ul. Mokotowska 95A/5"
              className="border-text/20 font-body text-text placeholder:text-text-muted/60 focus-visible:border-wine focus-visible:ring-wine/30 bg-cream/70 w-full rounded border px-4 py-3 text-sm transition-shadow duration-200 outline-none focus-visible:ring-1"
            />
            {errors.address && (
              <span className="font-body mt-1 block text-[10px] text-red-400">
                {errors.address.message}
              </span>
            )}
          </div>
          <div>
            <label className="font-body text-gold mt-3 mb-2 block text-[11px] tracking-widest uppercase">
              {t("checkout.main-content.left-card.step-2.form.postal-code")} *
            </label>

            <input
              {...register("postalCode", {
                required:
                  deliveryMethod === "delivery"
                    ? t(
                        "checkout.main-content.left-card.step-2.form.postal-code-error1",
                      )
                    : false,
                pattern: {
                  value: /^\d{2}-\d{3}$/,
                  message: t(
                    "checkout.main-content.left-card.step-2.form.postal-code-error2",
                  ),
                },
              })}
              type="text"
              placeholder="99-999"
              className="border-text/20 font-body text-text placeholder:text-text-muted/60 focus-visible:border-wine focus-visible:ring-wine/30 bg-cream/70 w-full rounded border px-4 py-3 text-sm transition-shadow duration-200 outline-none focus-visible:ring-1"
            />
            {errors.postalCode && (
              <span className="font-body mt-1 block text-[10px] text-red-400">
                {errors.postalCode.message}
              </span>
            )}
          </div>
        </>
      )}

      <div>
        <label className="font-body text-gold mt-3 mb-2 block text-[11px] tracking-widest uppercase">
          {t("checkout.main-content.left-card.step-2.form.message")}
        </label>

        <textarea
          {...register("notes")}
          rows={5}
          className="border-text/20 font-body text-text placeholder:text-text-muted/60 focus-visible:border-wine focus-visible:ring-wine/30 bg-cream/70 mb-2 w-full rounded border px-4 py-3 text-sm transition-shadow duration-200 outline-none focus-visible:ring-1"
          placeholder={t(
            "checkout.main-content.left-card.step-2.form.message-placeholder",
          )}
        ></textarea>
      </div>

      <div>
        <p className="font-body text-gold mb-2 text-[11px] tracking-widest uppercase">
          {t("checkout.main-content.left-card.step-2.form.payment-method")} *
        </p>

        <div className="grid grid-cols-2 gap-3">
          <label
            className={`font-body flex cursor-pointer items-center justify-center gap-2 rounded border px-4 py-3 text-[12px] tracking-widest uppercase transition-colors duration-200 ${
              paymentMethod === "cash"
                ? "border-wine bg-wine text-cream"
                : "border-text/20 text-text hover:border-wine/50 bg-transparent"
            }`}
          >
            <input
              type="radio"
              {...register("paymentMethod", {
                required: t(
                  "checkout.main-content.left-card.step-2.form.cash-error",
                ),
              })}
              value="cash"
              className="sr-only"
            />
            {t("checkout.main-content.left-card.step-2.form.cash")}
          </label>

          <label
            className={`font-body flex cursor-pointer items-center justify-center gap-2 rounded border px-4 py-3 text-[12px] tracking-widest uppercase transition-colors duration-200 ${
              paymentMethod === "card"
                ? "border-wine bg-wine text-cream"
                : "border-text/20 text-text hover:border-wine/50 bg-transparent"
            }`}
          >
            <input
              type="radio"
              {...register("paymentMethod", {
                required: t(
                  "checkout.main-content.left-card.step-2.form.byCard-error",
                ),
              })}
              value="card"
              className="sr-only"
            />
            {t("checkout.main-content.left-card.step-2.form.byCard")}
          </label>
          {errors.paymentMethod && (
            <span className="font-body mt-1 block text-[10px] text-red-400">
              {errors.paymentMethod.message}
            </span>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={onNext}
        className="bg-wine font-body hover:bg-wine-light focus-visible:ring-gold focus-visible:ring-offset-cream mt-8 flex w-full items-center justify-center gap-2 rounded px-8 py-4 text-[12px] tracking-widest text-white uppercase transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        {t("checkout.main-content.left-card.step-2.form.step2-btn")}
        <MoveRight size={13} />
      </button>
    </form>
  );
}
