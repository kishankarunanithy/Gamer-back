# Modélisation

## MCD

![MCD](/docs/MCD.svg)

## MLD

![MLD](/docs/MLD.svg)

## Dictionnaire des données

### Table Utilisateur

| Champ | Type  | Spécificités | Description |
| -------------- | ----------- | ------------ | ---------- | 
| id | INT |  PRIMARY KEY, NOT NULL, AUTO_INCREMENT | identifaction de l'utilisateur dans la base données |
| Pseudo | VARCHAR(50) |  NOT NULL, UNIQUE | identification et affichage du pseudo de l'utilisateur |
| Email | VARCHAR(100) |  NOT NULL, UNIQUE | identification et affichage de l'email de l'utilisateur |
| Mot de passe | VARCHAR(50) | NOT NULL |  authentification de l'utilisateur |
| Avatar | TEXT |  | personnalisation du profil l'utilisateur |
| Role | BOOLEAN | NOT NULL | ouvre les droits administrateur |


### Table Challenge

| Champ | Type  | Spécificités | Description |
| -------------- | ----------- | ------------ | ---------- | 
| id | INT |  PRIMARY KEY, NOT NULL, AUTO_INCREMENT | identifaction du challenge dans la base données |
| Nom | VARCHAR(50) |  NOT NULL, UNIQUE | identification et affichage du challenge |
| Description | TEXT |  NOT NULL | détails du challenge réalisé |
| Votes | INT | |  nombre de votes d'un challenge |
| Vidéo | TEXT | NOT NULL | démonstration du challenge |
| Auteur | FOREIGN_KEY | NOT NULL | l'auteur du challenge |
| Catégorie | FOREIGN_KEY | NOT NULL | type de challenge |
| Difficulté | FOREIGN_KEY | NOT NULL | niveau de difficulté du challenge |

## Table Catégorie

| Champ | Type  | Spécificités | Description |
| -------------- | ----------- | ------------ | ---------- | 
| id | INT |  PRIMARY KEY, NOT NULL, AUTO_INCREMENT | identifaction de la catégorie dans la base données |
| Nom | VARCHAR(50) |  NOT NULL, UNIQUE | identification et affichage de la catégorie |
| Couleur | VARCHAR(7) |  NOT NULL | couleur associé à la catégorie |

## Table Difficulté

| Champ | Type  | Spécificités | Description |
| -------------- | ----------- | ------------ | ---------- | 
| id | INT |  PRIMARY KEY, NOT NULL, AUTO_INCREMENT | identifaction de la difficulté dans la base données |
| Nom | VARCHAR(50) |  NOT NULL, UNIQUE | identification et affichage de la difficulté |
| Couleur | VARCHAR(7) |  NOT NULL | couleur associé à la difficulté |

## Table d'association PARTICIPER entre les tables Utilisateur et Challenge

| Champ | Type  | Spécificités | Description |
| -------------- | ----------- | ------------ | ---------- | 
| user_id | FOREIGN_KEY |  PRIMARY_KEY, NOT NULL | identifaction de l'utilisateur |
| challenge_id | FOREIGN_KEY |  PRIMARY_KEY, NOT NULL | identification du challenge |
| Vidéo | TEXT | NOT NULL | vidéo du participant |
