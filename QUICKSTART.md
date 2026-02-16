# 🚀 Quick Start Guide

Get your portfolio website up and running in 3 steps!

## Step 1: Install Dependencies
```bash
npm install
```

## Step 2: Run Development Server
```bash
npm run dev
```

## Step 3: View Your Site
Open [http://localhost:3000](http://localhost:3000) in your browser!

---

## 🎯 What to Customize

### 1. Personal Information (PRIORITY)
Update these files with your real information:

**Hero Section** (`components/Hero.tsx`):
- Line 20: Your tagline/description
- Line 32: Your name
- Line 40: Your description

**Contact Section** (`components/Contact.tsx`):
- Line 12-26: Update email, LinkedIn, GitHub URLs
- Line 93: Update your email
- Line 151: Update location

### 2. Experience Details
**Experience Section** (`components/Experience.tsx`):
- Lines 8-61: Update with your actual internship experiences
- Add/remove experience cards as needed

### 3. Activities & Workshops
**Activities Section** (`components/Activities.tsx`):
- Lines 8-64: Update workshops and bootcamps you've attended

### 4. Skills
**Education Section** (`components/Education.tsx`):
- Lines 11-22: Update your education details
- Lines 24-46: Update your technical skills

### 5. Colors & Branding
**Tailwind Config** (`tailwind.config.ts`):
- Lines 11-25: Customize color palette
- Current theme: Warm red/coral primary colors

### 6. Resume Download
Add your resume PDF to `public/` folder and update the download link in `components/Hero.tsx` (line 55)

---

## 📸 Adding Images

1. Place images in `public/images/` folder
2. Reference them in components like:
```tsx
<Image src="/images/your-photo.jpg" alt="Description" />
```

---

## 🌐 Deploy to Vercel (FREE)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"
6. Done! ✨

---

## ❓ Need Help?

- Check the main README.md for detailed documentation
- Review Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Check Tailwind CSS: [tailwindcss.com/docs](https://tailwindcss.com/docs)

---

## 🎨 Design Tips

1. Keep the color scheme consistent
2. Use high-quality images
3. Keep text concise and scannable
4. Test on mobile devices
5. Optimize images before uploading

---

Happy coding! 🚀
