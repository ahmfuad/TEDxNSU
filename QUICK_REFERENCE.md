# TEDxNorthSouthUniversity - Quick Reference

## 🚀 Getting Started

### Start Development Server
```bash
npm run dev
```
Visit: http://localhost:5173/

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
TEDxNSU/
├── src/
│   ├── lib/
│   │   └── components/
│   │       ├── Navigation.svelte    # Fixed navigation bar
│   │       ├── Hero.svelte          # Landing hero
│   │       ├── About.svelte         # About TEDx
│   │       ├── Theme.svelte         # Event theme
│   │       ├── Speakers.svelte      # Speaker lineup
│   │       ├── Schedule.svelte      # Event schedule
│   │       ├── Venue.svelte         # Venue info + map
│   │       ├── Sponsors.svelte      # Sponsors grid
│   │       ├── Team.svelte          # Team members
│   │       ├── FAQ.svelte           # FAQ accordion
│   │       └── Footer.svelte        # Footer
│   ├── routes/
│   │   ├── +page.svelte            # Main page
│   │   ├── +layout.svelte          # Layout wrapper
│   │   └── register/
│   │       └── +page.svelte        # Registration form
│   ├── app.css                     # Global styles
│   └── app.html                    # HTML template
├── static/                         # Static assets
├── QUICK_START.md                  # Getting started
├── CUSTOMIZATION.md                # Customization guide
├── DEPLOYMENT.md                   # Deployment guide
├── COMPONENT_REFERENCE.md          # Component docs
├── CHANGES.md                      # Recent changes
└── TESTING.md                      # Testing guide
```

---

## 🎨 Design System

### Colors
```css
--color-ted-red: #E62B1E      /* Primary accent */
--color-dark-bg: #0a0a0a      /* Main background */
--color-dark-card: #1a1a1a    /* Card backgrounds */
--color-dark-border: #2a2a2a  /* Border color */
```

### Typography
- **Headings**: Helvetica Neue, bold
- **Body**: Inter, regular
- **Sizes**: Responsive, scales with viewport

### Spacing
- **Section Padding**: 4rem (mobile) → 6rem (tablet) → 8rem (desktop)
- **Container Max**: 80rem (1280px)
- **Gaps**: 1rem, 1.5rem, 2rem, 3rem, 4rem

---

## 🔗 Navigation Sections

| Link      | Section ID  | Description          |
|-----------|-------------|----------------------|
| Home      | `#home`     | Hero landing         |
| About     | `#about`    | About TEDx           |
| Theme     | `#theme`    | Event theme          |
| Speakers  | `#speakers` | Speaker lineup       |
| Schedule  | `#schedule` | Event timeline       |
| Venue     | `#venue`    | Location & map       |
| Sponsors  | `#sponsors` | Partners & sponsors  |
| FAQ       | `#faq`      | Frequently asked Q's |
| Register  | `/register` | Registration page    |

---

## 📱 Responsive Breakpoints

```css
/* Mobile */
< 768px     → 1 column, stacked

/* Tablet */
768px - 1024px → 2 columns

/* Desktop */
> 1024px    → 3+ columns
```

---

## ✏️ Quick Customization

### Change Event Date
**File**: `src/lib/components/Hero.svelte`
```svelte
<p class="text-xl md:text-2xl font-bold text-white mb-2">
  6 December 2025  <!-- Change here -->
</p>
```

### Change Event Theme
**File**: `src/lib/components/Theme.svelte`
```svelte
<h3 class="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
  Unfolding <span class="text-ted-red">Perspectives</span>
  <!-- Change here -->
</h3>
```

### Add Speaker
**File**: `src/lib/components/Speakers.svelte`
```javascript
const speakers = [
  // ... existing speakers
  {
    name: 'New Speaker',
    title: 'Their Title',
    bio: 'Brief bio here',
    image: 'https://placeholder.com/300x400'
  }
];
```

### Update Schedule
**File**: `src/lib/components/Schedule.svelte`
```javascript
const schedule = [
  // ... existing times
  {
    time: '07:00 PM',
    title: 'New Session',
    type: 'session' // or 'break'
  }
];
```

### Add FAQ
**File**: `src/lib/components/FAQ.svelte`
```javascript
const faqs = [
  // ... existing FAQs
  {
    question: 'Your question here?',
    answer: 'Your answer here.',
    open: false
  }
];
```

### Change Social Links
**File**: `src/lib/components/Footer.svelte`
```svelte
<a href="https://facebook.com/your-page">
  <!-- Facebook link -->
</a>
<a href="https://instagram.com/your-handle">
  <!-- Instagram link -->
</a>
<a href="mailto:your-email@domain.com">
  <!-- Email link -->
</a>
```

---

## 🎯 Common Tasks

### Add a New Component
1. Create file: `src/lib/components/YourComponent.svelte`
2. Import in `src/routes/+page.svelte`:
   ```svelte
   import YourComponent from '$lib/components/YourComponent.svelte';
   ```
3. Add to markup:
   ```svelte
   <YourComponent />
   ```

### Change Primary Color
**File**: `src/app.css`
```css
@theme {
  --color-ted-red: #YOUR_COLOR; /* Change here */
}
```

### Add Google Analytics
**File**: `src/app.html`
```html
<head>
  <!-- Add GA script here -->
</head>
```

### Add a New Page
1. Create folder: `src/routes/your-page/`
2. Create file: `src/routes/your-page/+page.svelte`
3. Add navigation link

---

## 🔧 Troubleshooting

### Server Won't Start
```bash
# Clear node_modules
rm -rf node_modules
npm install

# Clear cache
npm run dev -- --force
```

### Styles Not Updating
1. Stop dev server (Ctrl+C)
2. Delete `.svelte-kit` folder
3. Restart: `npm run dev`

### Build Errors
```bash
# Check for syntax errors
npm run check

# Clean build
rm -rf .svelte-kit build
npm run build
```

---

## 📊 Performance Tips

### Image Optimization
- Use WebP format
- Compress images (TinyPNG, Squoosh)
- Use appropriate sizes
- Lazy load images

### CSS Optimization
- Remove unused Tailwind classes (done automatically)
- Minimize custom CSS
- Use CSS variables

### JavaScript Optimization
- Code splitting (automatic in SvelteKit)
- Lazy load components if heavy
- Minimize third-party scripts

---

## 🔐 SEO Checklist

- [x] Title tags on all pages
- [x] Meta descriptions
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Alt text on images
- [ ] Semantic HTML

---

## 📞 Support

### Documentation
- [SvelteKit Docs](https://kit.svelte.dev/docs)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)

### Project Docs
- `QUICK_START.md` - Setup instructions
- `CUSTOMIZATION.md` - Customization guide
- `DEPLOYMENT.md` - Deployment guide
- `COMPONENT_REFERENCE.md` - Component API
- `CHANGES.md` - Recent changes
- `TESTING.md` - Testing guide

---

## 📝 Current Version: 2.0 (Dark Mode)

**Last Updated**: December 2024

### What's New
✅ Dark mode theme
✅ Navigation bar with mobile menu
✅ Registration page
✅ Full mobile responsiveness
✅ Smooth scrolling
✅ Section anchors

### Coming Soon
- [ ] Backend integration
- [ ] Email confirmations
- [ ] Payment processing (if needed)
- [ ] Admin dashboard
- [ ] Live speaker updates
