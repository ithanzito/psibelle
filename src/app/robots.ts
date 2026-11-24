import { MetadataRoute } from "next";
import { PSI_PROFILE } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin"],
    },
    sitemap: `${PSI_PROFILE.siteUrl}/sitemap.xml`,
  };
}
