export default function sitemap() {
  return [
    {
      url: 'https://superbeam.es',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://superbeam.es/headless-prestashop',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
