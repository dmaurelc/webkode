# Changelog

Todas las novedades y cambios notables del proyecto Webkode se documentarán en este archivo.

## [1.1.2] - 2026-01-07

### Añadido

- **Analytics**: Implementación de Google Analytics (GA4) con tracking global.
- **SEO**: Verificación de propiedad para Google Search Console.

## [1.1.1] - 2026-01-07

### Mejorado

- **Navegación & Links**:
  - Cambio global de "Servicios" a "Soluciones" (Header, Footer, IDs).
  - Actualización de links de navegación (`#portafolio` -> `#proyectos`, `#agendar` -> `#contacto`).
- **UI Header**: CTA actualizado de "Cotizar" a "Comenzar" con icono de flecha y ajustes de tipografía.
- **UI Hero**: Ajuste de opacidad en patrón de fondo y cambio de copy ("DISEÑO WEB MODERNO" -> "Al siguiente nivel").
- **Sección Soluciones**: Renombrado de "Nuestros Servicios" a "Como funciona" y "Servicio #" a "Paso #".
- **Contenido FAQ**:
  - Respuestas más detalladas sobre stack tecnológico (Next.js, Node.js).
  - Nuevo item sobre tipos de proyectos.
  - Cambio de título "Indice Técnico" a "Dudas frecuentes".
- **Scheduler**: Actualización de las opciones de servicios en el formulario de contacto.

### Corregido

- **FAQ Accordion**: Solucionado el bug que requería doble click para abrir/cerrar items.

## [1.1.0] - 2026-01-06

### Añadido

- **Identidad Visual Oficial**: Implementación del logo "V4 Thin Sq Solid" en Navbar y Footer.
- **Favicon**: Generación del favicon oficial de la marca.
- **Documentación**: Creación de `ROADMAP.md`, `IDEA_BOARD.md` y este `CHANGELOG.md`.

### Cambiado

- **Refinamiento del Footer**: Limpieza de enlaces obsoletos y actualización de redes sociales oficiales (LinkedIn, Instagram, GitHub).
- **Menú Móvil**: Rediseño de la animación de cierre ("X") para una transición perfecta y centrada.
- **Stack Tecnológico**: Actualización visual y descriptiva en el README (Astro 5 + Tailwind 4).

### Eliminado

- Sección "Recursos" del footer.
- Archivos temporales de demostración de logos (`LogoDemo.astro`).

### Corregido

- Errores de linting en componentes de FAQ (`!normal-case` -> `normal-case!`).
- Alineación del logo en dispositivos móviles.

---

## [1.0.0] - 2025-12-31

- Lanzamiento inicial de la arquitectura base con Astro y Tailwind CSS.
