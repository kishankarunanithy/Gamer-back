import { User, Challenge, Category, Difficulty, sequelize } from "../models/association.js";

// USER
console.log("🚧 Ajout d'utilisateurs de test...");
const gamerAlpha = await User.create({ pseudo: "AlphaPlayer", email: "alpha@game.net", password: "AlphaPass!123", role: "user" });
const speedDemon = await User.create({ pseudo: "SpeedyGonzales", email: "speedy@race.com", password: "SpeedyFast!456", role: "user" });
const masterStrategist = await User.create({ pseudo: "TacticMaster", email: "tactic@battle.org", password: "MasterPlan!789", role: "user" });
const comboKing = await User.create({ pseudo: "ComboGod", email: "combo@fight.gg", password: "UltraCombo!012", role: "user" });

// DIFFICULTY
console.log("🚧 Ajout de difficultés de test...");
const beginner = await Difficulty.create({ name: "Débutant", color: "#80CBC4" });
const intermediate = await Difficulty.create({ name: "Intermédiaire", color: "#FFB74D" });
const expert = await Difficulty.create({ name: "Expert", color: "#E57373" });
const legendary = await Difficulty.create({ name: "Légendaire", color: "#9575CD" });

// CATEGORY
console.log("🚧 Ajout de catégories de test...");
const speedrun = await Category.create({ name: "Speedrun", color: "#F44336" });
const puzzle = await Category.create({ name: "Puzzle", color: "#2196F3" });
const fightingGame = await Category.create({ name: "Jeu de Combat", color: "#4CAF50" });
const strategy = await Category.create({ name: "Stratégie", color: "#FF9800" });
const platformer = await Category.create({ name: "Plateforme", color: "#673AB7" });

// CHALLENGE (créés par les utilisateurs)
console.log("🚧 Ajout de challenges de test créés par les utilisateurs...");
const speedrunMario = await Challenge.create({
  name: "Super Mario 64 - Any%",
  description: "Terminez Super Mario 64 le plus rapidement possible (Any%).",
  video_url: "https://youtu.be/4VFv9K3TX9Y?si=4Uk-o1kVT22U04Cl",
  user_id: speedDemon.id,
  category_id: speedrun.id,
  difficulty_id: expert.id,
});

const solvePortal = await Challenge.create({
  name: "Portal 2 - Cooperative Calibration Course",
  description: "Complétez le niveau 'Cooperative Calibration Course' en mode coopération.",
  video_url: "https://youtu.be/sa6ebbwijFE?si=Xh6Ql3DSeGZ5fhbu",
  user_id: gamerAlpha.id,
  category_id: puzzle.id,
  difficulty_id: intermediate.id,
});

const streetFighterCombo = await Challenge.create({
  name: "Street Fighter V - Master Combo Challenge",
  description: "Réalisez le combo le plus impressionnant avec votre personnage principal dans Street Fighter V.",
  video_url: "https://youtu.be/l562CIiZnFY?si=1J3N3Bxl_oOFx2QU",
  user_id: comboKing.id,
  category_id: fightingGame.id,
  difficulty_id: legendary.id,
});

const starcraftRush = await Challenge.create({
  name: "StarCraft II - Zergling Rush Master",
  description: "Réussissez un 'Zergling Rush' dévastateur avant la 3ème minute de jeu sur une carte prédéfinie.",
  video_url: "https://youtu.be/zZSfc7oI8_g?si=QVZch7PZU1IgE8d9",
  user_id: masterStrategist.id,
  category_id: strategy.id,
  difficulty_id: expert.id,
});

const celesteNoDeath = await Challenge.create({
  name: "Celeste - Chapter 1 No Death Run",
  description: "Terminez le Chapitre 1 de Celeste sans mourir une seule fois.",
  video_url: "https://youtu.be/_tKxCygswGE?si=zr0WPLMEHn1UiyEz",
  user_id: speedDemon.id,
  category_id: platformer.id,
  difficulty_id: intermediate.id,
});

// ADD SUBMISSION'S USER TO CHALLENGE WITH VIDEO_URL
console.log("🚧 Ajout de participants aux challenges avec leurs submissions (video_url)...");
await speedrunMario.addUser(speedDemon, { through: { video_url: "https://youtu.be/gjzMCJmT27A?si=98s9YxgpEfOZOeFY" } });
await speedrunMario.addUser(gamerAlpha, { through: { video_url: "https://youtu.be/hTo8fH8Kolc?si=wIeiIc9uy87R9eHI" } });

await solvePortal.addUser(gamerAlpha, { through: { video_url: "https://youtu.be/zh8MNIJvi_E?si=_j4EPZ6LmMsGkr1w" } });
await solvePortal.addUser(masterStrategist, { through: { video_url: "https://youtu.be/zawwp9TSV7s?si=gzNFxrvTNUOtUKWh" } });

await streetFighterCombo.addUser(comboKing, { through: { video_url: "https://youtu.be/QeOiW5j-ldk?si=k8VlNWzzoWVQlEuI" } });
await streetFighterCombo.addUser(speedDemon, { through: { video_url: "https://youtu.be/SYtLmGH3lrU?si=gAvS0O9DqmZp7gyU" } });

await starcraftRush.addUser(masterStrategist, { through: { video_url: "https://youtu.be/2vlHvy5w6I0?si=vOZXZElPfgQd8MIl" } });
await starcraftRush.addUser(gamerAlpha, { through: { video_url: "https://youtu.be/dbvwsZ9NM7g?si=gGJcfMOJA_QF2Q8I" } });

await celesteNoDeath.addUser(speedDemon, { through: { video_url: "https://youtu.be/se8BHeLC0Gw?si=8XwJIBQQw21vOV1G" } });
await celesteNoDeath.addUser(comboKing, { through: { video_url: "https://youtu.be/i4n6HVtbBX8?si=951S-qQv9hzPePjp" } });

console.log("✅ Migration OK ! Fermeture de la base...");
await sequelize.close();