import { User } from "../models/association.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

const authController = {
    async loginUser(req, res) {
        // Récupérer l'email et le mot de passe saisis par l'utilisateur.
        const { email, password } = req.body;

        // Si l'un des champs manque, renvoyer un message d'erreur.
        if (!email || !password) {
            return res.status(400).json({ message: "Tous les champs sont obligatoires." });
        }

        // Vérifier que l'utilisateur existe en BDD.
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: "Email ou mot de passe incorrect." });
        }

        // Récupérer le mot de passe hashé en BDD.
        const hashedPassword = user.password;

        // Le comparer avec le mot de passe saisie par l'utilisateur.
        const isMatching = await argon2.verify(hashedPassword, password);

        // Si les deux valeurs ne correspondent pas, envoyer un message d'erreur.
        if (!isMatching) {
            return res.status(400).json({ message: "Email ou mot de passe incorrect." });
        }

        // Si les valeurs correspondent, créer le token sécurisé.
        const token = jwt.sign(
            { id: user.id, pseudo: user.pseudo },
            process.env.JWT_SECRET,
            { expiresIn: "2h" }
        );
        res.status(200).json({ token });
    }
}

export { authController };