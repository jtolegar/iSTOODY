/*
  ============================================================
  ASIGNATURAS
  ------------------------------------------------------------
  Nombre, descripción, precio, estado, color y enlaces.
  Los enlaces de Hotmart y las rutas de muestra se usan
  también en cada página de producto.
  ============================================================
*/

export type SubjectStatus = "available" | "soon";

export interface Subject {
  slug: string;
  name: string;
  short: string;
  accentVar: string;
  status: SubjectStatus;
  fromPrice?: string;
  href: string;
  glyph: string;
  sampleFile?: string; // PDF de muestra en /public/muestras
}

export const subjects: Subject[] = [
  {
    slug: "biologia",
    name: "Biología",
    short: "Bloque I completo: bioquímica y base química de la vida, listo para PAU.",
    accentVar: "var(--subject-bio)",
    status: "available",
    fromPrice: "Desde 19,99 €",
    href: "/biologia-pau",
    glyph: "Bio",
    sampleFile: "/muestras/biologia-muestra-tema1.pdf",
  },
  {
    slug: "filosofia",
    name: "Filosofía",
    short: "Autores antiguos y medievales con respuestas modelo PAU y comparativas.",
    accentVar: "var(--subject-filo)",
    status: "available",
    fromPrice: "Desde 19,99 €",
    href: "/filosofia-pau",
    glyph: "Fil",
    sampleFile: "/muestras/filosofia-muestra-platon.pdf",
  },
  {
    slug: "literatura",
    name: "Literatura",
    short: "Temario completo: movimientos, obras y autores con respuestas modelo.",
    accentVar: "var(--subject-lit)",
    status: "available",
    fromPrice: "Desde 14,99 €",
    href: "/literatura-pau",
    glyph: "Lit",
    sampleFile: "/muestras/literatura-muestra-tema1.pdf",
  },
  {
    slug: "historia",
    name: "Historia de España",
    short: "Preguntas cortas (temas 1-3) con respuestas modelo y repaso exprés.",
    accentVar: "var(--subject-hist)",
    status: "available",
    fromPrice: "Desde 14,99 €",
    href: "/historia-pau",
    glyph: "His",
    sampleFile: "/muestras/historia-muestra-tema1.pdf",
  },
  {
    slug: "quimica",
    name: "Química",
    short: "Enlace, reacciones, equilibrio y ácido-base explicados paso a paso.",
    accentVar: "var(--subject-quim)",
    status: "soon",
    href: "/#asignaturas", // PLACEHOLDER: futura /quimica-pau
    glyph: "Quí",
  },
];
