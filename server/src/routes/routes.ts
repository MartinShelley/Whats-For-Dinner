import { Router } from "express";
import { recipeRouter } from "./recipe";
import { tagRouter } from "./tag";

const router = Router();

router.use('/recipes', recipeRouter);
router.use('/tags/', tagRouter);

export { router };