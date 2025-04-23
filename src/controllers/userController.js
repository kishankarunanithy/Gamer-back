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