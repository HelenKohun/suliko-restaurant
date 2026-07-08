import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Seo from "../components/Seo";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <Seo page="notFound" />
      <section className="bg-cream text-text flex min-h-screen items-center justify-center px-6">
        <div className="max-w-xl text-center">
          <p className="font-heading text-wine/20 text-[160px] leading-none">
            404
          </p>

          <h1 className="font-heading mt-6 text-5xl font-light sm:text-6xl">
            {t("notFound.title")}
          </h1>

          <p className="font-body text-text-muted mx-auto mt-6 max-w-md text-sm leading-7">
            {t("notFound.description")}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="bg-wine text-cream font-body hover:bg-wine-light focus-visible:ring-gold focus-visible:ring-offset-cream inline-flex items-center justify-center rounded px-8 py-4 text-[12px] tracking-widest uppercase transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              {t("notFound.home")}
            </Link>

            <Link
              to="/menu"
              className="border-wine/30 text-wine font-body hover:bg-wine hover:text-cream focus-visible:ring-gold focus-visible:ring-offset-cream inline-flex items-center justify-center rounded border px-8 py-4 text-[12px] tracking-widest uppercase transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              {t("notFound.menu")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
