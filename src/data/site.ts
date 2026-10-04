/*
  ============================================================
  CONFIGURACIÓN GLOBAL DEL SITIO
  ============================================================
*/

export const site = {
  name: "iSTOODY",
  tagline: "PAU Madrid · 2027",
  url: "https://istoody.com", // PLACEHOLDER: dominio definitivo
  description:
    "Materiales educativos premium para 2º de Bachillerato y PAU Madrid. Apuntes, infografías, ejercicios y soluciones en un único lugar.",
};

export const nav = [
  { label: "Asignaturas", href: "/#asignaturas" },
  { label: "Muestras gratis", href: "/#muestras" },
  { label: "Sobre iSTOODY", href: "/#sobre" },
];

export const social = [
  { label: "Instagram", href: "https://instagram.com/istoody" }, // PLACEHOLDER
  { label: "TikTok", href: "https://tiktok.com/@istoody" }, // PLACEHOLDER
  { label: "YouTube", href: "https://youtube.com/@istoody" }, // PLACEHOLDER
];

export const footerLinks = {
  asignaturas: [
    { label: "Biología", href: "/biologia-pau" },
    { label: "Filosofía", href: "/filosofia-pau" },
    { label: "Literatura", href: "/literatura-pau" },
    { label: "Historia", href: "/historia-pau" },
    { label: "Química", href: "/#asignaturas" },
  ],
  recursos: [
    { label: "Muestras gratis", href: "/#muestras" },
    { label: "Sobre iSTOODY", href: "/#sobre" },
    { label: "Contacto", href: "mailto:istoodycorp@gmail.com" },
  ],
  legal: [
    { label: "Aviso legal", href: "/legal/aviso-legal" },
    { label: "Privacidad", href: "/legal/privacidad" },
    { label: "Cookies", href: "/legal/cookies" },
    { label: "Condiciones de compra", href: "/legal/condiciones" },
  ],
};
