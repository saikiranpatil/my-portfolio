# Saikiran Patil — Developer Portfolio

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.1.0-646CFF?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.2.7-38BDF8?style=flat&logo=tailwindcss&logoColor=white)
![Sanity](https://img.shields.io/badge/Sanity_CMS-3.10.0-F03E2F?style=flat&logo=sanity&logoColor=white)
![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)

> A modern, animated developer portfolio website built with React, Vite, Tailwind CSS, and Sanity CMS — fully content-managed and production-ready.

---

## 📋 Overview

This is a personal developer portfolio website designed to showcase skills, work experience, and projects in a clean, performant single-page application. All content — including the profile information, projects, skills, and work experience — is managed through a **Sanity CMS** backend, allowing real-time updates without touching code.

The frontend is built with **React** and **Vite**, styled using **Tailwind CSS**, and animated with **Framer Motion**. The project is structured as a monorepo with a `backend/` directory for the Sanity Studio and a `src/` directory for the React frontend.

Live site: [saikiranpatil.netlify.app](https://saikiranpatil.netlify.app/)

---

## ✨ Features

- 🎨 **Fully responsive** — mobile-first design that works across all screen sizes
- ⚡ **Blazing fast** — powered by Vite for near-instant HMR and optimized production builds
- 🧩 **CMS-driven content** — all projects, skills, and experience data managed via Sanity Studio
- 🎞️ **Smooth animations** — scroll-triggered entrance animations via Framer Motion
- 📬 **Contact form** — form submissions are stored directly in Sanity CMS
- 🌑 **Dark theme** — carefully crafted dark color palette with a signature green (`#00ffaa`) accent
- 🔗 **Social links** — GitHub, LinkedIn, Instagram, and email links pulled from CMS
- 📄 **Resume link** — configurable resume download link managed in the CMS

---

## 🖼️ Demo / Screenshots

| Section | Preview |
|---|---|
| Hero | _TODO: Add screenshot_ |
| Skills & Experience | _TODO: Add screenshot_ |
| Projects | _TODO: Add screenshot_ |
| Contact | _TODO: Add screenshot_ |

> 💡 **Tip:** Visit the live site at [saikiranpatil.netlify.app](https://saikiranpatil.netlify.app/) to see the portfolio in action.

---

## 🛠️ Tech Stack

### Frontend

| Technology | Version | Purpose |
|---|---|---|
| [React](https://reactjs.org/) | 18.2.0 | UI framework |
| [Vite](https://vitejs.dev/) | 4.1.0 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 3.2.7 | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | 10.12.8 | Animations |
| [React Icons](https://react-icons.github.io/react-icons/) | 4.8.0 | Icon library |
| [@sanity/client](https://www.npmjs.com/package/@sanity/client) | 6.0.1 | Sanity API client |
| [@sanity/image-url](https://www.npmjs.com/package/@sanity/image-url) | 1.0.2 | Image URL builder |

### Backend (CMS)

| Technology | Version | Purpose |
|---|---|---|
| [Sanity Studio](https://www.sanity.io/) | 3.10.0 | Headless CMS & content editor |
| [@sanity/vision](https://www.npmjs.com/package/@sanity/vision) | 3.10.0 | GROQ query playground |

---

## 🚀 Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js** ≥ 16.x
- **npm** ≥ 8.x (or yarn / pnpm)
- A free [Sanity.io](https://www.sanity.io/) account

---

### 1. Clone the Repository

```bash
git clone https://github.com/saikiranpatil/portfolio.git
cd portfolio
```

---

### 2. Set Up the Frontend

```bash
# Install dependencies
npm install

# Create your environment file
cp .env.example .env
```

Open `.env` and fill in your Sanity credentials:

```env
VITE_APP_PROJECT_ID=your_sanity_project_id
VITE_APP_SANITY_TOKEN=your_sanity_api_token
```

> 💡 **Where to find these values:** Log in to [sanity.io/manage](https://www.sanity.io/manage), select your project, and navigate to **Settings → API → Tokens** to generate a token. Your Project ID is shown on the project overview page.

---

### 3. Set Up the Sanity Backend

```bash
cd backend

# Install dependencies
npm install

# Start Sanity Studio locally
npm run dev
```

Sanity Studio will be available at `http://localhost:3333`.

---

### 4. Run the Frontend Dev Server

From the project root:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 📖 Usage

### Populating Content in Sanity Studio

After launching the Sanity Studio, you can manage all content through its UI:

| Schema | Description |
|---|---|
| **Abouts** | Hero section — name, description, photo, social links, resume link |
| **Skills** | Skill icons shown in the Skills section |
| **Experiences** | Work experience with organisation, logo, and roles |
| **Work Experience** | Individual role entries (role, duration, description, link) |
| **Projects** | Portfolio projects with image, description, tech stacks, and links |
| **Main Projects** | Featured/highlighted projects with tags |
| **Contact** | Stores contact form submissions |

### Content Flow

```
Sanity Studio (backend) → Sanity CDN → React frontend (src/)
```

When content is published in Sanity, it is immediately available via the Sanity CDN and fetched by the React app using GROQ queries.

---

## 🗂️ Project Structure

```
portfolio/
├── backend/                    # Sanity Studio (CMS)
│   ├── schemas/
│   │   ├── abouts.js           # Hero / About schema
│   │   ├── contact.js          # Contact form submission schema
│   │   ├── experiences.js      # Work experience schema
│   │   ├── mainProjects.js     # Featured projects schema
│   │   ├── projects.js         # All projects schema
│   │   ├── skills.js           # Skills schema
│   │   ├── workExperience.js   # Individual role schema
│   │   └── index.js            # Schema registry
│   ├── sanity.config.js        # Sanity Studio configuration
│   ├── sanity.cli.js           # Sanity CLI configuration
│   └── package.json
│
├── src/                        # React frontend
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with mobile menu
│   │   ├── Hero.jsx            # Landing / hero section
│   │   ├── SkillsExperiences.jsx # Skills grid + work timeline
│   │   ├── Projects.jsx        # Project cards listing
│   │   ├── Contact.jsx         # Contact form
│   │   ├── Footer.jsx          # Footer
│   │   ├── style.js            # Shared Tailwind utility class map
│   │   └── index.js            # Component barrel export
│   ├── constants/
│   │   └── index.js            # Nav links + static skills data
│   ├── client.js               # Sanity client + image URL builder
│   ├── App.jsx                 # Root component
│   ├── App.css
│   ├── index.css               # Global styles + Tailwind directives
│   └── main.jsx                # React entry point
│
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration
├── tailwind.config.cjs         # Tailwind configuration + custom theme
├── postcss.config.cjs          # PostCSS configuration
└── package.json
```

---

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the **project root** with the following variables:

| Variable | Required | Description |
|---|---|---|
| `VITE_APP_PROJECT_ID` | ✅ Yes | Your Sanity project ID |
| `VITE_APP_SANITY_TOKEN` | ✅ Yes | Sanity API token (Editor or Write permissions) |

---

### Tailwind Custom Theme

The custom color palette is defined in `tailwind.config.cjs`:

| Token | Hex | Usage |
|---|---|---|
| `primary` | `#00ffaa` | Accent color, buttons, highlights |
| `dimWhite` | `#E5FFFA` | Primary text |
| `slate` | `#b3bbc6` | Secondary / muted text |
| `darkColor` | `#03110F` | Page background |
| `solidBlue` | `#0f1923` | Card / navbar background |

To change the accent color, update `primary` in `tailwind.config.cjs`.

---

### Customising the Navbar Links

Edit `src/constants/index.js` to update the navigation links:

```js
export const navLinks = [
  { id: "home",            title: "Home" },
  { id: "skillsexperience", title: "Skills & Experience" },
  { id: "projects",        title: "Projects" },
  { id: "contact",         title: "Contact Us" },
];
```

The `id` values must match the `id` attributes of the corresponding `<section>` elements in the components.

---

### Adding / Removing Skills (Static)

The skills grid in `src/constants/index.js` uses static icon data from `react-icons`. To add a new skill:

```js
import { SiDocker } from "react-icons/si";

// Add to the skills array:
{
  id: "skill-19",
  icon: SiDocker,
  name: "Docker",
},
```

---

## 📡 API Reference

This project uses [GROQ](https://www.sanity.io/docs/groq) (Graph-Relational Object Queries) to fetch data from Sanity. All queries are co-located with the components that consume them.

| Component | GROQ Query | Description |
|---|---|---|
| `App.jsx` | `*[_type == "abouts"]` | Fetches hero/profile data |
| `SkillsExperiences.jsx` | `*[_type == "experiences"]` | Fetches work experience |
| `Projects.jsx` | `*[_type == "projects"]` | Fetches all projects |
| `Contact.jsx` | `client.create(contact)` | Creates a contact document |

### Example Query

```js
import { client } from "./client";

const query = '*[_type == "projects"]';
client.fetch(query).then((data) => {
  console.log(data);
});
```

### Contact Form Submission Payload

```js
{
  _type: "contact",
  name: "Jane Doe",
  email: "jane@example.com",
  message: "Hello, I'd love to work with you!"
}
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. **Fork** the repository
2. Create a feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -m 'feat: add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Open a **Pull Request**

### Code Style Guidelines

- Use functional React components with hooks
- Follow the existing Tailwind utility class patterns in `style.js`
- Keep GROQ queries co-located with the components that use them
- Prefer `motion` variants from Framer Motion for any new animated elements

---

## 🗺️ Roadmap

- [ ] Add a blog section powered by Sanity portable text
- [ ] Add dark/light mode toggle
- [ ] Migrate static skills list to CMS-managed skills
- [ ] Add filtering/search for the Projects section
- [ ] Add loading skeleton screens for data-fetched sections
- [ ] Add unit tests with Vitest + React Testing Library
- [ ] Add CI/CD pipeline configuration (GitHub Actions)
- [ ] Add Open Graph image generation

---

## 📄 License

This project is **UNLICENSED** — all rights reserved by the author. You may fork it for personal portfolio use, but please do not redistribute or use it commercially without permission.

---

## 👤 Author & Acknowledgements

**Saikiran Patil**

- 🌐 Website: [saikiranpatil.netlify.app](https://saikiranpatil.netlify.app/)
- 💼 LinkedIn: [https://www.linkedin.com/in/saikiranpatil/](https://www.linkedin.com/in/saikiranpatil/)
- 🐙 GitHub: [https://github.com/saikiranpatil](https://github.com/saikiranpatil)

### Acknowledgements

- [Sanity.io](https://www.sanity.io/) — for the excellent headless CMS platform
- [Framer Motion](https://www.framer.com/motion/) — for the fluid animation library
- [React Icons](https://react-icons.github.io/react-icons/) — for the comprehensive icon collection
- [Tailwind CSS](https://tailwindcss.com/) — for the utility-first CSS framework

---

<p align="center">Made with ❤️ by <strong>Saikiran Patil</strong></p>
