
# VyomGarud Landing Page

A modern, responsive landing page for **VyomGarud** – a UAV / drone systems company with a military-grade, professional identity. Built with **Next.js**, **Tailwind CSS 4**, and **Framer Motion**. This project was created as part of a Web Developer Intern assessment.

## Table of Contents
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies](#technologies)
- [Colors & Fonts](#colors--fonts)
- [Best Practices](#best-practices)
- [Learn More](#learn-more)
- [Deploy on Vercel](#deploy-on-vercel)
- [License](#license)

## Getting Started

### Clone the repository
```bash
git clone https://github.com/your-username/vyomgarud-landing.git
cd vyomgarud-landing
```

### Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page auto-updates as you edit files.

### Start Editing
Modify `app/page.tsx` or components in `app/components/` to update the landing page. All changes are live-reloaded automatically.

## Project Structure
```
app/
 ├─ components/       # Hero, About, Capabilities, Highlights, Contact
 ├─ page.tsx          # Main landing page
 └─ globals.css       # Tailwind + custom styles

public/
 ├─ images/           # Hero images, product images, etc.

tailwind.config.js    # Tailwind configuration
package.json          # Project dependencies
README.md             # This file
```

## Features
- Hero section with slideshow background and CTA buttons
- About section with company mission
- Capabilities / Products cards (3-4 offerings)
- Highlights section (3 concise feature bullets)
- Contact / Footer section with simple form or links
- Fully responsive (mobile, tablet, desktop)
- Dark mode support with subtle animations
- Reusable components
- Progressive commit-friendly structure

## Technologies
- Next.js 14+
- React 18+
- Tailwind CSS 4
- Framer Motion
- Lucide Icons
- Google Fonts: Inter, Poppins, Montserrat

## Colors & Fonts
- **Primary Orange:** `#ff7b00`
- **Background Dark:** `#0a0a0a`
- **Text Light:** `#ededed`
- Fonts: Inter (body), Poppins (headings), Montserrat optional

## Best Practices
- Use reusable React components for sections
- Commit early and often for progressive history
- Keep design consistent with brand colors
- Use free images or placeholders if needed
- Use Framer Motion for subtle animations
- Mobile-first responsive design

## Learn More
- [Next.js Documentation](https://nextjs.org/docs) - complete Next.js reference
- [Learn Next.js](https://nextjs.org/learn) - interactive tutorial
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/docs/)

## Deploy on Vercel
1. Push your code to GitHub.
2. Connect your repository to [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app).
3. Automatic deployment is enabled for every commit.
4. Your app will be available at `https://<project-name>.vercel.app`.

More info: [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)

## License
This project is for **educational purposes / intern assessment only**.
