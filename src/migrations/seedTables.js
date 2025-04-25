import { User, Challenge, Category, Difficulty, sequelize } from "../models/association.js";

// USER
console.log("🚧 Ajout de users de test...");
const userBob = await User.create({ pseudo: "Bob_le_bricoleur", email: "bob@bricoleur.com", password: "BobLeBricoleur!123", role: "user"});
const userLouis = await User.create({ pseudo: "Louis", email: "louis@laBrocante.com", password: "LouisLaBrocante!123", role: "user"});
const userTurbo = await User.create({ pseudo: "Turbo", email: "turbo@lescargot.com", password: "TurboLescargot!123", role: "user"});
const userBidibulle = await User.create({ pseudo: "Bidibulle", email: "buble@gum.com", password: "BubleGum!123", role: "user"});


// DIFFICULTY
console.log("🚧 Ajout de difficulté de test...");
const easyChallenge = await Difficulty.create({name: "Facile", color: "#31DE76"});
const moyenChallenge = await Difficulty.create({name: "Moyen", color: "#EC9E28"});
const hardChallenge = await Difficulty.create({name: "Difficile", color: "#EC3C28"});

// CATEGORY
console.log("🚧 Ajout de categoies de test...");
const speedCategory = await Category.create({name: "Speed Run", color: "#EC3C28"});
const foodCategory = await Category.create({name: "Fast & Food", color: "#31DE76"});
const raceCategory = await Category.create({name: "Snail race", color: "#EC9E28"});
const battleCategory = await Category.create({name: "Battle", color: "#EC3C28"});

// CHALLENGE
console.log("🚧 Ajout de challenges de test...");
const speedRun = await Challenge.create({name: "Speed Run", description: "Challenge qui va vite, qui sera le premier à franchir la ligne de départ", video_url: "https://youtu.be/l4NaMSbirPE?si=5rNBVrWLiRSUHFKl", user_id: userLouis.id, category_id: speedCategory.id, difficulty_id: hardChallenge.id});
const speedWalk = await Challenge.create({name: "Fast & Food", description: "L'usine à burger, qui engloutira le plus de burger dans le temps imparti", video_url: "https://youtu.be/l4NaMSbirPE?si=5rNBVrWLiRSUHFKl", user_id: userBob.id, category_id: foodCategory.id, difficulty_id: moyenChallenge.id});
const snailRace = await Challenge.create({name: "Snail Race", description: "Course épique qui va vous décoiffer la coquille", video_url: "https://youtu.be/l4NaMSbirPE?si=5rNBVrWLiRSUHFKl", user_id: userTurbo.id, category_id: raceCategory.id, difficulty_id: easyChallenge.id});
const battle = await Challenge.create({name: "La grande Bateille", description: "Livrez une bataille sans merci et remporter tout les BubleGum", video_url: "https://youtu.be/l4NaMSbirPE?si=5rNBVrWLiRSUHFKl", user_id: userBidibulle.id, category_id: battleCategory.id, difficulty_id: hardChallenge.id});

// ADD SUBMISSION'S USER TO CHALLENGE
console.log("🚧 Ajout de participants aux challenges...");
await speedRun.addUser(userLouis);
await speedWalk.addUser(userBob);
await snailRace.addUser(userLouis);
await battle.addUser(userBidibulle);

console.log("✅ Migration OK ! Fermeture de la base...");
await sequelize.close();