# Profile Images

## Current Profile Picture
- **File**: `ProfilePic.jpg`
- **Current Size**: 2.7MB (large)
- **Used in**: Header component (circular icon)

## Optimization Recommendation

For better web performance, the profile picture should be optimized:

### Recommended Specs for Header Icon:
- **Dimensions**: 200×200px to 400×400px (sufficient for retina displays)
- **File Size**: < 100KB (ideally 30-50KB)
- **Format**: JPG or WebP
- **Quality**: 80-85% (good balance of quality and size)

### How to Optimize:

#### Option 1: Online Tools
1. Visit [TinyJPG](https://tinyjpg.com/) or [Squoosh](https://squoosh.app/)
2. Upload `ProfilePic.jpg`
3. Resize to 400×400px
4. Export at 80% quality
5. Save as `ProfilePic.jpg` (replace original) or `ProfilePic-optimized.jpg`

#### Option 2: Using ImageMagick (command line)
```bash
# Install ImageMagick first (if not installed)
brew install imagemagick

# Resize and optimize
convert ProfilePic.jpg -resize 400x400^ -gravity center -extent 400x400 -quality 85 ProfilePic-optimized.jpg
```

#### Option 3: Using macOS Preview
1. Open `ProfilePic.jpg` in Preview
2. Tools → Adjust Size...
3. Set width/height to 400px
4. File → Export... → Quality: 80%

## Current Implementation

The image is referenced in `Header.jsx` as:
```jsx
<img 
  src="/images/profile/ProfilePic.jpg" 
  alt="Sriya Kasumarthi"
  className="w-full h-full object-cover"
/>
```

The CSS class `object-cover` ensures the image fills the circular frame without distortion.

## Future Enhancements

Consider creating multiple versions for different uses:
- `ProfilePic-header.jpg` (200×200px, < 50KB) - for header
- `ProfilePic-about.jpg` (800×800px, < 200KB) - for about section
- `ProfilePic-og.jpg` (1200×630px, < 300KB) - for social media sharing

---

**Note**: After optimizing, the page will load faster, especially on mobile connections.

