import { categoryController } from './controllers/categoryController.js';
import { Router } from 'express'

const router = Router();

router.get("/categories", categoryController.findAllCategories);
router.get("/categories/:id", categoryController.findOneCategory);
router.post("/categories/", categoryController.createCategory);
router.patch("/categories/:id", categoryController.updateCategory);

export { router }