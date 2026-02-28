# Bayou Innovation Hub — Louisiana A.I. Network

A Next.js website for the SE Louisiana AI community meetup group.

## Tech Stack
- Next.js 15.2.4
- TypeScript
- Resend (email)
- Deployed on Vercel

## Pages
- `/` — Homepage
- `/events` — Upcoming & past meetups
- `/blog` — Articles and recaps
- `/newsletter` — AI Reality Check newsletter
- `/sponsors` — Sponsorship packages
- `/contact` — Contact form

## Setup

### 1. Create a new GitHub repo and upload all files maintaining this folder structure:
```
app/
  api/contact/route.ts
  blog/page.tsx
  contact/page.tsx
  events/page.tsx
  newsletter/page.tsx
  sponsors/page.tsx
  components/
    Header.tsx
    Footer.tsx
  globals.css
  layout.tsx
  page.tsx
public/
  logo.png        ← upload your Bayou Innovation Hub logo here
.gitignore
next.config.js
package.json
tsconfig.json
```

### 2. Add your logo
Upload your `logo.png` file to the `public/` folder in the repo.

### 3. Deploy to Vercel
- Connect your GitHub repo to Vercel
- Add environment variable: `RESEND_API_KEY` = your Resend API key
- Deploy!

### 4. Update TikTok handle
In `Header.tsx` and `Footer.tsx`, replace `@yourhandle` with your real TikTok username.

### 5. Update Eventbrite links
In `app/events/page.tsx`, replace the `url: "#"` placeholders with real Eventbrite event URLs.
