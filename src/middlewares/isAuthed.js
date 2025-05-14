import jwt from 'jsonwebtoken';

function isAuthed(req, res, next) {
    // Récuperer le token dans le header Authorization.
    const authHeader = req.headers.authorization;

    // Vérifier la présence deu header et son format.
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Cette page n'est accessible qu'aux utilisateurs connectés." });
    }

    // Récupérer le token sans le préfixe "Bearer".
    const token = authHeader.split(' ')[1];

    // S'il n'y a pas de token, envoyer un message d'erreur.
    if (!token) {
        return res.status(400).json({ message: "Token manquant ou invalide." });
    }

    try {
        // Décoder le token en utilisant la clé secrète.
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        // Stocker le token décodé pour l'envoi de la requête.
        req.user = decodedToken;

        // Passer au middleware suivant.
        next();
    } catch (error) {
        return res.status(401).json({ message: "Token invalide ou expiré" });
    }

}

export { isAuthed };