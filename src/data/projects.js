const base = import.meta.env.BASE_URL;

export const projects = [
  {
    title: "EDUCONECTA",
    description: "Aplicación web completa con frontend y backend.",
    tech: ["React", "Node.js", "SQL"],
    github: "https://github.com/Lauzari/Edu-Conecta",
    demo: "https://edu-conecta-psi.vercel.app/",
    image: `${base}images/Educonecta-captura.png`
  },
  {
    title: "DORY SHOES",
    description: "Sistema con autenticación y manejo de usuarios.",
    tech: ["React", "Express", "MongoDB"],
    github: "https://github.com/Lauzari/Dory-Shoes-Demo",
    demo: "https://dory-shoes-demo.vercel.app/",
    image: `${base}images/Dory-shoes-captura.png`
  },
  {
    title: "MATEANDO",
    description: "Aplicación interactiva con API externa.",
    tech: ["React", "API", "JavaScript"],
    github: "https://github.com/Lauzari/Mateando_proyecto_final",
    demo: "https://mateando-tup.onrender.com/",
    image: `${base}images/mateando-captura.png`
  },
  {
    title: "MIRATE TODO MARVEL",
    description: "Aplicación interactiva con API externa.",
    tech: ["React", "API", "JavaScript"],
    github: "https://github.com/Lauzari/Buscando-peliculas",
    demo: "https://mateando-tup.onrender.com/",
    image: `${base}images/Buscando-peliculas-captura.png`
  }
];