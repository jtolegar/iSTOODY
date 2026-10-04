import type { Product } from "./product-types";

/*
  ============================================================
  PRODUCTO · LITERATURA · TEMARIO COMPLETO · PAU MADRID 2027
  ============================================================
*/

export const literatura: Product = {
  slug: "literatura",
  accentVar: "var(--subject-lit)",
  accentSoft: "rgba(138,46,70,0.08)",

  hotmartUrl: "https://pay.hotmart.com/L107873989V",
  sampleFile: "/muestras/literatura-muestra-tema1.pdf",
  price: "14,99 €",

  seo: {
    title: "Literatura PAU Madrid 2027 · Temario completo | Movimientos, obras y autores",
    description:
      "Temario completo de Lengua y Literatura para 2º de Bachillerato y PAU Madrid 2027: del Realismo a la actualidad, con respuestas modelo, autores clave y claves de examen.",
    canonical: "/literatura-pau",
    ogImage: "/og-literatura.png", // PLACEHOLDER
  },
  schema: {
    name: "Literatura PAU Madrid 2027 · Temario completo",
    description:
      "Temario completo de Literatura (siglo XIX a la actualidad) para PAU Madrid: movimientos, autores, obras, respuestas modelo y claves de examen.",
    price: "14.99",
  },

  hero: {
    eyebrow: "Literatura · PAU Madrid · 2027",
    title: "Literatura PAU Madrid 2027",
    subtitle:
      "El temario completo de literatura del siglo XIX a la actualidad, con cada movimiento, autor y obra explicados y con respuestas modelo listas para el examen.",
    includesLine: "Temario completo + Respuestas modelo + Autores y obras + Claves de examen",
    ctaPrimary: "Conseguir Literatura completa",
    ctaNote: "Pago único · Acceso mediante Hotmart",
    ctaSecondary: "Descargar muestra gratis",
  },

  includes: {
    eyebrow: "Qué incluye",
    title: "Todo el temario, tema a tema",
    items: [
      { title: "Temario completo", desc: "Cada tema con contexto, características, autores y obras clave." },
      { title: "Respuestas modelo", desc: "Redacciones con la extensión y el nivel que pide el examen." },
      { title: "Autores y obras", desc: "Lo imprescindible de cada autor, sin perderte en lo accesorio." },
      { title: "Claves de examen", desc: "Qué distinguir y cómo reconocer cada corriente en un fragmento." },
      { title: "Esquemas de repaso", desc: "Versiones breves para las semanas antes de la PAU." },
      { title: "Errores frecuentes", desc: "Las confusiones típicas entre movimientos y autores." },
    ],
  },

  index: {
    eyebrow: "Índice",
    title: "Qué vas a estudiar",
    note: "Índice orientativo del temario completo. La muestra gratuita corresponde al Tema 1.",
    blocks: [
      {
        title: "Literatura del siglo XIX a la actualidad",
        topics: [
          "Tema 1 · El Realismo y el Naturalismo (incluido en la muestra)",
          "Modernismo y Generación del 98",
          "Novecentismo, Vanguardias y Generación del 27",
          "Literatura desde 1939 a la actualidad",
        ],
      },
      { title: "Respuestas modelo PAU", topics: ["Redacción de examen por tema, con la extensión adecuada"] },
      { title: "Cómo reconocer cada corriente", topics: ["Claves para identificar un fragmento en el comentario"] },
    ],
  },

  gallery: {
    eyebrow: "Ejemplos",
    title: "Esto es lo que vas a estudiar",
    intro: "Ejemplos del material real. Descarga el Tema 1 (Realismo y Naturalismo) como muestra gratuita.",
    items: [
      { id: "contexto", label: "Contexto y características", kind: "text" },
      { id: "novela", label: "La novela realista", kind: "text" },
      { id: "autores", label: "Autores y obras clave", kind: "table" },
      { id: "naturalismo", label: "El Naturalismo", kind: "text" },
      { id: "respuesta", label: "Respuesta modelo PAU", kind: "text" },
      { id: "diferenciar", label: "Cómo diferenciar corrientes", kind: "table" },
    ],
  },

  pricing: {
    eyebrow: "Precio",
    planName: "Literatura · Temario completo",
    price: "14,99 €",
    features: [
      "Todo el temario (siglo XIX a la actualidad)",
      "Respuestas modelo por tema",
      "Autores y obras clave",
      "Claves para el comentario",
      "Esquemas de repaso",
      "Actualizaciones de la edición",
    ],
    cta: "Conseguir Literatura completa",
    note: "Pago único · Acceso mediante Hotmart",
  },

  faq: {
    eyebrow: "Dudas frecuentes",
    title: "Preguntas frecuentes",
    items: [
      { q: "¿Está adaptado a PAU Madrid?", a: "Sí. El temario y el formato de respuesta siguen el modelo de la PAU de la Comunidad de Madrid." },
      { q: "¿Cubre todo el temario de literatura?", a: "Sí. Es el temario completo de literatura del siglo XIX a la actualidad, tema a tema." },
      { q: "¿Trae respuestas modelo?", a: "Sí. Cada tema incluye una respuesta modelo con la extensión y el nivel de detalle adecuados para el examen." },
      { q: "¿Me sirve para el comentario de texto?", a: "Sí. Incluye claves para reconocer cada corriente y autor en un fragmento." },
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
    title: "Prepara Literatura con todo el temario y las respuestas resueltas.",
    primary: "Conseguir Literatura completa",
    secondaryLabel: "Ver todas las asignaturas",
    secondaryHref: "/#asignaturas",
  },
};
