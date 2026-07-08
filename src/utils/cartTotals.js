export function getCartTotals(items, options = {}) {
  const { isPromoCorrect = false, deliveryMethod = "delivery" } = options;

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const discount = isPromoCorrect ? subtotal * 0.1 : 0;

  const isPickup = deliveryMethod === "pickup";
  const hasFreeDevivery = subtotal > 349;

  const delivery = subtotal === 0 || hasFreeDevivery || isPickup ? 0 : 15;

  const total = subtotal - discount + delivery;

  return {
    subtotal,
    discount,
    delivery,
    total,
  };
}
