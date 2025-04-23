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
    }
}

export { userController }