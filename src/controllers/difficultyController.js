import { User, Challenge, Category, Difficulty, sequelize } from "../models/association.js";

const difficultyController = {
    
    async showAllDifficulties(req, res) {
        res.status(200).json(await Difficulty.findAll());
    },

    async showOneDifficulty(req, res, next) {
        const result = await Difficulty.findByPk(req.params.id);

        if (!result) {
            return next();
        }

        res.status(200).json(result);
    },

    async createDifficulty() {

    },

    async updateDifficulty() {

    },

    async deleteDifficulty() {

    }
};

export { difficultyController };