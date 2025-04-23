import { Router } from 'express';
import { cw } from "./middlewares.js";
import { categoryController } from './controllers/categoryController.js';

const router = Router();

router.get("/categories", cw(categoryController.findAllCategories));
router.get("/categories/:id", cw(categoryController.findOneCategory));
router.post("/categories/", cw(categoryController.createCategory));
router.patch("/categories/:id", cw(categoryController.updateCategory));
router.delete("/categories/:id", cw(categoryController.deleteCategory));

export { router }