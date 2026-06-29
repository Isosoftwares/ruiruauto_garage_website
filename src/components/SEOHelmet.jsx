import { Helmet } from "react-helmet-async";
import { getMetaTags, generateSchema } from "../utils/seoMetaTags";

/**
 * SEO Helmet Component
 * Reusable component to set meta tags, title, and schema markup for all pages
 */
export function SEOHelmet({ pageKey = "home", includeSchemas = ["organization", "softwareApplication"] }) {
  const metaTags = getMetaTags(pageKey);

  return (
    <Helmet>
      <title>{metaTags.title}</title>
      {metaTags.meta.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
      {metaTags.link.map((link, index) => (
        <link key={index} {...link} />
      ))}

      {/* Schema Markup Scripts */}
      {includeSchemas.includes("organization") && (
        <script type="application/ld+json">
          {JSON.stringify(generateSchema.organization)}
        </script>
      )}
      {includeSchemas.includes("softwareApplication") && (
        <script type="application/ld+json">
          {JSON.stringify(generateSchema.softwareApplication)}
        </script>
      )}
      {includeSchemas.includes("faq") && (
        <script type="application/ld+json">
          {JSON.stringify(generateSchema.faq)}
        </script>
      )}
      {includeSchemas.includes("localBusiness") && (
        <script type="application/ld+json">
          {JSON.stringify(generateSchema.localBusiness)}
        </script>
      )}
    </Helmet>
  );
}

export default SEOHelmet;
