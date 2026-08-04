# X Multiply Private Limited — Website

Static site (plain HTML/CSS/JS, no build step) for X Multiply Private Limited, a Singapore-registered F&B management consultancy.

## Structure

- `index.html`, `services.html`, `about.html`, `contact.html`
- `css/style.css` — all styling
- `js/main.js` — mobile nav toggle + contact form mailto handler
- `assets/` — logo, favicon, and social preview images

## Before going live — please update

- **Contact email**: currently a placeholder, `hello@xmultiply.sg`. Update in `contact.html` and `js/main.js` once a domain/email is set up.
- **Domain**: update `og:image`/canonical URLs once a custom domain is attached.
- **Phone number / social links**: not included yet — add if desired.
- **Legal/company details** (UEN 202622174G, registered address) were pulled directly from the ACRA business profile. Verify these are current before publishing.

## Local preview

Open `index.html` directly, or serve locally:

```
npx serve .
```

## Deployment

Static site — deploys to Vercel with zero configuration (framework preset: Other).
