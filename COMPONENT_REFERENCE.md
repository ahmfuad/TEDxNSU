# Component Structure Reference

## File Locations

```
src/lib/components/
├── Hero.svelte        - Hero section with logo and CTA
├── About.svelte       - About TEDxNSU and TED/TEDx info
├── Theme.svelte       - Event theme section
├── Speakers.svelte    - Speaker lineup grid
├── Schedule.svelte    - Event timeline
├── Venue.svelte       - Venue details and map
├── Sponsors.svelte    - Partners and sponsors
├── Team.svelte        - Organizing team
├── FAQ.svelte         - FAQ accordion
└── Footer.svelte      - Footer with social links
```

## Data Structure Examples

### Speakers Array
```typescript
{
  name: string,
  title: string,
  bio: string,
  image: string
}
```

### Schedule Array
```typescript
{
  time: string,
  title: string,
  type: 'session' | 'break'
}
```

### Team Array
```typescript
{
  name: string,
  role: string,  // TEDx-compliant only
  image: string
}
```

### Sponsors Array
```typescript
{
  name: string,
  logo: string
}
```

### FAQs Array
```typescript
{
  question: string,
  answer: string,
  open: boolean
}
```

## Style Classes Reference

### Custom Component Classes
- `.container-custom` - Max-width container with responsive padding
- `.section-padding` - Responsive vertical padding
- `.btn-primary` - TED red button
- `.btn-secondary` - Black outlined button

### Tailwind Utilities (v4)
Use standard Tailwind classes:
- `bg-[#E62B1E]` - TED red background
- `text-[#E62B1E]` - TED red text
- `bg-black`, `text-black` - Black
- `bg-white`, `text-white` - White

## Icons Used (Lucide Svelte)
- `Calendar` - Date icon in Hero
- `MapPin` - Location icon in Hero and Venue
- `Car` - Parking icon in Venue
- `Clock` - Time icon in Venue
- `Info` - Information icon in Venue
- `ChevronDown` - Accordion arrow in FAQ
- `Facebook` - Social media in Footer
- `Instagram` - Social media in Footer
- `Mail` - Email icon in Footer

## Color Palette
```css
TED Red:   #E62B1E
Black:     #000000
White:     #FFFFFF
Gray 50:   #F9FAFB (backgrounds)
Gray 100:  #F3F4F6 (dividers)
Gray 200:  #E5E7EB (borders)
Gray 400:  #9CA3AF (secondary text)
Gray 600:  #4B5563 (body text)
Gray 800:  #1F2937 (dark elements)
```

## Typography
- **Headings**: Helvetica Neue, bold
- **Body**: Inter, regular/semibold
- **Sizes**: Responsive from text-xl to text-8xl

## Breakpoints
- `md:` - 768px and up
- `lg:` - 1024px and up

All components use mobile-first responsive design!
