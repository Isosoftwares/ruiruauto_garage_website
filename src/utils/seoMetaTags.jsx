/**
 * SEO Meta Tags Configuration
 * Centralized location for all SEO metadata to ensure consistency across the site
 */

export const seoMetaTags = {
  home: {
    title: "Motion Zip Ltd - Dealership-Grade Diagnostics & Precision Car Repairs",
    description: "Motion Zip Ltd (formerly Ruiru Auto Garage) delivers advanced mechanics, ECU diagnostics, suspension repair, and gearbox servicing in Ruiru.",
    keywords: "car garage Ruiru, auto garage Thika Highway, vehicle maintenance Kenya, Motion Zip Ltd, diagnostic scanning Ruiru, mechanic near me",
    ogTitle: "Motion Zip Ltd - Dealership-Grade Diagnostics & Precision Car Repairs",
    ogDescription: "Dealer-grade diagnostics and precision car repairs at a fraction of dealership rates in Ruiru.",
    ogImage: "https://motionzipltd.com/hero.png",
    ogUrl: "https://motionzipltd.com/",
    canonicalUrl: "https://motionzipltd.com/",
    author: "Motion Zip Ltd",
  },

  features: {
    title: "Business Features | Motion Zip Ltd",
    description: "Explore Motion Zip Ltd features and client vehicle portal features.",
    keywords: "Motion Zip Ltd, client portal, vehicle log",
    ogTitle: "Powerful Features for Your Vehicle",
    ogDescription: "Real-time diagnostics and portal checkins.",
    ogUrl: "https://motionzipltd.com/features",
    canonicalUrl: "https://motionzipltd.com/features",
  },

  pricing: {
    title: "Pricing Plans | Motion Zip Ltd",
    description: "Affordable and transparent service pricing at Motion Zip Ltd.",
    keywords: "garage pricing Kenya, cheap car service Ruiru",
    ogTitle: "Simple, Transparent Pricing",
    ogDescription: "Dealer grade services at affordable rates.",
    ogUrl: "https://motionzipltd.com/pricing",
    canonicalUrl: "https://motionzipltd.com/pricing",
  },

  about: {
    title: "About Us | Motion Zip Ltd",
    description: "Learn about Motion Zip Ltd's mission, ethics, and our commitment to being your trusted local workshop in Ruiru.",
    keywords: "about Motion Zip Ltd, trusted mechanics Ruiru, local garage Ruiru",
    ogTitle: "About Us | Motion Zip Ltd",
    ogDescription: "Ruiru's trusted local auto repair workshop.",
    ogUrl: "https://motionzipltd.com/about",
    canonicalUrl: "https://motionzipltd.com/about",
  },

  useCases: {
    title: "Use Cases | Motion Zip Ltd",
    description: "How Motion Zip Ltd serves premium vehicle owners and fleet managers in Kenya.",
    keywords: "fleet maintenance Ruiru, premium car service Kenya",
    ogTitle: "Solutions for Your Vehicle",
    ogDescription: "Sleek diagnostics, routine tune-ups, and emergency towing.",
    ogUrl: "https://motionzipltd.com/use-cases",
    canonicalUrl: "https://motionzipltd.com/use-cases",
  },

  benefits: {
    title: "Benefits of Choosing Us | Motion Zip Ltd",
    description: "Increase vehicle lifespan, reduce maintenance costs, and get expert auto repair at Motion Zip Ltd.",
    keywords: "auto repair benefits, dealership grade scanner Ruiru",
    ogTitle: "Benefits | Motion Zip Ltd",
    ogDescription: "Why choose Motion Zip Ltd for your next service.",
    ogUrl: "https://motionzipltd.com/benefits",
    canonicalUrl: "https://motionzipltd.com/benefits",
  },

  contact: {
    title: "Contact Us | Motion Zip Ltd",
    description: "Get in touch with Motion Zip Ltd. Visit us on Mathigu Rd, Ruiru, call us on 0748 333 555, or email contact@motionzipltd.com.",
    keywords: "contact Motion Zip Ltd, call mechanic Ruiru, directions to garage Ruiru",
    ogTitle: "Contact Us | Motion Zip Ltd",
    ogDescription: "Get in touch with our booking office.",
    ogUrl: "https://motionzipltd.com/contact",
    canonicalUrl: "https://motionzipltd.com/contact",
  },
};

/**
 * Generate schema markup for SEO
 */
export const generateSchema = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Motion Zip Ltd",
    url: "https://motionzipltd.com",
    logo: "https://motionzipltd.com/garagelogo.jpeg",
    description: "Dealer-grade diagnostics and precision car repairs at a fraction of dealership rates in Ruiru.",
    sameAs: [
      "https://www.facebook.com/motionzipltd",
      "https://x.com/motionzipltd",
      "https://www.instagram.com/motionzipltd",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Booking Office",
      email: "contact@motionzipltd.com",
      url: "https://motionzipltd.com/contact",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mathigu Rd, Ruiru Town",
      addressCountry: "KE",
    },
  },

  softwareApplication: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Motion Zip Portal",
    operatingSystem: "Web",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KES",
      description: "Free client portal access",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "150",
    },
    description: "Client portal to track vehicle diagnostics, estimates, and invoices.",
    url: "https://motionzipltd.com",
  },

  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Motion Zip Ltd",
    url: "https://motionzipltd.com",
    telephone: "0748333555",
    email: "contact@motionzipltd.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mathigu Rd, Ruiru Town",
      addressCountry: "KE",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "17:00",
    },
  },

  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where is Motion Zip Ltd located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our service center is located along Mathigu Road, Ruiru Town. We also offer emergency towing and roadside assistance within Kiambu and Nairobi Counties.",
        },
      },
      {
        "@type": "Question",
        name: "What types of services do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide comprehensive services including routine maintenance, diagnostics, repairs, brake and engine work, oil changes, and more for all car brands.",
        },
      },
    ],
  },

  breadcrumb: (items) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }),
};

/**
 * Get meta tag object for React Helmet
 */
export const getMetaTags = (pageKey) => {
  const tags = seoMetaTags[pageKey] || seoMetaTags.home;
  return {
    title: tags.title,
    meta: [
      { name: "description", content: tags.description },
      { name: "keywords", content: tags.keywords },
      { name: "author", content: tags.author || "RyzonPlus" },
      { property: "og:title", content: tags.ogTitle },
      { property: "og:description", content: tags.ogDescription },
      { property: "og:image", content: tags.ogImage },
      { property: "og:url", content: tags.ogUrl },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: tags.ogTitle },
      { name: "twitter:description", content: tags.ogDescription },
      { name: "twitter:image", content: tags.ogImage },
    ],
    link: [
      { rel: "canonical", href: tags.canonicalUrl },
    ],
  };
};

/**
 * Industry-specific keywords for content optimization
 */
export const industryKeywords = {
  restaurant: {
    primary: "restaurant POS system Kenya",
    secondary: [
      "best POS for restaurants Kenya",
      "restaurant billing software Kenya",
      "hotel POS Kenya",
      "cafe management software Kenya",
      "restaurant inventory Kenya",
    ],
  },
  salon: {
    primary: "salon management software Kenya",
    secondary: [
      "beauty salon POS Kenya",
      "salon appointment booking Kenya",
      "spa management system Kenya",
      "salon inventory Kenya",
      "barbershop software Kenya",
    ],
  },
  retail: {
    primary: "retail POS system Kenya",
    secondary: [
      "supermarket POS Kenya",
      "retail inventory management Kenya",
      "shop management software Kenya",
      "retail accounting Kenya",
      "minimart software Kenya",
    ],
  },
  pharmacy: {
    primary: "pharmacy management software Kenya",
    secondary: [
      "pharmacy POS Kenya",
      "drug store inventory Kenya",
      "chemist software Kenya",
      "medical store management Kenya",
    ],
  },
  gym: {
    primary: "gym management software Kenya",
    secondary: [
      "fitness center software Kenya",
      "gym membership system Kenya",
      "gym billing Kenya",
    ],
  },
};

export default seoMetaTags;
