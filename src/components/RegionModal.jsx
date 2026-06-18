import { useTranslation } from "react-i18next";

export default function RegionModal({ region, onClose }) {
  const { t } = useTranslation();
  const regionPath = `wineList.regions.${region.id}`;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6"
      onClick={onClose}
    >
      <div
        className="bg-cream text-text max-w-md rounded p-8"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <h3 className="font-heading text-wine text-4xl">
          {t(`${regionPath}.name`)}
        </h3>

        <p className="font-body text-text-muted mt-4 leading-7">
          {t(`${regionPath}.details`)}
        </p>

        <button
          type="button"
          onClick={onClose}
          className="text-wine hover:text-gold hover:border-gold border-wine mt-8 cursor-pointer border-b text-xs tracking-widest uppercase"
        >
          {t("wineList.regions.close")}
        </button>
      </div>
    </div>
  );
}
