---
title: "GSB – Application de Gestion des Frais"
description: "Projet réalisé dans le cadre de l’Atelier de Professionnalisation 1 (AP1) du BTS SIO SLAM. Développement d’une application permettant la dématérialisation et la gestion des frais des visiteurs médicaux du laboratoire Galaxy Swiss Bourdin."
category: "scolaire"
technologies: ["C#", ".NET 8", "Windows Forms", "MariaDB", "ADO.NET", "Architecture 3-tiers"]
image: "/images/projects/appgsb.webp"
github: "https://github.com/Rubio-06/AppGSB"
date: 2025-06-20
featured: true
order: 3
---

# GSB – Application de Gestion des Frais

## Contexte

Ce projet a été développé dans le cadre de l’AP1 du BTS SIO SLAM.  
Il répond à un besoin du laboratoire pharmaceutique Galaxy Swiss Bourdin (GSB), qui souhaite moderniser et dématérialiser le processus de remboursement des frais professionnels des visiteurs médicaux.  
L’objectif consiste à remplacer les fiches papier par une solution logicielle centralisée, fiable et conforme aux règles internes.  
:contentReference[oaicite:0]{index=0}

---

## Objectifs du projet

- Mettre en place une application de gestion des frais pour plusieurs profils utilisateurs.
- Automatiser la création mensuelle des fiches de frais.
- Uniformiser les tarifs et types de frais pour l’ensemble du personnel.
- Faciliter le processus de validation ou de refus des frais par les comptables.
- Garantir une traçabilité complète et une gestion rigoureuse des données.  
  :contentReference[oaicite:1]{index=1}

---

## Profils utilisateurs et fonctionnalités

### Administrateur

- Gestion des comptes utilisateurs (création, modification, suppression).
- Gestion des types de frais et des tarifs associés.

### Visiteur médical

- Création automatique des fiches de frais chaque mois.
- Saisie des frais forfaitaires et hors forfait.
- Gestion des justificatifs.
- Export PDF des fiches.
- Consultation des fiches en cours et de l’historique.
- Respect des règles temporelles (saisie possible jusqu’au 10 du mois suivant).

### Comptable

- Recherche des fiches par utilisateur.
- Validation complète d’une fiche.
- Refus total ou partiel avec justification.  
  :contentReference[oaicite:2]{index=2}

---

## Technologies et architecture

### Technologies utilisées

- C# (.NET 8.0)
- Windows Forms
- MariaDB / MySQL
- ADO.NET (sans ORM)

### Architecture logicielle

- Architecture 3-tiers (Présentation / Métier / Données).
- Pattern DAO / Repository pour l’accès aux données.
- Centralisation de la gestion des erreurs.
- Sécurisation des accès et gestion des rôles.  
  :contentReference[oaicite:3]{index=3}

---

## Contraintes et livrables

### Contraintes

- Projet individuel.
- Utilisation obligatoire de WinForms et ADO.NET.
- Respect strict des règles de gestion métier.

### Livrables

- Application complète et fonctionnelle.
- MCD, MLD et MPD (méthode Merise).
- Base de données avec jeu de tests.
- Documentation technique (architecture, modèles de données, guide utilisateur, guide d’installation).
- Code source commenté et structuré.  
  :contentReference[oaicite:4]{index=4}

---

## Résultats du projet

- Application respectant l’ensemble des règles fonctionnelles imposées.
- Base de données normalisée et robuste.
- Architecture claire facilitant la maintenance.
- Interface adaptée à chaque profil utilisateur.
- Export PDF opérationnel et gestion des justificatifs.
- Projet exploitable pour l’épreuve E5 du BTS SIO.

---
