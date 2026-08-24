import { prisma } from "../lib/prisma";
import { type Request, type Response, type NextFunction } from "express";

export const getAllRecipes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('Get All Recipes!!');
    const recipes = await prisma.recipe.findMany({
      include: {
        recipeIngredients: {
          include: {
            ingredient: true
          }
        },
        tags: true
      }
    });

    const formattedRecipes = recipes.map(recipe => ({
      ...recipe,
      ingredients: recipe.recipeIngredients.map(recipeIngredient => ({
        name: recipeIngredient.ingredient.name,
        quantity: recipeIngredient.quantity,
        unit: recipeIngredient.unit
      })),
      recipeIngredients: undefined
    }));

    res.status(200).json({
      recipes: formattedRecipes
    });
  } catch (error) {
    next(error);
  }
}

export const getRecipe = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;

    if(!id) {
      return res.status(404).json({
        message: 'No id was provided'
      });
    }

    const recipe = await prisma.recipe.findUnique({
      where: {
        id: +id
      },
      include: {
        recipeIngredients: {
          include: { ingredient: true }
        },
        tags: true
      }
    });

    if (!recipe) {
      return res.status(404).json({
        success: false,
        message: 'Recipe not found'
      });
    }

    const formattedRecipe = {
      ...recipe,
       ingredients: recipe.recipeIngredients.map(recipeIngredient => ({
        name: recipeIngredient.ingredient.name,
        quantity: recipeIngredient.quantity,
        unit: recipeIngredient.unit
      })),
      recipeIngredients: undefined
    }

    res.status(200).json({
      message: "Get recipe by id",
      recipe: formattedRecipe
    });
  } catch(error) {
    next(error);
  }
}

export const filterByTag = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.query.tags || typeof req.query.tags !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Tags query parameter is required'
      });
    }

    const tagParams: string = req.query.tags;
    const tags = tagParams.split(',');

    const filteredRecipes = await prisma.recipe.findMany({
      where: {
        tags: {
          some: {
            name: {
              in: tags
            }
          }
        }
      },
      include: {
        recipeIngredients: {
          include: { ingredient: true }
        },
        tags: true
      }
    })

    res.status(200).json({
      success: true,
      message: `Found ${filteredRecipes.length} recipes`,
      recipes: filteredRecipes
    })

  } catch (error) {
    next(error);
  }
} 

export const filterByIngredient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.query.ingredients || typeof req.query.ingredients !== 'string') {
      return res.status(400).json ({
        success: false,
        message: 'Ingredients query parameter is required'
      });
    }

    const ingredientParams: string = req.query.ingredients;
    const ingredients = ingredientParams.split(',');

    const filteredRecipes = await prisma.recipe.findMany({
      where: {
        recipeIngredients: {
          some: {
            ingredient: {
              name: {
                in: ingredients
              }
            }
          }
        }
      },
      include: {
        recipeIngredients: {
          include: { ingredient: true }
        },
        tags: true
      }
    });

    res.status(200).json({
      success: true,
      message: `Found ${filteredRecipes.length} recipes`,
      recipes: filteredRecipes
    });
  } catch (error) {
    next(error);
  }
}

export const createRecipe = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, cookingTime, ingredients, steps, tags, image, notes } = req.body;

     const recipe = await prisma.recipe.create({
      data: {
        name,
        cookingTime,
        steps,
        notes,
        image,
        recipeIngredients: {
          create: ingredients.map((ingredient: { name: string; quantity: string; unit: string }) => ({
            quantity: ingredient.quantity,
            unit: ingredient.unit,
            ingredient: {
              connectOrCreate: {
                where: { name: ingredient.name },
                create: { name: ingredient.name }
              }
            }
          }))
        },
        tags: {
          connectOrCreate: tags.map((tag: string) => ({
            where: { name: tag },
            create: { name: tag }
          }))
        }
      },
      include: {
        recipeIngredients: {
          include: { ingredient: true }
        },
        tags: true
      }
    });

    res.status(201).json({
      success: true,
      message: 'Recipe created successfully',
      data: { recipe }
    });
  } catch (error) {
    next(error);
  }
}

export const editRecipe = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, cookingTime, ingredients, steps, tags, image, notes } = req.body;
    const recipeId = Number(req.params.id);

    if (!Number.isInteger(recipeId) || recipeId <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Invalid ID format'
      });
    }
    
    const recipe = await prisma.$transaction(async (tx) => {
      await tx.recipeIngredient.deleteMany({
        where: { recipeId }
      });

      return await tx.recipe.update({
        where: { id: recipeId },
        data: {
          name,
          cookingTime,
          steps,
          notes,
          image,
          recipeIngredients: {
            create: ingredients.map((ingredient: { name: string; quantity: string; unit: string }) => ({
              quantity: ingredient.quantity,
              unit: ingredient.unit,
              ingredient: {
                connectOrCreate: {
                  where: { name: ingredient.name },
                  create: { name: ingredient.name }
                }
              }
            }))
          },
          tags: {
            set: [],
            connectOrCreate: tags.map((tag: string) => ({
              where: { name: tag },
              create: { name: tag }
            }))
          }
        },
        include: {
          recipeIngredients: {
            include: { ingredient: true }
          },
          tags: true
        }
      });
    });

    res.status(200).json({
      success: true,
      message: 'Recipe updated successfully',
      data: { recipe }
    });
  } catch (error) {
    next(error);
  }
}

export const deleteRecipe = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(404).json({
        message: 'No id was provided'
      });
    }

    await prisma.recipe.delete({
      where: {
        id: +id
      }
    });

    res.status(200).json({
      message: "Recipe Deleted",
      data: null
    });
  } catch(error) {
    next(error);
  }
}