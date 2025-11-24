# TEDxNorthSouthUniversity Website - Quick Start Guide

## 🚀 Getting Started

Your TEDx website is ready! The development server is currently running at:

**http://localhost:5173/**

## 📁 Project Overview

This is a fully responsive, TEDx-compliant one-page website built with:
- **SvelteKit** - Modern web framework
- **Tailwind CSS v4** - Utility-first styling
- **TypeScript** - Type-safe development
- **Lucide Icons** - Clean, minimal icons

## 🎨 All Sections Included

✅ **Hero Section** - Logo, headline, event info, and CTA button  
✅ **About Section** - TEDxNSU info + mandatory TED/TEDx descriptions  
✅ **Event Theme** - "Unfolding Perspectives" with geometric illustration  
✅ **Speaker Lineup** - Responsive 3-column grid  
✅ **Event Schedule** - Vertical timeline  
✅ **Venue & Directions** - Google Maps + arrival guidelines  
✅ **Sponsors** - Equal-sized logo grid  
✅ **Organizing Team** - Photo grid with TEDx-compliant roles  
✅ **FAQ** - Accordion with 8 questions  
✅ **Footer** - Mandatory license text + social links  

## 🔧 Quick Commands

```bash
# Start development server (already running)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ✏️ Quick Edits

### Update Speakers
Edit `src/lib/components/Speakers.svelte` - Update the `speakers` array

### Update Schedule
Edit `src/lib/components/Schedule.svelte` - Update the `schedule` array

### Update Team
Edit `src/lib/components/Team.svelte` - Update the `team` array

### Update Sponsors
Edit `src/lib/components/Sponsors.svelte` - Update the `sponsors` array

### Update FAQs
Edit `src/lib/components/FAQ.svelte` - Update the `faqs` array

### Social Media Links
Edit `src/lib/components/Footer.svelte` - Update the href attributes

## 🖼️ Adding Images

1. Place images in `static/` folder:
   ```
   static/
   ├── speakers/
   ├── team/
   └── sponsors/
   ```

2. Reference them in components:
   ```typescript
   image: '/speakers/speaker-name.jpg'
   ```

## 🎨 TEDx Brand Colors

The website uses official TEDx colors:
- **TED Red**: `#E62B1E` (use `bg-[#E62B1E]` or `text-[#E62B1E]`)
- **Black**: `#000000` (use `bg-black` or `text-black`)
- **White**: `#FFFFFF` (use `bg-white` or `text-white`)

Custom theme colors are defined in `src/app.css`:
- `var(--color-ted-red)`
- `var(--color-ted-black)`
- `var(--color-ted-white)`

## ✅ TEDx Compliance

This website follows all TEDx branding guidelines:
- ✅ Official TED red (#E62B1E)
- ✅ Required license disclaimer in footer
- ✅ About TED and About TEDx sections
- ✅ TEDx-compliant team roles (no corporate titles)
- ✅ Equal-sized sponsor logos
- ✅ Clean, minimalist design

## 📱 Responsive Design

The website is fully responsive:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components adapt automatically!

## 🌐 Next Steps

1. **Replace placeholder content**:
   - Speaker photos and bios
   - Team member photos
   - Sponsor logos
   - Event schedule

2. **Update social media links** in the footer

3. **Test registration button** functionality

4. **Deploy** to Vercel, Netlify, or your hosting platform

## 📚 Documentation

- See `CUSTOMIZATION.md` for detailed customization guide
- See `README.md` for full project documentation

## 🎉 You're All Set!

The website is live and running. Open http://localhost:5173/ in your browser to see it!

Need help? Check the documentation files or modify the components directly.

---

**Event Details:**
- **Event**: TEDxNorthSouthUniversity
- **Date**: 6 December 2025
- **Location**: North South University, Dhaka
- **Theme**: Unfolding Perspectives
