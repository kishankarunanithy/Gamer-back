import { Router } from 'express'

import { difficultyController } from './controllers/difficultyController.js';

const router = Router();

router.get("/", (req, res ) => {res.send("Hello les G@MERS")})

router.get("/difficulties", difficultyController.);
router.get("/difficulties/:id", difficultyController.);
router.post("/difficulties", difficultyController.);
router.patch("/difficulties", difficultyController.);
router.delete("/difficulties", difficultyController.);

export { router }