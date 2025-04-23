import { User } from "../models/association.js"

const userController = {
    async getAllUsers(req, res) {
        const users = await User.findAll({
            attributes: { exclude: ["password"] }
        });
        res.status(200).json(users);  
    },

    async getOneUser(req, res) {
        const userId = parseInt(req.params.id);
        const user = await User.findByPk(userId, {
            attributes: { exclude: ["password"] }
        });

        if (!user) {
            return res.status(404).json({ error: "Cet utilisateur n'existe pas." });
        }

        res.status(200).json(user);
    },

    async createUser(req, res) {
        // Récupérer les données saisies par l'utilisateur.
        const { pseudo, email, avatar, password, confirmPassword } = req.body;
        console.log(req.body);

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
            return res.status(409).json({ message: "Pseudo non disponibl." });
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
            avatar
        });

        // Exclure le mot de passe de la réponse.
        const newUserWithoutPassord = { pseudo, email, avatar };

        res.status(201).json(newUserWithoutPassord);
        
    },

    async editUser(req, res) {
        const userId = parseInt(req.params.id);
        const user = await User.findByPk(userId, {
            attributes: { exclude: ["password"] }
        });

        if (!user) {
            return res.status(404).json({ error: "Cet utilisateur n'existe pas." });
        }

        // Récupérer les données modifiées.
        const { pseudo, email, password, avatar } = req.body;
        if (pseudo) { user.pseudo = pseudo };
        if (email) { user.email = email };
        if (password) { user.password = password }; // Le mot de passe est hashé dans le modèle User avant enregistrement en BDD
        if (avatar) { user.avatar = avatar };

        await user.save();
        res.status(200).json(user);
    },

    async deleteUser(req, res) {
        const userId = parseInt(req.params.id);
        const user = await User.findByPk(userId, {
            attributes: { exclude: ["password"] }
        });

        if (!user) {
            return res.status(404).json({ error: "Cet utilisateur n'existe pas." });
        }

        await user.destroy();
        res.sendStatus(204);
    }
}

export { userController }