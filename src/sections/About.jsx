// import aboutImage1 from "../assets/pexels-valeriya-27305315.jpg";
import aboutImage1 from "../assets/Resized/pexels-valeriya-27305315.webp";

import SectionEyebrow from "../components/SectionEyebrow";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="bg-cream py-32 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-9">
        {/* Left */}
        <div className="flex flex-col justify-center">
          {/* Eyebrow */}
          <SectionEyebrow>{t("about.eyebrow")}</SectionEyebrow>

          <h2 className="font-heading text-text text-6xl leading-[0.95] font-light">
            {t("about.title1")}
            <span className="text-gold block">{t("about.title2")}</span>
            {t("about.title3")}
          </h2>

          <p className="font-body text-text-muted mt-8 max-w-lg text-base leading-7 lg:mt-10 lg:text-lg lg:leading-8">
            {t("about.text1")}
          </p>

          <p className="font-body text-text-muted mt-8 max-w-lg text-base leading-7 lg:mt-10 lg:text-lg lg:leading-8">
            {t("about.text2")}
          </p>
        </div>

        {/* Right*/}
        <div className="relative mx-auto w-fit lg:ml-auto">
          {/* Background card */}
          <div className="bg-card absolute top-4 left-4 h-full w-full rounded lg:top-6 lg:left-6" />

          {/* Main image */}
          <img
            src={aboutImage1}
            alt="Restaurant interior"
            className="h-{500px} relative z-10 w-[350px] rounded object-cover lg:h-178 lg:w-124"
          />
        </div>
      </div>
    </section>
  );
}
