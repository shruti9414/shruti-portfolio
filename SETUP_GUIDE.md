# Shruti Dodiya's 3D Interactive Portfolio 🚀

A stunning, modern developer portfolio built with React, Next.js, Three.js, and Tailwind CSS featuring interactive 3D elements, smooth animations, and a sleek dark theme.

## 📋 Project Structure

```
shruti-3d-portfolio/
├── app/
│   ├── page.jsx                 # Main portfolio page
│   └── layout.jsx               # Root layout
├── components/
│   ├── Hero3DSection.jsx        # 3D hero with Three.js
│   ├── ProjectsSection.jsx      # Projects showcase with 3D cards
│   ├── SkillsSection.jsx        # Interactive skills visualization
│   └── TestimonialsSection.jsx  # Testimonials slider
├── public/
│   ├── photo-with-bg.jpg        # Background photo (for subtle bg)
│   └── photo-no-bg.png          # No-background photo (for 3D card)
├── styles/
│   └── globals.css              # Global styles & animations
├── package.json
├── tailwind.config.js
├── next.config.js
├── postcss.config.js
├── portfolioData.js             # All portfolio content data
└── README.md
```

## 🚀 Quick Start

### Step 1: Setup Project

```bash
# Create Next.js project
npx create-next-app@latest shruti-3d-portfolio --typescript --tailwind --app

# Navigate to project
cd shruti-3d-portfolio

# Copy all provided files into your project structure
# (Organize them as shown in Project Structure above)
```

### Step 2: Install Dependencies

```bash
npm install
# or
yarn install
```

Required packages (already in package.json):
- `next` - React framework
- `react` & `react-dom` - UI library
- `three` - 3D graphics
- `framer-motion` - Animations
- `tailwindcss` - Styling
- `lucide-react` - Icons
- `swiper` - Carousel (if needed)

### Step 3: Add Your Photos

1. **Place your photos in the `public/` folder:**
   - `photo-with-bg.jpg` - Your photo with background (for subtle background)
   - `photo-no-bg.png` - Your photo without background (for 3D card)

2. **Update paths in `page.jsx`:**
   ```javascript
   const bgPhotoPath = '/photo-with-bg.jpg';
   const noBgPhotoPath = '/photo-no-bg.png';
   ```

### Step 4: Configure Portfolio Content

Edit `portfolioData.js` with your information:
- Update project details, metrics, and highlights
- Add LinkedIn recommendations to testimonials
- Update experience data

### Step 5: Create Required Files

Create these configuration files in the root:

**`postcss.config.js`:**
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### Step 6: Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

## 🎨 Customization

### Change Accent Color

The portfolio uses Cyan (#06B6D4) as the accent color. To change:

1. **In `tailwind.config.js`:**
   - Modify the cyan color palette values

2. **In CSS/Components:**
   - Search for `cyan-400`, `cyan-500`, etc.
   - Replace with your preferred color

### Modify Dark Theme

Edit color values in `tailwind.config.js`:
```javascript
slate: {
  900: '#0f172a',   // Main dark background
  950: '#020617',   // Darker sections
  800: '#1e293b',   // Cards background
  // ... adjust as needed
}
```

### Update Hero 3D Section

In `Hero3DSection.jsx`:
- `scene.background = new THREE.Color(0x0f172a)` - Change background color
- `particleMaterial.color = 0x06B6D4` - Change particle color
- `photoCardRef.current.position.set(2, 0, 0)` - Adjust photo position

### Add/Remove Sections

Each section is a separate component:
- `Hero3DSection` - Top 3D section
- `ProjectsSection` - Projects showcase
- `SkillsSection` - Skills & expertise
- `TestimonialsSection` - Reviews/recommendations
- Contact & Footer - In `page.jsx`

## 📱 Responsive Design

The portfolio is fully responsive:
- Desktop: Full 3D effects and animations
- Tablet: Optimized layout
- Mobile: Simplified animations, touch-friendly

Responsive breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## ⚡ Performance Tips

1. **Image Optimization:**
   - Use Next.js Image component for local images
   - Compress photos before uploading
   - Consider WebP format

2. **3D Performance:**
   - Three.js renders efficiently, but test on lower-end devices
   - Particle count can be adjusted in Hero3DSection

3. **Animations:**
   - Framer Motion is optimized for performance
   - Use `willChange` CSS for intensive animations

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
# Push to GitHub first
git add .
git commit -m "Initial commit"
git push origin main

# Then go to vercel.com and import your repository
```

### Deploy to Other Platforms

```bash
# Build production version
npm run build
npm start

# Or export as static site
npm run export
```

## 🎯 Features

✅ **3D Hero Section**
- Interactive Three.js visualization
- Parallax photo effect on mouse movement
- Floating particle system
- Glassmorphism design elements

✅ **Project Showcase**
- 3D card hover effects
- Impact metrics display
- Tech stack tags
- Highlighted achievements

✅ **Interactive Skills**
- Expandable skill categories
- Animated skill bars
- 4 major skill groups
- Tools & platforms section

✅ **Testimonials**
- Image carousel slider
- Star ratings
- Smooth transitions
- Navigation controls

✅ **Smooth Animations**
- Framer Motion throughout
- Scroll triggers
- Hover effects
- Staggered animations

✅ **Modern Design**
- Dark theme (slate-950)
- Cyan accent color (#06B6D4)
- Gradient text & elements
- Responsive layout

## 🔧 Troubleshooting

### Photos not showing
- Check photo paths in `page.jsx`
- Ensure files are in `public/` folder
- Browser cache - hard refresh (Ctrl+Shift+R)

### 3D canvas not rendering
- Check browser supports WebGL
- Verify Three.js is installed
- Check console for errors

### Animations not smooth
- Check GPU acceleration in browser
- Reduce particle count if needed
- Update browser to latest version

### Build errors
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `npm install`
- Check Node version (14+ recommended)

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Three.js Documentation](https://threejs.org/docs)
- [Framer Motion](https://www.framer.com/motion)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)

## 📄 License

This portfolio template is free to use and modify.

## 💡 Tips for Success

1. **Regular Updates:** Keep projects and testimonials current
2. **SEO:** Update meta tags in layout.jsx for better search visibility
3. **Analytics:** Consider adding Google Analytics or Vercel Analytics
4. **Backups:** Version control everything with Git
5. **Testing:** Test on multiple browsers and devices

---

**Built with ❤️ using React, Next.js, Three.js & Tailwind CSS**

Happy coding! 🚀
