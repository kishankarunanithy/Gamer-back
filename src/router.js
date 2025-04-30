import { Router } from 'express';
import { cw } from './middlewares/controllerWrapper.js';
import { categoryController } from './controllers/categoryController.js';
import { challengeController } from "./controllers/challengeContoller.js";
import { difficultyController } from './controllers/difficultyController.js';
import { userController } from './controllers/userController.js';
import { authController } from './controllers/authController.js';
import { createCategorySchema, updateCategorySchema } from './schemas/categorySchemas.js';
import { validate } from './middlewares/validation.js';
import { createDifficultySchema, updateDifficultySchema } from './schemas/difficultySchemas.js';
import { createChallengeSchema, updateChallengeSchema } from './schemas/challengeSchemas.js';
import { createUserSchema, updateUserSchema } from './schemas/userSchemas.js';
import { isAuthed } from './middlewares/isAuthed.js';
import { handleFileUpload, handleMulterErrors, upload } from './middlewares/handleUploads.js';


const router = Router();

router.post("/login", cw(authController.loginUser));

router.get("/users", cw(userController.showAllUsers));
router.get("/users/:id", cw(userController.showOneUser));
router.post("/users", upload.single('avatar'), handleMulterErrors, handleFileUpload, validate(createUserSchema), cw(userController.createUser));
router.patch("/users/:id", upload.single('avatar'), handleMulterErrors, handleFileUpload, isAuthed, validate(updateUserSchema), cw(userController.updateUser));
router.delete("/users/:id", isAuthed, cw(userController.deleteUser));
// Routes pour les challenges
router.get("/challenges", cw(challengeController.showAllChallenges));
router.get("/challenges/:id", cw(challengeController.showOneChallenge));
router.post("/challenges", isAuthed, validate(createChallengeSchema), cw(challengeController.createChallenge));
router.patch("/challenges/:id", isAuthed, validate(updateChallengeSchema), cw(challengeController.updateChallenge));
router.delete("/challenges/:id", isAuthed, cw(challengeController.deleteChallenge));

router.get("/categories", cw(categoryController.showCategories));
router.get("/categories/:id", cw(categoryController.showOneCategory));
router.post("/categories/", isAuthed, validate(createCategorySchema), cw(categoryController.createCategory));
router.patch("/categories/:id", isAuthed, validate(updateCategorySchema), cw(categoryController.updateCategory));
router.delete("/categories/:id", isAuthed, cw(categoryController.deleteCategory));

router.get("/difficulties", cw(difficultyController.showAllDifficulties));
router.get("/difficulties/:id", cw(difficultyController.showOneDifficulty));
router.post("/difficulties", isAuthed, validate(createDifficultySchema), cw(difficultyController.createDifficulty));
router.patch("/difficulties/:id", isAuthed, validate(updateDifficultySchema), cw(difficultyController.updateDifficulty));
router.delete("/difficulties/:id", isAuthed, cw(difficultyController.deleteDifficulty));



export { router }