export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/admin',
      disallow:'',
    },
    sitemap: 'https://www.mgssuae.com/sitemap.xml',
  }
}