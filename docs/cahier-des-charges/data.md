# Modélisation

## MCD

![MCD](/docs/MCD.png)

## MLD

![MLD](/docs/MLD.png)

## Dictionnaire des données

### Table user

| Champ | Type  | Spécificités | Description |
| -------------- | ----------- | ------------ | ---------- | 
| id | INT |  PRIMARY KEY, NOT NULL, AUTO_INCREMENT | identifaction de l'utilisateur dans la base données |
| pseudo | VARCHAR(50) |  NOT NULL, UNIQUE | identification et affichage du pseudo de l'utilisateur |
| email | VARCHAR(100) |  NOT NULL, UNIQUE | identification et affichage de l'email de l'utilisateur |
| password | VARCHAR(50) | NOT NULL |  authentification de l'utilisateur |
| avatar | TEXT |  | personnalisation du profil l'utilisateur |
| role | ENUM | NOT NULL | ouvre les droits en fonction du rôle utilisateur |


### Table challenge

| Champ | Type  | Spécificités | Description |
| -------------- | ----------- | ------------ | ---------- | 
| id | INT |  PRIMARY KEY, NOT NULL, AUTO_INCREMENT | identifaction du challenge dans la base données |
| name | VARCHAR(50) |  NOT NULL, UNIQUE | identification et affichage du challenge |
| description | TEXT |  NOT NULL | détails du challenge réalisé |
| video | TEXT | NOT NULL | démonstration du challenge |
| author | ENTITY | NOT NULL | l'auteur du challenge |
| category | ENTITY | NOT NULL | type de challenge |
| difficulty | ENTITY | NOT NULL | niveau de difficulté du challenge |

## Table category

| Champ | Type  | Spécificités | Description |
| -------------- | ----------- | ------------ | ---------- | 
| id | INT |  PRIMARY KEY, NOT NULL, AUTO_INCREMENT | identifaction de la catégorie dans la base données |
| name | VARCHAR(50) |  NOT NULL, UNIQUE | identification et affichage de la catégorie |
| color | VARCHAR(7) |  NOT NULL | couleur associé à la catégorie |

## Table difficulty

| Champ | Type  | Spécificités | Description |
| -------------- | ----------- | ------------ | ---------- | 
| id | INT |  PRIMARY KEY, NOT NULL, AUTO_INCREMENT | identifaction de la difficulté dans la base données |
| name | VARCHAR(50) |  NOT NULL, UNIQUE | identification et affichage de la difficulté |
| color | VARCHAR(7) |  NOT NULL | couleur associé à la difficulté |

## Table d'association PARTICIPER entre les tables Utilisateur et Challenge

| Champ | Type  | Spécificités | Description |
| -------------- | ----------- | ------------ | ---------- | 
| user_id | ENTITY |  PRIMARY_KEY, NOT NULL | identifaction de l'utilisateur |
| challenge_id | ENTITY |  PRIMARY_KEY, NOT NULL | identification du challenge |
| video | TEXT | NOT NULL | vidéo du participant |
