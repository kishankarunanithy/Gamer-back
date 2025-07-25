import { Submission, User } from "../models/association.js"
import { notFound } from '../utils/error.js';
import argon2 from "argon2";

const userController = {
    async showAllUsers(req, res) {
        const users = await User.findAll({
            attributes: { exclude: ["password"] },
            include: [
                { association: "challenges",
                    include: [
                        { association: "difficulty" },
                        { association: "category"}]
             }]            
        });
        res.status(200).json(users);  
    },

    async showOneUser(req, res) {
        const userId = parseInt(req.params.id); 
        const user = await User.findByPk(userId, {
            attributes: { exclude: ["password"] },
            include: [
                { association: "challenges",
                    include: [
                        { association: "difficulty" },
                        { association: "category"}]
             }]  
        });

        if (!user) {
            notFound(`Catégorie avec l'ID ${req.params.id} non trouvée`);
        }

        res.status(200).json(user);
    },

    async showCreatedChallengesByUser(req, res) {
        const userId = parseInt(req.params.id);
        const user = await User.findByPk(userId, {
          attributes: { exclude: ["password"] },
          include: [
            {
              association: "challenges",
              where: { user_id: userId },
              include: ["category", "difficulty", "users"]
            }
          ]
        });
      
        console.log("👉 Challenges créés par user", userId, ":", user?.challenges);
      
        res.status(200).json(user.challenges);
      },
      
    async showSubmissionChallengeByUser(req, res) {
        const userId = parseInt(req.params.id);
        const user = await User.findByPk(userId, {
          attributes: { exclude: ["password"] },
          include: [
            { 
              association: "submissions", // Cibler directement l'association des soumissions
              attributes: { exclude: ["user_id", "challenge_id"] }, // Exclure les clés étrangères
              include: [
                {
                  association: "challenge", // Inclure les détails du challenge lié
                  attributes: { exclude: ["user_id", "challenge_id"] }, // Exclure les clés étrangères
                  include: [
                    { association: "difficulty" },
                    { association: "category"}
                  ]
                }
              ]
            }
          ]  
        });

        res.status(200).json(user.challenges);
    },

    async createUser(req, res) {
        // Récupérer les données saisies par l'utilisateur.
        const { pseudo, email, password, confirmPassword } = req.body;
        
        const avatar_url = req.body.avatar_url || null;

        // S'assurer que les champs obligatoires sont renseignés.
        if (!pseudo || !email || !password || !confirmPassword) {
            return res.status(400).json({ message: 'Les champs pseudo, email, mot de passe et confirmation de mot de passe sont obligatoires.' });
        }

        // S'assurer que le mot de passe et sa confirmation sont identiques.
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Le mot de passe et sa confirmation doivent être identiques." });
        }

        // Vérifier si le pseudo existe déjà.
        const existingPseudo = await User.findOne({
            where: { pseudo: pseudo }
        });

        if (existingPseudo) {
            return res.status(409).json({ message: "Pseudo non disponible." });
        }

        // Vérifier si l'adresse mail existe déjà en BDD.
        const existingEmail = await User.findOne({
            where: { email: email }
        });

        if (existingEmail) {
            return res.status(409).json({ message: "Cet email est déjà utilisé." });
        }

        // Enregistrer l'utilisateur en BDD.
        const newUser = await User.create({
            pseudo,
            email,
            password,
            avatar_url
        });

        // Exclure le mot de passe de la réponse.
        const newUserWithoutPassord = { pseudo, email, avatar_url };

        res.status(201).json(newUserWithoutPassord);
        
    },

    async updateUser(req, res) {
        const userId = parseInt(req.params.id);
        const user = await User.findByPk(userId);

        if (!user) {
            notFound("Utilisateur non trouvé");
        }


        // Récupérer les données modifiées.
        const { pseudo, email, password, newPassword, confirmNewPassword, avatar_url } = req.body;

        if (pseudo) { user.pseudo = pseudo };
        if (email) { user.email = email };
        if (password) {
    
            // Récupérer le mot de passe hashé en BDD.
            const hashedPassword = user.password;
            
            // Le comparer avec le mot de passe saisie par l'utilisateur.
            const isMatching = await argon2.verify(hashedPassword, password);
            
            if (!isMatching) {
                return res.status(400).json({ message: "Identifiants incorrects." });
            }
            if (newPassword !== confirmNewPassword) {
            
                return res.status(400).json({ message: "Le mot de passe et sa confirmation doivent être identiques." });
            }
            user.password = newPassword

        }; // * Le mot de passe est hashé dans le modèle User avant enregistrement en BDD
        if (avatar_url) { user.avatar_url = avatar_url };

        await user.save();
        const userWithoutPassword = { pseudo, email, avatar_url };
        res.status(200).json(userWithoutPassword);
    },

    async deleteUser(req, res) {
        const userId = parseInt(req.params.id);
      
        // Vérifie si l'utilisateur connecté est le bon
        if (req.user?.id !== userId) {
          return res.status(403).json({ message: "Non autorisé à supprimer ce compte." });
        }
      
        const user = await User.findByPk(userId);
      
        if (!user) {
          return res.status(404).json({ message: "Utilisateur introuvable." });
        }
      
        await user.destroy();
      
        res.status(200).json({ message: "Utilisateur supprimé avec succès." });
      },

      async updateUserSubmission(req, res, next) {
        // Récupérer les id de l'utilisateur et du challenge.
        const { userId, challengeId } = req.params;
        const video_url = req.body;

        // Rechercher la participation avec la clé composite.
        const submission = await Submission.findOne({
            where: {
                user_id: userId,
                challenge_id: challengeId
            }
        });

        if (!submission) {
            return next();
        }

        await submission.update(video_url);
        res.status(200).json({ message: "Participation mise à jour avec succès", submission });
    },

    async deleteUserSubmission(req, res, next) {
        const { userId, challengeId } = req.params;

        const submission = await Submission.findOne({
            where: {
                user_id: userId,
                challenge_id: challengeId
            }
        });
        if (!submission) {
            notFound("Participation non trouvée.");
        }
        await submission.destroy()
        res.sendStatus(204);
    }
      
}

export { userController }