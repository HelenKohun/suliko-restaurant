import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { menuData } from "../data/menuData";
import MenuCategory from "../components/MenuCategory";
import useCartStore from "../store/cartStore";
import Seo from "../components/Seo";
import Notification from "../components/Notification";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [addedItemId, setAddedItemId] = useState(null);
  const [notification, setNotification] = useState(null);
  const menuSectionRef = useRef(null);

  // useCartStore
  const addItem = useCartStore((state) => state.addItem);

  const { t } = useTranslation();

  const visibleCategories = activeCategory
    ? menuData.filter((cat) => cat.id === activeCategory)
    : menuData;

  function handleCategoryChange(categoryId) {
    setActiveCategory(categoryId);

    if (window.innerWidth >= 1024) return;

    setTimeout(() => {
      menuSectionRef.current?.scrollIntoView(
        {
          behavior: "smooth",
          block: "start",
        },
        0,
      );
    });
  }

  function handleAddItem(item) {
    addItem(item);
    setAddedItemId(item.id);
    setNotification(item);

    setTimeout(() => {
      setAddedItemId(null);
    }, 2000);

    setTimeout(() => {
      setNotification(null);
    }, 3500);
  }

  return (
    <>
      <Seo page="menu" />
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
            onClick={() => {
              setActiveCategory(null);
              handleCategoryChange(null);
            }}
            className={`font-body -mb-px border-b-[1.5px] px-5 py-3 text-[13px] tracking-widest whitespace-nowrap uppercase transition-colors duration-200 ${activeCategory === null ? "text-text border-wine" : "text-text-muted hover:text-gold border-transparent"}`}
          >
            {t("menuPage.all-btn")}
          </button>
          {menuData.map((cat) => (
            <button
              type="button"
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                handleCategoryChange(cat.id);
              }}
              className={`font-body -mb-px cursor-pointer border-b-[1.5px] px-5 py-3 text-[12px] tracking-widest whitespace-nowrap uppercase transition-colors duration-200 ${activeCategory === cat.id ? "text-text border-wine" : "text-text-muted hover:text-gold border-transparent"}`}
            >
              {t(`menuData.${cat.id}.label`)}
            </button>
          ))}
        </div>

        {/* Categories */}
        <div
          ref={menuSectionRef}
          className="mx-auto flex max-w-7xl scroll-mt-24 flex-col gap-1 px-12 lg:gap-20 lg:py-16"
        >
          {visibleCategories.map((cat, index) => (
            <MenuCategory
              key={cat.id}
              cat={cat}
              index={index}
              visibleCategories={visibleCategories}
              onClick={handleAddItem}
              addedItemId={addedItemId}
            />
          ))}
        </div>
        {notification && (
          <Notification
            notification={notification}
            setNotification={setNotification}
          />
        )}
      </div>
    </>
  );
}
