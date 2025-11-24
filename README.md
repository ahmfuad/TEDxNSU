# TEDxNorthSouthUniversity Website

A clean, bold, minimalist website for TEDxNorthSouthUniversity 2025 event, built with SvelteKit and Tailwind CSS.

## 🎯 Event Details

- **Event**: TEDxNorthSouthUniversity
- **Theme**: Unfolding Perspectives
- **Date**: 6 December 2025
- **Venue**: North South University, Dhaka, Bangladesh

## ✨ Features

- 🌑 **Dark Mode Theme** - Sleek black background with TED red accents
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🧭 **Fixed Navigation** - Smooth scrolling to all sections
- 📝 **Registration Page** - Complete form for event registration
- ⚡ **Fast Performance** - Static site generation for optimal speed
- ♿ **Accessible** - WCAG compliant design

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
Visit: http://localhost:5173/

### Build for Production
```bash
npm run build
```

This creates a `build` folder with:
- `index.html` - Main page
- `register.html` - Registration page
- `_app/` - Assets (JS, CSS)

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── lib/
│   └── components/
│       ├── Navigation.svelte  # Navigation bar
│       ├── Hero.svelte        # Landing section
│       ├── About.svelte       # About TEDx
│       ├── Theme.svelte       # Event theme
│       ├── Speakers.svelte    # Speaker lineup
│       ├── Schedule.svelte    # Event schedule
│       ├── Venue.svelte       # Venue info
│       ├── Sponsors.svelte    # Sponsors
│       ├── Team.svelte        # Team members
│       ├── FAQ.svelte         # FAQ accordion
│       └── Footer.svelte      # Footer
├── routes/
│   ├── +page.svelte          # Main page
│   ├── +layout.svelte        # Layout
│   ├── +layout.js            # Prerendering config
│   └── register/
│       └── +page.svelte      # Registration form
└── app.css                   # Global styles
```

## 📚 Documentation

- [QUICK_START.md](./QUICK_START.md) - Getting started guide
- [BUILD_INSTRUCTIONS.md](./BUILD_INSTRUCTIONS.md) - How to build and deploy
- [CUSTOMIZATION.md](./CUSTOMIZATION.md) - Customize content and styling
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deploy to various platforms
- [COMPONENT_REFERENCE.md](./COMPONENT_REFERENCE.md) - Component API
- [TESTING.md](./TESTING.md) - Testing checklist
- [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) - Quick reference guide

## 🎨 Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/) - Modern web framework
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS
- **Icons**: [Lucide Svelte](https://lucide.dev/) - Beautiful icons
- **Language**: TypeScript - Type-safe development
- **Build**: Vite - Fast build tool

## 🌐 Deployment

The site is ready to deploy to:
- ✅ Vercel (recommended)
- ✅ Netlify
- ✅ GitHub Pages
- ✅ Any static hosting

See [BUILD_INSTRUCTIONS.md](./BUILD_INSTRUCTIONS.md) for detailed deployment steps.

## 📄 License

This project is licensed for TEDxNorthSouthUniversity event use.

---

**Built with ❤️ for TEDxNorthSouthUniversity 2025**
