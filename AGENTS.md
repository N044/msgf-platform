# Student Governance Platform (MSGF)

## Project Overview

Student Governance Platform (MSGF) is the official digital platform of Universitas Mikroskil that explains the Student Governance Framework.

The platform serves as a visual-first knowledge hub for:
- Students
- Student Leaders
- Student Affairs Office
- Advisors
- University Management

The website focuses on clarity, transparency, and accessibility.

---

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- React

---

## Architecture Principles

- Design System First
- Content Driven
- Component Driven
- Bilingual Ready
- Mobile First
- Accessibility First

---

## Project Structure

The project follows a modular architecture.

- app → Routing
- components → UI
- content → Static content
- lib → Shared logic
- styles → Global styling
- types → Shared types
- utils → Helper functions

Create new modules only when necessary.

## Coding Rules

- Use TypeScript.
- Use functional React components.
- Use Tailwind CSS only.
- Do not use inline styles.
- Keep components small and reusable.
- Prefer composition over duplication.
- Use PascalCase for components.
- Use kebab-case for folders.

---

## Content Rules

- Never hardcode long content inside React components.
- Store all page content inside `/src/content`.
- Keep components responsible only for presentation.
- Prepare the content structure for future bilingual support.

---

## UI Principles

The interface should be:

- Clean
- Minimal
- Professional
- Institutional
- Visual-first

Avoid unnecessary animations or decorative elements.

---

## Before Making Changes

Before creating new files or components:

- Reuse existing components whenever possible.
- Keep the project structure clean.
- Avoid unnecessary dependencies.
- Do not modify unrelated files.

## Protected Files

Do not modify these files unless explicitly requested:

- package.json
- postcss.config.mjs
- next.config.ts
- tsconfig.json
- src/app/layout.tsx
- src/styles/globals.css

If a task requires changes to these files, explain the reason first before making modifications.

## Naming Conventions

- Components: PascalCase
- Hooks: camelCase with `use` prefix
- Utility functions: camelCase
- Constants: UPPER_SNAKE_CASE
- Folder names: kebab-case
- Route folders: kebab-case

## Import Rules

- Prefer using the `@/*` import alias.
- Avoid long relative imports whenever possible.
- Group imports as:
  1. React / Next.js
  2. External libraries
  3. Internal modules
  4. Types
  5. Styles

  ## Git Rules

- Keep commits focused on a single purpose.
- Do not mix refactoring and feature development.
- Preserve a clean Git history.

## AI Collaboration

Before making changes:

- Read this AGENTS.md.
- Understand the current project structure.
- Explain the proposed changes before modifying protected files.
- Keep changes minimal.
- Do not refactor unrelated code.

## Documentation

When introducing a new architecture decision,
prefer documenting it inside `/docs`
instead of leaving the rationale only in code comments.

## Scope

This project is intended to become the official documentation platform for Student Governance at Universitas Mikroskil.

The platform is informational.

Avoid implementing authentication, dashboards, CRUD features, or databases unless explicitly requested.

## Visual Communication

Prefer explaining concepts using:

- diagrams
- flowcharts
- relationship maps
- timelines
- iconography

Avoid long paragraphs whenever possible.

Every page should communicate one main concept visually before using explanatory text.