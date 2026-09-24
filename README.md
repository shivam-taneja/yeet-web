# yeet-web

The Next.js marketing website for [yeet](https://github.com/shivam-taneja/yeet) — a browser extension for seamless, bidirectional cross-posting between X (Twitter) and Threads.

Live at [yeet.shivamtaneja.com](https://yeet.shivamtaneja.com)

**Install the extension from the [Chrome Web Store](https://chromewebstore.google.com/detail/knbfidiiikhjebpijhafdikkjhbgbefe?utm_source=item-share-cb).**

## Demo

https://github.com/user-attachments/assets/1b7b4be9-996c-411b-a182-0f14d98a52e6

## Tech Stack

- **Framework** — [Next.js 16](https://nextjs.org) with App Router
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4
- **UI Components** — Radix UI, Lucide React
- **Package Manager** — pnpm

## Project Structure

```
yeet-web/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── page.tsx          # Landing page
│   │   ├── layout.tsx        # Root layout (fonts, metadata)
│   │   ├── globals.css       # Global styles & design tokens
│   │   ├── privacy/          # Privacy policy page
│   │   ├── robots.ts         # Robots.txt generation
│   │   ├── sitemap.ts        # Sitemap generation
│   │   └── not-found.tsx     # 404 page
│   ├── components/
│   │   ├── sections/         # Page sections
│   │   │   ├── hero.tsx      # Hero section
│   │   │   ├── demo.tsx      # Product demo section
│   │   │   ├── how-it-works.tsx
│   │   │   ├── faq.tsx       # FAQ accordion
│   │   │   └── cta.tsx       # Call-to-action section
│   │   ├── layout/           # Layout components
│   │   │   ├── header.tsx
│   │   │   └── footer.tsx
│   │   ├── product-preview/  # Interactive product preview
│   │   └── ui/               # Shared UI primitives
│   │       └── button.tsx
│   ├── config/
│   │   ├── site.ts           # Site-wide config (URLs, links)
│   │   └── seo.ts            # SEO metadata config
│   └── lib/
│       └── utils.ts          # Shared utilities (cn, etc.)
├── public/
│   ├── yeet-logo.svg         # Brand assets
│   ├── yeet-icon.svg
│   ├── yeet-og.png           # Open Graph image
│   ├── site.webmanifest      # PWA manifest
│   └── store-listing/        # Chrome Web Store assets
├── next.config.ts
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 20+
- [pnpm](https://pnpm.io) 10+ (`npm install -g pnpm`)

### Installation

```bash
# Clone the repo
git clone https://github.com/shivam-taneja/yeet-web.git
cd yeet-web

# Install dependencies
pnpm install

# Start the dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command      | Description             |
| ------------ | ----------------------- |
| `pnpm dev`   | Start local dev server  |
| `pnpm build` | Build for production    |
| `pnpm start` | Start production server |
| `pnpm lint`  | Run ESLint              |

## Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feat/your-feature`
3. **Commit** your changes: `git commit -m "feat: add your feature"`
4. **Push** to your branch: `git push origin feat/your-feature`
5. **Open** a Pull Request

### Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` — new feature
- `fix:` — bug fix
- `chore:` — maintenance / tooling
- `docs:` — documentation only
- `style:` — formatting, no logic change
- `refactor:` — code refactor
- `perf:` — performance improvement

### Guidelines

- Keep components focused and reusable
- Add proper TypeScript types — avoid `any`
- Run `pnpm lint` before opening a PR
- For large changes, open an issue first to discuss the approach

## Related

- [yeet](https://github.com/shivam-taneja/yeet) — the Chrome extension itself

## License

MIT
