# Release 1.1.1 Walkthrough

## Summary

This release includes a critical fix for the FAQ accordion functionality, alongside extensive UI polishes, navigation updates, and content refinements to better align with the brand identity.

## Changes

### 1. Fix: FAQ Accordion

The FAQ component had a logic error where the click event listener was being attached twice. This has been resolved by removing the redundant initialization.

### 2. Navigation & Links

- **Global Renaming**: Changed "Servicios" to "Soluciones" across Header, Footer, and section IDs.
- **Link Updates**: Updated navigation links (`#portafolio` -> `#proyectos`, `#agendar` -> `#contacto`) to match new section IDs.

### 3. UI Refinements

- **Header CTA**: Changed from "Cotizar" to "Comenzar" and added an animated arrow icon.
- **Hero Section**: Reduced background pattern opacity for a premium feel and updated the tagline to "Al siguiente nivel".
- **Services/Soluciones**: Renamed section to "Como funciona" and steps to "Paso #1", "Paso #2", etc.

### 4. Content Updates

- **FAQ**: Added details about the tech stack (Next.js, Node.js) and a new item about project types. Renamed "Indice Técnico" to "Dudas frecuentes".
- **Scheduler**: Updated the "Tipo de proyecto" options to be more granular (Ecommerce, Directory, WebApp, etc.).
- **Footer**: Updated version display to v1.1.1.
