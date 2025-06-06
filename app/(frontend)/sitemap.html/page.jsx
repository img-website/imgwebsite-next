import React from "react";
import Link from "next/link";

async function getAllUrls() {
  // 🟡 Replace this with your actual DB or API fetch logic
  const staticUrls = [
    { url: "/", label: "Home" },
    { url: "/about", label: "About Us" },
    { url: "/contact", label: "Contact" },
    { url: "/services", label: "Our Services" },
  ];

  // // 🟡 Example: Simulated blog list from DB/API
  // const blogPosts = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`)
  //   .then(res => res.json())
  //   .then(res => res.data || []);

  // const blogUrls = blogPosts.map(post => ({
  //   url: `/blog/${post.slug}`,
  //   label: post.title || post.slug
  // }));

  // return [...staticUrls, ...blogUrls];
  return [...staticUrls];
}

export default async function SitemapPage() {
  const allUrls = await getAllUrls();

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">HTML Sitemap</h1>
      <ul className="space-y-2">
        {allUrls.map((item, index) => (
          <li key={index}>
            <Link href={item.url}>
              <span className="text-blue-600 underline hover:text-blue-800">
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
