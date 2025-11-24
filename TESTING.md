# TEDxNorthSouthUniversity - Testing Guide

## 🧪 Testing Checklist

### Desktop Testing (1920x1080)

#### Navigation
- [ ] Navigation bar is fixed at the top
- [ ] All navigation links work correctly
- [ ] Smooth scroll to each section
- [ ] Active section highlighting (if implemented)
- [ ] Register button navigates to `/register`

#### Home Section (`#home`)
- [ ] TEDx logo displays correctly
- [ ] Event date and location visible
- [ ] "Register Now" button works
- [ ] Scroll indicator animation works

#### About Section (`#about`)
- [ ] Two-column layout displays correctly
- [ ] TED/TEDx descriptions are readable
- [ ] Text contrast is good on dark background

#### Theme Section (`#theme`)
- [ ] "Unfolding Perspectives" displays correctly
- [ ] Geometric shapes render properly
- [ ] Background and text colors are correct

#### Speakers Section (`#speakers`)
- [ ] 3-column grid displays correctly
- [ ] All 6 speaker cards visible
- [ ] Hover effects work (scale + shadow)
- [ ] Images load properly

#### Schedule Section (`#schedule`)
- [ ] Timeline displays vertically
- [ ] All 11 time slots visible
- [ ] Red/gray indicators work correctly
- [ ] Session vs. break styling differs

#### Venue Section (`#venue`)
- [ ] Google Maps iframe loads
- [ ] 2-column layout (map + details)
- [ ] All 4 info cards visible
- [ ] Icons render correctly

#### Sponsors Section (`#sponsors`)
- [ ] 3-column grid displays
- [ ] All 6 sponsor placeholders visible
- [ ] Hover effect (grayscale to color)
- [ ] "Become a Sponsor" button visible

#### FAQ Section (`#faq`)
- [ ] All 8 questions visible
- [ ] Click to expand/collapse works
- [ ] Chevron rotation animation
- [ ] Answer text displays correctly

#### Footer
- [ ] Social media icons visible
- [ ] Links work (Facebook, Instagram, Email)
- [ ] TEDx license disclaimer visible
- [ ] Copyright notice displays

---

### Tablet Testing (768px - 1024px)

#### Navigation
- [ ] Navigation adapts to tablet size
- [ ] Mobile menu appears on smaller tablets
- [ ] Burger icon visible and functional

#### Layout Changes
- [ ] Speakers: 2-column grid
- [ ] Sponsors: 2-3 column grid
- [ ] Venue: Stacked or side-by-side
- [ ] All sections maintain readability
- [ ] Padding/spacing appropriate

---

### Mobile Testing (< 768px)

#### Navigation
- [ ] Hamburger menu icon visible
- [ ] Mobile menu opens/closes smoothly
- [ ] Menu overlay covers screen
- [ ] Close icon (X) works
- [ ] All links visible in mobile menu

#### Layout Changes
- [ ] Hero: Single column, centered
- [ ] About: Single column stack
- [ ] Speakers: Single column
- [ ] Schedule: Timeline adapts
- [ ] Venue: Map above details
- [ ] Sponsors: 2-column grid
- [ ] FAQ: Full-width accordion

#### Touch Interactions
- [ ] Tap targets are large enough (min 44x44px)
- [ ] Accordion opens on tap
- [ ] Navigation links work on tap
- [ ] Buttons are easily tappable

#### Text Readability
- [ ] Font sizes are readable
- [ ] Line height is comfortable
- [ ] Contrast is sufficient
- [ ] No text overflow

---

### Registration Page Testing

#### Desktop
- [ ] Form layout is centered
- [ ] Event info cards display (Date, Venue)
- [ ] All input fields visible
- [ ] Icons in input fields render
- [ ] Placeholder text visible
- [ ] Submit button prominent

#### Form Validation
- [ ] Required fields marked with *
- [ ] Email format validation works
- [ ] Phone number accepts various formats
- [ ] Terms checkbox required
- [ ] Error messages display clearly

#### Form Submission
- [ ] Submit button shows loading state (if implemented)
- [ ] Success message displays
- [ ] Form resets after submission (if desired)
- [ ] Redirects appropriately (if implemented)

#### Mobile
- [ ] Form fields stack vertically
- [ ] Input fields full width
- [ ] Keyboard doesn't obscure inputs
- [ ] Submit button always visible
- [ ] Easy to scroll through form

---

### Cross-Browser Testing

#### Google Chrome
- [ ] All features work
- [ ] Smooth scrolling enabled
- [ ] Animations smooth
- [ ] Custom scrollbar visible

#### Mozilla Firefox
- [ ] All features work
- [ ] Smooth scrolling enabled
- [ ] CSS Grid/Flexbox works
- [ ] Scrollbar styling

#### Safari (macOS/iOS)
- [ ] All features work
- [ ] Webkit-specific CSS works
- [ ] Touch events work on iOS
- [ ] Smooth scrolling

#### Microsoft Edge
- [ ] All features work
- [ ] Modern CSS features supported
- [ ] Animations smooth

---

### Performance Testing

#### Load Times
- [ ] Initial page load < 3 seconds
- [ ] Images lazy load
- [ ] No layout shift (CLS)
- [ ] Smooth animations (60fps)

#### Network Throttling
- [ ] Test on Fast 3G
- [ ] Test on Slow 3G
- [ ] Images have appropriate sizes
- [ ] Critical CSS loaded first

---

### Accessibility Testing

#### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Focus indicators visible
- [ ] Escape closes mobile menu
- [ ] Enter submits forms

#### Screen Reader
- [ ] Headings have proper hierarchy (h1 → h6)
- [ ] Images have alt text
- [ ] Links have descriptive text
- [ ] Forms have labels
- [ ] ARIA labels where needed

#### Color Contrast
- [ ] Text meets WCAG AA standards (4.5:1)
- [ ] Buttons have sufficient contrast
- [ ] Links are distinguishable
- [ ] Focus indicators visible

#### Visual
- [ ] Zoom to 200% still usable
- [ ] Text resizing doesn't break layout
- [ ] No reliance on color alone

---

### Dark Mode Specific Tests

#### Color Consistency
- [ ] All backgrounds use dark colors
- [ ] All text is white/light gray
- [ ] TED Red (#E62B1E) is consistent
- [ ] No white flashes on navigation

#### Readability
- [ ] White text on dark bg readable
- [ ] Gray text for secondary info
- [ ] Sufficient contrast everywhere
- [ ] No eye strain

#### Images
- [ ] Images visible on dark background
- [ ] Logos have appropriate contrast
- [ ] Maps render correctly

---

### Specific Feature Tests

#### Smooth Scrolling
1. Click "About" in navigation
2. Page should smoothly scroll to About section
3. Repeat for all navigation links
4. No jumpy behavior

#### Mobile Menu
1. Resize window to mobile size
2. Click hamburger icon
3. Menu should slide in from right
4. Click a link → menu closes, scrolls to section
5. Click X icon → menu closes

#### Hover Effects
1. Hover over speaker cards
2. Card should scale up slightly
3. Shadow should appear
4. Transition should be smooth

#### Accordion (FAQ)
1. Click a question
2. Answer should expand smoothly
3. Chevron should rotate 180°
4. Click again to collapse
5. Only one answer open at a time

---

## 🐛 Known Issues (if any)

### Current Issues
- [ ] None reported

### Fixed Issues
- ✅ Venue.svelte syntax error (fixed)
- ✅ Dark mode color inconsistencies (fixed)
- ✅ Mobile menu not working (fixed)

---

## 📝 Test Devices

### Recommended Test Devices

**Desktop**:
- Windows 10/11 (Chrome, Edge, Firefox)
- macOS (Safari, Chrome, Firefox)

**Tablet**:
- iPad (Safari)
- Android Tablet (Chrome)

**Mobile**:
- iPhone 12/13/14 (Safari)
- Samsung Galaxy S21/S22 (Chrome)
- Google Pixel (Chrome)

**Screen Sizes**:
- 320px (iPhone SE)
- 375px (iPhone 12)
- 768px (iPad Portrait)
- 1024px (iPad Landscape)
- 1920px (Desktop)
- 2560px (Large Desktop)

---

## 🔍 Testing Tools

### Browser DevTools
- Chrome DevTools (Device Emulation)
- Firefox Responsive Design Mode
- Safari Web Inspector

### Online Testing
- BrowserStack
- LambdaTest
- Responsively App (Desktop app)

### Performance
- Lighthouse (in Chrome DevTools)
- PageSpeed Insights
- WebPageTest

### Accessibility
- axe DevTools
- WAVE Browser Extension
- Lighthouse Accessibility Audit

---

## 📊 Success Criteria

**The website passes testing when**:
- ✅ All navigation links work on all devices
- ✅ Mobile menu functions correctly
- ✅ All sections are responsive
- ✅ Forms validate and submit properly
- ✅ Accessibility score > 90 (Lighthouse)
- ✅ Performance score > 80 (Lighthouse)
- ✅ No console errors
- ✅ Smooth animations (no jank)
- ✅ Works in all major browsers
- ✅ Text is readable in dark mode

---

**Testing Date**: ___________
**Tested By**: ___________
**Status**: ⬜ Pass | ⬜ Fail | ⬜ Needs Improvement
