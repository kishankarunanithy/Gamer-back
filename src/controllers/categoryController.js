import { Category } from "../models/association.js"

const categoryController = {

  // GET ALL CATEGORIES
  async findAllCategories(req, res) {
    const categories = await Category.findAll();

    res.status(200).json(categories);
  },

  // GET CATEGORY BY ID
  async findOneCategory(req, res) {

    const categoryId = req.params.id
      
      const result = await Category.findByPk(categoryId);

      if (!result) {
        res.status(404).send("Category not found");
      }

      res.status(200).json(result);
  },

  // CREATE CATEGORIES
  async createCategory(req, res) {

        const result = await Category.create(req.body);

        res.status(201).json(result);
  },

  // UPDATE CATEGORIES
  async updateCategory(req, res) {

      const category = await Category.findByPk(req.params.id);

      if (!category) {
        res.status(404).send("Category not found");
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