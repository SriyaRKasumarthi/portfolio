# Favicon System

## Overview
The portfolio uses a custom-designed minimalist favicon system that matches the overall design aesthetic.

## Design Philosophy
- **Geometric & Minimalist**: Stylized "S" lettermark with clean lines and geometric shapes
- **Color Scheme**: Matches the portfolio's beige/white gradient aesthetic (#F8F5EF, #EAE7DC, #B8A47A)
- **Tech-Inspired**: Robotic feel with angular edges and accent dots
- **Responsive**: Scales beautifully from 16x16 to 512x512 pixels

## Files

### `/public/favicon.svg` (Primary)
- **Size**: 128x128 viewBox
- **Style**: Detailed version with gradients and accent elements
- **Use Case**: Modern browsers, high-resolution displays
- **Color Mode**: Light mode optimized (beige background, metallic accent)

### `/public/favicon-simple.svg` (Fallback)
- **Size**: 32x32 viewBox
- **Style**: Simplified version with thicker strokes for small sizes
- **Use Case**: Browsers requiring smaller icon sizes
- **Color Mode**: Light mode optimized

### `/public/favicon-dark.svg` (Dark Mode)
- **Size**: 32x32 viewBox
- **Style**: Dark background with light beige stroke
- **Use Case**: Optional dark mode support
- **Color Mode**: Dark mode optimized (#2A2A2A background)

## Implementation in `index.html`
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="alternate icon" type="image/svg+xml" href="/favicon-simple.svg" />
<link rel="apple-touch-icon" href="/favicon.svg" />
```

## Browser Compatibility
- ✅ **Chrome/Edge**: SVG favicons fully supported
- ✅ **Firefox**: SVG favicons fully supported
- ✅ **Safari**: SVG favicons fully supported (14+)
- ✅ **Mobile Browsers**: Apple Touch Icon for iOS home screen

## Design Elements
1. **Stylized "S"**: Geometric letter form with angular corners
2. **Gradient Background**: Subtle beige gradient (#F8F5EF → #EAE7DC)
3. **Metallic Accent**: Golden-beige color (#B8A47A) for the lettermark
4. **Tech Details**: Small accent dots at corners for robotic aesthetic
5. **Rounded Rectangle**: 24px border-radius for modern app icon feel

## Color Palette
- **Background Gradient Start**: `#F8F5EF` (Beige white)
- **Background Gradient End**: `#EAE7DC` (Light beige)
- **Primary Accent**: `#B8A47A` (Muted gold/bronze)
- **Secondary Accent**: `#A89468` (Mid-tone bronze)
- **Dark Accent**: `#8A7A58` (Dark bronze)

## Future Enhancements
If needed, you can generate additional formats:
- **favicon.ico**: For legacy browser support (convert SVG using an online tool)
- **PNG versions**: 16x16, 32x32, 180x180 (Apple), 192x192 (Android)
- **Web App Manifest**: For PWA support with multiple icon sizes

## Customization
To modify the favicon:
1. Edit the SVG files directly in `/public/`
2. Keep the viewBox proportions consistent
3. Maintain the beige color scheme
4. Test at multiple sizes (16px, 32px, 64px)
5. Rebuild and redeploy: `npm run deploy`

## Testing
View the favicon in:
- Browser tab
- Bookmarks bar
- History panel
- Mobile home screen (iOS)
- Different zoom levels

---
Created: October 2025
Design System: Orbitron + Space Grotesk Typography | Beige/White/Bronze Palette

