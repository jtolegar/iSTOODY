/*
  ============================================================
  MUESTRAS GRATIS (descargables)
  ------------------------------------------------------------
  Cada muestra es un PDF real en /public/muestras e indica de
  qué producto procede. Para añadir o cambiar una muestra:
  pon el PDF en /public/muestras y edita aquí.
  ============================================================
*/

export interface Sample {
  subject: string;
  accentVar: string;
  temaLabel: string; // qué tema es
  fromProduct: string; // de qué producto viene
  file: string; // ruta en /public
  kind: "text" | "table" | "scheme" | "diagram";
}

export const samples: Sample[] = [
  {
    subject: "Biología",
    accentVar: "var(--subject-bio)",
    temaLabel: "Tema 1 · La base química de la vida",
    fromProduct: "Biología · Bloque I (temas 1-5)",
    file: "/muestras/biologia-muestra-tema1.pdf",
    kind: "diagram",
  },
  {
    subject: "Filosofía",
    accentVar: "var(--subject-filo)",
    temaLabel: "Platón · Autores antiguos y medievales",
    fromProduct: "Filosofía · Antiguos y medievales",
    file: "/muestras/filosofia-muestra-platon.pdf",
    kind: "text",
  },
  {
    subject: "Literatura",
    accentVar: "var(--subject-lit)",
    temaLabel: "Tema 1 · Realismo y Naturalismo",
    fromProduct: "Literatura · Temario completo",
    file: "/muestras/literatura-muestra-tema1.pdf",
    kind: "text",
  },
  {
    subject: "Historia",
    accentVar: "var(--subject-hist)",
    temaLabel: "Tema 1.1 · Paleolítico y Neolítico",
    fromProduct: "Historia · Preguntas cortas (temas 1-3)",
    file: "/muestras/historia-muestra-tema1.pdf",
    kind: "table",
  },
];
