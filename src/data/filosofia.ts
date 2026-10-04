import type { Product } from "./product-types";

/*
  ============================================================
  PRODUCTO · FILOSOFÍA · PAU MADRID 2027
  ============================================================
*/

export const filosofia: Product = {
  slug: "filosofia",
  accentVar: "var(--subject-filo)",
  accentSoft: "rgba(107,82,163,0.08)",

  hotmartUrl: "https://pay.hotmart.com/F107401265I",
  sampleFile: "/muestras/filosofia-muestra-platon.pdf",
  price: "19,99 €",

  seo: {
    title: "Filosofía PAU Madrid 2027 | Autores, respuestas modelo y comparativas",
    description:
      "Filosofía para 2º de Bachillerato y PAU Madrid 2027: autores antiguos y medievales con fichas, respuestas modelo por niveles, comparativas y errores frecuentes.",
    canonical: "/filosofia-pau",
    ogImage: "/og-filosofia.png", // PLACEHOLDER
  },
  schema: {
    name: "Filosofía PAU Madrid 2027",
    description:
      "Filosofía para PAU Madrid: autores con fichas, respuestas modelo por niveles, comparativas y vocabulario filosófico esencial.",
    price: "19.99",
  },

  hero: {
    eyebrow: "Filosofía · PAU Madrid · 2027",
    title: "Filosofía PAU Madrid 2027",
    subtitle:
      "Cada autor explicado por problemas, con respuestas modelo listas para el examen, comparativas entre filósofos y los errores que más puntos cuestan.",
    includesLine: "Fichas de autor + Respuestas modelo + Comparativas + Vocabulario + Errores frecuentes",
    ctaPrimary: "Conseguir Filosofía completa",
    ctaNote: "Pago único · Acceso mediante Hotmart",
    ctaSecondary: "Descargar muestra gratis",
  },

  includes: {
    eyebrow: "Qué incluye",
    title: "Un sistema para dominar cada autor",
    items: [
      { title: "Fichas de autor", desc: "Contexto, mapa de su filosofía y tesis central de un vistazo." },
      { title: "Desarrollo por problemas", desc: "Realidad, conocimiento, ser humano y política, uno a uno." },
      { title: "Respuestas modelo", desc: "Redacciones de nivel alto listas para la PAU, por problema." },
      { title: "Respuestas por niveles", desc: "Suficiente, notable y sobresaliente, para que veas la diferencia." },
      { title: "Comparativas", desc: "Diálogos entre autores (Platón-Aristóteles, Platón-Nietzsche…)." },
      { title: "Errores frecuentes", desc: "Las confusiones típicas que delatan y restan nota." },
    ],
  },

  index: {
    eyebrow: "Índice",
    title: "Qué vas a estudiar",
    note: "Índice orientativo de la edición. La muestra gratuita corresponde al autor Platón.",
    blocks: [
      {
        title: "Filosofía antigua y medieval",
        topics: [
          "Platón (incluido en la muestra gratuita)",
          "Aristóteles",
          "Agustín de Hipona",
          "Tomás de Aquino",
        ],
      },
      { title: "Vocabulario filosófico esencial", topics: ["Conceptos clave por autor y frases modelo para el examen"] },
      { title: "Comparativas entre autores", topics: ["Diálogos clasificados por nivel (seguras, alternativas, avanzadas)"] },
      { title: "Respuestas modelo y por niveles", topics: ["Redacciones PAU por problema y rúbrica orientativa"] },
    ],
  },

  gallery: {
    eyebrow: "Ejemplos",
    title: "Esto es lo que vas a estudiar",
    intro: "Ejemplos del material real. Descarga el autor Platón completo como muestra gratuita.",
    items: [
      { id: "ficha", label: "Ficha de autor", kind: "table" },
      { id: "mapa", label: "Mapa de su filosofía", kind: "scheme" },
      { id: "vocab", label: "Vocabulario esencial", kind: "table" },
      { id: "respuesta", label: "Respuesta modelo PAU", kind: "text" },
      { id: "comparativa", label: "Comparativas", kind: "text" },
      { id: "errores", label: "Errores frecuentes", kind: "text" },
    ],
  },

  pricing: {
    eyebrow: "Precio",
    planName: "Filosofía · Antiguos y medievales",
    price: "19,99 €",
    features: [
      "Fichas de todos los autores de la edición",
      "Desarrollo por problemas",
      "Respuestas modelo y por niveles",
      "Comparativas entre autores",
      "Vocabulario y errores frecuentes",
      "Actualizaciones de la edición",
    ],
    cta: "Conseguir Filosofía completa",
    note: "Pago único · Acceso mediante Hotmart",
  },

  faq: {
    eyebrow: "Dudas frecuentes",
    title: "Preguntas frecuentes",
    items: [
      { q: "¿Está adaptado a PAU Madrid?", a: "Sí. Incluye el texto y los autores del corpus oficial de la Comunidad de Madrid y el formato de respuesta que pide el examen." },
      { q: "¿Qué autores incluye?", a: "Los autores antiguos y medievales de la edición, cada uno con ficha, desarrollo por problemas, respuestas modelo y comparativas." },
      { q: "¿Trae las respuestas modelo del examen?", a: "Sí. Cada problema incluye una respuesta de nivel alto redactada, además de ejemplos por niveles (suficiente, notable, sobresaliente)." },
      { q: "¿Incluye el texto oficial?", a: "Sí, con su localización, tema, tesis y estructura argumentativa comentadas." },
      { q: "¿Recibiré futuras correcciones?", a: "Sí. La compra incluye las actualizaciones de la edición correspondiente a tu convocatoria." },
      { q: "¿Cómo recibo el producto después de pagar?", a: "El acceso se gestiona a través de Hotmart tras el pago; recibirás las instrucciones en tu correo." },
      { q: "¿Puedo usarlo en tablet?", a: "Sí. Está pensado para leerse en tablet, portátil o móvil." },
    ],
  },

  about: {
    eyebrow: "Sobre el proyecto",
    title: "Pensado alrededor del examen",
    body: "iSTOODY nace para convertir un temario enorme y disperso en un sistema de estudio claro, visual y diseñado alrededor de lo que realmente necesita un alumno.",
    note: "Próximamente: información sobre el creador y los revisores de los materiales.", // PLACEHOLDER
  },

  finalCta: {
    title: "Prepara Filosofía con cada autor y cada respuesta ya resueltos.",
    primary: "Conseguir Filosofía completa",
    secondaryLabel: "Ver todas las asignaturas",
    secondaryHref: "/#asignaturas",
  },
};
