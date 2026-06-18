import SectionEyebrow from "./SectionEyebrow";
import { useTranslation } from "react-i18next";

export default function MenuCategory({
  cat,
  index,
  visibleCategories,
  onClick,
}) {
  const { t } = useTranslation();

  return (
    <div key={cat.id}>
      {/* Category container */}
      <div
        className={`my-16 grid grid-cols-1 items-start gap-8 lg:my-20 lg:grid-cols-2 lg:gap-16 ${cat.imgPosition === "right" ? "direction-rtl" : ""}`}
      >
        {/* Image */}
        <div
          className={`hidden lg:block ${
            cat.imgPosition === "right" ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <img
            src={cat.img}
            alt={t(`menuData.${cat.id}.label`)}
            className="aspect-4/5 w-full rounded object-cover"
          />
        </div>

        {/* Dishes */}
        <div
          className={`flex flex-col justify-center ${cat.imgPosition === "right" ? "lg:order-1" : "lg:order-2"}`}
        >
          <SectionEyebrow>{t(`menuData.${cat.id}.label`)}</SectionEyebrow>

          <h2 className="font-heading text-text mb-8 text-4xl leading-tight font-light lg:text-5xl">
            {t(`menuData.${cat.id}.titleLine1`)}
            <br />
            <em className="text-wine">{t(`menuData.${cat.id}.titleLine2`)}</em>
          </h2>

          <div className="flex flex-col">
            {cat.dishes.map((dish) => (
              <div
                key={dish.id}
                className="border-text/8 first:border-text/8 grid grid-cols-[1fr_auto] gap-x-4 border-b py-5 first:border-t"
              >
                <div className="min-w-0">
                  <div className="font-heading text-text text-[22px] font-light lg:text-2xl">
                    {t(`menuData.${cat.id}.dishes.${dish.id}.name`)}
                  </div>
                  <div className="font-body text-text-muted mt-1 text-[12px] leading-relaxed">
                    {t(`menuData.${cat.id}.dishes.${dish.id}.description`)}
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-2 pt-1 lg:gap-3">
                  <span className="font-body text-gold text-[13px] font-medium lg:text-[15px]">
                    {dish.price} zł
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      onClick({
                        ...dish,
                        id: `${cat.id}-${dish.id}`,
                        dishId: dish.id,
                        categoryId: cat.id,
                      })
                    }
                    className="font-body text-wine border-wine/30 lg:hover:bg-wine active:bg-wine rounded border px-2 py-1 text-[12px] tracking-widest uppercase transition-colors duration-200 active:text-white lg:px-3 lg:text-[11px] lg:hover:text-white"
                  >
                    {t("menuPage.add-btn")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Separator between categories */}
      {index < visibleCategories.length - 1 && (
        <div className="bg-text/8 mt-20 h-px" />
      )}

      {index === visibleCategories.length - 1 && <div className="mt-10" />}
    </div>
  );
}
