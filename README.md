# 🕹️ Gamer Challenges API

API RESTful pour la plateforme fictive Gamer Challenges, développée dans le cadre du projet de fin de formation DWWM.

---

## 🚀 Présentation

Cette API permet de gérer les utilisateurs, les défis, les soumissions vidéo, les catégories, la difficulté, l’authentification, et la modération des contenus pour la plateforme Gamer Challenges.

---

## 🛠️ Stack technique

- Node.js
- Express.js
- Base de données SQL (PostgreSQL ou équivalent)
- JWT (authentification)
- Multer (upload fichiers)
- Nodemailer (emails)
- Hébergement : **Railway**

---

## 📁 Structure du projet

```
├── config/
│   └── config.json         # Configuration DB
├── docs/
│   ├── cahier-des-charges/ # Spécifications et arborescence
│   └── swagger.yaml        # Documentation API
├── public/
│   └── uploads/            # Avatars et fichiers uploadés
├── src/
│   ├── controllers/        # Logique métier
│   ├── middlewares/        # Middlewares Express
│   ├── migrations/         # Scripts de migration/seed
│   ├── models/             # Modèles de données
│   ├── schemas/            # Validation Joi
│   ├── utils/              # Utilitaires (erreurs, mailer...)
│   └── router.js           # Routing principal
├── index.js                # Point d’entrée serveur
└── ...
```

---

## ⚙️ Installation & lancement local

1. **Cloner le dépôt**
   ```bash
   git clone [URL_DU_DEPOT]
   cd gamer-challenges-back
   ```
2. **Installer les dépendances**
   ```bash
   npm install
   ```
3. **Configurer les variables d’environnement**
   - Créer un fichier `.env` à la racine avec :
     ```env
     DB_HOST=localhost
     DB_PORT=5432
     DB_USER=postgres
     DB_PASSWORD=motdepasse
     DB_NAME=gamerchallenges
     JWT_SECRET=unSecretSuperSecurise
     SMTP_USER=adresse@email.com
     SMTP_PASS=motdepasseSMTP
     FRONTEND_URL=http://localhost:5173
     ```
4. **Lancer les migrations et seeds (si besoin)**
   ```bash
   node src/migrations/createTables.js
   node src/migrations/seedTables.js
   ```
5. **Démarrer le serveur**
   ```bash
   npm run dev
   ```
6. **Accéder à la documentation API**
   - [http://localhost:3000/api-docs](http://localhost:3000/api-docs) (Swagger)

---

## 🌍 Déploiement

- **Backend** : [Railway](https://railway.app)
- Variables d’environnement à configurer sur Railway

---

## 📚 Documentation

- [Swagger (OpenAPI)](./docs/swagger.yaml) — Documentation complète des endpoints
- [Cahier des charges](./docs/cahier-des-charges/cahier-des-charges.md)
- [Arborescence API](./docs/cahier-des-charges/arborescence-api.png)

---

## 👥 Équipe & Rôles

- **Sandrine** : Product Owner, Développeuse Full-Stack
- **Kishan** : Scrum Master & Lead Dev Front, Développeur Full-Stack
- **Mathias** : Lead Dev Back, Développeur Full-Stack
- **Benjamin** : Git Master, Développeur Full-Stack

---

## 🤝 Contribuer

Les contributions sont les bienvenues ! Merci de respecter la structure du projet et les conventions de code. 

---

## 🙏 Remerciements & contexte

Ce projet a été réalisé dans le cadre de la formation DWWM (Développeur Web et Web Mobile). Il a permis de mettre en pratique l’architecture d’une API REST, la gestion de la sécurité, l’authentification, la documentation et le déploiement cloud.

---

**Projet fictif à but pédagogique.**