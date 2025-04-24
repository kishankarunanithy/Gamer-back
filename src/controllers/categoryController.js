import { Category } from "../models/association.js"
import { notFound } from '../utils/errors.js';

const categoryController = {

    // GET ALL CATEGORIES
    async findAllCategories(req, res) {
        const categories = await Category.findAll();

        res.status(200).json(categories);
    },

    // GET CATEGORY BY ID
    async findOneCategory(req, res) {
 
        const categoryId = req.params.id
        const category = await Category.findByPk(categoryId);

        if (!category) {
            notFound(`Catégorie avec l'ID ${req.params.id} non trouvée`);
        }

        res.status(200).json(category);
    },

    // CREATE CATEGORIES
    async createCategory(req, res) {

        const newCategory = await Category.create(req.body);
        res.status(201).json(newCategory);
    },

    // UPDATE CATEGORY
    async updateCategory(req, res) {

        const category = await Category.findByPk(req.params.id);

        if (!category) {
            notFound(`Catégorie avec l'ID ${req.params.id} non trouvée`);
        }

        const { name, color } = req.body;
        for (const key in req.body) {
            if (category[key] !== undefined) {
            category[key] = req.body[key];
            }
        }

        await category.save();
        res.status(200).json(category);
    },

    // DELETE CATEGORY
    async deleteCategory (req, res) {

        const category = await Category.findByPk(req.params.id);

        if (!category) {
            res.status(404).send("Category not found");
        }

        await category.destroy();
        res.sendStatus(204);
    },

}

export { categoryController };