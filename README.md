# Ethos Watch Boutiques - Next.js

A luxury watch e-commerce website built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Features

- **Light Theme Design** — Clean, elegant white-based design matching the Ethos Watches aesthetic
- **Responsive Navigation** — Top bar with contact info, header with logo/date/Rolex badge, sticky navbar with mobile menu
- **Hero Slider** — Split layout with watch imagery and editorial content
- **Article Cards** — Latest articles with badges (Review/Spotlight)
- **Product Grids** — New arrivals and featured watches with pricing in ₹
- **Boutique Locator** — Store image with city selector and Rolex clock
- **Video Studios** — Dark section with video highlights
- **Trending Articles** — Featured article layout with side cards
- **Scroll Animations** — Fade-in effects on scroll
- **Fully Responsive** — Mobile-first design with breakpoints

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd ethos-watches-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This creates a static export in the `out` directory.

## Project Structure

```
ethos-watches-nextjs/
├── app/
│   ├── components/
│   │   ├── TopBar.tsx       # Contact bar with phone/WhatsApp
│   │   ├── Header.tsx       # Logo, date, Rolex badge
│   │   └── Navbar.tsx       # Navigation links + mobile menu
│   ├── sections/
│   │   ├── Hero.tsx         # Hero slider
│   │   ├── Articles.tsx     # Latest articles grid
│   │   ├── NewArrivals.tsx  # New arrivals product grid
│   │   ├── Boutique.tsx     # Boutique locator section
│   │   ├── FeaturedWatches.tsx # Featured products
│   │   ├── Studios.tsx      # Video highlights (dark)
│   │   ├── Trending.tsx     # Trending articles layout
│   │   └── Footer.tsx       # Site footer
│   ├── globals.css          # Global styles + Tailwind
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Main page composition
├── public/                  # Static assets
├── next.config.js           # Next.js config (static export)
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript config
└── package.json             # Dependencies
```

## Customization

### Colors
Edit `tailwind.config.ts` to change the color palette:
- `accent` — Primary accent color (crimson red)
- `gold` — Rolex/gold elements
- `primary` — Main text color

### Fonts
The project uses:
- **Inter** — UI elements, navigation, body text
- **Playfair Display** — Editorial headings, dates

Change in `app/layout.tsx`.

## License

MIT
