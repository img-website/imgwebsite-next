export default function schemaToLd(type, data) {
  if (!data) return null;
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
      image,
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
    return {
      "@context": "http://schema.org/",
      "@type": "Product",
      name,
      image,
      description,
      brand: {
        "@type": "Brand",
        name: brandName,
        url: brandUrl,
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
      url,
      mainEntityOfPage,
      areaServed,
      serviceType,
      sameAs,
    };
  }
  if (type === "BreadcrumbList") {
    const { items = [] } = data;
    return {
      ...base,
      itemListElement: items.map((it, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: it.name,
        item: it.item,
      })),
    };
  }
  return { ...base, ...data };
}
