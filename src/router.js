import { Router } from 'express';
import { cw } from './middlewares/controllerWrapper.js';

const router = Router();

router.get("/", (req, res ) => {res.send("Hello les G@MERS")})

// Exemple avec controllerWrapper
// router.get("/users", cw(userController.getOneUser));

export { router }