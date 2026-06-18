import { useState } from "react";
import { useTranslation } from "react-i18next";
import { menuData } from "../data/menuData";
import MenuCategory from "../components/MenuCategory";
import useCartStore from "../store/cartStore";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(null);

  // useCartStore
  const addItem = useCartStore((state) => state.addItem);

  const { t } = useTranslation();

  const visibleCategories = activeCategory
    ? menuData.filter((cat) => cat.id === activeCategory)
    : menuData;

  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <div className="px-6 pt-24 pb-0 text-center lg:px-12 lg:pt-32">
        <h1 className="font-heading text-text text-7xl font-light tracking-[0.15em] lg:text-8xl">
          {t("menuPage.header")}
        </h1>
        <p className="font-body text-text-muted mt-2 mb-10 text-[10px] tracking-[0.2em] uppercase lg:mb-12 lg:text-[11px]">
          {t("menuPage.header-text")}
        </p>
      </div>

      {/* Tabs*/}
      <div className="border-text/10 mt-8 flex flex-col justify-center border-b lg:mx-12 lg:flex-row">
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          className={`font-body -mb-px border-b-[1.5px] px-5 py-3 text-[13px] tracking-widest whitespace-nowrap uppercase transition-colors duration-200 ${activeCategory === null ? "text-text border-wine" : "text-text-muted hover:text-gold border-transparent"}`}
        >
          {t("menuPage.all-btn")}
        </button>
        {menuData.map((cat) => (
          <button
            type="button"
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`font-body -mb-px cursor-pointer border-b-[1.5px] px-5 py-3 text-[12px] tracking-widest whitespace-nowrap uppercase transition-colors duration-200 ${activeCategory === cat.id ? "text-text border-wine" : "text-text-muted hover:text-gold border-transparent"}`}
          >
            {t(`menuData.${cat.id}.label`)}
          </button>
        ))}
      </div>

      {/* Categories */}
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-12 lg:gap-20 lg:py-16">
        {visibleCategories.map((cat, index) => (
          <MenuCategory
            key={cat.id}
            cat={cat}
            index={index}
            visibleCategories={visibleCategories}
            onClick={addItem}
          />
        ))}
      </div>
    </div>
  );
}
