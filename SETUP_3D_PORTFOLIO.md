# 3D Portfolio Setup & Installation Guide

## Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Modern browser with WebGL support

### Installation Steps

1. **Navigate to project directory**
   ```bash
   cd shruti-portfolio
   ```

2. **Install dependencies** (if not already installed)
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - The loading screen will animate
   - Smooth scroll will activate automatically
   - 3D environment will render in background

## What's New - 3D Features

### Visual Components Added
1. **Background 3D Environment**
   - Particle system (150 animated particles)
   - Rotating geometric shapes (cube, sphere, torus, octahedrons)
   - Dynamic lighting with cyan/blue ambiance

2. **About Section**
   - 3D skill bars visualization in Three.js
   - Interactive skill proficiency display
   - Animated statistics cards

3. **Projects Section**
   - 3D card perspective effects
   - Mouse-responsive rotation (rotateX/rotateY)
   - Depth effects (translateZ on hover)
   - Smooth scale transitions

4. **Skills Section**
   - Expandable skill categories
   - Animated proficiency bars
   - Gradient overlays
   - Tech stack badges

5. **Experience Section**
   - 3D timeline with milestone markers
   - Rotating and pulsing animations
   - Interactive experience cards
   - Timeline indicator bars

### Smooth Scrolling
- Lenis library for buttery smooth scroll
- Custom easing function
- Performance-optimized with passive listeners
- Mobile-friendly touch scrolling

## File Structure

```
app/
├── page.jsx                    # Main entry point (UPDATED)
├── layout.jsx                  # Root layout
├── globals.css                 # Global styles (UPDATED)
├── 3DEnvironment.jsx           # Background 3D canvas (NEW)
├── About3DSection.jsx          # About with 3D skills (NEW)
├── Canvas3DSkills.jsx          # 3D skill bars (NEW)
├── Projects3DSection.jsx       # 3D projects cards (NEW)
├── Skills3DSection.jsx         # Interactive skills (NEW)
├── Experience3DTimeline.jsx    # 3D timeline (NEW)
├── SmoothScrollProvider.jsx    # Lenis wrapper (NEW)
├── ScrollContext.jsx           # Scroll state (NEW)
├── HeroPremium.jsx             # Hero section (existing)
├── LoadingScreen.jsx           # Loading animation (existing)
├── ProjectsSection.jsx         # Projects backup (existing)
├── SkillsSection.jsx           # Skills backup (existing)
├── TestimonialsSection.jsx     # Testimonials (existing)
└── GlowingCrystal.jsx          # Crystal effect (existing)

portfolioData.js                # Data file (unchanged)
3D_IMPLEMENTATION_GUIDE.md      # Detailed documentation (NEW)
SETUP_3D_PORTFOLIO.md          # This file (NEW)
```

## Configuration

### Adjusting Scroll Speed
Edit `app/SmoothScrollProvider.jsx` line 12:
```javascript
const lenis = new Lenis({
  duration: 1.2, // Change this value (seconds)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  // ... rest of config
});
```

### Customizing Colors
Update color values in:
1. `app/3DEnvironment.jsx` - Background particle colors
2. `app/Canvas3DSkills.jsx` - Skill bar colors
3. `app/globals.css` - CSS color variables

Example:
```javascript
// Change cyan (0x06b6d4) to your color
color: 0xYYYYYY // Replace YYYYYY with hex color
```

### Particle Count Adjustment
Edit `app/3DEnvironment.jsx` line 32:
```javascript
const particleCount = 150; // Increase/decrease as needed
```

## Performance Tips

### For Better Performance
1. **Reduce particle count** if experiencing lag
   - Edit `3DEnvironment.jsx` particleCount variable
   - Recommended: 100-200 for most devices

2. **Disable 3D on mobile** (optional)
   - Edit `page.jsx` to check screen size
   - Show static version on mobile

3. **Optimize Three.js rendering**
   - Reduce shadow quality
   - Decrease light intensity
   - Enable frustum culling

### Mobile Optimization
- Already implemented in `globals.css`
- Reduced 3D complexity on screens < 768px
- Disabled expensive animations on mobile
- Touch-friendly scale values

## Troubleshooting

### Issue: 3D Elements Not Showing
**Solution:**
1. Check browser console for errors (F12 → Console)
2. Verify WebGL is enabled in browser
3. Try a different browser
4. Check if Three.js is loaded (DevTools → Network)

### Issue: Scroll Not Smooth
**Solution:**
1. Verify `SmoothScrollProvider` wraps page content
2. Check if Lenis library loaded (DevTools → Network)
3. Clear browser cache
4. Restart dev server

### Issue: Performance Lag
**Solution:**
1. Reduce particle count (decrease particleCount variable)
2. Reduce 3D shape complexity
3. Disable background environment on mobile
4. Close other browser tabs

### Issue: Build Errors
**Solution:**
1. Delete `node_modules` folder: `rm -rf node_modules`
2. Clear npm cache: `npm cache clean --force`
3. Reinstall: `npm install`
4. Restart dev server: `npm run dev`

## Testing Checklist

Before deploying, verify:
- [ ] Smooth scroll works on all sections
- [ ] 3D cards rotate on mouse movement
- [ ] Skill bars animate when scrolling into view
- [ ] Timeline milestones spin and pulse
- [ ] Particles follow scroll position
- [ ] No console errors (F12)
- [ ] Responsive on mobile (< 768px)
- [ ] Loading screen displays and hides correctly
- [ ] All links are functional
- [ ] Contact section is visible

## Build & Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm run start
```

### Export Static Site
```bash
npm run export
```

## Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 90+ | Full |
| Firefox | 88+ | Full |
| Safari | 14+ | Full |
| Edge | 90+ | Full |
| Mobile Chrome | Latest | Optimized |
| Mobile Safari | Latest | Optimized |

## Git Deployment

1. **Commit changes**
   ```bash
   git add .
   git commit -m "feat: Add 3D interactive UI redesign with Lenis smooth scroll"
   ```

2. **Push to repository**
   ```bash
   git push origin main
   ```

3. **Deploy** (if using Vercel/Netlify)
   - Connect GitHub repository
   - Auto-deploys on push

## Environment Variables (if needed)

Create `.env.local`:
```
NEXT_PUBLIC_APP_URL=https://yoursite.com
NEXT_PUBLIC_ANALYTICS_ID=your_id_here
```

## Future Enhancements

Suggested additions:
1. Scroll-linked animations with progress bar
2. WebGL shader effects
3. 3D model viewer for projects
4. Particle collision physics
5. Audio visualizer integration
6. VR/AR preview mode
7. Dark/Light theme toggle
8. Animated background gradient

## Support Resources

- **Three.js Docs**: https://threejs.org/docs/
- **React Three Fiber**: https://docs.pmnd.rs/react-three-fiber/
- **Lenis Documentation**: https://lenis.studiofreight.com/
- **Framer Motion**: https://www.framer.com/motion/
- **Tailwind CSS**: https://tailwindcss.com/

## Contact & Issues

For issues or questions:
1. Check console for error messages
2. Review 3D_IMPLEMENTATION_GUIDE.md
3. Test in different browser
4. Clear cache and reinstall dependencies

## Credits

Created for Shruti Dodiya's professional portfolio with:
- **React 18** - UI Framework
- **Next.js 14** - Full-stack framework
- **Three.js** - 3D graphics
- **React Three Fiber** - Three.js React binding
- **Lenis** - Smooth scrolling
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling

---

**Version**: 1.0.0  
**Last Updated**: 2026-07-04  
**Status**: Production Ready ✅
