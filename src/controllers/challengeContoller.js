import { Challenge, User, Category, Difficulty } from "../models/association.js";

const challengeController = {
  // récupère tous les challenges + includes
  async showAllChallenges(req, res) {
    const result = await Challenge.findAll({
        include: [User, Category, Difficulty],
      });
    res.status(200).json(result);
  },

  // récupère un challenge avec son id
  async showOneChallenge(req, res, next) {
    const result = await Challenge.findByPk(req.params.id);

    if (!result) {
      return next(); 
    }

    res.status(200).json(result);
  },

  // crée un challenge
  async createChallenge(req, res) {
    const { name, description, video_url, user_id, category_id, difficulty_id } = req.body;

    
    if (!name) return res.status(400).json({ message: "Le nom est requis." });
    if (!description) return res.status(400).json({ message: "La description est requise." });
    if (!video_url) return res.status(400).json({ message: "Le lien vidéo est requis." });
    if (!user_id) return res.status(400).json({ message: "user_id est requis." });
    if (!category_id) return res.status(400).json({ message: "category_id est requis." });
    if (!difficulty_id) return res.status(400).json({ message: "difficulty_id est requis." });

    // on crée le challenge
    const result = await Challenge.create({
      name,
      description,
      video_url,
      user_id,
      category_id,
      difficulty_id
    });

    res.status(201).json(result);
  },

  // modifie un challenge
  async updateChallenge(req, res) {
    const result = await Challenge.update(req.body, {
      where: { id: req.params.id }
    });

    res.status(200).json({ message: "Challenge modifié", result });
  },

  // supprime un challenge
  async deleteChallenge(req, res) {
    await Challenge.destroy({ where: { id: req.params.id } });
    res.status(204).send();
  }
};

export { challengeController };
