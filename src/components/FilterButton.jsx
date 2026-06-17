export default function FilterButton({ children, onClick, isActive }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border-gold/50 font-body shrink-0 rounded border px-3 py-2 text-[15px] tracking-wide whitespace-nowrap text-white transition-colors duration-300 ${isActive ? "bg-gold text-wine" : "text-cream hover:bg-gold hover:text-wine"}`}
    >
      {children}
    </button>
  );
}
