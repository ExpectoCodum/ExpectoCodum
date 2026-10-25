# Expecto Codum portfolio

Static, multilingual portfolio site built with Astro. It is available in Spanish, English, and Russian, with project case-study pages in each language. The contact form opens the visitor's email app; the site does not require a backend or database.

The production URL is `https://expecto-codum.vercel.app`. Astro generates an XML sitemap at `/sitemap-index.xml`, and `/robots.txt` points crawlers to it.

## Requirements

- Node.js 22.23.4 or newer
- npm

## Run locally

```sh
npm install
npm run dev
```

Astro prints the local development URL in the terminal, usually `http://localhost:4321`.

## Build and preview

```sh
npm run build
npm run preview
```

The static production site is generated in `dist/`. Deploy that directory to a static host such as GitHub Pages, Cloudflare Pages, or Netlify.

After deployment, submit `https://expecto-codum.vercel.app/sitemap-index.xml` in Google Search Console under **Sitemaps**. The verification file is available at `/google9288bd12e754c232.html`.

## Routes

- Spanish: `/`, `/soluciones/`, `/proyectos/`, `/acerca-de/`, `/contacto/`
- English: `/en/`, `/en/solutions/`, `/en/projects/`, `/en/about/`, `/en/contact/`
- Russian: `/ru/`, `/ru/solutions/`, `/ru/projects/`, `/ru/about/`, `/ru/contact/`
- Project case studies are nested below each language's projects route.

Contact details and links are configured in `src/config.ts`. The static contact form uses a `mailto:` link and relies on the visitor having an email application configured.
