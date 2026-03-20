# ATUNLu — Sitio Web Oficial

Sitio web oficial de **ATUNLu** (Asociación de Trabajadores de la Universidad Nacional de Luján), sindicato que representa a los trabajadores nodocentes de la UNLu.

---

## 🛠 Tecnologías utilizadas

| Tecnología | Versión | Descripción |
|---|---|---|
| [Astro](https://astro.build) | ^6.0.4 | Framework principal de generación de sitios estáticos |
| [TailwindCSS](https://tailwindcss.com) | ^4.2.1 | Framework de estilos utilitarios |
| [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) | ^0.5.19 | Plugin de tipografía enriquecida para contenido Markdown |
| [@tailwindcss/vite](https://tailwindcss.com/docs/installation/using-vite) | ^4.2.1 | Integración de TailwindCSS 4 con Vite |
| [Phosphor Icons](https://phosphoricons.com) | (CDN) | Librería de íconos SVG |
| [Google Fonts — Inter](https://fonts.google.com/specimen/Inter) | (CDN) | Tipografía principal del sitio |

**Requisitos de entorno:**
- Node.js `>= 22.12.0`

---

## 📁 Estructura del proyecto

```text
/
├── public/
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── images/          # Imágenes del sitio (novedades, institución, etc.)
│   │   ├── background.svg
│   │   └── whatsapp.svg
│   ├── components/
│   │   ├── HeaderAtunlu.astro       # Encabezado principal con navegación responsiva
│   │   ├── Hero.astro               # Sección hero de la página de inicio
│   │   ├── Institucional.astro      # Sección institucional (Historia, Autoridades)
│   │   ├── Servicios.astro          # Tarjetas de servicios (Deportes, Cultura, etc.)
│   │   ├── Novedades.astro          # Listado de las últimas novedades
│   │   ├── NovedadCard.astro        # Tarjeta individual de novedad
│   │   ├── ComisionDirectiva.astro  # Comisión Directiva vigente
│   │   ├── VideoInstitucional.astro # Embed de video institucional de YouTube
│   │   ├── Contacto.astro           # Sección de contacto
│   │   ├── Footer.astro             # Pie de página
│   │   ├── Whatsapp.astro           # Botón flotante de WhatsApp
│   │   └── Header.astro             # Header alternativo
│   ├── content/
│   │   └── novedades/               # Artículos de novedades en formato Markdown
│   ├── content.config.ts            # Definición de colecciones de contenido (Astro Content)
│   ├── layouts/
│   │   └── Layout.astro             # Layout base con header, footer y reveal-on-scroll
│   ├── pages/
│   │   ├── index.astro              # Página de inicio
│   │   ├── autoridades.astro        # Página de autoridades (Comisión Directiva)
│   │   ├── historia/                # Sección Historia de ATUNLu
│   │   ├── afiliacion/              # Información y formulario de afiliación
│   │   ├── novedades/               # Detalle de cada novedad
│   │   ├── ultimas-novedades.astro  # Archivo completo de novedades
│   │   └── ultimas-novedades/       # Rutas dinámicas de novedades
│   └── styles/
│       └── global.css               # Estilos globales y animaciones reveal
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

---

## 📄 Páginas del sitio

| Ruta | Descripción |
|---|---|
| `/` | Página de inicio con hero, novedades, info institucional, servicios y contacto |
| `/autoridades` | Comisión Directiva actual de ATUNLu |
| `/historia` | Historia del sindicato |
| `/afiliacion` | Información y pasos para afiliarse a ATUNLu |
| `/ultimas-novedades` | Listado completo de novedades y noticias |
| `/novedades/[slug]` | Detalle de cada novedad (ruta dinámica) |

---

## 📝 Colección de contenido: Novedades

Las novedades se gestionan como archivos **Markdown** en `src/content/novedades/`. Cada archivo requiere el siguiente frontmatter:

```yaml
---
title: "Título de la novedad"
description: "Breve descripción"
date: 2025-03-10
image: ../../assets/images/mi-imagen.jpg
imageAlt: "Descripción de la imagen"
category: "Deportes"
author: "Nombre Apellido"   # opcional
draft: false                # opcional, default: false
featured: false             # opcional, default: false
---
```

---

## ⚙️ Alias de rutas (TypeScript)

El proyecto usa alias definidos en `tsconfig.json` para importaciones limpias:

| Alias | Ruta real |
|---|---|
| `@components/*` | `src/components/*` |
| `@layouts/*` | `src/layouts/*` |
| `@styles/*` | `src/styles/*` |
| `@assets/*` | `src/assets/*` |
| `@data/*` | `src/data/*` |
| `@extras/*` | `src/extras/*` |

---

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando | Acción |
| :--- | :--- |
| `npm install` | Instala las dependencias |
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build` | Genera el sitio estático en `./dist/` |
| `npm run preview` | Previsualiza el build localmente antes de desplegar |
| `npm run astro ...` | Ejecuta comandos de la CLI de Astro |

---

## 📬 Contacto y datos del sindicato

- **Organización:** ATUNLu — Asociación de Trabajadores de la Universidad Nacional de Luján
- **Universidad:** Universidad Nacional de Luján (UNLu)
