import { useState } from "react";
import { useTranslation } from "react-i18next";
import { winesData, styles, types, regions } from "../data/winesData";
import grapeImage from "../assets/Wine/pexels-mattia-d-andrea-1351715572-25696380.jpg";
import SectionEyebrow from "../components/SectionEyebrow";
import RegionCard from "../components/RegionCard";
import RegionModal from "../components/RegionModal";
import grapeImage2 from "../assets/Wine/pexels-david-bartus-43782-442116.jpg";
import FilterButton from "../components/FilterButton";
import { RotateCw, ChevronLeft, ChevronRight } from "lucide-react";
import WineCard from "../components/WineCard";
import useCartStore from "../store/cartStore";
import { useSearchParams } from "react-router-dom";

export default function WineList() {
  const { t } = useTranslation();

  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedRegion, setSelectedRegion] = useState(null);

  const activeType = searchParams.get("type");
  const activeRegion = searchParams.get("region");
  const activeStyle = searchParams.get("style");

  // useCartStore
  const addItem = useCartStore((state) => state.addItem);

  // Wine filtering
  const filteredWine = winesData.filter((wine) => {
    const matchedStyle = activeStyle ? wine.style === activeStyle : true;
    const matchedType = activeType ? wine.type === activeType : true;
    const matchedRegion = activeRegion ? wine.region === activeRegion : true;
    return matchedStyle && matchedType && matchedRegion;
  });

  const itemsPerPage = 6;

  const currentPage = Number(searchParams.get("page")) || 1;
  const totalPages = Math.ceil(filteredWine.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const winesForCurrentPage = filteredWine.slice(startIndex, endIndex);

  function handleFiltering(key, value) {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);

      if (value === "") {
        newParams.delete(key);
      } else if (newParams.get(key) === value) {
        // press again and delete filter
        newParams.delete(key);
      } else {
        // or add new filter
        newParams.set(key, value);
      }

      newParams.delete("page");

      return newParams;
    });
  }

  function goToPage(page) {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);

      if (page === 1) {
        newParams.delete("page");
      } else {
        newParams.set("page", String(page));
      }

      return newParams;
    });
  }

  function getPaginationPages(currentPage, totalPages) {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }
    if (currentPage <= 3) {
      return [1, 2, 3, "...", totalPages];
    }
    if (currentPage >= totalPages - 2) {
      return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    }

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  }

  const paginationPages = getPaginationPages(currentPage, totalPages);

  return (
    <div className="bg-wine min-h-screen">
      {/* Hero photo */}
      <section className="relative h-[480px] overflow-hidden lg:min-h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-left-top"
          style={{ backgroundImage: `url(${grapeImage})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero section content  */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-6 pt-24 lg:px-9 lg:pt-28">
          <div className="flex max-w-3xl flex-col items-center">
            <div className="bg-gold h-px w-25" />
            <h1 className="font-heading mt-6 text-center text-5xl leading-[0.95] font-light text-white md:text-6xl lg:text-7xl">
              {t("wineList.hero.title1")} <em>{t("wineList.hero.title2")}</em>
            </h1>

            <p className="font-body mt-8 max-w-md text-center text-[17px] leading-7 text-white/95">
              {t("wineList.hero.text")}
            </p>
            <div className="bg-gold mt-6 h-px w-25" />
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-20 lg:min-h-[50vh]">
        {/* Section contant */}
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:gap-16 lg:px-9">
          {/* Text */}
          <div className="mx-auto flex max-w-md flex-col items-center justify-center">
            <p className="font-body text-gold leading-[0.95] font-medium uppercase">
              {t("wineList.regionsSection.text1")}
            </p>
            <h2 className="font-heading mt-2 text-2xl leading-7 text-white lg:text-3xl">
              {t("wineList.regionsSection.text2")}
            </h2>

            <div className="bg-gold mt-6 h-px w-25" />
          </div>
          {/* Container for cards */}
          <div className="scrollbar-hide -mx-6 flex snap-x snap-mandatory gap-2 overflow-x-auto px-2 py-4 lg:mx-0 lg:grid lg:grid-cols-7 lg:gap-8 lg:overflow-visible lg:px-0 lg:pb-0">
            {regions.map((region) => (
              <div
                key={region.id}
                className="w-[180px] shrink-0 snap-center lg:w-auto"
              >
                <RegionCard region={region} onSelect={setSelectedRegion} />
              </div>
            ))}
          </div>
          {/* Modal */}
          {selectedRegion && (
            <RegionModal
              region={selectedRegion}
              onClose={() => setSelectedRegion(null)}
            />
          )}
        </div>
      </section>

      {/* Narrow photo */}
      <section className="relative h-[200px] overflow-hidden lg:min-h-[25vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${grapeImage2})` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-6 py-5 lg:px-9 lg:py-8">
          <div className="mx-auto flex max-w-md flex-col items-center justify-center">
            <p className="font-body text-gold leading-[0.95] font-medium uppercase">
              {t("wineList.narrowSection.text1")}
            </p>
            <h2 className="font-heading mt-3 text-2xl leading-7 text-white lg:text-3xl">
              {t("wineList.narrowSection.text2")}{" "}
              <em>{t("wineList.narrowSection.text3")}</em>.
            </h2>

            <div className="mt-6 flex w-[120px] items-center justify-center gap-3">
              <div className="bg-gold h-px w-10" />
              <span className="text-gold leading-none">✦</span>
              <div className="bg-gold h-px w-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Wine filters */}
      <section className="py-20">
        {/* Main container */}
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 lg:min-h-[60vh] lg:grid-cols-[280px_1fr] lg:gap-12 lg:px-9">
          {/* Filter section */}
          <div className="flex h-full flex-col px-4">
            <SectionEyebrow color="white">
              {t("wineList.wineFilters.eyebrow")}
            </SectionEyebrow>

            {/* Type buttons */}
            <h3 className="text-gold font-body mt-8 text-[18px] font-medium uppercase">
              {t("wineList.wineFilters.type")}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {types.map((type) => (
                <FilterButton
                  key={type}
                  isActive={activeType === type}
                  onClick={() => {
                    handleFiltering("type", type);
                  }}
                >
                  {t(`wineList.typeData.${type}`)}
                </FilterButton>
              ))}
            </div>

            {/* Style buttons */}
            <h3 className="text-gold font-body mt-8 text-[18px] font-medium uppercase">
              {t("wineList.wineFilters.style")}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {styles.map((style) => (
                <FilterButton
                  key={style}
                  isActive={activeStyle === style}
                  onClick={(event) => {
                    handleFiltering("style", style);
                  }}
                >
                  {t(`wineList.styleData.${style}`)}
                </FilterButton>
              ))}
            </div>

            {/* Region optinions */}
            <h3 className="text-gold font-body mt-8 text-[18px] font-medium uppercase">
              {t("wineList.wineFilters.region")}
            </h3>
            <div className="mt-4 flex gap-2">
              <select
                value={activeRegion || ""}
                className="font-heading bg-wine cursor-pointer text-xl font-light text-white outline-none sm:text-[22px]"
                onChange={(event) =>
                  handleFiltering("region", event.target.value)
                }
              >
                <option value="">
                  {t("wineList.wineFilters.all-regions")}
                </option>
                {regions.map((region) => (
                  <option key={region.id} value={region.id}>
                    {t(`wineList.regions.${region.id}.name`)}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              className="font-body border-gold/50 bg-gold hover:bg-gold/10 mt-10 mb-10 flex w-[70%] justify-between rounded-xs border px-5 py-3 text-[12px] tracking-widest text-white uppercase transition-colors duration-200 lg:mt-auto lg:mb-0"
              onClick={() => setSearchParams({})}
            >
              {t("wineList.wineFilters.clear-btn")} <RotateCw size={18} />
            </button>
          </div>

          {/* Wine list section */}
          <div className="flex flex-col gap-2">
            {/* Wine page */}
            <div className="grid flex-1 grid-cols-1 gap-4 px-4 pb-4 sm:grid-cols-2 lg:grid-rows-2 xl:grid-cols-3">
              {winesForCurrentPage.map((wine) => (
                <WineCard wine={wine} key={wine.id} onClick={addItem} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex flex-wrap items-center justify-center gap-3 px-4">
              <button
                type="button"
                disabled={currentPage === 1}
                className="disabled:cursor-not-allowed disabled:opacity-30"
                onClick={() => goToPage(currentPage - 1)}
              >
                <ChevronLeft className="hover:text-gold text-white transition-colors duration-300" />
              </button>

              {paginationPages.map((page, index) => {
                if (page === "...") {
                  return (
                    <span key={`dots-${index}`} className="text-white/60">
                      ...
                    </span>
                  );
                }

                return (
                  <button
                    key={page}
                    type="button"
                    onClick={() => goToPage(page)}
                    className={`font-body text-[14px] transition-colors duration-300 ${
                      currentPage === page
                        ? "text-gold"
                        : "hover:text-gold text-white"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => goToPage(currentPage + 1)}
              >
                <ChevronRight className="hover:text-gold text-white transition-colors duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
