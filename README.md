# iSTOODY · Web

Materiales educativos premium para 2º de Bachillerato y PAU Madrid 2027.
Next.js 14 + React + TypeScript + Tailwind. Mobile-first, sin backend, listo para Vercel.

## Páginas
- **Home** → `/`
- **Biología · Bloque I** → `/biologia-pau` · 19,99 €
- **Filosofía** → `/filosofia-pau` · 19,99 €
- **Literatura · Temario completo** → `/literatura-pau` · 14,99 €
- **Historia · Preguntas cortas (temas 1-3)** → `/historia-pau` · 14,99 €
- **Legales** → `/legal/aviso-legal`, `/legal/privacidad`, `/legal/cookies`, `/legal/condiciones`

## Ejecutar en local
```bash
npm install
npm run dev     # http://localhost:3000
```
Next.js ya está en la versión parcheada 14.2.35.

### ⚠️ Fuentes (al abrirlo en tu máquina / Vercel)
Para la tipografía definitiva (Inter + Fraunces), abre `src/app/layout.tsx` y
sigue el comentario `⚠️ FUENTES`. Sin ese paso funciona igual, con fuentes del
sistema.

## Desplegar en Vercel
Sube a GitHub (conservando las carpetas) y Vercel republica solo en cada commit.

## Dónde editar cada cosa
| Quiero cambiar… | Archivo |
|---|---|
| **Colores** (marca + asignaturas) | `src/app/globals.css` (bloque TOKENS) |
| **Logo** | `src/components/Logo.tsx` |
| **Nav, redes, footer** | `src/data/site.ts` |
| **Tarjetas de asignatura + precios "Desde…"** | `src/data/subjects.ts` |
| **Muestras gratis (PDF y origen)** | `src/data/samples.ts` |
| **Textos home** | `src/data/home.ts` |
| **Cada producto** (precio, índice, FAQ, Hotmart) | `src/data/biologia.ts`, `filosofia.ts`, `literatura.ts`, `historia.ts` |
| **Textos legales** | `src/data/legal.ts` |

### Precios y enlaces de Hotmart
Cada producto tiene su `hotmartUrl` y `price` en su archivo de `src/data/`.
Enlaces configurados:
- Biología → `pay.hotmart.com/U106939936T`
- Filosofía → `pay.hotmart.com/F107401265I`
- Literatura → `pay.hotmart.com/L107873989V`
- Historia → `pay.hotmart.com/I107874093M`

### Muestras gratis (PDFs)
Están en `/public/muestras/`. Para sustituir una muestra, reemplaza el PDF con
el mismo nombre (o cambia la ruta en `src/data/samples.ts` y en el archivo de
producto correspondiente).

## Placeholders pendientes (busca "PLACEHOLDER")
- **Imágenes OG** (`/public/og-*.png`) para compartir en redes.
- **Datos legales**: `src/data/legal.ts` tiene campos `[ENTRE CORCHETES]` y un
  aviso visible "Pendiente de revisar". ⚠️ **Debes completarlos y revisarlos
  con un profesional antes de vender.** La plantilla no es asesoramiento legal.
- **Email de contacto** (`hola@istoody.com`) en `site.ts` y `legal.ts`.
- **Redes sociales** en `site.ts`.
- **Testimonios**: no hay reales. `data/home.ts` → `testimonials.show = false`
  para ocultar la sección.
- **Galerías de producto**: usan maquetas. Sustituibles por capturas reales.
- Alguna respuesta de FAQ marcada "Provisional:" (sale en cursiva).

## Crear una nueva asignatura (p. ej. Química)
1. Duplica un archivo de `src/data/` (p. ej. `biologia.ts` → `quimica.ts`),
   cambia textos, precio, `accentVar`, `hotmartUrl` y `sampleFile`.
2. Crea `src/app/quimica-pau/page.tsx` copiando otra página de producto y
   cambiando el import y el `temaLabel`.
3. En `src/data/subjects.ts` pon Química como `available` con su `href`.
4. Añade la ruta a `src/app/sitemap.ts`.
Todas las páginas usan el componente `ProductPage`, así que comparten estructura.

## Estructura
```
src/
├── app/
│   ├── layout.tsx, page.tsx, globals.css, sitemap.ts, robots.ts
│   ├── biologia-pau/ filosofia-pau/ literatura-pau/ historia-pau/
│   └── legal/ aviso-legal/ privacidad/ cookies/ condiciones/
├── components/        # reutilizables (Header, Footer, ProductPage, etc.)
└── data/              # TODO el contenido editable
public/muestras/       # PDFs de muestra gratis
```
