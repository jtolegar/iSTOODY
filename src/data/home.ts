/*
  ============================================================
  CONTENIDO DE LA HOME
  ============================================================
*/

export const hero = {
  eyebrow: "PAU Madrid · 2027",
  titleTop: "2º de Bachillerato y PAU.",
  titleBottom: "Todo lo importante, en un solo lugar.",
  subtitle:
    "Apuntes completos, infografías, ejercicios y materiales diseñados para estudiar mejor y llegar a la PAU sabiendo exactamente qué necesitas.",
  ctaPrimary: { label: "Ver asignaturas", href: "#asignaturas" },
  ctaSecondary: { label: "Ver una muestra", href: "#muestras" },
};

export const differentiation = {
  eyebrow: "Qué te llevas",
  title: "No son simplemente apuntes",
  intro:
    "Cada material combina teoría, práctica y repaso pensados alrededor de cómo se examina realmente la PAU.",
  pillars: [
    { title: "Teoría completa", desc: "Todo el temario explicado y revisado, sin lagunas ni relleno." },
    { title: "Adaptación a PAU", desc: "Enfocado a lo que entra y a cómo se pregunta en el examen." },
    { title: "Infografías", desc: "Procesos complejos convertidos en imágenes que se entienden." },
    { title: "Ejercicios", desc: "Práctica con el formato real de las preguntas de examen." },
    { title: "Respuestas modelo", desc: "Ejemplos de cómo responder para no perder puntos por la forma." },
    { title: "Repaso", desc: "Resúmenes y esquemas para las semanas antes del examen." },
    { title: "Errores frecuentes", desc: "Los fallos que más puntos cuestan, señalados de antemano." },
    { title: "Actualizaciones", desc: "Ajustes según la convocatoria PAU correspondiente." },
  ],
};

export const gallery = {
  eyebrow: "Por dentro",
  title: "Mira cómo es iSTOODY por dentro",
  intro:
    "Una muestra del tipo de material que encontrarás. Las imágenes son provisionales y se sustituirán por capturas reales.",
  items: [
    { id: "teoria", label: "Página de teoría", kind: "text" as const },
    { id: "infografia", label: "Infografía", kind: "diagram" as const },
    { id: "tabla", label: "Tabla resumen", kind: "table" as const },
    { id: "esquema", label: "Esquema", kind: "scheme" as const },
    { id: "ejercicio", label: "Ejercicio PAU", kind: "text" as const },
    { id: "solucion", label: "Solución", kind: "text" as const },
  ],
};

export const problemSolution = {
  eyebrow: "El problema",
  title: "Menos tiempo buscando. Más tiempo estudiando.",
  intro:
    "El material está repartido en apuntes del profe, PDFs sueltos, vídeos y páginas de internet. Nosotros lo ordenamos.",
  problems: [
    "PDFs desactualizados",
    "Apuntes incompletos",
    "Información contradictoria",
    "Contenido que no entra",
    "No saber cómo responder en PAU",
  ],
  solutions: [
    "Contenido estructurado",
    "Material actualizado",
    "Específico de tu asignatura y convocatoria",
    "Visual y fácil de repasar",
    "Orientado a cómo se puntúa el examen",
  ],
};

// PLACEHOLDER: no hay testimonios reales. show:false para ocultar.
export const testimonials = {
  show: true,
  eyebrow: "Testimonios",
  title: "Lo que dicen quienes lo usan",
  note: "Sección preparada. Se activará con testimonios reales verificados.",
  placeholders: [
    { quote: "Testimonio de alumno", result: "Resultado", name: "Nombre / iniciales" },
    { quote: "Testimonio de alumno", result: "Resultado", name: "Nombre / iniciales" },
    { quote: "Testimonio de alumno", result: "Resultado", name: "Nombre / iniciales" },
  ],
};

export const finalCta = {
  title: "Empieza a preparar la PAU con todo organizado desde el principio.",
  primary: { label: "Ver materiales", href: "#asignaturas" },
  secondary: { label: "Descargar una muestra", href: "#muestras" },
};

export const about = {
  eyebrow: "Sobre el proyecto",
  title: "Un sistema, no un montón de archivos",
  body: "iSTOODY nace para convertir un temario enorme y disperso en un sistema de estudio claro, visual y diseñado alrededor de lo que realmente necesita un alumno.",
  note: "Próximamente: información sobre el equipo que crea y revisa los materiales.", // PLACEHOLDER
};
