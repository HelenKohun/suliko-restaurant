import { SITE_URL } from "../config/env";
import { seoData } from "../constants/seoData";

export function getSeo(page) {
  const data = seoData[page];

  if (!data) return seoData.home
  return {
    ...data,
    url: `${SITE_URL}${data.path}`,
    canonical: `${SITE_URL}${data.path}`,
    image: `${SITE_URL}${data.image}`
  }
}