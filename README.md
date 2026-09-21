# Portfolio — Gianfranco Bisio

Sitio estático, sin dependencias ni build. HTML + CSS + un JS de 20 líneas.

## Por qué así

- **Sin framework, sin build.** Es un portfolio: tiene que abrir rápido en tres años y no romperse. Un sitio pesado contradice el pilar de base técnica.
- **Dirección editorial / tipográfica.** Una serif para display (Newsreader), una sans para texto (Inter), mucho aire, y un solo gesto de movimiento (reveal al entrar en viewport).
- **La forma es el vehículo, no el argumento.** El criterio está en los casos; el sitio no compite con ellos.

## Estructura

```
portfolio/
├── index.html            Portada + índice de los 3 casos
├── sobre-mi.html
├── casos/
│   ├── kio.html          Caso 01 — producto
│   ├── sistema.html      Caso 02 — sistema de agentes
│   └── flash-prop.html   Caso 03 — automatización
└── assets/
    ├── css/style.css     Design system del sitio (tokens + componentes)
    ├── js/main.js        Reveal al scroll
    └── img/              Capturas (pendiente)
```

## Design system del sitio

Todo vive en `:root` de `style.css`. Cambiar la identidad es cambiar tokens, no reescribir CSS.

- **Color:** papel cálido `#FAF8F5`, tinta `#16130F`, un solo acento `#A63D1E`
- **Tipografía:** `--serif` para display y blockquotes · `--sans` para texto y UI · `.label` para versalitas (el único guiño técnico)
- **Escala:** fluida con `clamp()` — no hay breakpoints para tipografía
- **Medidas:** `--measure` (34rem, ~65ch) para leer · `--wide` (70rem) para figuras
- **Movimiento:** `--ease` y una sola transición (`.reveal`)

## Reglas de contenido de un caso

1. **Contexto** — qué es, para quién, en qué etapa
2. **El problema** — la pregunta real, no la feature
3. **Mi rol** — qué decidí yo y qué hizo el equipo
4. **Las decisiones** — 2-3, con la tensión y el trade-off explícitos
5. **Los artefactos** — cada imagen prueba una decisión
6. **Qué aprendí** — honesto

**Mostrar lo descartado es lo que prueba criterio.** El caso de Kio tiene ocho variantes de card exploradas: ese es el arco.

## Pendientes

- [ ] Extraer las capturas de Figma (shot list en el vault: `carrera/portfolio.md`)
- [ ] Escribir el contenido real de los 3 casos
- [ ] Self-hostear las fuentes (hoy vienen de Google Fonts)
- [ ] Definir dominio y desplegar (Cloudflare Pages o Vercel)
- [ ] Página de CV en PDF

## Deploy

GitHub Pages, desde la rama `main`. URL: https://gigio20.github.io/portfolio/

Para verlo local: `npx serve .` (o abrir `index.html` directamente).

Las fuentes PNG de las imágenes viven en `_fuentes/`, que está en `.gitignore` — no se despliegan.
