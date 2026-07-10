import { Link } from "react-router-dom";
import useCartStore from "../../store/cartStore";

export default function CartButton({ onClick }) {
  const items = useCartStore((state) => state.items);

  const cartQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link
      to="/cart"
      onClick={onClick}
      className="font-body relative text-[12px] tracking-widest text-white uppercase transition-colors duration-200 hover:text-white"
    >
      🛒
      {items.length > 0 && (
        <span className="bg-gold text-dark-wine absolute -top-2 -right-3 flex h-4 w-4 items-center justify-center rounded-full text-[11px] font-medium">
          {cartQuantity}
        </span>
      )}
    </Link>
  );
}
