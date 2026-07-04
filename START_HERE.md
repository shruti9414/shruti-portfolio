# 🚀 Shruti's 3D Interactive Portfolio - START HERE

**Congratulations!** All files have been copied to this directory. Now follow these 3 simple steps to get your portfolio running!

---

## ⚡ Quick Setup (3 Steps)

### **Step 1️⃣: Install Dependencies**

Open PowerShell/Terminal in this folder and run:

```bash
npm install
```

This will install all required packages:
- React, Next.js
- Three.js (for 3D)
- Framer Motion (for animations)
- Tailwind CSS (for styling)
- Lucide React (for icons)

**Time:** ~2-3 minutes

---

### **Step 2️⃣: Add Your Photos**

Copy your photos to the `public/` folder:

```
C:\Users\Admin\Documents\shruti-portfolio\public\
├── photo-with-bg.jpg          (Your photo with background)
└── photo-no-bg.png            (Your photo without background)
```

💡 If you only have one photo, use it for both paths.

**Update paths in `app/page.jsx` if needed:**
```javascript
const bgPhotoPath = '/photo-with-bg.jpg';
const noBgPhotoPath = '/photo-no-bg.png';
```

---

### **Step 3️⃣: Run Development Server**

```bash
npm run dev
```

Then open in your browser:
```
http://localhost:3000
```

**That's it!** Your 3D portfolio is live! 🎉

---

## 📝 Update Your Content

Edit `portfolioData.js` with your information:

```javascript
// Update projects
export const projectsData = [
  {
    title: 'Your Project Name',
    description: 'Your project description',
    metrics: [
      { value: '100K+', label: 'Users' },
      { value: '$10K+', label: 'Revenue' },
      { value: '95%', label: 'Uptime' },
    ],
    tech: ['React', 'Node.js', 'MySQL'],
    highlights: [
      'Achievement 1',
      'Achievement 2',
      'Achievement 3',
    ],
  }
];

// Update testimonials
export const testimonialsData = [
  {
    text: 'Quote from someone about you',
    author: 'Person Name',
    title: 'Job Title',
    company: 'Company Name',
    rating: 5,
  }
];

// Update experience
export const experienceData = [
  {
    role: 'Your Role',
    company: 'Company Name',
    duration: 'Date Range',
    location: 'Location',
    achievements: [
      'Achievement 1',
      'Achievement 2',
      'Achievement 3',
    ],
  }
];
```

---

## 🎨 Customize Colors (Optional)

To change the accent color from Cyan to something else:

1. Open `tailwind.config.js`
2. Find the `cyan` color section
3. Replace with your color:

```javascript
cyan: {
  400: '#your-color-here',  // Change these
  500: '#your-color-here',
  600: '#your-color-here',
}
```

**Popular colors:**
- Purple: `#a78bfa`
- Blue: `#3b82f6`
- Green: `#10b981`
- Pink: `#ec4899`

---

## 📁 Folder Structure

```
shruti-portfolio/
├── app/
│   ├── page.jsx                    # Main page
│   ├── layout.jsx                  # Root layout
│   ├── globals.css                 # Global styles
│   ├── Hero3DSection.jsx           # 3D hero
│   ├── ProjectsSection.jsx         # Projects
│   ├── SkillsSection.jsx           # Skills
│   └── TestimonialsSection.jsx     # Testimonials
│
├── public/
│   ├── photo-with-bg.jpg           # YOUR PHOTO
│   └── photo-no-bg.png             # YOUR PHOTO
│
├── package.json                    # Dependencies
├── tailwind.config.js              # Tailwind config
├── next.config.js                  # Next.js config
├── postcss.config.js               # PostCSS config
├── portfolioData.js                # All your content
└── jsconfig.json                   # JS config
```

---

## 📚 Documentation

- **SETUP_GUIDE.md** - Detailed setup instructions
- **IMPLEMENTATION_GUIDE.md** - Advanced customization
- **FILES_CHECKLIST.md** - File reference
- **QUICK_START.txt** - Commands cheatsheet

---

## 🚀 Deploy to Vercel (When Ready)

Once your portfolio looks perfect:

1. **Initialize Git:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: 3D portfolio"
   ```

2. **Push to GitHub:**
   - Create a new repo on GitHub
   - Push your code

3. **Deploy to Vercel:**
   - Go to vercel.com
   - Click "Import Project"
   - Select your GitHub repo
   - Click Deploy!

Your portfolio will be live at: `https://shruti-portfolio.vercel.app` (or custom domain)

---

## ⚠️ Common Issues

**Problem:** `npm install` fails
**Solution:**
```bash
rm -r node_modules
npm install
```

**Problem:** Photos not showing
**Solution:**
- Check file paths in `app/page.jsx`
- Verify files are in `public/` folder
- Hard refresh browser: `Ctrl+Shift+R`

**Problem:** 3D canvas is blank
**Solution:**
- Open DevTools (F12 → Console)
- Check for errors
- Verify WebGL support: https://get.webgl.org/

**Problem:** Port 3000 already in use
**Solution:**
```bash
npm run dev -- -p 3001
```

---

## ✅ Ready to Go!

You have everything you need:
- ✅ Complete Next.js setup
- ✅ 3D interactive components
- ✅ Dark theme with animations
- ✅ Responsive design
- ✅ All documentation

**Next step:** Run `npm install` and then `npm run dev`!

---

## 📞 Need Help?

1. Check SETUP_GUIDE.md for quick answers
2. Read IMPLEMENTATION_GUIDE.md for detailed help
3. Check browser console (F12) for errors
4. Make sure all files are in correct folders

---

**Happy coding! Build something amazing! 🚀✨**

Made with ❤️ for Shruti Dodiya
