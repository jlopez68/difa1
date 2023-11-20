import { Router } from "express";
import { renderjuegos,ejecutajuego } from "../controllers/juego.controller.js";
import { isAuthenticated } from "../helpers/auth.js";



const router = Router();

router.get("/juego/juego", isAuthenticated,  renderjuegos);

router.post("juego",isAuthenticated, ejecutajuego);

export default router;
