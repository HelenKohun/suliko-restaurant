export default function DishCard({ name, img, category, featured }) {
  return (
    <article className="group">
      <div className="overflow-hidden rounded">
        <img
          src={img}
          alt={name}
          className={`w-full object-cover transition duration-500 group-hover:scale-105 ${featured ? "h-[500px]" : "h-[420px]"}`}
        />
      </div>
      <h3 className="font-heading text-text mt-6 text-3xl font-light">
        {name}
      </h3>
      <p className="font-body text-text-muted mt-2 text-xs tracking-[0.2em] uppercase">
        {category}
      </p>
    </article>
  );
}
