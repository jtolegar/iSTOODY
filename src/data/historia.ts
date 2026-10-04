import type { Product } from "./product-types";

/*
  ============================================================
  PRODUCTO · HISTORIA DE ESPAÑA · PREGUNTAS CORTAS (T1-3)
  ============================================================
*/

export const historia: Product = {
  slug: "historia",
  accentVar: "var(--subject-hist)",
  accentSoft: "rgba(181,98,47,0.08)",

  hotmartUrl: "https://pay.hotmart.com/I107874093M",
  sampleFile: "/muestras/historia-muestra-tema1.pdf",
  price: "14,99 €",

  seo: {
    title: "Historia de España PAU Madrid 2027 · Preguntas cortas (temas 1-3)",
    description:
      "Preguntas cortas de Historia de España (temas 1-3) para 2º de Bachillerato y PAU Madrid 2027: respuestas modelo, conceptos y fechas clave, errores frecuentes y repaso exprés.",
    canonical: "/historia-pau",
    ogImage: "/og-historia.png", // PLACEHOLDER
  },
  schema: {
    name: "Historia de España PAU Madrid 2027 · Preguntas cortas (temas 1-3)",
    description:
      "Preguntas cortas de Historia de España (temas 1-3) para PAU Madrid: respuestas modelo, conceptos y fechas clave, errores frecuentes y repaso.",
    price: "14.99",
  },

  hero: {
    eyebrow: "Historia · PAU Madrid · 2027",
    title: "Historia de España · Preguntas cortas",
    subtitle:
      "Las preguntas cortas de los temas 1-3 resueltas: qué te piden exactamente, respuesta modelo de nivel alto, conceptos y fechas clave, y los errores que restan puntos.",
    includesLine: "Respuestas modelo + Conceptos y fechas + Errores frecuentes + Repaso exprés",
    ctaPrimary: "Conseguir las preguntas cortas",
    ctaNote: "Pago único · Acceso mediante Hotmart",
    ctaSecondary: "Descargar muestra gratis",
  },

  includes: {
    eyebrow: "Qué incluye",
    title: "Cada pregunta corta, resuelta de principio a fin",
    items: [
      { title: "Qué te piden", desc: "El núcleo real de cada pregunta, sin rodeos, para no irte por las ramas." },
      { title: "Respuesta modelo", desc: "Redacción de nivel alto con la extensión exacta del examen." },
      { title: "Cómo está construida", desc: "La respuesta desmontada paso a paso para que aprendas a redactarla." },
      { title: "Conceptos y fechas", desc: "Lo imprescindible que debes dominar de cada cuestión." },
      { title: "Errores frecuentes", desc: "Los fallos típicos, con la versión correcta al lado." },
      { title: "Repaso en 30 segundos", desc: "Un esquema exprés de cada pregunta para el último vistazo." },
    ],
  },

  index: {
    eyebrow: "Índice",
    title: "Qué vas a estudiar",
    note: "Preguntas cortas de los temas 1 a 3. La muestra gratuita corresponde a la cuestión 1.1.",
    blocks: [
      {
        title: "Tema 1 · La Prehistoria y la Edad Antigua",
        topics: [
          "Cuestión 1.1 · El Paleolítico y el Neolítico (incluida en la muestra)",
          "Resto de preguntas cortas del tema 1",
        ],
      },
      { title: "Tema 2", topics: ["Preguntas cortas del tema 2"] },
      { title: "Tema 3", topics: ["Preguntas cortas del tema 3"] },
    ],
  },

  gallery: {
    eyebrow: "Ejemplos",
    title: "Esto es lo que vas a estudiar",
    intro: "Ejemplos del material real. Descarga la cuestión 1.1 completa como muestra gratuita.",
    items: [
      { id: "piden", label: "Qué te piden", kind: "text" },
      { id: "puntos", label: "Puntos clave", kind: "text" },
      { id: "modelo", label: "Respuesta modelo", kind: "text" },
      { id: "conceptos", label: "Conceptos y fechas", kind: "table" },
      { id: "errores", label: "Errores frecuentes", kind: "text" },
      { id: "repaso", label: "Repaso en 30 segundos", kind: "scheme" },
    ],
  },

  pricing: {
    eyebrow: "Precio",
    planName: "Historia · Preguntas cortas (temas 1-3)",
    price: "14,99 €",
    features: [
      "Preguntas cortas de los temas 1-3",
      "Respuestas modelo de nivel alto",
      "Conceptos, fechas y personajes clave",
      "Errores frecuentes",
      "Repaso exprés por pregunta",
      "Actualizaciones de la edición",
    ],
    cta: "Conseguir las preguntas cortas",
    note: "Pago único · Acceso mediante Hotmart",
  },

  faq: {
    eyebrow: "Dudas frecuentes",
    title: "Preguntas frecuentes",
    items: [
      { q: "¿Está adaptado a PAU Madrid?", a: "Sí. Las preguntas y las respuestas siguen el modelo oficial de la PAU de la Comunidad de Madrid." },
      { q: "¿Qué temas cubre?", a: "Las preguntas cortas de los temas 1, 2 y 3 del temario, cada una con su respuesta modelo." },
      { q: "¿Trae las respuestas resueltas?", a: "Sí. Cada pregunta incluye una respuesta modelo de nivel alto y una explicación de cómo está construida." },
      { q: "¿Incluye el resto de temas?", a: "Provisional: este producto cubre los temas 1-3. Más adelante podrán publicarse otros tramos." }, // PLACEHOLDER
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
    title: "Prepara las preguntas cortas de Historia con cada respuesta ya resuelta.",
    primary: "Conseguir las preguntas cortas",
    secondaryLabel: "Ver todas las asignaturas",
    secondaryHref: "/#asignaturas",
  },
};
