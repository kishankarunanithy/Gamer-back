import { Router } from 'express';
import { cw } from './middlewares/controllerWrapper.js';
import { categoryController } from './controllers/categoryController.js';
import { challengeController } from "./controllers/challengeContoller";
import { difficultyController } from './controllers/difficultyController.js';
import { userController } from './controllers/userController.js';

const router = Router();

router.get("/users", cw(userController.showAllUsers));
router.get("/users/:id", cw(userController.showOneUser));
router.post("/users", cw(userController.createUser));
router.patch("/users/:id", cw(userController.updateUser));
router.delete("/users/:id", cw(userController.deleteUser));
// Routes pour les challenges
router.get("/challenges", cw(challengeController.showAllChallenges));
router.get("/challenges/:id", cw(challengeController.showOneChallenge));
router.post("/challenges", cw(challengeController.createChallenge));
router.patch("/challenges/:id", cw(challengeController.updateChallenge));
router.delete("/challenges/:id", cw(challengeController.deleteChallenge));

router.get("/categories", cw(categoryController.findAllCategories));
router.get("/categories/:id", cw(categoryController.findOneCategory));
router.post("/categories/", cw(categoryController.createCategory));
router.patch("/categories/:id", cw(categoryController.updateCategory));
router.delete("/categories/:id", cw(categoryController.deleteCategory));

router.get("/difficulties", cw(difficultyController.showAllDifficulties));
router.get("/difficulties/:id", cw(difficultyController.showOneDifficulty));
router.post("/difficulties", cw(difficultyController.createDifficulty));
router.patch("/difficulties/:id", cw(difficultyController.updateDifficulty));
router.delete("/difficulties/:id", cw(difficultyController.deleteDifficulty));



export { router }