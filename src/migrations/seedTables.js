import { User, Challenge, Category, Difficulty, sequelize } from "../models/association.js";

// USER
console.log("🚧 Ajout d'utilisateurs de test...");
const gamerAlpha = await User.create({ pseudo: "AlphaPlayer", email: "alpha@game.net", password: "AlphaPass!123", role: "user" });
const speedDemon = await User.create({ pseudo: "SpeedyGonzales", email: "speedy@race.com", password: "SpeedyFast!456", role: "user" });
const masterStrategist = await User.create({ pseudo: "TacticMaster", email: "tactic@battle.org", password: "MasterPlan!789", role: "user" });
const comboKing = await User.create({ pseudo: "ComboGod", email: "combo@fight.gg", password: "UltraCombo!012", role: "user" });
const pixelWarrior = await User.create({ pseudo: "PixelWarrior", email: "pixel@retro.gg", password: "PixelPower!001", role: "user" });
const stealthNinja = await User.create({ pseudo: "StealthNinja", email: "ninja@shadow.net", password: "SilentBlade!002", role: "user" });
const lootHunter = await User.create({ pseudo: "LootHunter", email: "loot@treasure.org", password: "EpicLoot!003", role: "user" });
const rocketJump = await User.create({ pseudo: "RocketJump", email: "rocket@arena.com", password: "BoomJump!004", role: "user" });
const questMage = await User.create({ pseudo: "QuestMage", email: "mage@magic.gg", password: "ArcaneQuest!005", role: "user" });
const glitchFinder = await User.create({ pseudo: "GlitchFinder", email: "glitch@debug.net", password: "BreakTheGame!006", role: "user" });
const bossSlayer = await User.create({ pseudo: "BossSlayer", email: "slayer@dungeon.org", password: "OneHitKO!007", role: "user" });
const driftKing = await User.create({ pseudo: "DriftKing", email: "drift@race.gg", password: "SidewaysSpeed!008", role: "user" });
const pixelSniper = await User.create({ pseudo: "PixelSniper", email: "sniper@aim.com", password: "SharpShot!009", role: "user" });
const wallRunner = await User.create({ pseudo: "WallRunner", email: "runner@parkour.gg", password: "VerticalRun!010", role: "user" });
const tankZilla = await User.create({ pseudo: "TankZilla", email: "tank@battlefield.org", password: "ArmorCrush!011", role: "user" });
const noScopeHero = await User.create({ pseudo: "NoScopeHero", email: "noscope@fps.gg", password: "BlindFire!012", role: "user" });
const puzzleLord = await User.create({ pseudo: "PuzzleLord", email: "puzzle@logic.net", password: "MindMaze!013", role: "user" });
const rhythmBeast = await User.create({ pseudo: "RhythmBeast", email: "beat@music.gg", password: "TimingPerfect!014", role: "user" });
const stealthCat = await User.create({ pseudo: "StealthCat", email: "cat@silent.org", password: "PurrfectStealth!015", role: "user" });


// DIFFICULTY
console.log("🚧 Ajout de difficultés de test...");
const beginner = await Difficulty.create({ name: "Débutant", color: "#4F7878" });
const intermediate = await Difficulty.create({ name: "Intermédiaire", color: "#CC7000" });
const expert = await Difficulty.create({ name: "Expert", color: "#C13030" });
const legendary = await Difficulty.create({ name: "Légendaire", color: "#9C069C" });

// CATEGORY
console.log("🚧 Ajout de catégories de test...");
const speedrun = await Category.create({ name: "Speedrun", color: "#AB0B00" });
const puzzle = await Category.create({ name: "Puzzle", color: "#0276DB" });
const fightingGame = await Category.create({ name: "Jeu de Combat", color: "#046915" });
const strategy = await Category.create({ name: "Stratégie", color: "#002608" });
const platformer = await Category.create({ name: "Plateforme", color: "#A15300" });

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

const tetrisSpeed = await Challenge.create({
  name: "Tetris - 200 Lines Speed Challenge",
  description: "Terminez 200 lignes le plus rapidement possible dans Tetris.",
  video_url: "https://youtu.be/CPPjyV0MYa8?si=gIGrKNwQFXbNMXEO",
  user_id: glitchFinder.id,
  category_id: puzzle.id,
  difficulty_id: intermediate.id,
});

const darkSoulsNoHit = await Challenge.create({
  name: "Dark Souls - No Hit Boss Rush",
  description: "Battez 5 boss majeurs de Dark Souls sans subir de dégâts.",
  video_url: "https://youtu.be/gjzMCJmT27A?si=98s9YxgpEfOZOeFY",
  user_id: bossSlayer.id,
  category_id: strategy.id,
  difficulty_id: legendary.id,
});

const hollowKnightCompletion = await Challenge.create({
  name: "Hollow Knight - 112% Completion",
  description: "Terminez Hollow Knight avec 112% de complétion.",
  video_url: "https://youtu.be/hTo8fH8Kolc?si=wIeiIc9uy87R9eHI",
  user_id: gamerAlpha.id,
  category_id: platformer.id,
  difficulty_id: expert.id,
});

const smashBros1v3 = await Challenge.create({
  name: "Smash Bros - 1v3 Victory",
  description: "Gagnez un match contre trois IA au niveau maximum.",
  video_url: "https://youtu.be/lBQ8KcauAKA?si=5uy0ZOvx8rIvEOno",
  user_id: comboKing.id,
  category_id: fightingGame.id,
  difficulty_id: expert.id,
});

const factorioRocket = await Challenge.create({
  name: "Factorio - Launch Rocket in 8 Hours",
  description: "Lancez une fusée dans Factorio en moins de 8h de jeu.",
  video_url: "https://youtu.be/A4wSeOSbFNY?si=Z3u-0z-xMA9qbttb",
  user_id: masterStrategist.id,
  category_id: strategy.id,
  difficulty_id: expert.id,
});

const cupheadPerfect = await Challenge.create({
  name: "Cuphead - Perfect Boss Fight",
  description: "Battez un boss sans subir de dégâts et avec note A+.",
  video_url: "https://youtu.be/2Y-ydYgssuc?si=7-QugaKRFWVtHKZc",
  user_id: glitchFinder.id,
  category_id: platformer.id,
  difficulty_id: legendary.id,
});

const portalLeastPortals = await Challenge.create({
  name: "Portal - Least Portals Challenge",
  description: "Terminez le jeu en utilisant le moins de portails possible.",
  video_url: "https://youtu.be/7MdRZ1eDp0s?si=yNK6uLU3iRdEMWRw",
  user_id: puzzleLord.id,
  category_id: puzzle.id,
  difficulty_id: expert.id,
});

const meatBoySpeed = await Challenge.create({
  name: "Super Meat Boy - Chapter 1 Speedrun",
  description: "Finissez le premier chapitre en moins de 2 minutes.",
  video_url: "https://youtu.be/QeOiW5j-ldk?si=k8VlNWzzoWVQlEuI",
  user_id: speedDemon.id,
  category_id: platformer.id,
  difficulty_id: intermediate.id,
});

const aoeWonder = await Challenge.create({
  name: "Age of Empires II - Wonder Victory",
  description: "Gagnez une partie via une victoire merveille en 1v3.",
  video_url: "https://youtu.be/dbvwsZ9NM7g?si=gGJcfMOJA_QF2Q8I",
  user_id: masterStrategist.id,
  category_id: strategy.id,
  difficulty_id: expert.id,
});

const tekkenCombo = await Challenge.create({
  name: "Tekken 7 - 10-Hit Combo Mastery",
  description: "Réalisez le combo signature 10-hits avec 3 personnages différents.",
  video_url: "https://youtu.be/zawwp9TSV7s?si=gzNFxrvTNUOtUKWh",
  user_id: comboKing.id,
  category_id: fightingGame.id,
  difficulty_id: intermediate.id,
});

const undertalePacifist = await Challenge.create({
  name: "Undertale - Pacifist Run",
  description: "Terminez le jeu en mode pacifiste, sans tuer un seul ennemi.",
  video_url: "https://youtu.be/zh8MNIJvi_E?si=_j4EPZ6LmMsGkr1w",
  user_id: gamerAlpha.id,
  category_id: puzzle.id,
  difficulty_id: beginner.id,
});

const marioMakerDev = await Challenge.create({
  name: "Super Mario Maker 2 - Dev Course Clear",
  description: "Battez un niveau fait pour les développeurs, sans checkpoints.",
  video_url: "https://youtu.be/2vlHvy5w6I0?si=vOZXZElPfgQd8MIl",
  user_id: pixelWarrior.id,
  category_id: platformer.id,
  difficulty_id: expert.id,
});

const civCultureVictory = await Challenge.create({
  name: "Civilization VI - Culture Victory Fast",
  description: "Obtenez une victoire culturelle en moins de 250 tours.",
  video_url: "https://youtu.be/se8BHeLC0Gw?si=8XwJIBQQw21vOV1G",
  user_id: questMage.id,
  category_id: strategy.id,
  difficulty_id: intermediate.id,
});

const sf6PerfectRounds = await Challenge.create({
  name: "Street Fighter 6 - 3 Perfect Rounds",
  description: "Gagnez 3 rounds parfaits d’affilée contre un adversaire en ligne.",
  video_url: "https://youtu.be/SYtLmGH3lrU?si=gAvS0O9DqmZp7gyU",
  user_id: comboKing.id,
  category_id: fightingGame.id,
  difficulty_id: legendary.id,
});

const overcookedStars = await Challenge.create({
  name: "Overcooked 2 - 3 Stars All Levels (World 1)",
  description: "Obtenez 3 étoiles sur tous les niveaux du Monde 1.",
  video_url: "https://youtu.be/5_IfVYRGpM4?si=zCA334zUxRm5wUAM",
  user_id: gamerAlpha.id,
  category_id: puzzle.id,
  difficulty_id: beginner.id,
});

const celesteBSide = await Challenge.create({
  name: "Celeste - B-Side Challenge",
  description: "Terminez une B-Side sans mourir plus de 10 fois.",
  video_url: "https://youtu.be/rAN8qoMk0ac?si=sNKxPdy6SiPcc74Q",
  user_id: stealthNinja.id,
  category_id: platformer.id,
  difficulty_id: expert.id,
});

const slayTheSpireHeart = await Challenge.create({
  name: "Slay the Spire - Heart Kill with Ironclad",
  description: "Battez le cœur final avec Ironclad sans perdre plus de 20HP.",
  video_url: "https://youtu.be/DuVLdTcV1r4?si=pKLQK6SYFXTtXIV5",
  user_id: gamerAlpha.id,
  category_id: strategy.id,
  difficulty_id: legendary.id,
});

const witnessEnv = await Challenge.create({
  name: "The Witness - Environmental Puzzle Chain",
  description: "Complétez une chaîne de 15 puzzles environnementaux.",
  video_url: "https://youtu.be/jJQEODSrmhA?si=YTR2pZ98-xCGkQBx",
  user_id: puzzleLord.id,
  category_id: puzzle.id,
  difficulty_id: expert.id,
});

const donkeyKongKong = await Challenge.create({
  name: "Donkey Kong Country - All KONG Letters World 2",
  description: "Collectez toutes les lettres KONG dans le Monde 2.",
  video_url: "https://youtu.be/rxm_Ptx9jNA?si=IDTxU_16_gCaFXIE",
  user_id: gamerAlpha.id,
  category_id: platformer.id,
  difficulty_id: intermediate.id,
});

const lolSoloCarry = await Challenge.create({
  name: "League of Legends - Win Lane, Solo Carry",
  description: "Gagnez votre lane et terminez la partie avec le plus de dégâts infligés.",
  video_url: "https://youtu.be/f_mh_itl25o?si=6DORQKSuBRAY_T2c",
  user_id: masterStrategist.id,
  category_id: strategy.id,
  difficulty_id: expert.id,
});

// ADD SUBMISSION'S USER TO CHALLENGE WITH VIDEO_URL
console.log("🚧 Ajout de participants aux challenges avec leurs submissions (video_url)...");
await speedrunMario.addUser(speedDemon, { through: { video_url: "https://youtube.com/shorts/x7P8Du_0TeQ?si=Chb4iKyn0Zon9HkE" } });
await speedrunMario.addUser(gamerAlpha, { through: { video_url: "https://youtube.com/shorts/WK3H_ISI7kA?si=ryw7KDYt14MmkSpb" } });

await solvePortal.addUser(gamerAlpha, { through: { video_url: "https://youtube.com/shorts/IhNe-9p9g74?si=GaBxunL8HAeDb6TG" } });
await solvePortal.addUser(masterStrategist, { through: { video_url: "https://youtube.com/shorts/d8tB-bQTptY?si=twBIFhhUJIVcd3fo" } });

await streetFighterCombo.addUser(comboKing, { through: { video_url: "https://youtube.com/shorts/Lrqu57uEv80?si=Tkb2XxKKmjJcWarB" } });
await streetFighterCombo.addUser(speedDemon, { through: { video_url: "https://youtube.com/shorts/EVgrfyLgfRQ?si=Ylz7SFgW831DWWBd" } });

await starcraftRush.addUser(masterStrategist, { through: { video_url: "https://youtube.com/shorts/Q5ZlE6VE_n8?si=F3ZmsU55Ah-9sowk" } });
await starcraftRush.addUser(gamerAlpha, { through: { video_url: "https://youtube.com/shorts/kuq3dNCJHUU?si=pglcY-mT41Eu-70c" } });

await celesteNoDeath.addUser(speedDemon, { through: { video_url: "https://youtube.com/shorts/mlG1KJUvpnc?si=9Og6vWrZ88sEvrFC" } });
await celesteNoDeath.addUser(comboKing, { through: { video_url: "https://youtube.com/shorts/ARAu3UWeD5w?si=2BCw0OKm_X5Jxo49" } });

await tetrisSpeed.addUser(gamerAlpha, { through: { video_url: "https://youtube.com/shorts/SVXE_k-YM3U?si=6zE_906hM5cQ9v-w" } });
await tetrisSpeed.addUser(puzzleLord, { through: { video_url: "https://youtube.com/shorts/_UzuXoQWe9U?si=6xm93rPMkiZfV_LX" } });
await tetrisSpeed.addUser(stealthCat, { through: { video_url: "https://youtube.com/shorts/d939WLkUjiY?si=oJlXejujtJzplKwZ" } });

await darkSoulsNoHit.addUser(bossSlayer, { through: { video_url: "https://youtube.com/shorts/Rx-i_BABv64?si=vQe0svqhe9mBYclk" } });
await darkSoulsNoHit.addUser(gamerAlpha, { through: { video_url: "https://youtube.com/shorts/35fTy6ZcXvg?si=ACOvyAD--Mi8JHuc" } });

await hollowKnightCompletion.addUser(gamerAlpha, { through: { video_url: "https://youtube.com/shorts/F3JEt6UofIg?si=fAFDXctqs4ChRe1h" } });
await hollowKnightCompletion.addUser(pixelWarrior, { through: { video_url: "https://youtube.com/shorts/CUM5x72BiJs?si=_r8-JsWaRevw309T" } });
await hollowKnightCompletion.addUser(wallRunner, { through: { video_url: "https://youtube.com/shorts/vbJFBx2O8AM?si=7TsSbl2Efy06WMlS" } });

await smashBros1v3.addUser(comboKing, { through: { video_url: "https://youtube.com/shorts/kwgT4zSoZuw?si=h40zAZVZ4nFyRvkd" } });
await smashBros1v3.addUser(gamerAlpha, { through: { video_url: "https://youtube.com/shorts/uGgmFEyuKHQ?si=a13nIpxVyu1WHXza" } });

await factorioRocket.addUser(masterStrategist, { through: { video_url: "https://youtube.com/shorts/ZUH2WnkhXh0?si=l3EJNAki_DA5ugoH" } });

await cupheadPerfect.addUser(glitchFinder, { through: { video_url: "https://youtube.com/shorts/ek2wBJO1U3I?si=mppp3p28ccf7KPzG" } });
await cupheadPerfect.addUser(gamerAlpha, { through: { video_url: "https://youtube.com/shorts/TqnH4zkawDQ?si=N5tJ22sXV7WTvinb" } });
await cupheadPerfect.addUser(speedDemon, { through: { video_url: "https://youtube.com/shorts/723JbgATT9Q?si=l3H741XJhmGF1K__" } });
await cupheadPerfect.addUser(tankZilla, { through: { video_url: "https://youtu.be/cNnJ0UwA4ro?si=J5D2R8yHQ1IdyJU5" } });

await portalLeastPortals.addUser(puzzleLord, { through: { video_url: "https://youtube.com/shorts/V7thUprn5D8?si=Qydd-ooKJRhT_nps" } });

await meatBoySpeed.addUser(pixelWarrior, { through: { video_url: "https://youtube.com/shorts/RUySz3bgm-I?si=FFbBeB5VC9cqMotS" } });
await meatBoySpeed.addUser(gamerAlpha, { through: { video_url: "https://youtube.com/shorts/z35rojXoPOY?si=H3FpSMZ3o7wR9VXy" } });
await meatBoySpeed.addUser(stealthNinja, { through: { video_url: "https://youtu.be/6Kx041SDdwg?si=4gjKd4n7xjifXPBH" } });

await aoeWonder.addUser(questMage, { through: { video_url: "https://youtu.be/ALQE16zIv3E?si=UWIRtWU1ad7lARDq" } });

await undertalePacifist.addUser(gamerAlpha, { through: { video_url: "https://youtu.be/Gj5JfNfMytE?si=Wozu1C9u1R8e9Huh" } });
await undertalePacifist.addUser(puzzleLord, { through: { video_url: "https://youtu.be/cBf8zC5xgIs?si=AE3VdvS-slQd9GmO" } });
await undertalePacifist.addUser(glitchFinder, { through: { video_url: "https://youtu.be/QUaUMbSijbQ?si=gchw4TmANQbWKsUY" } });

await marioMakerDev.addUser(wallRunner, { through: { video_url: "https://youtu.be/2Y-ydYgssuc?si=zhAW74Wvq54ErxeC" } });

await sf6PerfectRounds.addUser(comboKing, { through: { video_url: "https://www.youtube.com/live/TFsIY_JHKIA?si=FRnZ3c0XGrsGuJwD" } });
await sf6PerfectRounds.addUser(speedDemon, { through: { video_url: "https://youtu.be/453p_BZs5jY?si=jvQ_QsQbGmglwhKh" } });

await overcookedStars.addUser(gamerAlpha, { through: { video_url: "https://youtu.be/wnX2GsNqx0U?si=JJJz2EG5udPKKuWz" } });
await overcookedStars.addUser(stealthCat, { through: { video_url: "https://youtu.be/9aEjXv4_LEI?si=15fi0-f6P3pe934l" } });

await celesteBSide.addUser(stealthNinja, { through: { video_url: "https://youtu.be/7iUrlAY4hhk?si=sBzO1VccFhPnsk0Q" } });

await slayTheSpireHeart.addUser(gamerAlpha, { through: { video_url: "https://youtube.com/shorts/WK3H_ISI7kA?si=x8MgmZfr-fmtIns6" } });
await slayTheSpireHeart.addUser(masterStrategist, { through: { video_url: "https://youtu.be/jGjcvYu1oKM?si=-bQ9cl5FmaMCLTA5" } });

await witnessEnv.addUser(puzzleLord, { through: { video_url: "https://www.youtube.com/live/gomEbeWXVeM?si=dsRktEQMK3rUfmAq" } });

await donkeyKongKong.addUser(pixelWarrior, { through: { video_url: "https://www.youtube.com/live/JiTaJz8aPAM?si=al5Qq0EZEprbOlIC" } });
await donkeyKongKong.addUser(gamerAlpha, { through: { video_url: "https://www.youtube.com/live/AxyM5hqmA04?si=-9hGaYdc0v5Fvgat" } });



console.log("✅ Migration OK ! Fermeture de la base...");
await sequelize.close();