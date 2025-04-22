import { User, Challenge, Category, Difficulty, sequelize } from "../models/association.js";

// USER
console.log("🚧 Ajout de users de test...");
const userBob = await User.create({ pseudo: "Bob_le_bricoleur", email: "bob@bricoleur.com", password: "BobLeBricoleur123", role: "user"});
const userLouis = await User.create({ pseudo: "Louis", email: "louis@laBrocante.com", password: "LouisLaBrocante123", role: "user"});


// DIFFICULTY
console.log("🚧 Ajout de difficulté de test...");
const hardChallenge = await Difficulty.create({name: "Difficile", color: "#EC3C28"});

// CATEGORY
console.log("🚧 Ajout de categoies de test...");
const speedCategory = await Category.create({name: "Speed Run", color: "#EC3C28"});

// CHALLENGE
console.log("🚧 Ajout de challenges de test...");
const speedRun = await Challenge.create({name: "Speed Run", description: "Challenge qui va vite", video_url: "https://youtu.be/l4NaMSbirPE?si=5rNBVrWLiRSUHFKl", user_id: userLouis.id, category_id: speedCategory.id, difficulty_id: hardChallenge.id});

// ADD SUBMISSION'S USER TO CHALLENGE
console.log("🚧 Ajout de participants aux challenges...");
await speedRun.addUser(userLouis);

console.log("✅ Migration OK ! Fermeture de la base...");
await sequelize.close();