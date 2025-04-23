function cw(controller) {
    return async (req, res, next) => {
        try {
            await controller(req, res, next);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Une erreur inattendu est surevenue, merci de réessayer plus tard."})
        }
    }
}

export { cw }