# V.A.U.L.T. Security Hub — Portfolio Website

A responsive, accessible, dark corporate-style **static website** for VAULT Security Hub. No paid themes, server, frameworks, or third-party CSS/JS dependencies.

## What's included

- `index.html` — complete landing/portfolio page
- `styles.css` — responsive design and effects
- `script.js` — mobile navigation, scroll reveals, contact form handling
- `config.js` — public email, phone, WhatsApp, LinkedIn, GitHub, hours, and optional Upwork URL
- `assets/vault-round-logo.webp` — optimized version of your existing round VAULT logo
- `assets/vault-logo-small.webp` — optimized version for navigation
- `assets/favicon.svg` — browser tab icon

## Critical checklist before making the site public

1. **Contact details are populated** in `config.js` from the provided business information. Check email, telephone, WhatsApp, business hours, and location before publishing. The contact form does **not** send to a backend. It opens an email draft using `mailto:`; visitors must press Send in their own mail application.
2. **Verify the supplied company LinkedIn URL** (`https://www.linkedin.com/in/demo/`) — it resembles a personal demo/placeholder, not a company page. Replace it with the real organization page when available. The GitHub organization URL is included as provided; confirm it resolves to your intended page. The Upwork agency URL is still unset and hidden.
3. **Add founder headshots.** Copy four genuine headshots to `assets/team/` with these exact names: `sandeep.jpeg`, `samarjit.jpeg`, `sunny.jpeg`, `priyabrata.jpeg`. Until added, clean initials appear instead. All three supplied founder LinkedIn URLs are already in the team cards. No LinkedIn URL was provided for Priyabrata, so none was invented.
4. Check that `V.A.U.L.T. Security Hub` is a brand name you can legitimately use. Do not claim company incorporation or credentials you do not have.
5. Update the founders' titles if your actual responsibilities change.
6. The three **demonstration briefs** in Portfolio are examples, **not completed projects or customer testimonials**. Replace with sanitized, client-approved case studies or actual lab writeups when you have them.
7. Review privacy, legal terms and business identity before collecting personal information. This template intentionally does not collect form submissions on a server.
8. Make sure the uploaded logo and any other third-party assets are rights-cleared for your intended use.

## Preview locally

Open `index.html` in a browser. For more faithful testing, you can run a simple local server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish for free

You can deploy the **unzipped folder contents** to a static hosting provider such as **Netlify Drop** or **Cloudflare Pages**, subject to each provider's current limits and terms.

**Simple drag-and-drop workflow**

1. Unzip `VAULT_Security_Hub_Website.zip`.
2. Verify the provided values in `config.js`. Add founder JPEGs to `assets/team/` when available.
3. Visit your chosen static hosting service and sign in.
4. Create/deploy a static site and upload the folder's contents (ensure `index.html` is at the site root).
5. Test mobile navigation, page links, and the enquiry form.
6. Share the generated hosting URL. A custom domain is optional and normally costs extra.

## Recommended refinements after launch

- Replace example portfolio scopes with verified demo reports you personally produced or actual client-approved case studies.
- Add a domain-based email when ready.
- Consider a privacy notice, business registration details, and a server-backed secure contact workflow once established.
- Use verified qualifications and real client testimonials only after obtaining permission.

## Accessibility and security notes

- Responsive layouts, visible keyboard focus, accessible labels, reduced-motion support, and no external tracking scripts.
- No confidential client data should be pasted into an unsecured form or uploaded to third-party tools without authorization.
- Every penetration-test engagement should have explicit written asset-owner authorization and defined rules of engagement.

## November 2026 contact and team update

- Business contact: `vaultsecurityhub@gmail.com`; phone and WhatsApp: `+91 8240667301`.
- Base: Kolkata, West Bengal, India. Business hours: Monday–Friday, 10 AM–7 PM IST.
- Four founder profiles now show full names and **the exact designations supplied**, including both CTO titles.
- LinkedIn profile buttons are present for Sandeep, Samarjit, and Sunny; no invented URL for Priyabrata.
- Founder photographs were *not provided as actual JPEG bytes*; the website uses initials until `assets/team/` contains the four JPEG files.
- The GitHub organization was not found among repositories accessible to the connected GitHub account; therefore this ZIP is **not a GitHub deployment**.
- The company LinkedIn link looks like a demo URL. Confirm and update before making the site public.

Official V.A.U.L.T. Security Hub website
