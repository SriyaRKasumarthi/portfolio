# Images Folder Structure

## 📁 Organization

Add your images to the appropriate subfolder:

### `/public/images/projects/`
- Project screenshots
- UI/UX mockups
- Design case studies
- Product images

**Naming convention**: `project-name-01.jpg`, `project-name-02.jpg`

### `/public/images/photography/`
- Photography portfolio images
- Creative shots
- Visual storytelling images

**Naming convention**: `photo-title-01.jpg`, `series-name-02.jpg`

### `/public/images/hero/`
- Hero section backgrounds
- Banner images
- Large decorative images

**Naming convention**: `hero-bg.jpg`, `intro-bg.jpg`

### `/public/images/profile/`
- Profile photos
- Headshots
- About me images

**Naming convention**: `profile.jpg`, `profile-alt.jpg`

---

## 🔗 How to Reference Images in Your Code

### In React Components:
```jsx
// For images in /public/
<img src="/images/projects/project1.jpg" alt="Project name" />

// For project cards
<img src="/images/projects/ecommerce-app.jpg" alt="E-Commerce App" />

// For hero backgrounds
<div style={{ backgroundImage: 'url(/images/hero/hero-bg.jpg)' }}>
```

### In CSS:
```css
.hero {
  background-image: url('/images/hero/hero-bg.jpg');
}
```

---

## 📊 Recommended Image Specs

### Project Thumbnails:
- **Dimensions**: 800×600px or 1200×900px
- **Format**: JPG or WebP
- **Size**: < 200KB (optimized)

### Hero/Background Images:
- **Dimensions**: 1920×1080px or larger
- **Format**: JPG or WebP
- **Size**: < 500KB (optimized)

### Photography Portfolio:
- **Dimensions**: 1600×1200px or larger
- **Format**: JPG or WebP
- **Size**: < 400KB (optimized)

### Profile Photos:
- **Dimensions**: 400×400px (square) or 800×800px
- **Format**: JPG, PNG, or WebP
- **Size**: < 100KB

---

## ⚡ Image Optimization Tips

1. **Compress images** before uploading (use TinyPNG, Squoosh, or ImageOptim)
2. **Use WebP format** when possible for better compression
3. **Provide fallbacks** for older browsers if using WebP
4. **Use lazy loading** for images below the fold
5. **Add proper alt text** for accessibility

---

## 🚀 After Adding Images

1. Images in `/public/` are automatically available at build time
2. No need to import them in React components
3. Reference them with absolute paths starting with `/`
4. Rebuild and deploy: `npm run deploy`

---

## 📝 Example Usage in Projects.jsx

```jsx
const projects = [
  {
    id: 1,
    title: 'E-Commerce Mobile App',
    image: '/images/projects/ecommerce-app.jpg',
    // ...
  },
  {
    id: 2,
    title: 'Healthcare Dashboard',
    image: '/images/projects/healthcare-dashboard.jpg',
    // ...
  },
];
```

Then in your component:
```jsx
<img 
  src={project.image} 
  alt={project.title}
  className="w-full h-full object-cover"
/>
```

