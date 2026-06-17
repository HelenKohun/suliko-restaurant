import { Link } from "react-router-dom";
import SectionEyebrow from "../components/SectionEyebrow";
import DishCard from "../components/DishCard";
import { dishes } from "../data/dishes";
import { useTranslation } from "react-i18next";

export default function SignatureDishes() {
  const { t } = useTranslation();
  // List of components
  const dishesCompList = dishes.map((dish, index) => (
    <DishCard
      key={dish.id}
      name={t(dish.nameKey)}
      img={dish.image}
      category={t(dish.categoryKey)}
      featured={index === 1}
    />
  ));

  return (
    <section id="dishes" className="bg-cream py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-9">
        <div className="mb-14 flex flex-col gap-6 lg:mb-20 lg:flex-row lg:justify-center">
          <div>
            <SectionEyebrow>{t("dishes.eyebrow")}</SectionEyebrow>

            <h2 className="font-heading text-text mt-6 text-4xl leading-[0.95] font-light lg:text-6xl">
              {t("dishes.title1")}
              <span className="text-gold"> {t("dishes.title2")}</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {dishesCompList}
        </div>
      </div>
      <div className="mt-16 flex justify-center">
        <Link
          to="/menu"
          className="font-body text-text hover:text-gold text-xs tracking-[0.2em] uppercase transition-colors duration-200"
        >
          <div className="bg-gold mx-auto mb-4 h-px w-20" />
          {t("dishes.button")}
        </Link>
      </div>
    </section>
  );
}
