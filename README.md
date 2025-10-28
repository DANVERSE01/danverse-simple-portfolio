# Danverse Portfolio – AI-Driven Cinematic Ad Director

A modern, high-performance portfolio website built with **Next.js 14**, **React 18**, and static export. Features a clean, luminous design with aurora background animations, comprehensive SEO, and accessibility optimizations.

## Features

- **Static Export**: Optimized for fast deployment and hosting
- **Aurora Background**: Smooth, GPU-friendly gradient animations
- **Responsive Design**: Mobile-first, works on all devices
- **SEO Ready**: Structured data, metadata, sitemap generation
- **Accessibility**: WCAG 2.1 compliant with ARIA tags and focus management
- **Performance**: Optimized CSS, minimal JavaScript, lazy loading
- **Dark Mode Ready**: CSS variables for easy theme switching

## Quick Start

### Prerequisites
- Node.js 18+ and npm/pnpm

### Installation
```bash
# Clone the repository
git clone <YOUR_GITHUB_REPO_URL>
cd danverse-portfolio

# Install dependencies
npm install
# or
pnpm install
```

### Development
```bash
# Start the development server
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### Build & Export
```bash
# Build and generate static files
npm run build
# or
pnpm build
```

The static files will be generated in the `out/` directory.

## Project Structure

```
danverse-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and animations
├── data/
│   └── site.json           # Content configuration
├── public/
│   ├── robots.txt          # SEO robots file
│   └── site.webmanifest    # PWA manifest
├── scripts/
│   └── postexport.mjs      # Sitemap generation
├── netlify.toml            # Netlify deployment config
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Content Management

All content is managed in `data/site.json`. The structure includes:

- **Profile**: Headline, tagline, bio, and CTA
- **Stats**: Projects completed, satisfaction rating, countries served
- **Sections**: Portfolio, services, case studies, testimonials, process, FAQs, policies, contact

### Section Types

- `portfolio`: Portfolio grid with project cards
- `service`: Service offering with deliverables and pricing
- `cases`: Case studies with context and results
- `testimonials`: Client testimonials with ratings
- `process`: Step-by-step workflow
- `faq`: Frequently asked questions
- `policies`: Business policies
- `contact`: Contact channels

## Deployment

### Netlify (Recommended)

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio scaffold"
   git branch -M main
   git remote add origin <YOUR_GITHUB_REPO_URL>
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `out`

3. **Configure Custom Domain**
   - Add custom domain `www.danverse.ai`
   - Set up DNS records (CNAME for www, ALIAS/ANAME for apex)
   - Enable HTTPS (automatic with Netlify)

4. **Add 301 Redirect**
   - Redirect `danverse.ai` → `www.danverse.ai` (configured in netlify.toml)

## Performance Optimization

- **LCP Target**: 2500ms
- **CLS Target**: 0.1
- **TTFB Target**: 800ms

The site includes:
- Static asset caching (1 year immutable)
- Gzip/Brotli compression
- Optimized CSS and minimal JavaScript
- Aurora background uses GPU acceleration

## Accessibility

- WCAG 2.1 Level AA compliant
- Keyboard navigation support
- Focus visible indicators
- Reduced motion preferences respected
- ARIA labels and semantic HTML

## SEO

- Structured data (Schema.org)
- Open Graph tags
- Twitter Card support
- Sitemap generation
- Robots.txt configuration
- Meta descriptions and keywords

## Customization

### Update Content
Edit `data/site.json` to update:
- Profile information
- Service offerings and pricing
- Testimonials and case studies
- Contact channels

### Update Styling
Modify `app/globals.css` to customize:
- Color palette (CSS variables)
- Typography
- Spacing and layout
- Animations

### Update Metadata
Edit `app/layout.tsx` to update:
- Page title and description
- Open Graph images
- Twitter Card settings
- Schema.org structured data

## Troubleshooting

### Build fails with "next export"
Ensure all dynamic routes are pre-rendered or use `generateStaticParams()`.

### Images not loading
Check that image paths are correct and start with `/public/`.

### Styles not applying
Clear `.next/` and `out/` directories, then rebuild:
```bash
rm -rf .next out
npm run build
```

## Notes

- **Placeholder Content**: Some statistics and credentials are marked as pending verification. Replace with real data and verification links.
- **Media Assets**: Portfolio images and videos should be added to `public/images/` and `public/videos/` directories.
- **Contact Form**: Currently links to the contact section. Integrate with a backend service for form submissions.

## License

© 2025 Danverse. All rights reserved.

## Support

For questions or issues, reach out via:
- Instagram: [@muhammedd_adel](https://www.instagram.com/muhammedd_adel)
- Email: [mohamed.adel1160@icloud.com](mailto:mohamed.adel1160@icloud.com)
- WhatsApp: [+201207346648](https://wa.me/201207346648)
