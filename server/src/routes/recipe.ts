import { Router } from "express";
import { getAllRecipes, getRecipe, createRecipe, deleteRecipe, editRecipe } from "../controllers/recipeController";

const recipeRouter = Router();

recipeRouter.route('/').get(getAllRecipes).post(createRecipe);
recipeRouter.route('/:id').get(getRecipe).patch(editRecipe).delete(deleteRecipe);

export { recipeRouter };