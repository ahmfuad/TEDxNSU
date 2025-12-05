# NSU Building Image Setup

## Image Placement Instructions

You need to save the North South University building image to make it appear in the hero section.

### Steps:

1. **Save the image** you provided as: `nsu-building.png`

2. **Place it in the static folder**:
   ```
   F:\TEDxNSU\static\nsu-building.png
   ```

3. **The image will automatically appear** in the hero section below the countdown timer

### Image Requirements:
- **Format**: PNG (recommended for transparency)
- **Recommended Size**: 1920x800 pixels or similar wide format
- **File Name**: Exactly `nsu-building.png`
- **Location**: `static/nsu-building.png`

### Current Implementation:

The hero section now includes:
- ✅ **Countdown Timer** - Shows days, hours, minutes, seconds until December 6, 2025
- ✅ **NSU Building Image** - Will appear with:
  - `opacity-30` - 30% opacity for subtle appearance
  - `mix-blend-lighten` - Blends with black background
  - `filter: brightness(0.7)` - Slightly darkened
  - Centered and responsive

### How it Looks:

The image will blend beautifully with the dark background, creating a subtle, architectural backdrop that doesn't overpower the text while maintaining the minimalist TEDx aesthetic.

---

## Manual Image Placement

**Windows (PowerShell)**:
1. Right-click on your NSU building image
2. Copy the image
3. Navigate to: `F:\TEDxNSU\static\`
4. Paste the image
5. Rename it to: `nsu-building.png`

**Or use File Explorer**:
1. Open File Explorer
2. Navigate to `F:\TEDxNSU\static\`
3. Copy your image there
4. Rename to `nsu-building.png`

The dev server will automatically detect the new image and display it!
