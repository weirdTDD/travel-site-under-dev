# Travel App UI- Outdoor Adventure Platform

![Hilink Logo](./public/hilink-logo.svg)

A modern React/Next.js application for discovering outdoor adventure experiences, featuring:

- Camp location discovery
- Trip planning capabilities
- Interactive maps
- Travel guides and resources

## Features

- **Component Library**: Reusable React components (Navbar, Hero, Camp, Guide)
- **Performance**: Turbopack-powered builds for fast development
- **Type Safety**: Fully typed with TypeScript
- **Responsive Design**: Mobile-first approach
- **Interactive Elements**: Custom buttons, navigation, and hero sections
- **Performance Optimized**: Next.js static generation and code splitting

## Technologies Used

- **Framework**: Next.js 15.4.1
- **Core Library**: React 19.1.0
- **Styling**: Tailwind CSS 3.3.3
- **Type System**: TypeScript 5
- **Bundler**: Turbopack
- **Build Tools**: PostCSS, Node.js
- **Version Control**: Git/GitHub

## Getting Started

### Prerequisites
- Node.js v18+
- npm v9+

### Installation
```bash
git clone https://github.com/weirdTDD/travel-site-under-dev.git
cd travel-site-under-dev
npm install
npm run dev
```

### Development Scripts
```bash
# Run development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Project Structure
```
travel_app/
├── app/               # Next.js application routes
│   ├── components/    # React components (Button, Camp, Features, etc.)
│   ├── constants/     # Application constants
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Homepage
├── public/            # Static assets (images, SVG icons)
├── tailwind.config.js # Tailwind configuration
└── postcss.config.js  # PostCSS configuration
```

## License
MIT Licensed. See [LICENSE](LICENSE) for details.
