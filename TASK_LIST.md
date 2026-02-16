# ✅ Balakumaran K Portfolio Website - Complete Task List (SEO + Performance + Production Ready)

This is a **step-by-step checklist** to build a **high-performance, SEO-friendly portfolio website** using **React + Pure CSS**.

---

# 📌 Project Goal

Build a portfolio website that:
- showcases projects professionally
- loads fast (90+ Lighthouse performance)
- is SEO-ready for Google indexing
- is scalable (easy to add blogs, chatbot, new projects)
- is deployable on Vercel/Netlify

---

# ✅ PHASE 0: Project Setup (Day 1)

## 🟦 0.1 Initialize Project
- [x] Create Vite React project
- [] Install dependencies
- [] Remove unused boilerplate files

### Commands:
```node
npm create vite@latest bk-portfolio 
cd bk-portfolio
npm install
npm run dev
```

---

## 🟦 0.2 Setup Folder Structure

Ensure your project has this structure:

```
src/
  components/
  pages/
  data/
  styles/
  App.jsx
  main.jsx
public/
  images/
index.html
```

---

## 🟦 0.3 Add Core CSS Files

Inside `src/styles/` create:

* [ ] reset.css
* [ ] variables.css
* [ ] globals.css
* [ ] utilities.css

---

## 🟦 0.4 Import Global CSS in main.jsx

* [ ] Import reset.css first
* [ ] Import variables.css second
* [ ] Import globals.css third
* [ ] Import utilities.css last

Example:

```js
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/globals.css";
import "./styles/utilities.css";
```

---

# ✅ PHASE 1: Base Layout + Routing (Day 2)

## 🟦 1.1 Install React Router

* [ ] Install react-router-dom

```bash
npm install react-router-dom
```

---

## 🟦 1.2 Setup Pages

Inside `src/pages/` create:

* [ ] Home.jsx
* [ ] About.jsx
* [ ] Projects.jsx
* [ ] Blog.jsx
* [ ] Contact.jsx

---

## 🟦 1.3 Create Layout Components

Inside `src/components/` create:

* [ ] Navbar.jsx
* [ ] Footer.jsx

---

## 🟦 1.4 Setup Routing in App.jsx

* [ ] Wrap app with BrowserRouter
* [ ] Add Routes
* [ ] Add Navbar and Footer globally

Pages route structure:

* `/` → Home
* `/about` → About
* `/projects` → Projects
* `/blog` → Blog
* `/contact` → Contact

---

# ✅ PHASE 2: Navbar + Footer UI (Day 3)

## 🟦 2.1 Navbar Checklist

* [ ] Logo / Brand Name
* [ ] Navigation links
* [ ] Active link highlight
* [ ] Mobile responsive menu
* [ ] Sticky navbar (optional)
* [ ] Smooth scroll support (optional)

---

## 🟦 2.2 Footer Checklist

* [ ] Copyright
* [ ] Social links
* [ ] Email
* [ ] Small navigation links

---

## 🟦 2.3 Create CSS for Navbar/Footer

Inside `src/styles/` or component CSS:

* [ ] navbar.css
* [ ] footer.css

---

# ✅ PHASE 3: Home Page (Day 4 - Day 5)

## 🟦 3.1 Hero Section

* [ ] Title (Your Name + Role)
* [ ] Short description (2 lines max)
* [ ] CTA buttons (Projects + Contact)
* [ ] Profile image
* [ ] Social icons row

Performance rules:

* [ ] Use `.webp` images if possible
* [ ] Avoid huge box shadows

---

## 🟦 3.2 Skills / Tech Stack Section

* [ ] Skills displayed in cards
* [ ] Add icons (SVG preferred)
* [ ] Group by category:

  * Frontend
  * Backend
  * Database
  * Tools

---

## 🟦 3.3 Featured Projects Section

* [ ] Add 3 featured projects
* [ ] Use project card component
* [ ] Add GitHub + Live Demo buttons
* [ ] Add tags like "MERN", "Firebase"

---

## 🟦 3.4 Home Page Mini About Section

* [ ] Short summary about you
* [ ] Button: "Read More"

---

## 🟦 3.5 Contact CTA Section

* [ ] Simple CTA banner
* [ ] Button to contact page

---

# ✅ PHASE 4: About Page (Day 6)

## 🟦 4.1 About Page Content

* [ ] Profile image + intro
* [ ] Education details
* [ ] Internship experience
* [ ] Achievements
* [ ] Resume download button

---

## 🟦 4.2 Timeline UI (Optional but Professional)

* [ ] Create a timeline layout for education/internship

---

# ✅ PHASE 5: Projects Page (Day 7 - Day 8)

## 🟦 5.1 Setup projects.js

Inside `src/data/projects.js` create:

* [ ] id
* [ ] title
* [ ] description
* [ ] image
* [ ] techStack (array)
* [ ] githubLink
* [ ] liveLink
* [ ] category

---

## 🟦 5.2 Build ProjectCard Component

Inside `src/components/ProjectCard.jsx`

* [ ] Project image
* [ ] Title
* [ ] Description
* [ ] Tech stack badges
* [ ] Buttons (GitHub + Live Demo)

---

## 🟦 5.3 Projects Page UI

* [ ] Display projects grid
* [ ] Add filter buttons:

  * All
  * Frontend
  * Fullstack
  * Firebase
  * AI

---

## 🟦 5.4 Project Details Page (Optional)

If you want high-end portfolio:

* [ ] Add route `/projects/:id`
* [ ] Show full project details
* [ ] Add screenshots section
* [ ] Add features list
* [ ] Add challenges + learnings

---

# ✅ PHASE 6: Blog System (Day 9)

## 🟦 6.1 Setup blogs.js

Inside `src/data/blogs.js` store:

* [ ] title
* [ ] slug
* [ ] date
* [ ] tags
* [ ] summary
* [ ] content

---

## 🟦 6.2 Create BlogCard Component

Inside `src/components/BlogCard.jsx`

* [ ] Blog title
* [ ] Summary
* [ ] Read more button
* [ ] Tags

---

## 🟦 6.3 Blog Page UI

* [ ] Blog listing grid
* [ ] Search filter (optional)

---

## 🟦 6.4 Blog Details Page (Recommended for SEO)

* [ ] Add route `/blog/:slug`
* [ ] Render full blog content

---

# ✅ PHASE 7: Contact Page (Day 10)

## 🟦 7.1 Build Contact Form UI

Inside `src/components/ContactForm.jsx`:

* [ ] Name input
* [ ] Email input
* [ ] Subject input
* [ ] Message textarea
* [ ] Submit button

---

## 🟦 7.2 Contact Form Integration (Choose One)

Option A (Easy):

* [ ] Formspree

Option B (Professional):

* [ ] EmailJS

Option C (Best, Backend):

* [ ] Node/Express API

---

## 🟦 7.3 Add Contact Details Section

* [ ] Email
* [ ] Phone (optional)
* [ ] LinkedIn
* [ ] GitHub
* [ ] Location

---

# ✅ PHASE 8: SEO Setup (Day 11)

## 🟦 8.1 Update index.html Meta Tags

Inside `index.html`:

* [ ] Title tag
* [ ] Meta description
* [ ] Keywords
* [ ] Author
* [ ] Open Graph tags
* [ ] Twitter card tags

---

## 🟦 8.2 Add robots.txt

Create `public/robots.txt`

Example:

```txt
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

---

## 🟦 8.3 Add sitemap.xml

Create `public/sitemap.xml`

Include:

* /
* /about
* /projects
* /blog
* /contact

---

## 🟦 8.4 Add Canonical Tag

Inside `index.html` add:

* [ ] canonical URL

---

## 🟦 8.5 Add JSON-LD Schema (Recommended)

Add schema in `index.html`:

* [ ] Person schema
* [ ] Portfolio website schema

---

## 🟦 8.6 SEO Best Practices Checklist

* [ ] Use semantic HTML (main, section, article)
* [ ] Only ONE `<h1>` per page
* [ ] Use proper alt text for images
* [ ] Ensure buttons are accessible
* [ ] Add aria-label for icons

---

# ✅ PHASE 9: Performance Optimization (Day 12)

## 🟦 9.1 Optimize Images

* [ ] Convert all PNG/JPG to WEBP
* [ ] Use correct size images (not 4K images)

Tools:

* TinyPNG
* Squoosh
* CloudConvert

---

## 🟦 9.2 Lazy Load Images

* [ ] Add `loading="lazy"` to all images
* [ ] Lazy load iframes if any

---

## 🟦 9.3 Reduce CSS Load

* [ ] Avoid large unused CSS
* [ ] Use utilities for repeated styles
* [ ] Avoid too many box-shadows

---

## 🟦 9.4 Reduce Animations

* [ ] Use transform + opacity only
* [ ] Add prefers-reduced-motion support

---

## 🟦 9.5 Lighthouse Test

* [ ] Run Lighthouse in Chrome DevTools
* [ ] Fix all red warnings

Target:

* Performance: 90+
* SEO: 95+
* Accessibility: 95+

---

# ✅ PHASE 10: Advanced UI Improvements (Optional but Recommended)

## 🟦 10.1 Add Smooth Animations

Use:

* [ ] AOS library OR IntersectionObserver

---

## 🟦 10.2 Add Dark/Light Theme Toggle

* [ ] Add theme variables
* [ ] Toggle using class on body
* [ ] Store preference in localStorage

---

## 🟦 10.3 Add Scroll-to-top Button

* [ ] Show button after scroll 300px

---

## 🟦 10.4 Add Preloader (Only if minimal)

* [ ] Use CSS-only loader
* [ ] Keep it under 1 second

---

# ✅ PHASE 11: Chatbot Integration (Future Upgrade)

## 🟦 11.1 UI Setup

* [ ] Floating chatbot button
* [ ] Modal chat window
* [ ] Message UI styling

---

## 🟦 11.2 Backend Setup (Mandatory)

Do NOT call OpenAI API from frontend.

* [ ] Create Express server
* [ ] Add `/api/chat` route
* [ ] Store API key in `.env`

---

## 🟦 11.3 Deployment Plan for Chatbot

Frontend:

* [ ] Vercel / Netlify

Backend:

* [ ] Render / Railway

---

# ✅ PHASE 12: Deployment + Hosting (Final Step)

## 🟦 12.1 Prepare for Production

* [ ] Update favicon
* [ ] Add og-image for preview
* [ ] Add correct domain links
* [ ] Ensure no console errors

---

## 🟦 12.2 Build Project

```bash
npm run build
npm run preview
```

---

## 🟦 12.3 Deploy to Vercel

* [ ] Push code to GitHub
* [ ] Import project in Vercel
* [ ] Deploy

---

## 🟦 12.4 Setup Custom Domain (Recommended)

* [ ] Buy domain from Namecheap/GoDaddy
* [ ] Connect to Vercel
* [ ] Enable HTTPS

---

## 🟦 12.5 Google Indexing Setup

* [ ] Add site to Google Search Console
* [ ] Submit sitemap.xml
* [ ] Check robots.txt
* [ ] Request indexing

---

# ✅ FINAL CHECKLIST (Before You Share Your Portfolio)

## 🟩 UI Checklist

* [ ] Mobile responsive (320px to 1440px)
* [ ] No overflow-x scroll
* [ ] Buttons look clickable
* [ ] Fonts consistent everywhere
* [ ] Projects look clean and aligned

---

## 🟩 Performance Checklist

* [ ] Images optimized (WebP)
* [ ] Lighthouse 90+ performance
* [ ] No huge animations
* [ ] No unused heavy libraries

---

## 🟩 SEO Checklist

* [ ] Title and description added
* [ ] OpenGraph tags working
* [ ] Sitemap.xml exists
* [ ] robots.txt exists
* [ ] Alt tags exist
* [ ] Semantic HTML structure

---

# ✅ Recommended Tools

* Lighthouse (Chrome DevTools)
* Google Search Console
* TinyPNG / Squoosh (image compression)
* Vercel Hosting
* Cloudflare (optional CDN)

---

# 🎯 Target Outcome (Your Final Portfolio)

A portfolio that is:

* recruiter friendly
* Google-indexable
* lightning fast
* scalable for blogs + chatbot + future projects
* looks like a professional developer portfolio

---

# ✅ End of TASK_LIST.md
