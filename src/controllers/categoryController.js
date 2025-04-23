import { Category } from "../models/association.js"

const categoryController = {

  async findAllCategories(req, res) {
    const categories = await Category.findAll();

    res.status(200).json(categories);
  },

  async findOneCategory(req, res) {

    const categoryId = req.params.id
      
      const result = await Category.findByPk(categoryId);

      if (!result) {
        res.status(404).send("lists not found");
      }

      res.status(200).json(result);
  },
}

export { categoryController };