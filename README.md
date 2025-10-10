# UX Designer Portfolio

A visually stunning, modern portfolio website built with **React + Vite + Tailwind CSS + Framer Motion**. Features premium animations, parallax effects, microinteractions, and a futuristic aesthetic inspired by Obys Agency's minimal yet motion-rich design approach.

## ✨ Enhanced Features

### 🎭 Motion Polish
- **Smooth Easing Curves**: Custom cubic-bezier animations for natural motion
- **Staggered Entrances**: Project grid items animate in sequence with perfect timing
- **Premium Hover Effects**: Subtle delays, opacity fades, and scale transformations
- **Spring Physics**: Natural bounce and elasticity in interactive elements

### 🌊 Parallax Effects
- **Intro Background**: Dynamic parallax scrolling with mouse interaction
- **Floating Particles**: Ambient background animation for depth
- **Mouse-Following Gradients**: Interactive light effects that follow cursor movement

### ⚡ Microinteractions
- **Glowing Underlines**: Animated underlines with glow effects on hover
- **Color Transitions**: Smooth beige to metallic gray color shifts
- **Button Shimmer**: Subtle shimmer effects on action buttons
- **Icon Animations**: Rotating and scaling icons on interaction

### 🖼️ Project Modal
- **AnimatePresence**: Smooth modal entrance/exit animations
- **Detailed Project Views**: Comprehensive project information display
- **Interactive Elements**: Hover effects and smooth transitions
- **Responsive Design**: Optimized for all screen sizes

### 🛣️ Dynamic Routing
- **React Router**: Seamless navigation between pages
- **Case Study Pages**: Dedicated project detail pages
- **Consistent Animations**: Smooth page transitions with Framer Motion
- **URL Management**: Clean, shareable project URLs

## 🎨 Visual Design

### Color Palette
- **Background**: `#F8F5EF` (beige white)
- **Accent**: `#EAE7DC` (soft beige)
- **Text**: `#2A2A2A` (dark gray)
- **Hover/Highlight**: `#B8A47A` (muted gold tone)

### Typography
- **Headings**: Orbitron (futuristic, tech-inspired)
- **Body**: Space Grotesk (clean, modern, readable)

### Animation Philosophy
Inspired by **Obys Agency's portfolio** - minimal yet full of motion and elegant typography. Every interaction feels premium and intentional.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information

**`src/components/Intro.jsx`:**
- Update the hero heading and description
- Replace social media links (LinkedIn, Blog, Resume)
- Customize the about me paragraph

**`src/components/Header.jsx`:**
- Replace the profile image placeholder
- Update the avatar initials

**`src/components/Projects.jsx`:**
- Replace sample projects with your actual work
- Add real project images
- Update project categories and descriptions

**`src/pages/CaseStudy.jsx`:**
- Customize case study template
- Add your project details and process

**`src/App.jsx`:**
- Update footer social media links
- Modify contact information

### Styling & Animation

**Colors:** Edit `tailwind.config.js` to customize the color palette
**Fonts:** Modify font imports in `index.html`
**Animations:** Adjust Framer Motion variants in component files
**Easing:** Customize cubic-bezier curves for different animation feels

### Adding Your Profile Image

1. Add your image to the `public` folder
2. Update the Header component:
   ```jsx
   <img 
     src="/your-image.jpg" 
     alt="Profile" 
     className="w-full h-full object-cover"
   />
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx              # Profile avatar with hover animations
│   ├── Intro.jsx               # Hero section with parallax effects
│   ├── Projects.jsx            # Project grid with modal integration
│   ├── FilterBar.jsx           # Category filter with microinteractions
│   └── ProjectModal.jsx        # Detailed project modal
├── pages/
│   └── CaseStudy.jsx           # Individual project case study pages
├── App.jsx                     # Main app with routing
├── main.jsx                    # App entry point
└── index.css                   # Global styles and animations
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server (Vite)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Advanced Features

### Animation System
- **Staggered Animations**: Sequential element reveals
- **Scroll-Triggered**: Intersection Observer for viewport animations
- **Spring Physics**: Natural motion with realistic physics
- **Gesture Support**: Touch and mouse gesture recognition

### Performance Optimizations
- **Vite Build System**: Lightning-fast development and builds
- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Responsive image handling
- **Bundle Analysis**: Built-in bundle size optimization

### Accessibility
- **WCAG Compliance**: Screen reader friendly
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Proper focus states and indicators
- **Color Contrast**: High contrast ratios for readability

## 🎨 Design System

### Animation Principles
- **Easing**: Custom cubic-bezier curves for natural motion
- **Duration**: Consistent timing across all animations
- **Staggering**: Sequential reveals for visual hierarchy
- **Physics**: Spring-based interactions for organic feel

### Component Patterns
- **Hover States**: Consistent microinteraction patterns
- **Loading States**: Smooth transition animations
- **Error States**: Graceful error handling with animations
- **Empty States**: Engaging empty state designs

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy the dist folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy the dist folder to Netlify
```

### Custom Server
```bash
npm run build
# Serve the dist folder with your preferred server
```

## 🎯 Future Enhancements

- **Dark Mode**: Toggle between light and dark themes
- **CMS Integration**: Headless CMS for easy content management
- **Blog System**: Integrated blog with markdown support
- **Contact Form**: Interactive contact form with validation
- **Analytics**: User interaction tracking and insights
- **PWA Support**: Progressive Web App capabilities

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (optimized for touch)
- **Tablet**: 768px - 1024px (hybrid interaction)
- **Desktop**: > 1024px (full feature set)

## 🎨 Inspiration

This portfolio draws inspiration from:
- **Obys Agency**: Minimal yet motion-rich design
- **Modern Web Standards**: Latest CSS and JavaScript features
- **UX Best Practices**: User-centered design principles
- **Performance**: Fast, smooth, and accessible experiences

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using React, Vite, Tailwind CSS, Framer Motion, and modern web technologies**

*Inspired by the future of web design and user experience*