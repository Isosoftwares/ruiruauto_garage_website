/**
 * SEO Meta Tags Configuration
 * Centralized location for all SEO metadata to ensure consistency across the site
 */

export const seoMetaTags = {
  home: {
    title: "RyzonPlus - Business Management Software Kenya | POS System, Inventory & Appointments",
    description: "All-in-one business management software for Kenya. POS system, inventory management, appointment booking, and more. Starting at KSH 500/month. KRA compliant. Try free today!",
    keywords: "POS system Kenya, business management software Kenya, inventory management Kenya, appointment booking, cloud POS Kenya, best POS system Kenya, small business software",
    ogTitle: "RyzonPlus - Manage Your Business Better",
    ogDescription: "All-in-one business management software for Kenya. POS system, inventory management, and appointment booking. KRA compliant, M-Pesa ready.",
    ogImage: "https://RyzonPlus.com/og-home.jpg",
    ogUrl: "https://RyzonPlus.com/",
    canonicalUrl: "https://RyzonPlus.com/",
    author: "RyzonPlus",
  },

  features: {
    title: "Business Features - POS, Inventory, Appointments | RyzonPlus Kenya",
    description: "Explore RyzonPlus features: Cloud POS system, inventory management, appointment scheduling, multi-location support, KRA compliance, M-Pesa integration, and more for Kenya businesses.",
    keywords: "POS features Kenya, inventory management features, appointment booking system, business features, cloud business software, multi-location management Kenya",
    ogTitle: "Powerful Features for Your Business",
    ogDescription: "Cloud POS, inventory management, appointment scheduling, and more. All in one platform.",
    ogUrl: "https://RyzonPlus.com/features",
    canonicalUrl: "https://RyzonPlus.com/features",
  },

  pricing: {
    title: "Affordable Pricing Plans - POS Software Kenya | RyzonPlus",
    description: "RyzonPlus pricing: Starter KSH 500/month, Professional KSH 1,500/month, Enterprise custom. No hidden fees. KRA compliant. Perfect for salons, retail, restaurants in Kenya.",
    keywords: "POS system pricing Kenya, business software cost Kenya, affordable POS Kenya, pricing plans, subscription plans Kenya, cheap POS system",
    ogTitle: "Simple, Transparent Pricing",
    ogDescription: "Starter from KSH 500/month. No setup fees. No contracts. Try free.",
    ogUrl: "https://RyzonPlus.com/pricing",
    canonicalUrl: "https://RyzonPlus.com/pricing",
  },

  about: {
    title: "About RyzonPlus - Business Software Company Kenya",
    description: "RyzonPlus is Kenya's leading business management software provider. We help small and medium enterprises manage operations efficiently. Learn our mission and story.",
    keywords: "about RyzonPlus, business software company Kenya, RyzonPlus team, company mission, business management Kenya",
    ogTitle: "About RyzonPlus",
    ogDescription: "Kenya's trusted business management software provider.",
    ogUrl: "https://RyzonPlus.com/about",
    canonicalUrl: "https://RyzonPlus.com/about",
  },

  useCases: {
    title: "Use Cases - Restaurant, Salon, Retail POS Kenya | RyzonPlus",
    description: "See how RyzonPlus works for restaurants, salons, retail shops, pharmacies, hotels, and more. Industry-specific solutions for Kenya businesses.",
    keywords: "restaurant POS Kenya, salon management software Kenya, retail POS system, pharmacy software Kenya, use cases, industry solutions",
    ogTitle: "Solutions for Your Industry",
    ogDescription: "Restaurant, salon, retail, pharmacy, hotel, and more.",
    ogUrl: "https://RyzonPlus.com/use-cases",
    canonicalUrl: "https://RyzonPlus.com/use-cases",
  },

  benefits: {
    title: "Benefits of RyzonPlus - Business Management Software Kenya",
    description: "Increase efficiency, reduce costs, grow faster. RyzonPlus benefits include automation, real-time reporting, M-Pesa integration, KRA compliance, and 24/7 support.",
    keywords: "business benefits, efficiency improvement, cost reduction, real-time reporting, M-Pesa integration, KRA compliance Kenya",
    ogTitle: "Benefits of RyzonPlus",
    ogDescription: "Increase efficiency, reduce costs, and grow your business.",
    ogUrl: "https://RyzonPlus.com/benefits",
    canonicalUrl: "https://RyzonPlus.com/benefits",
  },

  contact: {
    title: "Contact RyzonPlus - Get Support | Business Software Kenya",
    description: "Get in touch with RyzonPlus support team. We're here to help with questions about POS systems, pricing, and business software for Kenya.",
    keywords: "contact RyzonPlus, customer support Kenya, contact business software, help with POS system",
    ogTitle: "Contact Us",
    ogDescription: "Get in touch with our support team.",
    ogUrl: "https://RyzonPlus.com/contact",
    canonicalUrl: "https://RyzonPlus.com/contact",
  },
};

/**
 * Generate schema markup for SEO
 */
export const generateSchema = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RyzonPlus",
    url: "https://RyzonPlus.com",
    logo: "https://RyzonPlus.com/logo.png",
    description: "All-in-one business management software for Kenya with POS, inventory, and appointment features",
    sameAs: [
      "https://www.facebook.com/RyzonPlus",
      "https://www.twitter.com/RyzonPlus",
      "https://www.linkedin.com/company/RyzonPlus",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "support@RyzonPlus.com",
      url: "https://RyzonPlus.com/contact",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nairobi",
      addressCountry: "KE",
    },
  },

  softwareApplication: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "RyzonPlus",
    operatingSystem: "Web, iOS, Android",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "500",
      priceCurrency: "KES",
      description: "Starting price from KSH 500/month",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "500",
    },
    description: "All-in-one business management software with POS, inventory, and appointments",
    url: "https://RyzonPlus.com",
  },

  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "RyzonPlus",
    url: "https://RyzonPlus.com",
    telephone: "+254712345678",
    email: "support@RyzonPlus.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nairobi",
      addressCountry: "KE",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  },

  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is RyzonPlus?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RyzonPlus is an all-in-one business management software for Kenya businesses. It includes POS system, inventory management, appointment booking, and more.",
        },
      },
      {
        "@type": "Question",
        name: "How much does RyzonPlus cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RyzonPlus pricing starts from KSH 500/month for Starter plan, KSH 1,500/month for Professional, and custom pricing for Enterprise.",
        },
      },
      {
        "@type": "Question",
        name: "Is RyzonPlus KRA compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, RyzonPlus is fully KRA compliant and supports eTIMS integration for tax compliance in Kenya.",
        },
      },
      {
        "@type": "Question",
        name: "Does RyzonPlus support M-Pesa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, RyzonPlus supports M-Pesa integration for easy mobile payments and collections.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use RyzonPlus for multiple locations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, RyzonPlus supports multi-location management. The Professional plan includes up to 3 locations.",
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
