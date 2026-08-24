import { prisma } from "../src/lib/prisma.ts";

const recipesData = [
  {
    "name": "Steak Sammie",
    "ingredients": [
      { "name": "Steak", "quantity": "1", "unit": "piece" },
      { "name": "Spinach", "quantity": "1", "unit": "handful" },
      { "name": "Bread", "quantity": "1", "unit": "loaf" }
    ],
    "cookingTime": 20,
    "tags": ["quick", "lunch"],
    "steps": [
      "Fry off the steak",
      "Slice bread and add mayo",
      "Peel potatoes and add to air fryer for 10 mins with chicken salt",
      "Serve and enjoy"
    ],
    "image": "/images/1724174150535-20240528_192155.jpg",
    "notes": "Dont forget to add salt and pepper"
  },
  {
    "name": "Vegetable Stir Fry",
    "ingredients": [
      { "name": "Broccoli", "quantity": "1", "unit": "head" },
      { "name": "Carrots", "quantity": "2", "unit": "whole" },
      { "name": "Peppers", "quantity": "2", "unit": "whole" },
      { "name": "Soy Sauce", "quantity": "3", "unit": "tbsp" },
      { "name": "Garlic", "quantity": "3", "unit": "cloves" },
      { "name": "Ginger", "quantity": "1", "unit": "inch" },
      { "name": "Rice", "quantity": "300", "unit": "g" }
    ],
    "cookingTime": 30,
    "tags": ["vegetarian", "healthy", "quick"],
    "steps": [
      "Cook rice according to package instructions",
      "Chop all vegetables into bite-sized pieces",
      "Heat oil in wok on high heat",
      "Add garlic and ginger, stir for 30 seconds",
      "Add harder vegetables first (carrots, broccoli)",
      "Add peppers, stir fry for 5 minutes",
      "Add soy sauce, toss everything together",
      "Serve over rice"
    ],
    "image": "/images/veg-stir-fry.jpg",
    "notes": "Keep the heat high for best results"
  },
];

async function main() {
  console.log('🌱 Starting seed...');

  // Clear existing data
  await prisma.recipeIngredient.deleteMany({});
  await prisma.recipe.deleteMany({});
  await prisma.ingredient.deleteMany({});
  await prisma.tag.deleteMany({});

  // Collect all unique ingredients and tags from all recipes
  const allIngredientNames = new Set<string>();
  const allTagNames = new Set<string>();

  recipesData.forEach(recipe => {
    recipe.ingredients.forEach(ingredient => allIngredientNames.add(ingredient.name));
    recipe.tags.forEach(tag => allTagNames.add(tag));
  });

  // Create all ingredients
  console.log('Creating ingredients...');
  for (const ingredientName of allIngredientNames) {
    await prisma.ingredient.upsert({
      where: { name: ingredientName },
      update: {},
      create: { name: ingredientName },
    });
  }

  // Create all tags
  console.log('Creating tags...');
  for (const tagName of allTagNames) {
    await prisma.tag.upsert({
      where: { name: tagName },
      update: {},
      create: { name: tagName },
    });
  }

  // Create recipes with their ingredients and tags
  console.log('Creating recipes...');
  for (const recipeData of recipesData) {
    await prisma.recipe.create({
      data: {
        name: recipeData.name,
        cookingTime: recipeData.cookingTime,
        steps: recipeData.steps,
        image: recipeData.image,
        notes: recipeData.notes || null,
        recipeIngredients: {
          create: recipeData.ingredients.map(ing => ({
            quantity: ing.quantity,
            unit: ing.unit || null, // Now properly populating the unit field
            ingredient: {
              connect: { name: ing.name }
            }
          }))
        },
        tags: {
          connect: recipeData.tags.map(tag => ({ name: tag }))
        }
      }
    });
    console.log(`✅ Created recipe: ${recipeData.name}`);
  }

  console.log('🎉 Seed completed successfully!');
  console.log(`📊 Summary:`);
  console.log(`   - ${recipesData.length} recipes`);
  console.log(`   - ${allIngredientNames.size} unique ingredients`);
  console.log(`   - ${allTagNames.size} unique tags`);
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });