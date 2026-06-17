import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

// Wine bottles
import winePhoto1 from "../assets/Wine/pexels-alex-dos-santos-305643819-34247930-removebg-preview.png";
import winePhoto2 from "../assets/Wine/pexels-szymon-shields-1503561-27905366-removebg-preview.png";
import winePhoto3 from "../assets/Wine/pexels-tonyflood-4710897-removebg-preview.png";
import winePhoto4 from "../assets/Wine/pexels-alex-dos-santos-305643819-34247927-removebg-preview.png";
import winePhoto5 from "../assets/Wine/pexels-alex-dos-santos-305643819-34247922-removebg-preview.png";
import winePhoto6 from "../assets/Wine/pexels-alex-dos-santos-305643819-34247940-removebg-preview.png";
import winePhoto7 from "../assets/Wine/pexels-alex-dos-santos-305643819-34247954-removebg-preview.png";
import winePhoto8 from "../assets/Wine/pexels-alex-dos-santos-305643819-34247934-removebg-preview.png";

export default function WineCard({ wine, onClick }) {
  const { t } = useTranslation();

  const photo = [
    winePhoto1,
    winePhoto2,
    winePhoto3,
    winePhoto4,
    winePhoto5,
    winePhoto6,
    winePhoto7,
    winePhoto8,
  ];

  const photoIndex = (wine.id - 1) % photo.length;

  const wineBottle = photo[photoIndex];

  return (
    <article className="group bg-cream/5 border-gold/25 hover:border-gold/60 relative min-h-[220px] overflow-visible rounded border transition-colors duration-300">
      {/* Tooltip */}
      <div className="border-gold/30 bg-cream pointer-events-none absolute top-0 left-1/2 z-30 w-[260px] -translate-x-1/2 -translate-y-full rounded border px-4 py-3 text-center opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-[-110%] group-hover:opacity-100">
        <p className="font-body text-text-muted text-xs leading-5">
          {t(`wineList.wines.${wine.id}.description`)}
        </p>
      </div>
      <div className="grid h-full grid-cols-[96px_1fr] sm:grid-cols-[110px_1fr]">
        {/* Wine photo */}
        <div
          className="bg-cream/5 min-w-[70px] bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${wineBottle})` }}
        ></div>

        {/* Wine content */}
        <div className="flex min-w-0 flex-col p-4 sm:p-5">
          <div>
            <p className="font-body text-gold text-[10px] tracking-[0.25em] uppercase sm:text-[11px]">
              {t(`wineList.typeData.${wine.type}`)}
            </p>

            <h3 className="font-heading text-cream mt-4 text-2xl leading-none">
              {wine.name}
            </h3>

            <div className="mt-5 flex flex-col items-start gap-2">
              <span className="border-gold/30 text-cream/75 font-body rounded-full border px-3 py-1 text-[10px] tracking-widest uppercase">
                {t(`wineList.regions.${wine.region}.name`)}
              </span>
              <span className="border-gold/30 text-cream/75 font-body rounded-full border px-3 py-1 text-[10px] tracking-widest uppercase">
                {wine.winery}
              </span>

              <span className="border-gold/30 text-cream/75 font-body rounded-full border px-3 py-1 text-[10px] tracking-widest uppercase">
                {wine.year}
              </span>

              <span className="border-gold/30 text-cream/75 font-body rounded-full border px-3 py-1 text-[10px] tracking-widest uppercase">
                {t(`wineList.styleData.${wine.style}`)}
              </span>
            </div>
          </div>

          <div className="lg:border-gold/20 mt-auto flex items-center justify-between border-0 pt-4 lg:border-t">
            <p className="font-heading text-gold text-2xl">{wine.price} zł</p>

            <button
              type="button"
              onClick={() =>
                onClick({
                  ...wine,
                  id: `wine-${wine.id}`,
                  itemType: "wine",
                  wineId: wine.id,
                })
              }
              className="border-gold/50 text-cream hover:bg-gold hover:text-wine flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border text-xl leading-none transition-colors duration-300"
              aria-label={`Dodaj ${wine.name}`}
            >
              <Plus size={20} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
