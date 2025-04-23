import { Router } from 'express'
import { challengeController } from "./controllers/challengeContoller";
import { cw } from "../middlewares/controllerWrapper.js";
const router = Router();

// Routes pour les challenges
router.get("/challenges", cw(challengeController.showAllChallenges));
router.get("/challenges/:id", cw(challengeController.showOneChallenge));
router.post("/challenges", cw(challengeController.createChallenge));
router.patch("/challenges/:id", cw(challengeController.updateChallenge));
router.delete("/challenges/:id", cw(challengeController.deleteChallenge));


router.get("/", (req, res ) => {res.send("Hello les G@MERS")})

export { router }