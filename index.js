import "dotenv/config"
import express from "express"
import cors from "cors"
import { router } from "./src/router.js"
import { errorHandler, notFoundHandler } from "./src/middlewares/controllerWrapper.js";
import { xss } from "express-xss-sanitizer";

const app = express();
app.set("trust proxy", 1); 

app.use(express.json());

app.use(cors({
  origin: 'https://gamer-front-jzd46r5or-kishankarunanithys-projects.vercel.app/',
  // Si vous prévoyez d'avoir plusieurs domaines ou des environnements de développement:
  // origin: ['https://votre-domaine-vercel.vercel.app/', 'http://localhost:3000/'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


app.get("/", (req, res) => {
    res.send("✅ API GamerChallenges est bien en ligne !");
  });
  
  app.use(router);
  
app.use(xss());

app.use("/uploads", express.static("public/uploads"));

app.use(router);

app.use(notFoundHandler);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Serveur en ligne sur le port ${PORT}`);
});
