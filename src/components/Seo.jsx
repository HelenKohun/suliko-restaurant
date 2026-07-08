import { Helmet } from "react-helmet-async";
import { getSeo } from "../utils/seo";
import { useTranslation } from "react-i18next";

export default function Seo({ page }) {
  const data = getSeo(page);
  const { t } = useTranslation();

  return (
    <Helmet>
      <title>{t(`seo.${page}.title`)}</title>

      <meta name="description" content={t(`seo.${page}.description`)} />

      <meta property="og:title" content={t(`seo.${page}.title`)} />
      <meta property="og:description" content={t(`seo.${page}.description`)} />
      <meta property="og:image" content={data.image} />
      <meta property="og:url" content={data.url} />

      <link rel="canonical" href={data.canonical} />

      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
