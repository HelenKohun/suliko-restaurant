import { useTranslation } from "react-i18next";

export default function LangSwitcher() {
  const { t, i18n } = useTranslation();

  const langs = ["pl", "en", "ru"];

  return (
    <div className="flex items-center gap-2">
      {langs.map((lang) => {
        const language = t(`aria-labels.langSwitcher.${lang}`);
        const isActive = i18n.language === lang;

        return (
          <button
            type="button"
            key={lang}
            aria-label={t("aria-labels.langSwitcher.switcher", {
              language: language,
            })}
            aria-pressed={isActive}
            onClick={() => i18n.changeLanguage(lang)}
            className={`font-body cursor-pointer text-[10px] tracking-widest uppercase transition-colors duration-200 ${isActive ? "text-gold" : "text-white/70 hover:text-white/70"}`}
          >
            {lang}
          </button>
        );
      })}
    </div>
  );
}
