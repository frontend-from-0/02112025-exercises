/*
===========================================================
  RECIPE BOOK APPLICATION
===========================================================
In this mini-project, you will create a simple Recipe Book 
to store and manage recipes.

You'll practice:
1. Arrays and objects
2. Loops (for, for-of, findIndex)
3. Conditionals (if-else)
4. CRUD operations (Create, Read, Update, Delete)
5. Extra challenge: Filter by ingredient or cooking time

Run this file in Node.js or the browser console to test.
*/

/*
-----------------------------------------------------------
  STEP 1: Setup and Initial Recipes
-----------------------------------------------------------
1. Create a variable 'recipes' with a suitable data type with a few starter recipes.
2. Each recipe  should have:
   - name (string)
   - ingredients (array of strings)
   - cookingTime (number, in minutes)
*/

const recipes = [
  {
    name: "Spaghetti Aglio e Olio",
    ingredients: ["Spaghetti", "Garlic", "Olive Oil", "Red Pepper Flakes"],
    cookingTime: 15,
  },
  {
    name: "Classic Grilled Cheese",
    ingredients: ["Bread", "Butter", "Cheddar Cheese"],
    cookingTime: 10,
  },
  {
    name: "Berry Smoothie",
    ingredients: ["Frozen Berries", "Banana", "Almond Milk", "Honey"],
    cookingTime: 5,
  },
];

/*
-----------------------------------------------------------
  STEP 2: Display All Recipes
-----------------------------------------------------------
Function: displayAllRecipes()
- Logs each recipe from recipes in a nice format:
  Name: Pasta
  Ingredients: pasta, tomato, garlic
  Cooking Time: 20 minutes
*/

function displayAllRecipes(recipeBook) {
  console.log("Displaying all recipes...");
  if (recipeBook.length === 0) {
    console.log("No recipes to display..");
    return;
  }

  for (let i = 0; i < recipeBook.length; i++) {
    console.log(
      `Name: ${recipeBook[i].name}, Ingredients: ${recipeBook[i].ingredients}, Cooking Time: ${recipeBook[i].cookingTime})`,
    );
  }
  console.log("end of recipes");
}

displayAllRecipes(recipes);

// Helper function findRecipe:
function findRecipe(name, recipeBook) {
  for (let i = 0; i < recipeBook.length; i++) {
    if (recipeBook[i].name.toLowerCase() === name.toLowerCase()) {
      return recipeBook[i];
    }
  }
  return null;
}
/*
-----------------------------------------------------------
  STEP 3: Add a New Recipe
-----------------------------------------------------------
Function: addRecipe(name, ingredients, cookingTime)
- Checks if a recipe with the same name exists.
- If yes, log a warning and return.
- If not, add the new recipe and log success.
- ingredients should be an array like ['egg', 'milk', 'flour']
*/
function addRecipe(name, ingredients, cookingTime, recipeBook) {
  console.log("Adding a new recipe by name", name);

  console.log("Verifying if the recipe exists");

  const existRecipe = findRecipe(name, recipeBook);

  if (existRecipe) {
    console.warn(`Warning: recipe with name ${name} already exists`);
    console.log("----------------");
    return;
  }

  console.log("Recipe is not found.");
  const newRecipe = {
    name: name,
    ingredients: ingredients,
    cookingTime: cookingTime,
  };

  recipeBook.push(newRecipe);
  console.log("Added recipe with name", name);
  console.log("----------------");
}
addRecipe(
  "Scrambled Eggs",
  ["2 eggs", "2 tablespoons of milk", "1 teaspoon of butter"],
  5,
  recipes,
);

addRecipe("Banana Pancakes", ["Banana", "2 eggs", "Milk"], 10, recipes);

displayAllRecipes(recipes);
/*
-----------------------------------------------------------
  STEP 4: View a Recipe by Name
-----------------------------------------------------------
Function: viewRecipe(name)
- Looks for the recipe by name and logs all its info.
- If not found, shows a message.
*/
function viewRecipe(name, recipeBook) {
  console.log("Displaying the recipe by name...", name);
  const existRecipe = findRecipe(name, recipeBook);

  if (existRecipe) {
    console.log("Name: " + existRecipe.name);
    console.log("Ingredients: " + existRecipe.ingredients);
    console.log("Cooking Time: " + existRecipe.cookingTime);
    return;
  }
  console.log("No recipe found with the name: " + name);
}
viewRecipe("Banana Pancakes", recipes);
viewRecipe("Scrambled Eggs", recipes);
viewRecipe("Classic Grilled Cheese", recipes);
viewRecipe("", recipes);

/*
-----------------------------------------------------------
  STEP 5: Update a Recipe
-----------------------------------------------------------
Function: updateRecipe(name, newIngredients, newCookingTime)
- Finds the recipe by name.
- Updates ingredients and cookingTime.
- Logs success or error message.
*/
function updateRecipe(name, newIngredients, newCookingTime, recipeBook) {
  const recipe = findRecipe(name, recipeBook);

  if (recipe) {
    console.log(`Recipe has found with name ${name}...`);
    console.log("Recipe is updating...");

    recipe.ingredients = newIngredients;
    recipe.cookingTime = newCookingTime;

    console.log(`✅ Success: "${name}" recipe has been updated.`);
  } else {
    console.error(`❌ Error: Recipe "${name}" not found. Update failed.`);
  }
  console.log("----------------");
}

updateRecipe(
  "Scrambled Eggs",
  ["2 eggs", "2 tablespoons of almond milk", "1 teaspoon of butter"],
  5,
  recipes,
);
/*
-----------------------------------------------------------
  STEP 6: Delete a Recipe
-----------------------------------------------------------
Function: deleteRecipe(name)
- Finds and removes the recipe from the array.
- Logs success or error message.
*/
function deleteRecipe(name, recipeBook) {
  const index = recipeBook.findIndex(
    (recipe) => recipe.name.toLowerCase() === name.toLowerCase(),
  );
  if (index !== -1) {
    recipeBook.splice(index, 1);
    console.log(`✅ Success: Recipe "${name}" has been deleted.`);
  } else {
    console.error(`❌ Error: Recipe "${name}" not found. Nothing to delete.`);
  }
  console.log("----------------");
}
deleteRecipe("Banana Pancakes", recipes);
displayAllRecipes(recipes);
/*
-----------------------------------------------------------
  STEP 7: Extra Challenge – Filter Recipes
-----------------------------------------------------------
Function: filterByIngredient(ingredient)
- Shows all recipes that use a certain ingredient.
*/
function filterByIngredient(ingredients, recipeBook) {
console.log(`Searching for recipes that include: "${ingredients}"`);

const matchingRecipes = recipeBook.filter(recipe =>recipe.ingredients.some(ing => ing.toLowerCase().includes(ingredients.toLowerCase()))
  );

  if (matchingRecipes.length > 0) {
    displayAllRecipes(matchingRecipes);
  } else {
    console.log(`No recipes found containing "${ingredients}"`);
  }
}

filterByIngredient("Garlic", recipes);
/*
Function: filterByMaxTime(maxMinutes)
- Shows recipes that take <= maxMinutes to cook.
*/

function filterByMaxTime(maxMinutes, recipeBook) {
console.log(`--- Recipes that take ${maxMinutes} minutes or less ---`);
const quickRecipes = recipeBook.filter(recipe => recipe.cookingTime <= maxMinutes);

if (quickRecipes.length > 0) {
  displayAllRecipes(quickRecipes);
} else {
  console.log(`Sorry, no recipes found that can be made in ${maxMinutes} minutes.`);
}
}

filterByMaxTime(10, recipes);