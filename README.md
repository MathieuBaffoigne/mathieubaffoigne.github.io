# Portfolio — Mathieu Baffoigne

[Français](#français) · [English](#english)

---

## Français

### À propos

Portfolio personnel bilingue (FR/EN) de Mathieu Baffoigne, développeur fullstack (Angular · Python · AWS · Terraform). Construit avec Astro et Tailwind CSS : rendu statique, JavaScript minimal, thème clair/sombre et langue détectés automatiquement au premier chargement.

### Stack technique

- [Astro](https://astro.build) — rendu statique, content collections, i18n natif
- [Tailwind CSS](https://tailwindcss.com) v4
- TypeScript

### Fonctionnalités

- Bilingue FR/EN avec détection automatique de la langue du navigateur (repli sur l'anglais si indétectable) ; routing natif Astro (`/` en français, `/en/...` en anglais)
- Thème clair/sombre détecté automatiquement (`prefers-color-scheme`), repli sur le sombre
- Choix de langue et de thème mémorisés, jamais écrasés après un choix explicite
- Blog et projets gérés via les content collections Astro, chacun disponible en français et en anglais
- Logos des technologies rendus en SVG au moment du build (aucune dépendance chargée par le navigateur)
- Animations légères au scroll, transitions de page natives, aucun JavaScript superflu

### Développement

Lancer le serveur de dev en arrière-plan :

```sh
astro dev --background
```

Gérer le serveur avec `astro dev stop`, `astro dev status` et `astro dev logs`.

| Commande            | Action                                    |
| :------------------ | :----------------------------------------- |
| `npm install`        | Installe les dépendances                   |
| `npm run dev`         | Démarre le serveur de dev sur `localhost:4321` |
| `npm run build`        | Build de production dans `./dist/`         |
| `npm run preview`       | Prévisualise le build en local             |
| `npx astro check`       | Vérifie les types du projet                |

### Structure du projet

```text
src/
├── components/    # Header, Footer, ProjectCard, BlogCard, SkillGroup, TimelineItem...
├── content/       # Articles de blog et projets (sous-dossiers fr/ et en/)
├── data/          # Registre des liens et logos de technologies
├── i18n/          # Dictionnaire de traduction FR/EN
├── layouts/       # BaseLayout
├── pages/         # Routes FR (racine) et EN (/en/...)
└── styles/        # Design system (global.css)
```

---

## English

### About

Bilingual (FR/EN) personal portfolio for Mathieu Baffoigne, fullstack developer (Angular · Python · AWS · Terraform). Built with Astro and Tailwind CSS: static rendering, minimal JavaScript, light/dark theme and language auto-detected on first load.

### Tech stack

- [Astro](https://astro.build) — static rendering, content collections, native i18n
- [Tailwind CSS](https://tailwindcss.com) v4
- TypeScript

### Features

- Bilingual FR/EN with automatic browser language detection (falls back to English if undetectable); native Astro routing (`/` in French, `/en/...` in English)
- Light/dark theme auto-detected via `prefers-color-scheme`, falls back to dark
- Language and theme choices are remembered and never overridden once picked explicitly
- Blog and projects managed through Astro content collections, each available in French and English
- Tech logos rendered as SVG at build time (no dependency loaded by the browser)
- Light scroll animations, native page transitions, no unnecessary JavaScript

### Development

Start the dev server in the background:

```sh
astro dev --background
```

Manage it with `astro dev stop`, `astro dev status`, and `astro dev logs`.

| Command             | Action                                    |
| :------------------ | :----------------------------------------- |
| `npm install`        | Install dependencies                       |
| `npm run dev`         | Start the dev server at `localhost:4321`   |
| `npm run build`        | Build for production into `./dist/`        |
| `npm run preview`       | Preview the production build locally       |
| `npx astro check`       | Type-check the project                     |

### Project structure

```text
src/
├── components/    # Header, Footer, ProjectCard, BlogCard, SkillGroup, TimelineItem...
├── content/       # Blog posts and projects (fr/ and en/ subfolders)
├── data/          # Tech link and logo registry
├── i18n/          # FR/EN translation dictionary
├── layouts/       # BaseLayout
├── pages/         # FR routes (root) and EN routes (/en/...)
└── styles/        # Design system (global.css)
```
