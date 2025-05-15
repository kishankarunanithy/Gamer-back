import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./src/router.js";
import { errorHandler, notFoundHandler } from "./src/middlewares/controllerWrapper.js";
import { xss } from "express-xss-sanitizer";

const app = express();

// 🌐 Liste des origines autorisées
const allowedOrigins = [
  "http://localhost:5173",
  "https://gamer-front.vercel.app",
  "https://gamer-front-jzd46r5or-kishankarunanithys-projects.vercel.app"
];

// ✅ Middleware CORS configuré
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.set("trust proxy", 1);
app.use(express.json());
app.use(xss());

// 📂 Fichiers statiques
app.use("/uploads", express.static("public/uploads"));

// 🌍 Routes principales
app.use(router);

// ❌ Erreurs
app.use(notFoundHandler);
app.use(errorHandler);

// 🚀 Lancement du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur en ligne sur le port ${PORT}`);
});
