import { User } from "../models/association.js"
import { notFound } from '../utils/error.js';

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
                  include: [
                    { association: "difficulty" },
                    { association: "category"}
                  ]
                }
              ]
            }
          ]  
        });

        res.status(200).json(user.submissions);
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
        const user = await User.findByPk(userId, {
            attributes: { exclude: ["password"] }
        });

        if (!user) {
            notFound(`Catégorie avec l'ID ${req.params.id} non trouvée`);
        }

        // Récupérer les données modifiées.
        const { pseudo, email, password, avatar_url } = req.body;
        if (pseudo) { user.pseudo = pseudo };
        if (email) { user.email = email };
        if (password) { user.password = password }; // * Le mot de passe est hashé dans le modèle User avant enregistrement en BDD
        if (avatar_url) { user.avatar_url = avatar_url };

        await user.save();
        res.status(200).json(user);
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
      }
      
}

export { userController }