import type { Product } from "./product-types";

/*
  ============================================================
  PRODUCTO · BIOLOGÍA · BLOQUE I (TEMAS 1-5) · PAU MADRID 2027
  ------------------------------------------------------------
  Precio, índice, FAQ y enlace Hotmart. Editable aquí.
  ============================================================
*/

export const biologia: Product = {
  slug: "biologia",
  accentVar: "var(--subject-bio)",
  accentSoft: "rgba(47,125,91,0.08)",

  hotmartUrl: "https://pay.hotmart.com/U106939936T?off=qbbho0k0",
  sampleFile: "/muestras/biologia-muestra-tema1.pdf",
  price: "19,99 €",

  seo: {
    title: "Biología PAU Madrid 2027 · Bloque I | Apuntes, ejercicios e infografías",
    description:
      "Bloque I de Biología (temas 1-5) para 2º de Bachillerato y PAU Madrid 2027: bioquímica con apuntes revisados, infografías, ejercicios tipo PAU, soluciones y repaso.",
    canonical: "/biologia-pau",
    ogImage: "/og-biologia.png", // PLACEHOLDER
  },
  schema: {
    name: "Biología PAU Madrid 2027 · Bloque I (temas 1-5)",
    description:
      "Bloque I de Biología (bioquímica) para 2º de Bachillerato y PAU Madrid: apuntes, infografías, ejercicios, soluciones y repaso.",
    price: "19.99",
  },

  hero: {
    eyebrow: "Biología · Bloque I · PAU Madrid 2027",
    title: "Biología PAU Madrid 2027 · Bloque I",
    subtitle:
      "El Bloque I completo (temas 1-5, bioquímica) para empezar 2º de Bachillerato con la base de Biología perfectamente organizada y preparada para la PAU.",
    includesLine: "Apuntes + Infografías + Ejercicios + Soluciones + Repaso",
    ctaPrimary: "Conseguir el Bloque I",
    ctaNote: "Pago único · Acceso mediante Hotmart",
    ctaSecondary: "Descargar muestra gratis",
  },

  includes: {
    eyebrow: "Qué incluye",
    title: "Todo el Bloque I, de principio a fin",
    items: [
      { title: "Apuntes completos", desc: "Los 5 temas del Bloque I explicados de forma estructurada y rigurosa." },
      { title: "Infografías", desc: "Procesos como el enlace químico o el agua, visualizados con claridad." },
      { title: "Ejercicios PAU", desc: "Preguntas orientadas al formato real del examen de Madrid." },
      { title: "Soluciones", desc: "Respuestas completas y bien planteadas para corregirte." },
      { title: "Resúmenes", desc: "El núcleo PAU de cada tema para el repaso final." },
      { title: "Errores frecuentes", desc: "Los fallos típicos que restan puntos, señalados por tema." },
    ],
  },

  index: {
    eyebrow: "Índice",
    title: "Qué vas a estudiar",
    note: "El Bloque I cubre los cinco temas de bioquímica. Los bloques II-V llegarán en próximas ediciones.",
    blocks: [
      {
        title: "Bloque I · Bioquímica (incluido)",
        topics: [
          "Tema 1 · La base química de la vida",
          "Tema 2 · Glúcidos",
          "Tema 3 · Lípidos",
          "Tema 4 · Proteínas y enzimas",
          "Tema 5 · Ácidos nucleicos",
        ],
      },
      { title: "Bloque II · Biología celular", topics: ["Próximamente"] },
      { title: "Bloque III · Metabolismo", topics: ["Próximamente"] },
      { title: "Bloque IV · Genética y biología molecular", topics: ["Próximamente"] },
      { title: "Bloque V · Microbiología, biotecnología e inmunología", topics: ["Próximamente"] },
    ],
  },

  gallery: {
    eyebrow: "Ejemplos",
    title: "Esto es lo que vas a estudiar",
    intro: "Ejemplos del material real del Bloque I. Descarga el Tema 1 completo como muestra gratuita.",
    items: [
      { id: "enlaces", label: "Enlaces químicos", kind: "scheme" },
      { id: "carbono", label: "El átomo de carbono", kind: "diagram" },
      { id: "agua", label: "La molécula de agua", kind: "diagram" },
      { id: "propiedades", label: "Propiedades del agua", kind: "table" },
      { id: "sales", label: "Sales minerales", kind: "text" },
      { id: "osmosis", label: "Ósmosis y medio celular", kind: "table" },
    ],
  },

  pricing: {
    eyebrow: "Precio",
    planName: "Biología · Bloque I (temas 1-5)",
    price: "19,99 €",
    features: [
      "Los 5 temas del Bloque I",
      "Apuntes completos",
      "Infografías",
      "Ejercicios tipo PAU",
      "Soluciones",
      "Actualizaciones de la edición",
    ],
    cta: "Conseguir el Bloque I",
    note: "Pago único · Acceso mediante Hotmart",
  },

  faq: {
    eyebrow: "Dudas frecuentes",
    title: "Preguntas frecuentes",
    items: [
      { q: "¿Está adaptado a PAU Madrid?", a: "Sí. El material está enfocado a la PAU de la Comunidad de Madrid y al modelo oficial 2026-27." },
      { q: "¿Qué incluye exactamente el Bloque I?", a: "Los cinco temas de bioquímica (base química de la vida, glúcidos, lípidos, proteínas y enzimas, y ácidos nucleicos) con apuntes, infografías, ejercicios, soluciones y repaso." },
      { q: "¿Y el resto de bloques?", a: "Los bloques II a V (célula, metabolismo, genética e inmunología) se publicarán en próximas ediciones. De momento se vende el Bloque I por separado." },
      { q: "¿Sirve para estudiar durante el curso?", a: "Sí. Cubre todo el Bloque I del temario, así que puedes usarlo desde el principio de 2º de Bachillerato y no solo para el repaso." },
      { q: "¿Recibiré futuras correcciones del material?", a: "Sí. La compra incluye las actualizaciones de la edición del Bloque I correspondiente a tu convocatoria." },
      { q: "¿Cómo recibo el producto después de pagar?", a: "El acceso se gestiona a través de Hotmart tras completar el pago; recibirás las instrucciones en tu correo." },
      { q: "¿Puedo usarlo en tablet?", a: "Sí. El material está pensado para leerse cómodamente en tablet, portátil o móvil." },
      { q: "¿Puedo imprimir los apuntes?", a: "Provisional: pendiente de confirmar." }, // PLACEHOLDER
    ],
  },

  about: {
    eyebrow: "Sobre el proyecto",
    title: "Pensado alrededor del examen",
    body: "iSTOODY nace para convertir un temario enorme y disperso en un sistema de estudio claro, visual y diseñado alrededor de lo que realmente necesita un alumno.",
    note: "Próximamente: información sobre el creador y los revisores de los materiales.", // PLACEHOLDER
  },

  finalCta: {
    title: "Empieza Biología con el Bloque I perfectamente organizado.",
    primary: "Conseguir el Bloque I",
    secondaryLabel: "Ver todas las asignaturas",
    secondaryHref: "/#asignaturas",
  },
};
