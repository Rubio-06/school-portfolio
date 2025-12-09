# 🎓 Portfolio BTS SIO

Portfolio professionnel développé dans le cadre de ma formation en BTS SIO (Services Informatiques aux Organisations), option SLAM. Ce site présente mes projets, compétences et parcours académique.

## ✨ Fonctionnalités

- 🎨 **Design moderne** : Interface avec glassmorphism et animations fluides
- 📱 **Responsive** : Optimisé pour tous les appareils
- 🚀 **Performances** : Site statique généré avec Astro pour une vitesse optimale
- 📝 **Gestion de contenu** : Système de collections Astro pour les projets
- 🎭 **Animations** : Interactions dynamiques avec GSAP
- 🎯 **Sections principales** :
  - Présentation et compétences
  - Projets (avec filtres par catégorie)
  - Parcours scolaire et professionnel
  - Expériences et formations

## 🛠️ Technologies

- **Framework** : [Astro 5](https://astro.build) - Générateur de sites statiques
- **Styling** : [TailwindCSS 4](https://tailwindcss.com) - Framework CSS utility-first
- **Animations** : [GSAP 3](https://greensock.com/gsap/) - Bibliothèque d'animations
- **UI** : React 19 (pour les composants interactifs)
- **TypeScript** : Typage fort pour une meilleure maintenabilité
- **Markdown** : Gestion de contenu avec frontmatter

## 📁 Structure du projet

```text
/
├── public/                    # Assets statiques
│   └── icons/                # Icônes et images
├── src/
│   ├── components/
│   │   ├── layouts/          # Layouts de page
│   │   ├── sections/         # Sections de la page d'accueil
│   │   ├── shared/           # Composants partagés
│   │   └── ui/               # Composants UI réutilisables
│   ├── content/
│   │   ├── config.ts         # Configuration des collections
│   │   └── projects/         # Fichiers markdown des projets
│   ├── core/
│   │   ├── config/           # Configuration du contenu
│   │   └── types/            # Types TypeScript
│   ├── pages/
│   │   ├── index.astro       # Page d'accueil
│   │   ├── projects/         # Pages des projets
│   │   └── 404.astro         # Page d'erreur
│   ├── scripts/              # Scripts et animations
│   ├── styles/               # Styles globaux
│   └── utils/                # Fonctions utilitaires
├── astro.config.mjs          # Configuration Astro
├── tailwind.config.js        # Configuration TailwindCSS
└── tsconfig.json             # Configuration TypeScript
```

## 🚀 Commandes

Toutes les commandes sont exécutées depuis la racine du projet :

| Commande        | Action                                             |
| :-------------- | :------------------------------------------------- |
| `pnpm install`  | Installe les dépendances                           |
| `pnpm dev`      | Lance le serveur de développement (localhost:4321) |
| `pnpm build`    | Génère le site de production dans `./dist/`        |
| `pnpm preview`  | Prévisualise la version de production              |
| `pnpm lint`     | Vérifie le code avec ESLint                        |
| `pnpm lint:fix` | Corrige automatiquement les erreurs ESLint         |
| `pnpm format`   | Formate le code avec Prettier                      |

## 📝 Gestion des projets

Les projets sont gérés via le système de collections Astro. Pour ajouter un nouveau projet :

1. Créez un fichier `.md` dans `src/content/projects/`
2. Ajoutez le frontmatter avec les informations du projet :

```markdown
---
title: "Titre du projet"
description: "Description courte"
category: "scolaire" # ou "personnel"
technologies: ["React", "TypeScript", "TailwindCSS"]
image: "/path/to/image.jpg"
github: "https://github.com/..."
demo: "https://demo.com"
date: "2024-01-15"
featured: true
order: 1
---

## Contenu du projet

Votre description détaillée ici...
```

## 🎨 Personnalisation

### Modifier les informations personnelles

Les configurations se trouvent dans `src/core/config/` :

- `hero.ts` : Textes animés et présentation
- `about.ts` : Section à propos
- `skills.ts` : Compétences techniques
- `experience.ts` : Parcours professionnel
- `school.ts` : Formations
- `social.ts` : Liens réseaux sociaux

### Styles

- **Globaux** : `src/styles/global.css`
- **TailwindCSS** : Configuration dans `tailwind.config.js`
- **Composants** : Styles inline avec TailwindCSS

## 📄 Licence

Ce projet est à usage personnel dans le cadre de ma formation BTS SIO.

## 👤 Auteur

Étudiant en BTS SIO - SLAM
ABELA RUBIO

---

Développé avec 💙 en utilisant Astro, TailwindCSS et GSAP
