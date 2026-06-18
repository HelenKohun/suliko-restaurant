import { useTranslation } from "react-i18next";

export default function LangSwitcher() {
  const { i18n } = useTranslation();

  const langs = ["pl", "en", "ru"];

  return (
    <div className="flex items-center gap-2">
      {langs.map((lang) => (
        <button
          type="button"
          key={lang}
          onClick={() => i18n.changeLanguage(lang)}
          className={`font-body cursor-pointer text-[10px] tracking-widest uppercase transition-colors duration-200 ${i18n.language === lang ? "text-gold" : "text-white/70 hover:text-white/70"}`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
