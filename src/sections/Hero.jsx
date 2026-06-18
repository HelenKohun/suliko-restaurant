// import homeImage from "../assets/pexels-ensar-84745078-11817815.jpg";
import homeImage from "../assets/Resized/pexels-ensar-84745078-11817815.webp";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${homeImage})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contant */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-10 lg:px-9 lg:pb-12">
        {/* Eyebrow */}
        <div className="mb-5 flex items-center gap-3">
          <div className="bg-gold h-px w-7" />
          <span className="font-body text-gold text-[9px] tracking-[0.2em] uppercase">
            {t("hero.eyebrow")}
          </span>
        </div>

        {/* Header */}
        <h1 className="font-heading text-5xl leading-none font-light text-white md:text-6xl lg:text-7xl">
          {t("hero.title1")}
          <em className="text-gold block">{t("hero.title2")}</em>
          {t("hero.title3")}
          <span className="block">{t("hero.title4")}</span>
        </h1>

        {/* Bottom line */}
        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          {/* Buttons*/}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Link
              to="/booking"
              className="font-body border-gold/50 bg-gold hover:bg-gold/10 rounded-xs border px-6 py-3 text-[10px] tracking-widest text-white uppercase transition-colors duration-200"
            >
              {t("hero.cta")}
            </Link>
            <Link
              to="/menu"
              className="font-body text-[10px] tracking-widest text-white/80 uppercase transition-colors duration-200 hover:text-white/70"
            >
              {t("hero.scroll")}
            </Link>
          </div>

          {/* Statistic */}
          <div className="grid w-full grid-cols-3 gap-4 lg:flex lg:w-auto lg:items-center lg:gap-6">
            <div className="text-center lg:text-left">
              <div className="font-heading text-gold text-3xl font-light">
                2018
              </div>
              <div className="font-body mt-1 text-[8px] tracking-widest text-white/70 uppercase">
                {t("hero.stat1_lbl")}
              </div>
            </div>
            <div className="bg-gold/70 hidden h-10 w-px lg:block" />
            <div className="text-center lg:text-left">
              <div className="font-heading text-gold text-3xl font-light">
                80+
              </div>
              <div className="font-body mt-1 text-[8px] tracking-widest text-white/70 uppercase">
                {t("hero.stat2_lbl")}
              </div>
            </div>
            <div className="bg-gold/70 hidden h-10 w-px lg:block" />
            <div className="text-center lg:text-left">
              <div className="font-heading text-gold text-3xl font-light">
                4.8★
              </div>
              <div className="font-body mt-1 text-[8px] tracking-widest text-white/70 uppercase">
                {t("hero.stat3_lbl")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
