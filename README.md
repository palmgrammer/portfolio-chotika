# Chotika Bangboon - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean and professional design with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **SEO Optimized**: Built with Next.js App Router for excellent SEO performance
- **Smooth Animations**: Engaging animations powered by Framer Motion
- **Type-Safe**: Built with TypeScript for better developer experience
- **Fast Performance**: Optimized for speed with Next.js

## 📋 Sections

1. **Home/Hero** - Eye-catching introduction with CTA buttons
2. **About** - Personal introduction and statistics
3. **Experience** - Detailed internship experiences with expandable cards
4. **Activities** - Workshops, bootcamps, and training programs
5. **Education & Skills** - Academic background and technical skills
6. **Contact** - Contact form and social media links

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Sora (Display) & Inter (Body)

## 📦 Installation

1. **Clone or extract the project:**
```bash
cd portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run development server:**
```bash
npm run dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Experience.tsx     # Experience section
│   ├── Activities.tsx     # Activities section
│   ├── Education.tsx      # Education & Skills section
│   └── Contact.tsx        # Contact section
├── public/
│   └── images/            # Image assets
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration
└── package.json           # Dependencies
```

## 🎨 Customization

### Colors
Edit the color palette in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    // Your custom colors
  },
}
```

### Content
Update your information in the component files:
- **Personal Info**: `components/Hero.tsx`, `components/About.tsx`
- **Experience**: `components/Experience.tsx`
- **Skills**: `components/Education.tsx`
- **Contact**: `components/Contact.tsx`

### Fonts
Change fonts in `app/globals.css`:
```css
@import url('your-google-fonts-url');
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Netlify
1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. New site from Git
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `.next`

### Other Platforms
- Build the project: `npm run build`
- Upload the `.next` folder and required files
- Set the start command: `npm start`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Contact

**Chotika Bangboon**
- Email: chotikabangboon2003@gmail.com
- LinkedIn: [linkedin.com/in/chotika-bangboon](#)
- GitHub: [github.com/chotikab](#)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons by Lucide React
- Fonts from Google Fonts

---

Made with ❤️ by Chotika Bangboon
