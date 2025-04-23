import { categoryController } from './controllers/categoryController.js';
import { Router } from 'express'

const router = Router();

router.get("/categories", categoryController.findAllCategories);
router.get("/categories/:id", categoryController.findOneCategory);

export { router }