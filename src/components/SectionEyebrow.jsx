export default function SectionEyebrow({ children, color = "gold" }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="bg-gold h-px w-8" />

      <span
        className={`font-body text-${color} text-xs tracking-[0.25em] uppercase`}
      >
        {children}
      </span>
    </div>
  );
}
