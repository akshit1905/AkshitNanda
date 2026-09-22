/*
  ============================================================
  EDIT THIS FILE FIRST
  ============================================================
  Most text/content on the website is controlled here.
  Replace placeholders with your actual details and links.
*/

const SITE_DATA = {
  profile: {
    name: "Akshit Nanda",
    status: "PhD Researcher · Computer Vision × Geometry",
    affiliation: "PhD Researcher",
    email: "nandaakshit2000@gmail.com",
    cvUrl: "assets/CV.pdf",

    heroSummary:
      "I study geometry-aware representation learning for visual data, with interests in self-supervised learning, optimal transport, manifold-aware similarity, and structured latent spaces.",

    aboutIntro:
      "I am a PhD researcher working at the intersection of computer vision, geometry, and representation learning.",

    aboutParagraphs: [
      "My research asks a simple question: what changes when learning algorithms respect the intrinsic geometry of visual data instead of treating every representation as a point in a flat Euclidean space?",
      "I am particularly interested in geometry-aware data augmentation, contrastive and self-supervised representation learning, optimal transport, Riemannian metrics, non-Euclidean embeddings, and the geometry of learned latent spaces."
    ],

    contactCopy:
      "I am happy to discuss research collaborations, reading groups, academic opportunities, or ideas around computer vision, geometric deep learning, and representation learning.",

    links: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=rOJ-6twAAAAJ&hl=en" },
      { label: "GitHub", url: "https://github.com/akshit1905" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/akshit-nanda-704672218/" },
      { label: "arXiv", url: "#" }
    ]
  },

  research: [
    {
      title: "Geometry-aware representation learning",
      description:
        "Learning feature spaces whose distances and neighborhoods reflect meaningful structure in visual data rather than relying only on fixed Euclidean similarity.",
      tags: ["representation learning", "metric learning", "latent geometry"]
    },
    {
      title: "Self-supervised visual learning",
      description:
        "Designing better positive pairs, objectives, and inductive biases for learning useful visual representations without dense manual supervision.",
      tags: ["contrastive learning", "SSL", "positive pairs"]
    },
    {
      title: "Optimal transport for vision",
      description:
        "Using transport-based distances and couplings to model correspondence, interpolation, augmentation, and distributional structure in image and latent spaces.",
      tags: ["optimal transport", "Wasserstein", "Sinkhorn"]
    },
    {
      title: "Manifolds & non-Euclidean latent spaces",
      description:
        "Studying geodesics, learned Riemannian metrics, hyperbolic structure, and other non-Euclidean geometries for more faithful representation of complex data.",
      tags: ["Riemannian geometry", "geodesics", "manifolds"]
    }
  ],

  /*
    category is used by the publication filter.
    Suggested categories: "Journal", "Conference", "Preprint", "Workshop".
  */
  publications: [
    /*
    {
      year: "2026",
      title: "Your Paper Title on Geometry-Aware Visual Representation Learning",
      authors: "Your Name, Coauthor One, Coauthor Two",
      venue: "Preprint / Under Review",
      category: "Preprint",
      links: [
        { label: "paper", url: "#" },
        { label: "code", url: "#" }
      ]
    },
    {
      year: "2026",
      title: "A Better Positive-Pair Construction Strategy for Contrastive Learning",
      authors: "Your Name, Coauthor One",
      venue: "Conference / Workshop",
      category: "Conference",
      links: [
        { label: "paper", url: "#" },
        { label: "project", url: "#" }
      ]
    },
    {
      year: "2025",
      title: "Sample Earlier Research Project",
      authors: "Your Name, Collaborator",
      venue: "Workshop / Technical Report",
      category: "Workshop",
      links: [
        { label: "paper", url: "#" }
      ]
    },
    */
    {
      year: "2023",
      title: "Improve Algorithmic Fairness in Recidivism Prediction",
      authors: "Akshit Nanda, Author",
      venue: "IISER Mohali Masters Thesis",
      category: "Thesis",
      links: [
        { label: "paper", url: "#" }
      ]
    }
  ],

  projects: [
    {
      label: "Thesis direction",
      title: "Geometry-aware contrastive learning",
      description:
        "A research program exploring geometry-consistent augmentations, manifold-aware similarity, and adaptive latent metrics for self-supervised vision.",
      status: "Active",
      tags: ["SSL", "geometry", "vision"],
      url: "#"
    },
    {
      label: "Research prototype",
      title: "Latent geodesics for visual representations",
      description:
        "Tools for comparing straight-line interpolation with metric-aware paths in learned representation spaces and visualizing local geometric structure.",
      status: "Active",
      tags: ["geodesics", "Riemannian", "latent space"],
      url: "#"
    },
    {
      label: "Reproducibility",
      title: "Optimal transport experiments",
      description:
        "Experiments with Wasserstein distances, Sinkhorn regularization, transport-based augmentation, and geometry-sensitive diagnostics.",
      status: "Ongoing",
      tags: ["OT", "Sinkhorn", "evaluation"],
      url: "#"
    }
  ],

  timeline: [
    {
      period: "2024 — Present",
      role: "PhD Researcher",
      place: "Indian Institute of Technology Bhubaneswar (IIT BBS)",
      description:
        "Computer vision, geometric machine learning, self-supervised representation learning, and latent-space geometry."
    },
    {
      period: "2018 — 2023",
      role: "Bachelors and Masters in Mathematics with Minor in Data Science",
      place: "Indian Institute of Science, Education and Research Mohali (IISER Mohali)",
      description:
        "Studied abstract mathematics and did my masters thesis on Improving Algorithmic Fairness in Recidivism Prediction."
    }
  ],

  teaching: [
  {
    type: "Academic Teaching Assistant",
    title: "Computer Science & Artificial Intelligence Courses",
    description:
      "Teaching Assistant for Compiler Design, Computer Networks, Mathematical Foundations of AI, Machine Learning, and Deep Learning."
  },

  {
    type: "AICTE Programme · Government of India",
    title: "Python, Machine Learning & Deep Learning Labs",
    description:
      "Conducted hands-on laboratory sessions for an AICTE programme, covering Python Programming, Machine Learning, and Deep Learning."
  },

  {
    type: "Physics Wallah · EdTech",
    title: "Generative AI & Machine Learning Labs",
    description:
      "Teaching Assistant at Physics Wallah (PW), conducting practical laboratory sessions for courses in Generative AI and Machine Learning."
  }
]
};
