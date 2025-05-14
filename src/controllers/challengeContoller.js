import { Challenge, User, Category, Difficulty, Submission } from "../models/association.js";
import { notFound } from '../utils/error.js';

const challengeController = {

  // récupère tous les challenges + includes
  async showAllChallenges(req, res) {
    const result = await Challenge.findAll({
        include: [
          { association: "users",
            attributes: { exclude: ["password"] }
          },
          { association: "category" },
          { association: "difficulty" }
        ],
            order: [["created_at", "DESC"]],
            limit: 10
          
          });
    res.status(200).json(result);
  },

  // récupère un challenge avec son id
  async showOneChallenge(req, res, next) {
    const result = await Challenge.findByPk(req.params.id, {
		include: [
			{ association: "users",
				attributes: { exclude: ["password"] },
				through: { attributes: ["created_at", "video_url"] }
			},
			{ association: "category" },
			{ association: "difficulty" }
		]
		});

    if (!result) {
      notFound(`Catégorie avec l'ID ${req.params.id} non trouvée`);
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
      await Challenge.update(req.body, {
        where: { id: req.params.id }
      });

      const updatedChallenge = await Challenge.findByPk(req.params.id);

      if (!updatedChallenge) {
        return res.status(404).json({ message: `Challenge avec l'ID ${req.params.id} non trouvé` });
      }

      res.status(200).json(updatedChallenge);
    },


  
      // supprime un challenge
    async deleteChallenge(req, res) {
      const challenge = await Challenge.findByPk(req.params.id);

      if (!challenge) {
        return res.status(404).json({ message: "Challenge introuvable" });
      }

      if (challenge.user_id !== req.user.id) {
        return res.status(403).json({ message: "Non autorisé à supprimer ce challenge" });
      }

      await challenge.destroy();
      res.status(204).send();
    },


  async addSubmission(req, res) {
    const { video_url } = req.body;
    const challengeId = req.params.id;
    const userId = req.user.id;

    const newSubmission = await Submission.create({
      user_id: userId,
      challenge_id: challengeId,
      video_url
    });

    res.status(200).json({ message: "Participation enregistrée avec succès", newSubmission });
    
  }
};

export { challengeController };
