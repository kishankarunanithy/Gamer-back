import { Router } from 'express';
import { cw } from './middlewares/controllerWrapper.js';
import { categoryController } from './controllers/categoryController.js';
import { challengeController } from "./controllers/challengeContoller.js";

const router = Router();
// Routes pour les challenges
router.get("/challenges", cw(challengeController.showAllChallenges));
router.get("/challenges/:id", cw(challengeController.showOneChallenge));
router.post("/challenges", cw(challengeController.createChallenge));
router.patch("/challenges/:id", cw(challengeController.updateChallenge));
router.delete("/challenges/:id", cw(challengeController.deleteChallenge));

router.get("/categories", cw(categoryController.showCategories));
router.get("/categories/:id", cw(categoryController.showOneCategory));
router.post("/categories/", cw(categoryController.createCategory));
router.patch("/categories/:id", cw(categoryController.updateCategory));
router.delete("/categories/:id", cw(categoryController.deleteCategory));



// Exemple avec controllerWrapper
// router.get("/users", cw(userController.getOneUser));


export { router }