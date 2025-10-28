import fs from 'node:fs';

const domain = 'https://www.danverse.ai';
const pages = ['/', '/#contact', '/#portfolio_grid', '/#service_cinematic_ads', '/#service_brand_identity_motion', '/#service_mvp_experience', '/#service_content_engine', '/#service_brand_copilot', '/#case_studies', '/#testimonials', '/#process', '/#faqs', '/#policies'];

const urlset = pages
  .map(
    (u) =>
      `  <url><loc>${domain}${u === '/' ? '' : u}</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>weekly</changefreq><priority>${u === '/' ? '1.0' : '0.8'}</priority></url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>`;

fs.writeFileSync('out/sitemap.xml', xml);
console.log('✓ sitemap.xml generated');
