import { User } from "../models/association.js"

const userController = {
    async getAllUsers(req, res) {
        const users = await User.findAll({
            attributes: { exclude: ["password"] }
        })
        res.status(200).json(users);
        
    }
}

export { userController }