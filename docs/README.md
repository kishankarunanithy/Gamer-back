# Gamer Challenges

## Présentation Générale

Gamer challenges et une plateforme dédiée aux défis de jeux vidéo, permettant aux utilisateurs de proposer et relever des challenges sur différents jeux.
Cette platforme visent à rassembler les amateurs de jeux vidéo, quel que soit leurs niveau, cherchant à se mesurer aux autres et à partager leurs expériences.

## Présentation du Projet de Développement

### Le site comprend:
 - **une page d'accueil**, présentant les GamerChallenges, des défis en cours et populaires.
- Une **page de inscription/connection** qui permet de gérer les utilisateurs
- **page utilisateurs** pour permettre de créer de nouveaux challenges et visualiser ceux déjà posté. Possibilité de modifier les informations du profile
- **Page de détail d'un challenge** comprend la description, les règles et vidéos des participants
- **Page des challenges** 
- **Système de votation** offre la possibilité aux utilisateur de votés pour chaques challenges et participations.
- **Tableau des leaders** Affiche les utilisateurs ayant réalisé le plus de défis et obtenu le plus de votes


## Les fonctionnalités 
- Page d'accueil : 
  - Logo retour accueil
  - Affichages des défis en cours et populaires
  - Bouton de inscription/connection
  - Si connécté bouton profil logout
  - nav bar: page des challenges, leaderbord, favoris, profil, home
- page détails d'un challenges
  - système de vote, bouton de publication d'un challenge remplis, niveau de difficultées
- page des challenges
- Tableau des leaders
  - classement user ayant réailisé le plus de défis, et obtenu le plus de votes

## Evolutions possibles
- Système de commentaires 
- filtre de recherche
  - jeux, popularité, type, difficultées, catégories, popularités.
- système de récompenses
  - badges


## La liste des technologies 

Absolument ! Voici une version plus concise des spécifications techniques pour chaque technologie :

- Back-end

Node.js

Spécification : Environnement JavaScript serveur (V8), non bloquant, événementiel, pour applications réseau performantes.
Utilisation principale : API, serveurs web, temps réel, outils CLI.

**Express**
Spécification : Framework web Node.js minimaliste et flexible pour API et applications web (routage, middlewares, HTTP).
Utilisation principale : API RESTful, applications web (monocouche/multicouches).

**Sequelize**
Spécification : ORM Node.js (PostgreSQL, MySQL, SQLite, MariaDB, MSSQL) pour interagir avec les bases de données SQL via des objets JavaScript.
Utilisation principale : Interaction bases de données SQL, modélisation, migrations.

**API REST**
Spécification : Architecture logicielle pour services web (méthodes HTTP, stateless, interface uniforme, ressources).
Utilisation principale : Communication entre applications via HTTP.

**TypeScript**
Spécification : Sur-ensemble typé de JavaScript (compilation vers JS), ajoutant typage statique, interfaces, classes pour meilleure maintenabilité et détection d'erreurs.
Utilisation principale : Développement d'applications JS complexes (serveur et client).

**xss-sanitizer**
Spécification : Bibliothèque JS pour nettoyer les entrées utilisateur et prévenir les attaques XSS (suppression/encodage de scripts malveillants).
Utilisation principale : Sécurité web (filtrage des données utilisateur).

**cors**
Spécification : Mécanisme de sécurité navigateur (restreint requêtes inter-origines). Bibliothèque Node.js pour configurer les en-têtes d'autorisation.
Utilisation principale : Autoriser l'accès à l'API depuis différents domaines front-end.

**eslint**
Spécification : Linter JS/TS (analyse statique du code pour style, erreurs, règles configurées).
Utilisation principale : Qualité et cohérence du code.

**Bcrypt**
Spécification : Fonction de hachage de mot de passe robuste (salt, cost factor) contre les attaques par table arc-en-ciel.
Utilisation principale : Stockage sécurisé des mots de passe.

**PostgreSQL**
Spécification : SGBDR open source puissant et fiable (ACID, SQL standard, fonctionnalités avancées).
Utilisation principale : Stockage persistant, gestion des données et relations, requêtes complexes.

**PG**
Spécification : Client PostgreSQL pour Node.js (connexion, exécution de requêtes, gestion des résultats).
Utilisation principale : Interaction Node.js avec PostgreSQL.

**JOI**
Spécification : Bibliothèque de validation de schéma JS (structure et contenu des objets, intégrité des données entrantes).
Utilisation principale : Validation des données (utilisateur, requêtes API).

- Front-end

**React**
Spécification : Bibliothèque JS pour UI interactives (composants, DOM virtuel, flux unidirectionnel).
Utilisation principale : SPA, interfaces complexes, composants réutilisables.

**TypeScript**
Spécification : (Voir Back-end). Typage statique pour applications React plus robustes.
Utilisation principale : Développement d'applications React complexes et maintenables.

**Vite**
Spécification : Outil de build front-end rapide (modules ES natifs en dev, Rollup en prod, support TS/JSX/CSS).
Utilisation principale : Développement web moderne performant (notamment React).

CSS Vanilla / Bulma ...
**CSS Vanilla** : CSS pur (contrôle total, verbeux pour grands projets).
Utilisation principale : Petits projets, styles spécifiques, apprentissage CSS.

**Bulma**
Framework CSS Flexbox (grille responsive, composants pré-stylisés, personnalisation facile).
Utilisation principale : Développement rapide d'UI responsives.

**Jwt token**
Spécification : Standard ouvert pour transmettre des informations sécurisées (JSON signé), utilisé pour l'authentification/autorisation côté client.
Utilisation principale : Authentification et autorisation utilisateur.

**Zustand**
Spécification : Petite, rapide et simple librairie de gestion d'état pour React et JavaScript. Utilise des hooks pour créer et consommer des "stores" contenant l'état et les actions pour le modifier. Se concentre sur la simplicité et la performance avec une API minimaliste.
Utilisation principale : Gestion de l'état global ou local dans les applications React, alternative plus simple à Redux ou Context API pour de nombreux cas d'usage.

## Public visé
Tous les utilisateurs, amateur de jex vidéos et défis


## Navigateur compatible
Application disponnible sur tous les navigateurs destop/mobile, développement en mobile first.







