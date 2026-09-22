# Computer Vision × Geometry — Academic Portfolio

A lightweight, responsive academic website for a PhD researcher working in **computer vision, geometry, representation learning, optimal transport, or geometric deep learning**.

The design takes high-level inspiration from strong academic portfolio patterns—clear biography, research areas, experience, publications, and contact—but the visual system and implementation here are original.

## 1. Project structure

```text
cv_geometry_portfolio/
├── index.html
├── styles.css
├── site-data.js
├── script.js
├── README.md
└── assets/
    ├── favicon.svg
    └── profile-placeholder.svg
```

There is **no build step** and **no JavaScript framework**. Everything runs with plain HTML/CSS/JS.

## 2. Open in VS Code

1. Unzip the folder.
2. Open VS Code.
3. Choose **File → Open Folder** and select `cv_geometry_portfolio`.
4. Install the VS Code extension **Live Server** by Ritwick Dey (optional but convenient).
5. Right-click `index.html`.
6. Click **Open with Live Server**.

You can also double-click `index.html` and open it directly in a browser.

## 3. Edit your personal information

Most content is in one file:

```text
site-data.js
```

Start with:

```js
profile: {
  name: "Your Name",
  status: "PhD Researcher · Computer Vision × Geometry",
  affiliation: "Your Department / University",
  email: "your.email@example.com",
  cvUrl: "assets/your-cv.pdf"
}
```

Then update:

- `research`
- `publications`
- `projects`
- `timeline`
- `teaching`
- social/profile links

## 4. Add your CV

Copy your CV into:

```text
assets/cv.pdf
```

Then change in `site-data.js`:

```js
cvUrl: "assets/cv.pdf"
```

## 5. Add your photograph

The current design intentionally uses a geometry/manifold visual instead of requiring a profile photo.

If you want a photo:

1. Put the image in `assets/profile.jpg`.
2. Add an `<img>` element in `index.html` wherever you want it.
3. Style it in `styles.css`.

A simple placeholder SVG is already included in `assets/profile-placeholder.svg`.

## 6. Add publications

Example:

```js
{
  year: "2026",
  title: "My Paper Title",
  authors: "Your Name, A. Coauthor, B. Coauthor",
  venue: "CVPR 2026",
  category: "Conference",
  links: [
    { label: "paper", url: "https://arxiv.org/..." },
    { label: "code", url: "https://github.com/..." }
  ]
}
```

The filter buttons are generated automatically from publication categories.

## 7. Main visual features

- Animated manifold / point-cloud hero background
- Geodesic visualization
- Coordinate-grid research aesthetic
- Dark/light theme toggle
- Mobile navigation
- Scroll reveal effects
- Active-section navigation highlighting
- Publication filters
- Responsive layout
- Reduced-motion accessibility support
- No third-party runtime dependency

## 8. Change colors

Edit the color variables near the top of `styles.css`:

```css
:root {
  --bg: #07101d;
  --text: #eef5ff;
  --mint: #5ce8d8;
  --blue: #7396ff;
  --violet: #d370ff;
}
```

## 9. Deploy free with GitHub Pages

Create a GitHub repository, for example:

```text
yourusername.github.io
```

Then from the project directory:

```bash
git init
git add .
git commit -m "Initial academic website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git push -u origin main
```

For a repository named exactly `YOUR_USERNAME.github.io`, GitHub Pages usually serves it at:

```text
https://YOUR_USERNAME.github.io/
```

For another repository name, enable Pages under **Repository → Settings → Pages**.

## 10. Suggested next customization

For a polished academic site, replace the placeholder content with:

- your full name and institute
- short 2–3 sentence research bio
- 3–5 core research themes
- selected publications
- Google Scholar
- GitHub
- LinkedIn
- arXiv
- downloadable CV
- current projects
- teaching/tutorials
- awards or news, if relevant

The website is intentionally designed so that you can update research content without changing the layout code.
