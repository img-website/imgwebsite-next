export default function schemaToLd(type, data, pagePath = '') {
  if (!data) return null;
  const toUrl = (v) =>
    v && !v.startsWith('http')
      ? `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/${v}`
      : v;
  const base = {
    "@context": "https://schema.org",
    "@type": type === "LocalBusiness2" ? "LocalBusiness" : type,
  };
  if (type === "Organization") {
    const {
      streetAddress,
      addressLocality,
      addressRegion,
      postalCode,
      addressCountry,
      contactEmail,
      contactPhone,
      founders = [],
      ...rest
    } = data;
    const org = {
      ...base,
      ...rest,
      address: {
        "@type": "PostalAddress",
        streetAddress,
        addressLocality,
        addressRegion,
        postalCode,
        addressCountry,
      },
      founders: founders.map((name) => ({ "@type": "Person", name })),
    };
    if (org.logo) org.logo = toUrl(org.logo);
    if (contactEmail || contactPhone) {
      org.contactPoint = {
        "@type": "ContactPoint",
        ...(contactPhone ? { telephone: contactPhone } : {}),
        ...(contactEmail ? { email: contactEmail } : {}),
      };
    }
    return org;
  }
  if (type === "LocalBusiness" || type === "LocalBusiness2") {
    const {
      businessName,
      image,
      phoneNumber,
      priceRange,
      streetAddress,
      addressLocality,
      addressRegion,
      postalCode,
      addressCountry,
    } = data;
    return {
      ...base,
      name: businessName,
      image: toUrl(image),
      telephone: phoneNumber,
      priceRange,
      "@id": `${process.env.NEXT_PUBLIC_BASE_URL}#localbusiness`,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      address: {
        "@type": "PostalAddress",
        streetAddress,
        addressLocality,
        addressRegion,
        postalCode,
        addressCountry,
      },
    };
  }
  if (type === "Product") {
    const {
      name,
      image,
      description,
      brandName,
      brandUrl,
      ratingValue,
      ratingCount,
    } = data;
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}${pagePath}`;
    return {
      "@context": "http://schema.org/",
      "@type": "Product",
      name,
      image: toUrl(image),
      description,
      brand: {
        "@type": "Brand",
        name: brandName,
        url: brandUrl || url,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue,
        ratingCount,
      },
    };
  }
  if (type === "Service") {
    const {
      name,
      providerName,
      providerUrl,
      description,
      url,
      mainEntityOfPage,
      areaServed,
      serviceType = [],
      sameAs = [],
    } = data;
    const finalUrl = url || `${process.env.NEXT_PUBLIC_BASE_URL}${pagePath}`;
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      name,
      provider: {
        "@type": "Organization",
        name: providerName,
        url: providerUrl,
      },
      description,
      url: finalUrl,
      mainEntityOfPage: mainEntityOfPage || finalUrl,
      areaServed,
      serviceType,
      sameAs,
    };
  }
  if (type === "WebPage") {
    const {
      pageTitle,
      pageDescription,
      datePublished,
      dateModified,
    } = data;
    const pageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${pagePath}`;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const siteName = "IMGGlobalInfotech";
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${baseUrl}/#organization`,
          url: baseUrl,
          name: siteName,
          sameAs: [],
        },
        {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
          url: baseUrl,
          name: siteName,
          publisher: { "@id": `${baseUrl}/#organization` },
        },
        {
          "@type": "WebPage",
          "@id": `${pageUrl}#webpage`,
          url: pageUrl,
          inLanguage: "en-US",
          name: pageTitle,
          isPartOf: { "@id": `${baseUrl}/#website` },
          datePublished,
          dateModified,
          description: pageDescription,
        },
      ],
    };
  }
  if (type === "BreadcrumbList") {
    const { items = [] } = data;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    return {
      ...base,
      itemListElement: items.map((it, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: it.name,
        item: it.item.startsWith("http") ? it.item : `${baseUrl}${it.item}`,
      })),
    };
  }
  return { ...base, ...data };
}
