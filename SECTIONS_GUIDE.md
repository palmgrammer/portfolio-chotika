# 📐 Portfolio Sections Overview

This document explains each section of your portfolio and what it contains.

## 🎯 Section Breakdown

### 1. Navigation Bar (Fixed Top)
**File**: `components/Navigation.tsx`
- Logo: "Chotika B."
- Menu items: Home, About, Experience, Education & Skills, Contact
- Smooth scroll to sections
- Responsive mobile menu
- Active section indicator
- Sticky navigation with blur effect on scroll

---

### 2. Hero Section (Home)
**File**: `components/Hero.tsx`
**Content**:
- Large animated title with your name
- Tagline: "I enjoy working with data to understand people, patterns, and stories behind the numbers"
- Category badge: "Data Engineering"
- Two CTA buttons:
  - Download Resume (primary)
  - Learn More (secondary)
- Animated background gradients
- Scroll indicator

**Design**: Full-screen height, centered content, gradient background

---

### 3. About Section
**File**: `components/About.tsx`
**Content**:
- Headline: "Solve With Logic, Speak With Design."
- Decorative circular avatar placeholder (CB initials)
- Floating badges (Education, Digital Solutions)
- About me paragraphs
- Statistics grid:
  - 2 Internships
  - 10+ Projects
  - 4+ Bootcamps

**Design**: White background, two-column layout, animated entrance

---

### 4. Experience Section
**File**: `components/Experience.tsx`
**Content**:
Two internship cards (expandable):

**Card 1: Delta Electronics**
- Role: Digital Solution Intern
- Duration: July - December 2025
- 6 key responsibilities including:
  - RPA Project (UiPath)
  - Predictive Analytics POC
  - Lucky Draw System
  - ChatGPT Workshop
  - Microsoft Planner Workshop
  - DeltaHi Application Testing
- Activity gallery with 5 highlights

**Card 2: MFEC**
- Role: Data Science Intern
- Duration: April - June 2025
- 3 key responsibilities
- Highlights gallery

**Design**: 
- Gradient headers (blue for Delta, coral for MFEC)
- Click to expand/collapse details
- Icon indicators
- Smooth animations

---

### 5. Activities & Workshops Section
**File**: `components/Activities.tsx`
**Content**:
Four activity cards:

1. **Databricks Data Engineer Bootcamp**
   - Category: DATA ENGINEER
   - Organizer: gosoft & depa
   - Icon: Database
   - Color: Blue gradient
   - 4 key takeaways

2. **Data Scientist Training Course**
   - Category: DATA SCIENCE
   - Organizer: depa & DayDev
   - Icon: Brain
   - Color: Purple gradient
   - 4 key takeaways

3. **SPEAK SMART, SEIZE CHANCES**
   - Category: SOFT SKILLS
   - Organizer: Kru Green Nithivat
   - Icon: MessageSquare
   - Color: Pink gradient
   - 4 key takeaways

4. **NCSA CTF Boot Camp 2024**
   - Category: CYBERSECURITY
   - Organizer: NCSA
   - Icon: Shield
   - Color: Red gradient
   - 4 key takeaways

**Design**: Grid layout, expandable cards with icons, category badges

---

### 6. Education & Skills Section
**File**: `components/Education.tsx`
**Content**:

**Education Timeline**:
1. Naresuan University
   - Bachelor's degree - Computer Engineering
   - 2022 - Present
   
2. Thungsaliamchanupatham School
   - Science and Mathematics Program
   - 2019 - 2021

**Skills Grid** (5 categories):
1. **Programming**: Python, SQL, JavaScript, TypeScript, Bash
2. **Data Engineering**: Apache Spark, Databricks, ETL, PySpark
3. **Machine Learning**: Scikit-learn, TensorFlow, Pandas, NumPy
4. **Cloud & DevOps**: Firebase, GitHub, CI/CD, Docker
5. **Automation & RPA**: UiPath, Process Automation, Testing

**Closing Statement**:
- Quote: "Solve With Logic, Speak With Design"
- In gradient banner

**Design**: Light gray background, cards with icons, skill tags

---

### 7. Contact Section
**File**: `components/Contact.tsx`
**Content**:

**Social Links** (3 cards):
- Email with icon
- LinkedIn with icon
- GitHub with icon

**Contact Form**:
- Name field
- Email field
- Subject field
- Message textarea
- Send button

**Footer**:
- Location badge: "Based in Bangkok, Thailand"
- Copyright notice
- Tech stack mention

**Design**: White background, gradient form container, footer

---

## 🎨 Design System

### Colors
- **Primary**: Coral/Red (#ef5844)
- **Neutral**: Grays for text and backgrounds
- **Accents**: Blue, Purple, Pink, Green for different sections

### Typography
- **Display Font**: Sora (headings)
- **Body Font**: Inter (paragraphs)

### Spacing
- Sections: 32px padding (py-32)
- Containers: max-w-7xl
- Consistent 6-8 spacing units

### Animations
- Fade in on scroll
- Slide up entrances
- Hover effects on cards
- Smooth expand/collapse
- Staggered delays for lists

### Components
- Rounded corners: 2xl, 3xl
- Shadows: lg, xl, 2xl
- Gradients: Various color combinations
- Glass morphism: Backdrop blur effects

---

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (md)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All sections stack vertically on mobile and use grid layouts on desktop.

---

## 🔧 Customization Guide

To customize each section, see the corresponding file in the `components/` directory. Each component is self-contained and easy to modify.

1. Open the component file
2. Find the content section
3. Update the text/data
4. Save and see changes live!

---

Need more details? Check the component files directly - they're well-commented!
