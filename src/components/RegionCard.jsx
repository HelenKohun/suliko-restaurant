import { useTranslation } from "react-i18next";

export default function RegionCard({ region, onSelect }) {
  const { t } = useTranslation();
  const regionPath = `wineList.regions.${region.id}`;

  return (
    <article className="group flex h-full max-w-[163.5px] flex-col items-center text-center">
      <div className="border-gold/60 h-[140px] w-[140px] rounded-full border p-1 transition-transform duration-500 group-hover:scale-120">
        <img
          className="h-full w-full rounded-full object-cover"
          src={region.image}
          alt={region.alt}
        />
      </div>

      <div className="mt-6 flex flex-1 flex-col items-center">
        <h3 className="font-heading text-cream min-h-[64px] text-3xl leading-none">
          {t(`${regionPath}.name`)}
        </h3>

        <p className="font-body text-gold/80 mt-0 min-h-[48px] max-w-[170px] text-center text-sm leading-6 lg:mt-3">
          {t(`${regionPath}.description`)}
        </p>

        <button
          type="button"
          onClick={() => onSelect(region)}
          className="font-body text-cream/80 hover:text-gold border-gold/40 mt-auto cursor-pointer border-b pt-5 pb-1 text-[11px] tracking-[0.22em] uppercase transition-colors duration-300"
        >
          {t("wineList.regions.more")}
        </button>
      </div>
    </article>
  );
}
