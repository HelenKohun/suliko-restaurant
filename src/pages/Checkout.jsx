import { useState, useEffect } from "react";
import useCartStore from "../store/cartStore";
import { useTranslation } from "react-i18next";
import { getCartTotals } from "../utils/cartTotals";

import { useForm, useWatch } from "react-hook-form";
import CheckoutStepsNav from "../components/CheckoutStepsNav";
import OrderConfirmation from "../components/OrderConfirmation";
import CheckoutContactStep from "../components/CheckoutContactStep";
import CheckoutDeliveryStep from "../components/CheckoutDeliveryStep";
import CheckoutReviewStep from "../components/CheckoutReviewStep";

import { LockKeyhole, ChevronDown } from "lucide-react";

export default function Checkout() {
  // Translation
  const { t } = useTranslation();

  const [step, setStep] = useState(1);
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);

  useEffect(() => {
    if (!isOrderSubmitted) return;

    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    return () => clearTimeout(timer);
  }, [isOrderSubmitted]);

  const steps = [
    {
      id: 1,
      text1: t("checkout.steps-num.1.text1"),
      text2: t("checkout.steps-num.1.text2"),
    },
    {
      id: 2,
      text1: t("checkout.steps-num.2.text1"),
      text2: t("checkout.steps-num.2.text2"),
    },
    {
      id: 3,
      text1: t("checkout.steps-num.3.text1"),
    },
  ];

  // Form
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { deliveryMethod: "delivery", paymentMethod: "cash" },
  });

  const deliveryMethod = useWatch({
    control,
    name: "deliveryMethod",
  });

  const paymentMethod = useWatch({
    control,
    name: "paymentMethod",
  });
  const formValues = useWatch({ control });

  async function goToDeliveryStep() {
    const isValid = await trigger(["fullname", "phone", "email"]);

    if (isValid) {
      setStep(2);
    }
  }

  async function goToConfirmationStep() {
    const fieldsToValidate =
      deliveryMethod === "delivery"
        ? ["deliveryMethod", "address", "postalCode", "paymentMethod"]
        : ["deliveryMethod", "paymentMethod"];

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep(3);
    }
  }

  function handleOrderSubmit(data) {
    const orderData = {
      customer: {
        fullname: data.fullname,
        phone: data.phone,
        email: data.email,
      },
      delivery: {
        method: data.deliveryMethod,
        address: data.deliveryMethod === "delivery" ? data.address : "",
        postalCode: data.deliveryMethod === "delivery" ? data.postalCode : "",
        notes: data.notes,
      },
      payment: {
        method: data.paymentMethod,
      },
      items,
      summary: {
        subtotal,
        discount,
        delivery,
        total,
      },
    };

    console.log(orderData);

    clearCart();
    reset();
    setIsOrderSubmitted(true);
  }

  // Cart Store
  const items = useCartStore((state) => state.items);
  const isPromoCorrect = useCartStore((state) => state.isPromoCorrect);
  const clearCart = useCartStore((state) => state.clearCart);

  // Cart Totals
  const { subtotal, discount, delivery, total } = getCartTotals(items, {
    isPromoCorrect,
    deliveryMethod,
  });

  if (isOrderSubmitted) {
    return <OrderConfirmation />;
  }

  return (
    <section
      aria-labelledby="checkout-title"
      className="bg-cream text-text min-h-screen px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <h1
            id="checkout-title"
            className="font-heading mt-6 text-4xl font-light tracking-[0.08em] uppercase lg:text-7xl"
          >
            {t("checkout.header")}
          </h1>

          <p className="font-body text-text-muted mt-4 text-sm">
            {t("checkout.header-text")}
          </p>
        </div>

        {/* Steps */}
        <nav
          className="mt-12 flex items-start justify-center gap-4 lg:gap-8"
          aria-label={t("aria-labels.checkout.steps")}
        >
          {steps.map((stepItem) => (
            <CheckoutStepsNav
              key={stepItem.id}
              id={stepItem.id}
              text1={stepItem.text1}
              text2={stepItem.text2}
              step={step}
            />
          ))}
        </nav>

        {/* Main content */}

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* Left card */}
          <div className="rounded-lg bg-white/70 p-8 shadow-sm md:p-10">
            {/* Step 1 */}
            <div>
              <button
                type="button"
                className="flex w-full items-center justify-between"
                onClick={() => setStep(1)}
                aria-expanded={step === 1}
                aria-controls="checkout-step-1"
              >
                <div className="flex items-center gap-4">
                  <span className="bg-wine text-cream font-body flex h-7 w-7 items-center justify-center rounded-full text-sm">
                    1
                  </span>

                  <h2 className="font-heading text-2xl font-light lg:text-3xl">
                    {t("checkout.main-content.left-card.step-1.header")}
                  </h2>
                </div>
                <span className="text-gold text-lg">
                  <ChevronDown aria-hidden="true" />
                </span>
              </button>

              {step === 1 && (
                <div id="checkout-step-1">
                  <CheckoutContactStep
                    register={register}
                    errors={errors}
                    onNext={goToDeliveryStep}
                  />
                </div>
              )}
            </div>

            {/* Step 2 */}

            <div className="border-text/15 mt-5 border-t pt-5">
              <div>
                <button
                  type="button"
                  className="flex w-full items-center justify-between"
                  onClick={goToDeliveryStep}
                  aria-expanded={step === 2}
                  aria-controls="checkout-step-2"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-body flex h-7 w-7 items-center justify-center rounded-full text-sm ${step >= 2 ? "bg-wine text-cream" : "border-text/20 text-text-muted border"}`}
                    >
                      2
                    </span>

                    <h2 className="font-heading text-2xl font-light lg:text-3xl">
                      {t("checkout.main-content.left-card.step-2.header")}
                    </h2>
                  </div>
                  <span className="text-gold text-lg">
                    <ChevronDown aria-hidden="true" />
                  </span>
                </button>

                {step === 2 && (
                  <div id="checkout-step-2">
                    <CheckoutDeliveryStep
                      register={register}
                      errors={errors}
                      onNext={goToConfirmationStep}
                      paymentMethod={paymentMethod}
                      deliveryMethod={deliveryMethod}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Step 3 */}

            <div className="border-text/15 mt-5 border-t pt-5">
              <div>
                <button
                  type="button"
                  className="flex w-full items-center justify-between"
                  onClick={goToConfirmationStep}
                  aria-expanded={step === 3}
                  aria-controls="checkout-step-3"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-body flex h-7 w-7 items-center justify-center rounded-full text-sm ${step >= 3 ? "bg-wine text-cream" : "border-text/20 text-text-muted border"}`}
                    >
                      3
                    </span>

                    <h2 className="font-heading text-2xl font-light sm:text-center lg:text-3xl">
                      {t("checkout.main-content.left-card.step-3.header")}
                    </h2>
                  </div>
                  <span className="text-gold text-lg">
                    <ChevronDown aria-hidden="true" />
                  </span>
                </button>

                {step === 3 && (
                  <div id="checkout-step-3">
                    <CheckoutReviewStep
                      formValues={formValues}
                      isSubmitting={isSubmitting}
                      onSubmit={handleOrderSubmit}
                      handleSubmit={handleSubmit}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right order summary */}
          <aside
            className="bg-dark-wine text-cream rounded-lg p-8 shadow-xl md:p-9"
            aria-labelledby="order-summary-title"
          >
            <h2
              className="font-heading text-3xl font-light"
              id="order-summary-title"
            >
              {t("checkout.main-content.right-card.order")}
            </h2>

            <ul className="mt-8 space-y-5">
              {items.map((item) => {
                const isWine = item.itemType === "wine";

                const itemName = isWine
                  ? item.name
                  : t(`menuData.${item.categoryId}.dishes.${item.dishId}.name`);

                return (
                  <li
                    className="border-gold/10 flex items-baseline justify-between gap-4 border-b pb-3"
                    key={item.id}
                  >
                    <div>
                      <p className="font-heading text-xl">{itemName}</p>
                      <p className="font-body text-gold/60 mt-1 text-[10px] tracking-widest uppercase">
                        {`x ${item.quantity}`}
                      </p>
                    </div>
                    <p className="font-body text-gold text-sm">
                      {item.price * item.quantity} zł
                    </p>
                  </li>
                );
              })}
            </ul>

            <div className="border-gold/10 mt-8 space-y-3 border-b pb-5">
              <div className="font-body text-cream/60 flex justify-between text-sm">
                <span>{t("checkout.main-content.right-card.sum")}</span>
                <span className="text-cream">{subtotal.toFixed(0)} zł</span>
              </div>

              <div className="font-body text-cream/60 flex justify-between text-sm">
                <span>{t("checkout.main-content.right-card.delivery")}</span>
                <span className="text-cream">{delivery} zł</span>
              </div>

              <div className="font-body text-cream/60 flex justify-between text-sm">
                <span>{t("checkout.main-content.right-card.promo")}</span>
                <span className="text-gold">− {discount.toFixed(0)} zł</span>
              </div>
            </div>

            <div className="mt-6 flex items-end justify-between">
              <p className="font-heading text-3xl">
                {t("checkout.main-content.right-card.total")}
              </p>
              <p className="font-heading text-gold text-3xl">
                {total.toFixed(0)} zł
              </p>
            </div>

            <div className="border-gold/10 mt-8 border-t pt-5">
              <p className="font-body text-cream/45 flex items-center gap-2 text-[11px]">
                <LockKeyhole size={12} aria-hidden="true" />
                {t("checkout.main-content.right-card.safety")}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
