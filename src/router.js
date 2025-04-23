import { Router } from 'express';
import { cw } from './middlewares/controllerWrapper.js';
import { userController } from './controllers/userController.js';

const router = Router();

router.get("/", (req, res ) => {res.send("Hello les G@MERS")})

// Exemple avec controllerWrapper
// router.get("/users", cw(userController.getOneUser));

router.get("/users", cw(userController.getAllUsers));

export { router }