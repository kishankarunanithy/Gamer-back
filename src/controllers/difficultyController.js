import { Difficulty } from "../models/association.js";
import { notFound } from '../utils/error.js';

const difficultyController = {
    
    // Récupère toutes les difficultés
    async showAllDifficulties(req, res) {
        res.status(200).json(await Difficulty.findAll());
    },

    // Récupère la difficulté de l'id précisée
    async showOneDifficulty(req, res, next) {
        const result = await Difficulty.findByPk(req.params.id);

        if (!result) {
            notFound(`Catégorie avec l'ID ${req.params.id} non trouvée`);
          }

        res.status(200).json(result);
    },

    // Crée une difficulté avec le nom et la couleur indiqué
    async createDifficulty(req, res) {
        const { name, color } = req.body;
        if (!name) return res.status(400).json("Une difficulté doit avoir un nom !");

        if (!color)return res.status(400).json("Une difficulté doit avoir une color !");

        const difficulty = await Difficulty.create( req.body );
        if (!difficulty) return res.status(400).json("Quelque chose s'est mal passé..");
        res.status(201).json(difficulty);
    },

    // Modifie le nom ET/OU la couleur de la difficulté
    async updateDifficulty(req, res) {
        const { name, color } = req.body;
        const { id }= req.params;
        
        
        const difficulty = await Difficulty.findByPk(id);

        if (!difficulty) {
            notFound(`Catégorie avec l'ID ${req.params.id} non trouvée`);
        }

        difficulty.name = name;
        difficulty.color = color;
        await difficulty.save();
        res.status(200).json(difficulty);

    },

    // Supprime la difficulté séléctionné 
    async deleteDifficulty(req, res) {

        const difficulty = await Difficulty.findByPk(req.params.id);
        await difficulty.destroy();
        return res.sendStatus(204)

    }
};

export { difficultyController };