import { Router } from 'express'
import { cw } from './middlewares/controllerWrapper.js';

import { difficultyController } from './controllers/difficultyController.js';

const router = Router();

router.get("/", (req, res ) => {res.send("Hello les G@MERS")})

router.get("/difficulties", cw(difficultyController.showAllDifficulties));
router.get("/difficulties/:id", cw(difficultyController.showOneDifficulty));
//router.post("/difficulties", cw(difficultyController.));
//router.patch("/difficulties/:id", cw(difficultyController.));
//router.delete("/difficulties/:id", cw(difficultyController.));

export { router }