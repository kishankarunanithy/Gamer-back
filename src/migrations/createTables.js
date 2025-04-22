import { sequelize } from "../models/connection.js"
import { User, Challenge, Category, Difficulty } from "../models/association.js"

console.log("🗑️ Supressions des tables existantes...");
await sequelize.drop();

console.log("🚧 Définition des tables...");
await sequelize.sync();

console.log("✅ Migration OK ! Fermeture de la base...");
await sequelize.close();