import { User, Challenge, Category, Difficulty, sequelize } from "../models/association.js";

// USER
console.log("🚧 Ajout d'utilisateurs de test...");
const gamerAlpha = await User.create({ pseudo: "AlphaPlayer", email: "alpha@game.net", password: "AlphaPass!123", role: "user", avatar_url: "https://example.com/avatars/alpha.png" });
const speedDemon = await User.create({ pseudo: "SpeedyGonzales", email: "speedy@race.com", password: "SpeedyFast!456", role: "user", avatar_url: "https://example.com/avatars/speedy.png" });
const masterStrategist = await User.create({ pseudo: "TacticMaster", email: "tactic@battle.org", password: "MasterPlan!789", role: "user", avatar_url: "https://example.com/avatars/tactic.png" });
const comboKing = await User.create({ pseudo: "ComboGod", email: "combo@fight.gg", password: "UltraCombo!012", role: "user", avatar_url: "https://example.com/avatars/combo.png" });
const adminUser = await User.create({ pseudo: "AdminPro", email: "admin@platform.gg", password: "AdminSecure!321", role: "admin", avatar_url: "https://example.com/avatars/admin.png" });

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

// CHALLENGE
console.log("🚧 Ajout de challenges de test...");
const speedrunMario = await Challenge.create({
  name: "Super Mario 64 - Any%",
  description: "Terminez Super Mario 64 le plus rapidement possible (Any%).",
  video_url: "https://example.com/videos/sm64_rules.mp4", // URL des règles ou d'une vidéo d'exemple
  user_id: adminUser.id, // L'admin crée le challenge
  category_id: speedrun.id,
  difficulty_id: expert.id,
});

const solvePortal = await Challenge.create({
  name: "Portal 2 - Cooperative Calibration Course",
  description: "Complétez le niveau 'Cooperative Calibration Course' en mode coopération.",
  video_url: "https://example.com/videos/portal2_coop.mp4",
  user_id: adminUser.id,
  category_id: puzzle.id,
  difficulty_id: intermediate.id,
});

const streetFighterCombo = await Challenge.create({
  name: "Street Fighter V - Master Combo Challenge",
  description: "Réalisez le combo le plus impressionnant avec votre personnage principal dans Street Fighter V.",
  video_url: "https://example.com/videos/sfv_combo.mp4",
  user_id: adminUser.id,
  category_id: fightingGame.id,
  difficulty_id: legendary.id,
});

const starcraftRush = await Challenge.create({
  name: "StarCraft II - Zergling Rush Master",
  description: "Réussissez un 'Zergling Rush' dévastateur avant la 3ème minute de jeu sur une carte prédéfinie.",
  video_url: "https://example.com/videos/sc2_rush.mp4",
  user_id: adminUser.id,
  category_id: strategy.id,
  difficulty_id: hardChallenge.id, // Vous aviez 'hardChallenge' avant, j'utilise 'expert' qui me semble plus cohérent ici
});

const celesteNoDeath = await Challenge.create({
  name: "Celeste - Chapter 1 No Death Run",
  description: "Terminez le Chapitre 1 de Celeste sans mourir une seule fois.",
  video_url: "https://example.com/videos/celeste_nodeath.mp4",
  user_id: adminUser.id,
  category_id: platformer.id,
  difficulty_id: intermediate.id,
});

// ADD SUBMISSION'S USER TO CHALLENGE WITH VIDEO_URL
console.log("🚧 Ajout de participants aux challenges avec leurs submissions (video_url)...");
await speedrunMario.addUser(speedDemon, { through: { video_url: "https://example.com/submissions/speedy_sm64_1.mp4" } });
await speedrunMario.addUser(gamerAlpha, { through: { video_url: "https://example.com/submissions/alpha_sm64_2.webm" } });

await solvePortal.addUser(gamerAlpha, { through: { video_url: "https://example.com/submissions/alpha_portal_coop.mov" } });
await solvePortal.addUser(masterStrategist, { through: { video_url: "https://example.com/submissions/tactic_portal_coop.avi" } });

await streetFighterCombo.addUser(comboKing, { through: { video_url: "https://example.com/submissions/combo_sfv_best.mkv" } });
await streetFighterCombo.addUser(speedDemon, { through: { video_url: "https://example.com/submissions/speedy_sfv_ok.mp4" } });

await starcraftRush.addUser(masterStrategist, { through: { video_url: "https://example.com/submissions/tactic_sc2_rush.webm" } });
await starcraftRush.addUser(gamerAlpha, { through: { video_url: "https://example.com/submissions/alpha_sc2_fail.mp4" } });

await celesteNoDeath.addUser(speedDemon, { through: { video_url: "https://example.com/submissions/speedy_celeste_win.mp4" } });
await celesteNoDeath.addUser(comboKing, { through: { video_url: "https://example.com/submissions/combo_celeste_close.mov" } });

console.log("✅ Migration OK ! Fermeture de la base...");
await sequelize.close();