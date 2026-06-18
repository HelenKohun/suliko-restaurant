import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import wineImage from "../assets/Resized/Wine/pexels-liv-kao-2149337698-30557559.webp";
import SectionEyebrow from "../components/SectionEyebrow";

export default function WineExperience() {
  const { t } = useTranslation();

  return (
    <section
      className="relative min-h-200 bg-cover bg-center"
      style={{ backgroundImage: `url(${wineImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

      {/* Contant wrapper*/}
      <div className="relative z-10 mx-auto flex min-h-200 max-w-7xl flex-col items-start justify-center px-6 lg:px-9">
        <SectionEyebrow>{t("wine.eyebrow")}</SectionEyebrow>

        <h2 className="font-heading mb-4 text-4xl leading-tight font-light text-white lg:text-6xl">
          {t("wine.title1")}
          <em className="text-gold block">{t("wine.title2")}</em>
          {t("wine.title3")}
        </h2>

        <p className="font-body mb-6 max-w-70 text-[13px] leading-relaxed text-white/70">
          {t("wine.text")}
        </p>

        <Link
          to="/wine"
          className="font-body border-gold/70 text-gold hover:bg-gold/10 rounded border px-6 py-3 text-[11px] tracking-widest uppercase transition-colors duration-200"
        >
          {t("wine.button")}
        </Link>
      </div>
    </section>
  );
}
