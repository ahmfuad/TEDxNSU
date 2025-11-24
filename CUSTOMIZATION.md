# TEDxNorthSouthUniversity Website - Customization Guide

## 📝 Quick Start for Updates

### Update Event Information

All event-specific content can be updated in the component files located in `src/lib/components/`.

### 1. Speakers (`src/lib/components/Speakers.svelte`)

```typescript
const speakers = [
  {
    name: 'Dr. Sarah Chen',
    title: 'The Future of Sustainable Technology',
    bio: 'Exploring how emerging technologies can address climate challenges...',
    image: 'https://via.placeholder.com/400x400/000000/E62B1E?text=SC'
  },
  // Add more speakers here
];
```

**Replace placeholders with:**
- Real speaker names
- Actual talk titles  
- Brief 1-2 line bios
- Speaker photos from `static/` folder

### 2. Schedule (`src/lib/components/Schedule.svelte`)

```typescript
const schedule = [
  { time: '09:00 AM', title: 'Registration & Welcome Coffee', type: 'break' },
  { time: '10:00 AM', title: 'Opening Ceremony', type: 'session' },
  // Update times and sessions
];
```

### 3. Team Members (`src/lib/components/Team.svelte`)

```typescript
const team = [
  {
    name: 'Alex Johnson',
    role: 'Organizer', // TEDx-compliant roles only
    image: 'https://via.placeholder.com/300x300'
  },
];
```

**Allowed roles:** Organizer, Co-organizer, Curator, Experience Lead, Marketing Lead, etc.
**NOT allowed:** CEO, Director, Manager (corporate titles)

### 4. Sponsors (`src/lib/components/Sponsors.svelte`)

```typescript
const sponsors = [
  { 
    name: 'Sponsor 1', 
    logo: '/sponsors/logo1.png' 
  },
];
```

Place sponsor logos in `static/sponsors/` folder.

### 5. FAQ (`src/lib/components/FAQ.svelte`)

```typescript
const faqs = [
  {
    question: 'What is a TEDx event?',
    answer: 'TEDx events are local, self-organized gatherings...',
    open: false
  },
];
```

### 6. Social Media Links (`src/lib/components/Footer.svelte`)

Update the href attributes:

```svelte
<a href="https://facebook.com/your-page">...</a>
<a href="https://instagram.com/your-handle">...</a>
<a href="mailto:your-email@example.com">...</a>
```

## 🖼️ Adding Images

1. Place images in the `static/` folder:
   ```
   static/
   ├── speakers/
   │   ├── speaker1.jpg
   │   └── speaker2.jpg
   ├── team/
   │   ├── member1.jpg
   │   └── member2.jpg
   └── sponsors/
       ├── logo1.png
       └── logo2.png
   ```

2. Reference in components:
   ```typescript
   image: '/speakers/speaker1.jpg'
   ```

## 🎨 Color Customization

Colors are defined in `tailwind.config.js`:

```javascript
colors: {
  'ted-red': '#E62B1E',    // Official TED red
  'ted-black': '#000000',  // Black
  'ted-white': '#FFFFFF',  // White
}
```

**Note:** Do not change TED red for TEDx compliance!

## 🚀 Running the Project

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production
npm run preview
```

## ✅ Pre-Launch Checklist

- [ ] Replace all speaker placeholder images
- [ ] Update all speaker names, titles, and bios
- [ ] Verify schedule times and sessions
- [ ] Add actual team member photos and names
- [ ] Upload and link sponsor logos
- [ ] Update social media links in footer
- [ ] Test on mobile, tablet, and desktop
- [ ] Verify Google Maps embed shows correct location
- [ ] Check all links work correctly
- [ ] Update FAQ content
- [ ] Test registration button functionality

## 📧 Support

For technical support, refer to the main README.md or contact the development team.
