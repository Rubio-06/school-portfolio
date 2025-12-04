---
title: "MedManager – Application de Gestion Médicale"
description: "Projet scolaire réalisé dans le cadre de l’Atelier de Professionnalisation (AP2) du BTS SIO SLAM : refonte et modernisation de l’application MedManager destinée aux médecins partenaires du laboratoire GSB."
category: "scolaire"
technologies:
  ["C#", ".NET 8", "ASP.NET Core MVC", "Entity Framework Core", "MySQL", "Bootstrap", "JavaScript"]
image: "/images/projects/medmanager.webp"
github: "https://github.com/Rubio-06/MedManager-Refactor"
date: 2025-12-10
featured: true
order: 2
---

# MedManager – Application de Gestion Médicale

## Contexte

Ce projet a été réalisé dans le cadre de l'**AP2 du BTS SIO SLAM**, en réponse aux besoins du laboratoire **Galaxy Swiss Bourdin (GSB)**.  
L'entreprise souhaite moderniser son système de gestion médicale, permettant aux médecins partenaires de gérer :

- leurs patients,
- leurs ordonnances,
- leurs médicaments prescrits,
- ainsi que les antécédents et allergies des patients.  
  :contentReference[oaicite:1]{index=1}

L'objectif principal : **créer une application web sécurisée**, conforme au RGPD, facilitant la prise en charge médicale et minimisant les erreurs de prescription.

---

## Objectifs du projet

- Sécuriser l’accès aux données médicales sensibles.
- Permettre la gestion complète du cycle de vie d’un patient.
- Optimiser la création et le suivi des ordonnances.
- Empêcher les interactions médicamenteuses dangereuses.
- Fournir un tableau de bord avec statistiques et indicateurs clés.
  :contentReference[oaicite:2]{index=2}

---

## Stack technique

- **Framework :** ASP.NET Core MVC (.NET 8)
- **Langage :** C#
- **ORM :** Entity Framework Core
- **Base de données :** MySQL
- **UI :** HTML5 • CSS3 • Bootstrap 5
- **Sécurité :** ASP.NET Identity (authentification / rôles)
- **Architecture :** MVC + couche de services  
  :contentReference[oaicite:3]{index=3}

---

## Fonctionnalités développées

### Module d'authentification

- Connexion sécurisée des médecins
- Gestion des rôles et sessions
- Récupération de mot de passe

### Gestion des patients

- CRUD complet
- Upload de photo
- Gestion des allergies & antécédents
- Recherche avancée

### Gestion des ordonnances

- Création guidée d’ordonnance
- Sélection de médicaments
- Vérification automatique des contre-indications
- Export PDF
- Historique des prescriptions

### Gestion des médicaments

- Base de données complète
- Recherche multicritère
- Compatibilité / incompatibilités

### Tableau de bord

- Statistiques par pathologie / âge
- Indicateurs d’activité du médecin
- Graphiques illustratifs

Toutes ces fonctionnalités correspondent aux attentes du sujet officiel.
:contentReference[oaicite:4]{index=4}

---

## Défis techniques rencontrés

- Mise en place d’un système de **vérification automatique des interactions médicamenteuses**.
- Respect strict du **RGPD** et du cloisonnement des données (un médecin ne voit que ses patients).
- Conception du **modèle logique (MLD)** à partir du MCD fourni.
- Intégration d’un export PDF stable et sécurisé.
- Refonte du projet existant pour obtenir un code plus clair, maintenable et conforme aux bonnes pratiques .NET.

---

## Résultats

- Application complète, stable et testée
- Architecture propre et évolutive
- Base de données cohérente et normalisée
- Interface claire et adaptée aux utilisateurs médicaux
- Documentation complète (MCD, MLD, schémas, choix techniques)

---

## Livrables produits

- Documentation technique + dossier d’analyse
- MCD / MLD détaillé
- Diagramme d’architecture logicielle
- Code source documenté
- Jeu de données de test
- Rapport pour épreuve E4 & AP2  
  :contentReference[oaicite:5]{index=5}

---
