import { Link } from "react-router-dom";
import { navigationLinks } from "../../data/navigationLinks";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-dark-wine">
      <div className="mx-auto max-w-7xl">
        {/* Top section */}
        <div className="mx-auto grid max-w-7xl gap-10 border-b border-white/[0.07] px-6 py-12 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:px-9">
          {/* About */}
          <div>
            <div className="font-heading mb-4 text-2xl font-light tracking-[0.2em] text-white">
              S U L I K O
            </div>
            <p className="font-body mb-4 text-[12px] leading-relaxed text-white/60">
              {t("footer.text")}
            </p>
            <div className="font-body text-gold/80 text-[11px] leading-relaxed">
              {t("footer.address1")}
              <br />
              {t("footer.address2")}
              <br />
              {t("footer.address3")}
            </div>
          </div>

          {/* Pages */}
          <div>
            <div className="font-body text-gold/80 mb-4 text-[10px] tracking-widest uppercase">
              {t("footer.pages")}
            </div>
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-body mb-3 block text-[11px] text-white/60 transition-colors duration-200 hover:text-white/90"
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </div>

          {/* Work time */}
          <div>
            <div className="font-body text-gold/80 mb-4 text-[10px] tracking-widest uppercase">
              {t("footer.time")}
            </div>
            <div className="font-body mb-1 text-[11px] text-white/60">
              {t("footer.time1")}
            </div>
            <div className="font-body text-gold/80 mb-4 text-[10px]">
              {t("footer.time2")}
            </div>
            <div className="font-body mb-1 text-[11px] text-white/60">
              {t("footer.time3")}
            </div>
            <div className="font-body text-gold/80 text-[10px]">
              {t("footer.time4")}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="font-body text-gold/80 mb-4 text-[10px] tracking-widest uppercase">
              {t("footer.contact")}
            </div>
            {/* Links without to="" */}
            {["Instagram", "Facebook"].map((item) => (
              <Link
                key={item}
                className="font-body mb-3 block cursor-pointer text-[11px] text-white/60 transition-colors duration-200 hover:text-white/90"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex items-center justify-center px-12 py-6">
          <span className="font-body text-[10px] text-white/35">
            {t("footer.bottom")}
          </span>
        </div>
      </div>
    </footer>
  );
}
