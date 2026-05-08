const base = import.meta.env.BASE_URL;

export const projects = [
  {
    title: "EDUCONECTA",
    description: "Plataforma educativa con autenticación y manejo de usuarios, con dashboard administrativo para aprobar nuevos docentes y gestionar clases.El sitema esta pensado para centralizar la gestion educativa de forma segura y escalable.",
    tech: ["React", "C#", ".NET","Sqlserver"],
    github: "https://github.com/Lauzari/Edu-Conecta",
    demo: "https://edu-conecta-psi.vercel.app/",
    image: `${base}images/Educonecta-captura.png`
  },
  {
    title: "DORY SHOES",
    description: "E-commerce de calzado con carrito de compras, panel administrativo para gestionar productos y pedidos. El proyecto se centra en brindar una experiencia de compra fluida y segura.",
    tech: ["React", "Node.js", "sqlite"],
    github: "https://github.com/Lauzari/Dory-Shoes",
    demo: "https://lauzari.github.io/Dory-Shoes/",
    image: `${base}images/Dory-shoes-captura.png`
  },
  {
    title: "MATEANDO",
    description: "E-commerce de productos materos con carrito de compras, login , registro de favoritos. El proyecto se enfoca en ofrecer una experiencia de compra amigable y personalizada para los amantes del mate.",
    tech: ["JavaScript", "Python", "Sqlite"],
    github: "https://github.com/Lauzari/Mateando_proyecto_final",
    demo: "https://mateando-tup.onrender.com/",
    image: `${base}images/mateando-captura.png`
  },
  {
    title: "BUSCANDO PELICULAS",
    description: "Aplicación interactiva con API externa. Buscador de peliculas que consume la API de The Movie Database (TMDb) para mostrar información actualizada sobre películas, incluyendo detalles, trailers y valoraciones. El proyecto se centra en brindar una experiencia de usuario atractiva y funcional para los amantes del cine.",
    tech: ["React", "API", "JavaScript"],
    github: "https://github.com/Lauzari/buscador-peliculas",
    demo: "https://harmonious-profiterole-0851a3.netlify.app/",
    image: `${base}images/Buscando-peliculas-captura.png`
  }
];