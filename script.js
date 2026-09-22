/* =========================================================
   Website behavior
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  hydrateSite();
  setupNavigation();
  setupTheme();
  setupRevealAnimations();
  setupPublicationFilters();
  setupActiveNavigation();
  setupManifoldCanvas();
  document.getElementById("year").textContent = new Date().getFullYear();
});

function hydrateSite() {
  const { profile, research, publications, projects, timeline, teaching } = SITE_DATA;

  document.title = `${profile.name} — Computer Vision × Geometry`;

  setText("nav-name", profile.name);
  setText("footer-name", profile.name);
  setText("hero-status", profile.status);
  setText("hero-summary", profile.heroSummary);
  setText("hero-affiliation", profile.affiliation);
  setText("about-intro", profile.aboutIntro);
  setText("contact-copy", profile.contactCopy);

  const cv = document.getElementById("nav-cv");
  cv.href = profile.cvUrl || "#";

  const aboutParagraphs = document.getElementById("about-paragraphs");
  profile.aboutParagraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    aboutParagraphs.appendChild(p);
  });

  renderLinks("social-links", profile.links, "pill-link", true);
  renderContact(profile);
  renderResearch(research);
  renderPublications(publications);
  renderProjects(projects);
  renderTimeline(timeline);
  renderTeaching(teaching);
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function safeHref(url) {
  return url && url.trim() ? url : "#";
}

function renderLinks(targetId, links, className, showArrow = false) {
  const target = document.getElementById(targetId);
  if (!target) return;

  links.forEach((link) => {
    const a = document.createElement("a");
    a.className = className;
    a.href = safeHref(link.url);
    a.target = "_blank";
    a.rel = "noopener";
    a.innerHTML = `${escapeHtml(link.label)}${showArrow ? " <span aria-hidden='true'>↗</span>" : ""}`;
    target.appendChild(a);
  });
}

function renderContact(profile) {
  const emailLink = document.getElementById("contact-email");

  emailLink.href =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`;

  emailLink.target = "_blank";
  emailLink.rel = "noopener";

  emailLink.querySelector("strong").textContent = profile.email;

  renderLinks("contact-links", profile.links, "pill-link", true);
}

function renderResearch(items) {
  const grid = document.getElementById("research-grid");

  items.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "research-card reveal";

    card.innerHTML = `
      <span class="research-number">${String(index + 1).padStart(2, "0")}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.description)}</p>
      <div class="tag-row">
        ${item.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
      </div>
    `;

    grid.appendChild(card);
  });
}

function renderPublications(publications, category = "All") {
  const list = document.getElementById("publication-list");
  const filtered =
    category === "All"
      ? publications
      : publications.filter((publication) => publication.category === category);

  list.innerHTML = "";

  filtered.forEach((publication) => {
    const article = document.createElement("article");
    article.className = "publication-item";

    const links = publication.links
      .map(
        (link) =>
          `<a class="mini-link" href="${safeHref(link.url)}" target="_blank" rel="noopener">${escapeHtml(link.label)} ↗</a>`
      )
      .join("");

    article.innerHTML = `
      <div class="publication-year">${escapeHtml(publication.year)}</div>
      <div>
        <h3 class="publication-title">${escapeHtml(publication.title)}</h3>
        <p class="publication-authors">${escapeHtml(publication.authors)}</p>
        <span class="publication-venue">${escapeHtml(publication.venue)}</span>
      </div>
      <div class="publication-links">${links}</div>
    `;

    list.appendChild(article);
  });

  setText(
    "publication-count",
    `${filtered.length} ${filtered.length === 1 ? "entry" : "entries"}`
  );
}

function setupPublicationFilters() {
  const publications = SITE_DATA.publications;
  const filters = ["All", ...new Set(publications.map((publication) => publication.category))];
  const container = document.getElementById("publication-filters");

  filters.forEach((filter, index) => {
    const button = document.createElement("button");
    button.className = `filter-button${index === 0 ? " active" : ""}`;
    button.type = "button";
    button.textContent = filter;

    button.addEventListener("click", () => {
      container.querySelectorAll(".filter-button").forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      renderPublications(publications, filter);
    });

    container.appendChild(button);
  });
}

function renderProjects(projects) {
  const grid = document.getElementById("project-grid");

  projects.forEach((project) => {
    const card = document.createElement("a");
    card.className = "project-card reveal";
    card.href = safeHref(project.url);
    card.target = "_blank";
    card.rel = "noopener";

    card.innerHTML = `
      <div class="project-topline">
        <span class="project-label">${escapeHtml(project.label)}</span>
        <span class="project-status">${escapeHtml(project.status)}</span>
      </div>
      <h3>${escapeHtml(project.title)}</h3>
      <p>${escapeHtml(project.description)}</p>
      <div class="project-footer">
        <div class="tag-row">
          ${project.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
        </div>
        <span class="project-arrow" aria-hidden="true">↗</span>
      </div>
    `;

    grid.appendChild(card);
  });
}

function renderTimeline(items) {
  const timeline = document.getElementById("timeline");

  items.forEach((item) => {
    const row = document.createElement("article");
    row.className = "timeline-item";

    row.innerHTML = `
      <div class="timeline-period">${escapeHtml(item.period)}</div>
      <div>
        <h3>${escapeHtml(item.role)}</h3>
        <div class="timeline-place">${escapeHtml(item.place)}</div>
        <p class="timeline-description">${escapeHtml(item.description)}</p>
      </div>
    `;

    timeline.appendChild(row);
  });
}

function renderTeaching(items) {
  const grid = document.getElementById("teaching-grid");

  items.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "teaching-card";

    card.innerHTML = `
      <span>${String(index + 1).padStart(2, "0")} / ${escapeHtml(item.type)}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.description)}</p>
    `;

    grid.appendChild(card);
  });
}

function setupNavigation() {
  const header = document.querySelector(".site-header");
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("site-nav");

  const updateHeader = () => {
    header.classList.toggle("scrolled", window.scrollY > 18);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  toggle.addEventListener("click", () => {
    const isOpen = toggle.classList.toggle("open");
    nav.classList.toggle("open", isOpen);
    document.body.classList.toggle("nav-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.classList.remove("open");
      nav.classList.remove("open");
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

function setupTheme() {
  const toggle = document.getElementById("theme-toggle");
  const stored = localStorage.getItem("portfolio-theme");

  if (stored === "light") {
    document.body.classList.add("light-theme");
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    localStorage.setItem(
      "portfolio-theme",
      document.body.classList.contains("light-theme") ? "light" : "dark"
    );
  });
}

function setupRevealAnimations() {
  const elements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((el) => observer.observe(el));
}

function setupActiveNavigation() {
  const sections = [...document.querySelectorAll("main section[id]")];
  const links = [...document.querySelectorAll(".site-nav a")];

  const onScroll = () => {
    const marker = window.scrollY + window.innerHeight * 0.32;
    let current = sections[0]?.id;

    sections.forEach((section) => {
      if (section.offsetTop <= marker) current = section.id;
    });

    links.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/*
  Animated background:
  a rotating 3D point cloud projected onto the hero canvas.
  No external library required.
*/
function setupManifoldCanvas() {
  const canvas = document.getElementById("manifold-canvas");
  const hero = document.querySelector(".hero");
  if (!canvas || !hero) return;

  const ctx = canvas.getContext("2d");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let width = 0;
  let height = 0;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let points = [];

  const makePoints = () => {
    points = [];
    const count = width < 700 ? 74 : 126;

    for (let i = 0; i < count; i++) {
      const u = Math.random() * Math.PI * 2;
      const v = Math.random() * Math.PI - Math.PI / 2;

      // Deformed sphere / manifold
      const r = 0.78 + 0.18 * Math.sin(3 * u) * Math.cos(2 * v);

      points.push({
        u,
        v,
        r,
        phase: Math.random() * Math.PI * 2
      });
    }
  };

  const resize = () => {
    const rect = hero.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    makePoints();
  };

  const project = (point, time) => {
    const rotation = time * 0.00009;
    const u = point.u + rotation;
    const v = point.v;

    let x = point.r * Math.cos(v) * Math.cos(u);
    let y = point.r * Math.sin(v);
    let z = point.r * Math.cos(v) * Math.sin(u);

    y += 0.07 * Math.sin(point.u * 2 + time * 0.0004 + point.phase);

    const tilt = -0.34;
    const yt = y * Math.cos(tilt) - z * Math.sin(tilt);
    const zt = y * Math.sin(tilt) + z * Math.cos(tilt);

    const scale = Math.min(width, height) * (width < 700 ? 0.32 : 0.42);
    const perspective = 1.8 / (2.5 - zt);

    return {
      x: width * (width < 1000 ? 0.5 : 0.72) + x * scale * perspective,
      y: height * 0.47 + yt * scale * perspective,
      z: zt,
      alpha: 0.22 + (zt + 1) * 0.16
    };
  };

  const draw = (time = 0) => {
    ctx.clearRect(0, 0, width, height);

    const projected = points.map((p) => project(p, time));

    ctx.lineWidth = 0.65;

    for (let i = 0; i < projected.length; i++) {
      const a = projected[i];

      for (let j = i + 1; j < projected.length; j++) {
        const b = projected[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);

        if (dist < 75) {
          const opacity = (1 - dist / 75) * 0.12;
          ctx.strokeStyle = `rgba(116, 163, 200, ${opacity})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    projected.forEach((p, index) => {
      const isAccent = index % 19 === 0;
      ctx.fillStyle = isAccent
        ? `rgba(92, 232, 216, ${Math.min(0.72, p.alpha + 0.2)})`
        : `rgba(145, 177, 205, ${p.alpha})`;

      ctx.beginPath();
      ctx.arc(p.x, p.y, isAccent ? 2.3 : 1.2, 0, Math.PI * 2);
      ctx.fill();
    });

    if (!reducedMotion) requestAnimationFrame(draw);
  };

  resize();
  window.addEventListener("resize", resize, { passive: true });
  draw(0);
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
