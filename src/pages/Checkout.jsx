import { useState } from "react";
import useCartStore from "../store/cartStore";
import { useTranslation } from "react-i18next";
import { getCartTotals } from "../utils/cartTotals";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { LockKeyhole, ChevronDown, MoveRight } from "lucide-react";

export default function Checkout() {
  const [step, setStep] = useState(1);
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);

  // Form

  const {
    register,
    handleSubmit,
    reset,
    watch,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { deliveryMethod: "delivery", paymentMethod: "cash" },
  });

  const deliveryMethod = watch("deliveryMethod");
  const paymentMethod = watch("paymentMethod");

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

  const formValues = watch();

  // Cart Store
  const items = useCartStore((state) => state.items);
  const isPromoCorrect = useCartStore((state) => state.isPromoCorrect);
  const clearCart = useCartStore((state) => state.clearCart);

  // Translation
  const { t } = useTranslation();

  // Cart Totals
  const { subtotal, discount, delivery, total } = getCartTotals(items, {
    isPromoCorrect,
    deliveryMethod,
  });

  return (
    <section className="bg-cream text-text min-h-screen px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <h1 className="font-heading mt-6 text-6xl font-light tracking-[0.08em] uppercase lg:text-7xl">
            zamówienie
          </h1>

          <p className="font-body text-text-muted mt-4 text-sm">
            Wypełnij dane, aby dokończyć zamówienie
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12 flex items-start justify-center gap-4 lg:gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-wine text-cream font-body flex h-9 w-9 items-center justify-center rounded-full text-lg">
              1
            </div>
            <span className="font-body text-wine mt-3 text-center text-[10px] tracking-widest uppercase">
              Dane <br /> kontaktowe
            </span>
          </div>

          <div
            className={`mt-4 h-px w-20 lg:w-24 ${step >= 2 ? "bg-text/90" : "bg-text/20"}`}
          />

          <div className="flex flex-col items-center">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full text-lg ${step >= 2 ? "bg-wine text-cream" : "border-text/20 text-text-muted border"}`}
            >
              2
            </div>
            <span
              className={`font-body mt-3 text-center text-[10px] tracking-widest uppercase ${step >= 2 ? "text-wine" : "text-text-muted"}`}
            >
              Dostawa <br />
              płatność
            </span>
          </div>

          <div
            className={`mt-4 h-px w-20 lg:w-24 ${step >= 3 ? "bg-text/90" : "bg-text/20"}`}
          />

          <div className="flex flex-col items-center">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full text-lg ${step >= 3 ? "bg-wine text-cream" : "border-text/20 text-text-muted border"}`}
            >
              3
            </div>
            <span
              className={`font-body mt-3 text-center text-[10px] tracking-widest uppercase ${step >= 3 ? "text-wine" : "text-text-muted"}`}
            >
              Potwierdzenie
            </span>
          </div>
        </div>

        {/* Main content */}
        {!isOrderSubmitted && (
          <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_360px]">
            {/* Left card */}
            <div className="rounded-lg bg-white/70 p-8 shadow-sm md:p-10">
              {/* Step 1 */}
              <div>
                <button
                  type="button"
                  className="flex w-full items-center justify-between"
                  onClick={() => setStep(1)}
                >
                  <div className="flex items-center gap-4">
                    <span className="bg-wine text-cream font-body flex h-7 w-7 items-center justify-center rounded-full text-sm">
                      1
                    </span>

                    <h2 className="font-heading text-3xl font-light">
                      Dane kontaktowe
                    </h2>
                  </div>
                  <span className="text-gold text-lg">
                    <ChevronDown />
                  </span>
                </button>

                {step === 1 && (
                  <form className="mt-8">
                    <div>
                      <label className="font-body text-gold mb-2 block text-[11px] tracking-widest uppercase">
                        Imię i nazwisko *
                      </label>

                      <input
                        {...register("fullname", {
                          required: "Imię i nazwisko są wymagane",
                          validate: (value) =>
                            value.trim().length >= 2 ||
                            "Wpisz poprawne imię i nazwisko",
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
                        <label className="font-body text-gold mb-2 block text-[11px] tracking-widest uppercase">
                          Telefon *
                        </label>

                        <input
                          {...register("phone", {
                            required: "Numer telefonu jest wymagany",
                            pattern: {
                              value: /^(?:\+48\s?)?(?:\d{3}[\s-]?){2}\d{3}$/,
                              message: "Wpisz poprawny numer telefonu",
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
                        <label className="font-body text-gold mb-2 block text-[11px] tracking-widest uppercase">
                          Email *
                        </label>

                        <input
                          {...register("email", {
                            required: "Adres e-mail jest wymagany",
                            pattern: {
                              value: /^\S+@\S+\.\S+$/,
                              message: "Wpisz poprawny adres e-mail",
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
                      onClick={goToDeliveryStep}
                      className="bg-wine font-body hover:bg-wine-light focus-visible:ring-gold focus-visible:ring-offset-cream mt-8 flex w-full items-center justify-center gap-2 rounded px-8 py-4 text-[12px] tracking-widest text-white uppercase transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                    >
                      Dalej: dostawa
                      <MoveRight size={13} />
                    </button>
                  </form>
                )}
              </div>

              {/* Step 2 */}

              <div className="border-text/15 mt-5 border-t pt-5">
                <div>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between"
                    onClick={goToDeliveryStep}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-body flex h-7 w-7 items-center justify-center rounded-full text-sm ${step >= 2 ? "bg-wine text-cream" : "border-text/20 text-text-muted border"}`}
                      >
                        2
                      </span>

                      <h2 className="font-heading text-3xl font-light">
                        Dostawa i płatność
                      </h2>
                    </div>
                    <span className="text-gold text-lg">
                      <ChevronDown />
                    </span>
                  </button>

                  {step === 2 && (
                    <form className="mt-8">
                      <div>
                        <p className="font-body text-gold mb-2 text-[11px] tracking-widest uppercase">
                          Metoda dostawy *
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
                                required: "Wybierz metodę dostawy",
                              })}
                              value="delivery"
                              className="sr-only"
                            />
                            Dostawa
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
                                required: "Wybierz metodę dostawy",
                              })}
                              value="pickup"
                              className="sr-only"
                            />
                            Odbiór osobisty
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
                              Adres dostawy *
                            </label>

                            <input
                              {...register("address", {
                                required:
                                  deliveryMethod === "delivery"
                                    ? "Adres dostawy jest wymagany"
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
                              Kod pocztowy *
                            </label>

                            <input
                              {...register("postalCode", {
                                required:
                                  deliveryMethod === "delivery"
                                    ? "Kod pocztowy jest wymagany"
                                    : false,
                                pattern: {
                                  value: /^\d{2}-\d{3}$/,
                                  message: "Wpisz poprawny kod pocztowy",
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
                          Uwagi do zamówienia
                        </label>

                        <textarea
                          {...register("notes")}
                          rows={5}
                          className="border-text/20 font-body text-text placeholder:text-text-muted/60 focus-visible:border-wine focus-visible:ring-wine/30 bg-cream/70 mb-2 w-full rounded border px-4 py-3 text-sm transition-shadow duration-200 outline-none focus-visible:ring-1"
                          placeholder="Proszę położyć dodatkowe sztućce..."
                        ></textarea>
                      </div>

                      <div>
                        <p className="font-body text-gold mb-2 text-[11px] tracking-widest uppercase">
                          Metody płatności *
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
                                required: "Wybierz metodę płatności",
                              })}
                              value="cash"
                              className="sr-only"
                            />
                            Gotówka
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
                                required: "Wybierz metodę płatności",
                              })}
                              value="card"
                              className="sr-only"
                            />
                            Karta kredytowa
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
                        onClick={goToConfirmationStep}
                        className="bg-wine font-body hover:bg-wine-light focus-visible:ring-gold focus-visible:ring-offset-cream mt-8 flex w-full items-center justify-center gap-2 rounded px-8 py-4 text-[12px] tracking-widest text-white uppercase transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                      >
                        Potwierdzenie zamówienia
                        <MoveRight size={13} />
                      </button>
                    </form>
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
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-body flex h-7 w-7 items-center justify-center rounded-full text-sm ${step >= 3 ? "bg-wine text-cream" : "border-text/20 text-text-muted border"}`}
                      >
                        3
                      </span>

                      <h2 className="font-heading text-3xl font-light">
                        Potwierdzenie zamówienia
                      </h2>
                    </div>
                    <span className="text-gold text-lg">
                      <ChevronDown />
                    </span>
                  </button>

                  {step === 3 && (
                    <>
                      <div className="mt-8 grid gap-6 md:grid-cols-2">
                        <div className="border-gold/20 bg-cream/70 rounded border p-5">
                          <p className="font-body text-gold mb-4 text-[10px] tracking-widest uppercase">
                            Dane kontaktowe
                          </p>

                          <div className="space-y-3">
                            <div className="flex justify-between gap-4">
                              <span className="font-body text-text-muted text-sm">
                                Imię i nazwisko
                              </span>
                              <span className="font-body text-text text-right text-sm">
                                {formValues.fullname}
                              </span>
                            </div>

                            <div className="flex justify-between gap-4">
                              <span className="font-body text-text-muted text-sm">
                                Telefon
                              </span>
                              <span className="font-body text-text text-right text-sm">
                                {formValues.phone}
                              </span>
                            </div>

                            <div className="flex justify-between gap-4">
                              <span className="font-body text-text-muted text-sm">
                                Email
                              </span>
                              <span className="font-body text-text text-right text-sm">
                                {formValues.email}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="border-gold/20 bg-cream/70 rounded border p-5">
                          <p className="font-body text-gold mb-4 text-[10px] tracking-widest uppercase">
                            Dostawa i płatność
                          </p>

                          <div className="space-y-3">
                            <div className="flex justify-between gap-4">
                              <span className="font-body text-text-muted text-sm">
                                Metoda dostawy
                              </span>
                              <span className="font-body text-text text-right text-sm">
                                {formValues.deliveryMethod === "delivery"
                                  ? "Dostawa"
                                  : "Odbiór osobisty"}
                              </span>
                            </div>

                            {formValues.deliveryMethod === "delivery" ? (
                              <>
                                <div className="flex justify-between gap-4">
                                  <span className="font-body text-text-muted text-sm">
                                    Adres
                                  </span>
                                  <span className="font-body text-text text-right text-sm">
                                    {formValues.address}
                                  </span>
                                </div>

                                <div className="flex justify-between gap-4">
                                  <span className="font-body text-text-muted text-sm">
                                    Kod pocztowy
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
                                Płatność
                              </span>
                              <span className="font-body text-text text-right text-sm">
                                {formValues.paymentMethod === "cash"
                                  ? "Gotówka"
                                  : "Karta kredytowa"}
                              </span>
                            </div>

                            {formValues.notes && (
                              <div className="flex justify-between gap-4">
                                <span className="font-body text-text-muted text-sm">
                                  Uwagi do zamówienia
                                </span>
                                <span className="font-body text-text text-right text-sm">
                                  {formValues.notes}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <form className="mt-8">
                        <button
                          type="button"
                          disabled={isSubmitting}
                          onClick={handleSubmit(handleOrderSubmit)}
                          className="bg-wine font-body hover:bg-wine-light focus-visible:ring-gold focus-visible:ring-offset-cream mt-8 flex w-full items-center justify-center gap-2 rounded px-8 py-4 text-[12px] tracking-widest text-white uppercase transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                        >
                          Złóż zamówienie
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Right order summary */}
            <aside className="bg-dark-wine text-cream rounded-lg p-8 shadow-xl md:p-9">
              <h2 className="font-heading text-3xl font-light">
                Twoje zamówienie
              </h2>

              <div className="mt-8 space-y-5">
                {items.map((item) => {
                  const isWine = item.itemType === "wine";

                  const itemName = isWine
                    ? item.name
                    : t(
                        `menuData.${item.categoryId}.dishes.${item.dishId}.name`,
                      );

                  return (
                    <div
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
                    </div>
                  );
                })}
              </div>

              <div className="border-gold/10 mt-8 space-y-3 border-b pb-5">
                <div className="font-body text-cream/60 flex justify-between text-sm">
                  <span>Suma produktów</span>
                  <span className="text-cream">{subtotal.toFixed(0)} zł</span>
                </div>

                <div className="font-body text-cream/60 flex justify-between text-sm">
                  <span>Dostawa</span>
                  <span className="text-cream">{delivery} zł</span>
                </div>

                <div className="font-body text-cream/60 flex justify-between text-sm">
                  <span>Kod promocyjny</span>
                  <span className="text-gold">− {discount.toFixed(0)} zł</span>
                </div>
              </div>

              <div className="mt-6 flex items-end justify-between">
                <p className="font-heading text-3xl">Razem</p>
                <p className="font-heading text-gold text-3xl">
                  {total.toFixed(0)} zł
                </p>
              </div>

              <div className="border-gold/10 mt-8 border-t pt-5">
                <p className="font-body text-cream/45 flex items-center gap-2 text-[11px]">
                  <LockKeyhole size={12} />
                  Twoje dane są bezpieczne i nie są udostępniane
                </p>
              </div>
            </aside>
          </div>
        )}

        {isOrderSubmitted && (
          <div className="bg-cream text-text min-h-screen px-6 py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-body text-gold text-[10px] tracking-[0.35em] uppercase">
                Zamówienie potwierdzone
              </p>

              <h1 className="font-heading mt-6 text-6xl font-light">
                Dziękujemy
              </h1>

              <p className="font-body text-text-muted mx-auto mt-6 max-w-xl text-sm leading-7">
                Twoje zamówienie zostało przyjęte. <br /> Wkrótce skontaktujemy
                się z Tobą, aby potwierdzić szczegóły dostawy.
              </p>

              <div className="border-gold/30 bg-card mx-auto mt-10 max-w-md rounded border px-8 py-6">
                <div className="border-gold/20 flex justify-between border-b pb-3">
                  <span className="font-body text-text-muted text-sm">
                    Numer zamówienia
                  </span>
                  <span className="font-heading text-wine text-xl">
                    #SLK-2026
                  </span>
                </div>

                <div className="mt-4 flex justify-between">
                  <span className="font-body text-text-muted text-sm">
                    Czas dostawy
                  </span>
                  <span className="font-body text-text text-sm">45–60 min</span>
                </div>
              </div>

              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  to="/menu"
                  className="border-wine/30 text-wine font-body hover:bg-wine hover:text-cream focus-visible:ring-gold focus-visible:ring-offset-cream inline-flex items-center justify-center rounded border px-8 py-4 text-[12px] tracking-widest uppercase transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  Wróć do menu
                </Link>

                <Link
                  to="/"
                  className="border-wine/30 text-wine font-body hover:bg-wine hover:text-cream focus-visible:ring-gold focus-visible:ring-offset-cream inline-flex items-center justify-center rounded border px-8 py-4 text-[12px] tracking-widest uppercase transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  Strona główna
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
