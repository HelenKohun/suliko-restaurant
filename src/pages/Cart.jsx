import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useCartStore from "../store/cartStore";
import ConfirmModal from "../components/ConfirmModal";
import { X, Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getCartTotals } from "../utils/cartTotals";

export default function Cart() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const tableHeaders = ["item", "price", "quantity", "cost"];

  // CartStore functionality
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const increaseItem = useCartStore((state) => state.increaseItem);
  const decreaseItem = useCartStore((state) => state.decreaseItem);
  const clearCart = useCartStore((state) => state.clearCart);

  const promoCode = useCartStore((state) => state.promoCode);
  const isPromoCorrect = useCartStore((state) => state.isPromoCorrect);
  const promoError = useCartStore((state) => state.promoError);
  const applyPromo = useCartStore((state) => state.applyPromo);
  const clearPromo = useCartStore((state) => state.clearPromo);

  // States
  const [promo, setPromo] = useState(promoCode || "");
  const [itemToDelete, setItemToDelete] = useState(null);
  const deliveryMethod = "delivery";

  const { subtotal, discount, delivery, total } = getCartTotals(items, {
    isPromoCorrect,
    deliveryMethod,
  });

  const cartQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  // Promo
  function handlePromo() {
    applyPromo(promo);
  }

  function handleDecrease(item) {
    if (item.quantity === 1) {
      setItemToDelete(item);
      return;
    }
    decreaseItem(item.id);
  }

  if (items.length === 0) {
    return (
      <div className="bg-cream flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="font-heading text-text mb-4 text-7xl font-light tracking-[0.12em]">
          {t("cart.cart")}
        </h1>
        <p className="font-body text-text-muted mb-8 text-[15px] tracking-widest uppercase">
          {t("cart.empty-cart")}
        </p>
        <Link
          to="/menu"
          className="font-body border-wine/40 text-wine hover:bg-wine mb-5 rounded border px-8 py-3 text-[11px] tracking-widest uppercase transition-colors duration-200 hover:text-white"
        >
          {t("cart.to-menu-btn")}
        </Link>
        <Link
          to="/wine"
          className="font-body border-wine/40 text-wine hover:bg-wine rounded border px-8 py-3 text-[11px] tracking-widest uppercase transition-colors duration-200 hover:text-white"
        >
          {t("cart.to-wine-btn")}
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen px-6 py-24 lg:px-12 lg:pt-32 lg:pb-20">
      <div className="mx-auto max-w-md lg:max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-heading text-text text-7xl font-light tracking-[0.12em] lg:text-8xl">
            {t("cart.cart")}
          </h1>
          <p className="font-body text-text-muted mt-2 text-[12px] tracking-[0.18em] uppercase">
            {t("cart.itemsCount", { count: cartQuantity })}
          </p>
        </div>

        {/* Table header */}
        <div
          className="border-text/15 hidden gap-4 border-b pb-3 lg:grid"
          style={{ gridTemplateColumns: "1fr 100px 140px 100px 40px" }}
        >
          {tableHeaders.map((i) => (
            <span
              key={i}
              className="font-body text-gold text-[10px] tracking-widest uppercase"
            >
              {t(`cart.${i}`)}
            </span>
          ))}
        </div>

        {/* Dishes or wine */}
        {items.map((item) => {
          const isWine = item.itemType === "wine";

          const itemName = isWine
            ? item.name
            : t(`menuData.${item.categoryId}.dishes.${item.dishId}.name`);

          return (
            <div
              key={item.id}
              className="border-text/[0.07] relative border-b py-5 lg:grid lg:grid-cols-[1fr_100px_140px_100px_40px] lg:items-center lg:gap-4"
            >
              {/* Name */}
              <div className="pr-10 lg:pr-0">
                <div className="font-heading text-text text-2xl font-light">
                  {itemName}
                </div>
                <div className="font-body text-text-muted mt-1 text-[12px] leading-relaxed">
                  {isWine
                    ? t(`wineList.wines.${item.wineId}.description`)
                    : t(
                        `menuData.${item.categoryId}.dishes.${item.dishId}.description`,
                      )}
                </div>
              </div>

              {/* Price - desctop only */}
              <div className="font-heading text-text hidden text-xl lg:block">
                {item.price} zł
              </div>

              {/* Quantity  */}
              <div className="mt-4 flex items-center gap-3 lg:mt-0">
                <button
                  type="button"
                  aria-label={t("aria-labels.cart.minus", { name: itemName })}
                  onClick={() => handleDecrease(item)}
                  className="border-text/20 text-text hover:border-wine hover:text-wine flex h-7 w-7 items-center justify-center rounded border text-sm transition-colors duration-200"
                >
                  <Minus size={16} />
                </button>
                <span className="font-heading text-text min-w-6 text-center text-xl">
                  {item.quantity}
                </span>
                <button
                  aria-label={t("aria-labels.cart.plus", { name: itemName })}
                  type="button"
                  onClick={() => increaseItem(item.id)}
                  className="border-text/20 text-text hover:border-wine hover:text-wine flex h-7 w-7 items-center justify-center rounded border text-sm transition-colors duration-200"
                >
                  <Plus size={16} />
                </button>
              </div>

              {/* Cost */}

              <div className="absolute right-0 bottom-5 text-right lg:static lg:text-left">
                <div className="font-body text-text-muted mb-1 text-[11px] lg:hidden">
                  {item.price} zł / {t("cart.pcs")}
                </div>

                <div className="font-heading text-gold text-xl">
                  {item.price * item.quantity} zł
                </div>
              </div>

              {/* Delete */}
              <div className="absolute top-5 right-0 lg:static lg:flex lg:justify-end">
                <button
                  type="button"
                  aria-label={t("aria-labels.cart.delete", { name: itemName })}
                  onClick={() => setItemToDelete(item)}
                  className="border-wine/20 text-wine hover:bg-wine flex h-7 w-7 items-center justify-center rounded border text-xs transition-colors duration-200 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          );
        })}

        {/* Modal */}
        {itemToDelete && (
          <ConfirmModal
            itemToDelete={itemToDelete}
            onConfirm={() => {
              removeItem(itemToDelete.id);
              setItemToDelete(null);
            }}
            onCancel={() => setItemToDelete(null)}
          />
        )}

        {/* Footer */}
        <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          {/* Promo code and buttons */}
          <div className="order-2 flex w-full flex-col gap-6 lg:order-1 lg:max-w-sm">
            <div>
              <p className="font-body text-text-muted mb-3 text-[11px] tracking-widest uppercase">
                {t("cart.promo")}
              </p>
              {promoError && (
                <p className="font-body my-2 text-[11px] tracking-wide text-[#640808]">
                  {t("cart.promo-error")}
                </p>
              )}
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  handlePromo();
                }}
                className="flex"
              >
                <input
                  type="text"
                  value={promo}
                  onChange={(e) => {
                    setPromo(e.target.value);
                    clearPromo();
                  }}
                  placeholder={t("cart.placeholder")}
                  className="border-text/20 font-body text-text placeholder:text-text-muted/60 min-w-0 flex-1 rounded-l border border-r-0 bg-transparent px-4 py-3 text-[12px] outline-none"
                />
                <button
                  type="submit"
                  onClick={() => handlePromo(promo)}
                  className="bg-wine focus-visible:ring-gold focus-visible:ring-offset-cream text-cream font-body hover:bg-wine-light rounded-r px-5 py-2 text-[10px] tracking-widest whitespace-nowrap uppercase transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  {t("cart.apply-btn")}
                </button>
              </form>
            </div>

            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => navigate("/checkout")}
                className="bg-wine font-body focus-visible:ring-gold focus-visible:ring-offset-cream hover:bg-wine-light rounded py-4 text-[12px] tracking-widest text-white uppercase transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                {t("cart.order-btn")}
              </button>

              <button
                type="button"
                onClick={clearCart}
                className="text-text-muted border-text/15 font-body hover:border-wine hover:text-wine rounded border bg-transparent py-3 text-[12px] tracking-widest uppercase transition-colors duration-200"
              >
                {t("cart.clear-btn")}
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="order-1 rounded bg-white p-5 lg:order-2 lg:min-w-65 lg:bg-transparent lg:p-0">
            <div className="mb-3 flex justify-between">
              <span className="font-body text-text-muted text-[13px]">
                {t("cart.sum")}
              </span>
              <span className="font-body text-text text-[13px]">
                {subtotal.toFixed(0)} zł
              </span>
            </div>
            {isPromoCorrect && (
              <div className="mb-3 flex justify-between">
                <span className="font-body text-text-muted text-[13px]">
                  {t("cart.discount")}
                </span>
                <span className="font-body text-wine text-[13px]">
                  − {discount.toFixed(0)} zł
                </span>
              </div>
            )}
            <div className="mb-3 flex justify-between">
              <span className="font-body text-text-muted text-[13px]">
                {t("cart.delivery")}{" "}
                {subtotal >= 350 ? `(${t("cart.for-free")})` : ""}
              </span>
              <span className="font-body text-text text-[13px]">
                {delivery} zł
              </span>
            </div>
            <div className="bg-text/10 my-4 h-px" />
            <div className="flex items-baseline justify-between">
              <span className="font-heading text-text text-2xl font-semibold">
                {t("cart.pay")}
              </span>
              <span className="font-heading text-wine text-2xl font-semibold">
                {total.toFixed(0)} zł
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
