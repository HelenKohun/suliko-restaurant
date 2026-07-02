import { useTranslation } from "react-i18next";

export default function CheckoutReviewStep({
  formValues,
  isSubmitting,
  handleSubmit,
  onSubmit,
}) {
  const { t } = useTranslation();
  return (
    <>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="border-gold/20 bg-cream/70 rounded border p-5">
          <p className="font-body text-gold mb-4 text-[10px] tracking-widest uppercase">
            {t("checkout.main-content.left-card.step-3.contact-data")}
          </p>

          <div className="space-y-3">
            <div className="flex justify-between gap-4">
              <span className="font-body text-text-muted text-sm">
                {t("checkout.main-content.left-card.step-3.name")}
              </span>
              <span className="font-body text-text text-right text-sm">
                {formValues.fullname}
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="font-body text-text-muted text-sm">
                {t("checkout.main-content.left-card.step-3.phone")}
              </span>
              <span className="font-body text-text text-right text-sm">
                {formValues.phone}
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="font-body text-text-muted text-sm">
                {t("checkout.main-content.left-card.step-3.email")}
              </span>
              <span className="font-body text-text text-right text-sm">
                {formValues.email}
              </span>
            </div>
          </div>
        </div>

        <div className="border-gold/20 bg-cream/70 rounded border p-5">
          <p className="font-body text-gold mb-4 text-[10px] tracking-widest uppercase">
            {t("checkout.main-content.left-card.step-3.delivery-payment")}
          </p>

          <div className="space-y-3">
            <div className="flex justify-between gap-4">
              <span className="font-body text-text-muted text-sm">
                {t("checkout.main-content.left-card.step-3.delivery-method")}
              </span>
              <span className="font-body text-text text-right text-sm">
                {formValues.deliveryMethod === "delivery"
                  ? t("checkout.main-content.left-card.step-3.delivery")
                  : t("checkout.main-content.left-card.step-3.pickup")}
              </span>
            </div>

            {formValues.deliveryMethod === "delivery" ? (
              <>
                <div className="flex justify-between gap-4">
                  <span className="font-body text-text-muted text-sm">
                    {t("checkout.main-content.left-card.step-3.address")}
                  </span>
                  <span className="font-body text-text text-right text-sm">
                    {formValues.address}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="font-body text-text-muted text-sm">
                    {t("checkout.main-content.left-card.step-3.postal-code")}
                  </span>
                  <span className="font-body text-text text-right text-sm">
                    {formValues.postalCode}
                  </span>
                </div>
              </>
            ) : (
              false
            )}

            <div className="flex justify-between gap-4">
              <span className="font-body text-text-muted text-sm">
                {t("checkout.main-content.left-card.step-3.payment")}
              </span>
              <span className="font-body text-text text-right text-sm">
                {formValues.paymentMethod === "cash"
                  ? t("checkout.main-content.left-card.step-3.cash")
                  : t("checkout.main-content.left-card.step-3.byCard")}
              </span>
            </div>

            {formValues.notes && (
              <div className="flex justify-between gap-4">
                <span className="font-body text-text-muted text-sm">
                  {t("checkout.main-content.left-card.step-3.message")}
                </span>
                <span className="font-body text-text text-right text-sm">
                  {formValues.notes}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <form className="mt-8" onClick={handleSubmit(onSubmit)}>
        <button
          type="button"
          disabled={isSubmitting}
          className="bg-wine font-body hover:bg-wine-light focus-visible:ring-gold focus-visible:ring-offset-cream mt-8 flex w-full items-center justify-center gap-2 rounded px-8 py-4 text-[12px] tracking-widest text-white uppercase transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          {t("checkout.main-content.left-card.step-3.confirm-btn")}
        </button>
      </form>
    </>
  );
}
