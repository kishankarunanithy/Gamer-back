import { Router } from 'express';
import { cw } from './middlewares/controllerWrapper.js';
import { userController } from './controllers/userController.js';

const router = Router();

router.get("/", (req, res ) => {res.send("Hello les G@MERS")})

// Exemple avec controllerWrapper
// router.get("/users", cw(userController.getOneUser));

router.get("/users", cw(userController.showAllUsers));
router.get("/users/:id", cw(userController.showOneUser));
router.post("/users", cw(userController.createUser));
router.patch("/users/:id", cw(userController.updateUser));
router.delete("/users/:id", cw(userController.deleteUser));

export { router }