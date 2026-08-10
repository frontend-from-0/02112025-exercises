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
    name: "Pasta",
    ingredients: ["pasta", "Tomato Sauce", "Cheese"],
    cookingTime: 30
  },
  {
    name: "Omelette",
    ingredients: ["Eggs", "Milk", "Salt", "Butter"],
    cookingTime: 15
  },
  {
    name: "Salad",
    ingredients: ["Lettuce", "Tomato", "Cucumber", "Olive Oil"],
    cookingTime: 20
  }
];
console.log(recipes);
const recipeBook = [];
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
  console.log('Displaying all recipes...');

  if (recipeBook.length < 1) {
    console.log('No recipes to display.');
    console.log('----------------');
    return;
  }

  for (let i = 0; i < recipeBook.length; i++) {
    console.log(
      `Name: ${recipeBook[i].name}\nIngredients:${recipeBook[i].ingredients}\nCooking Time: ${recipeBook[i].cookingTime}\n\n`,
    );
  }
  console.log('End of recipes.');
  console.log('----------------');
}

displayAllRecipes(recipes);
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
function addRecipe(name, ingredients, cookingTime) {
  const exists = recipes.some(recipe => recipe.name.toLowerCase() === name.toLowerCase());
  
  if (exists) {
    console.log(`Recipe with the name "${name}" already exists.`);
    return;
  }

  recipes.push({
    name: name,
    ingredients: ingredients,
    cookingTime: cookingTime
  });

  console.log(`Recipe "${name}" added successfully.`);
}
addRecipe("Coffee", ["Coffee","Milk","Cream"],25);
addRecipe("Salad", ["Coffee","Milk","Cream"],25);
console.log(recipes);

/*
-----------------------------------------------------------
  STEP 4: View a Recipe by Name
-----------------------------------------------------------
Function: viewRecipe(name)
- Looks for the recipe by name and logs all its info.
- If not found, shows a message.
*/

function viewRecipe(name) {
  const recipe = recipes.find(r => r.name.toLowerCase() === name.toLowerCase());

  if (recipe) {
    console.log("Recipe found:");
    console.log(`Name: ${recipe.name}`);
    console.log(`Ingredients: ${recipe.ingredients.join(", ")}`);
    console.log(`Cooking Time: ${recipe.cookingTime} minutes`);
  } else {
    console.log(`No recipe found with the name: "${name}"`);
  }
}
viewRecipe("Salad");
viewRecipe("Soup"); // bulunmayan tarif
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
  const maybeRecipe = findRecipe(name, recipeBook);
  if (maybeRecipe) {
    maybeRecipe.ingredients = newIngredients;
    maybeRecipe.cookingTime = newCookingTime;
    console.log('Recipe updated successfully.');
  } else {
    console.log('No recipe found with the name ', name);
  }
}
updateRecipe("Coffee", ["Coffee","Milk"],50,recipes);
updateRecipe("Cake", ["Bread","Milk"],15,recipes);
viewRecipe('Salad', recipes);

displayAllRecipes(recipes);

/*
-----------------------------------------------------------
  STEP 6: Delete a Recipe
-----------------------------------------------------------
Function: deleteRecipe(name)
- Finds and removes the recipe from the array.
- Logs success or error message.
*/

function deleteRecipe(name) {
  const index = recipes.findIndex(recipe => recipe.name === name);

  if (index !== -1) {
    recipes.splice(index, 1);
    console.log("Recipe removed successfully.");
  } else {
    console.log(`No recipe found with the name: ${name}`);
  }
}

deleteRecipe("Salad");
console.log(recipes);
/*
-----------------------------------------------------------
  STEP 7: Extra Challenge – Filter Recipes
-----------------------------------------------------------
Function: filterByIngredient(ingredient)
- Shows all recipes that use a certain ingredient.

Function: filterByMaxTime(maxMinutes)
- Shows recipes that take <= maxMinutes to cook.
*/
function findRecipesByIngredient(ingredients) {
  const filtered = recipes.filter(recipe => 
    recipe.ingredients.some(i => i.toLowerCase() === ingredients.toLowerCase())
  );

  if (filtered.length > 0) {
    console.log(`Recipes containing "${ingredients}":`);
    filtered.forEach(r => console.log(`- ${r.ingredients}`));
  } else {
    console.log(`No recipes found with the ingredient: "${ingredients}"`);
  }
}

findRecipesByIngredient("Coffee");
findRecipesByIngredient("Bread");
function findRecipesByMaxTime(maxMinutes) {
  const filtered = recipes.filter(recipe => recipe.cookingTime <= maxMinutes);

  if (filtered.length > 0) {
    console.log(`Recipes that take <= ${maxMinutes} minutes to cook:`);
    filtered.forEach(r => console.log(`- ${r.name} (${r.cookingTime} min)`));
  } else {
    console.log(`No recipes found that take <= ${maxMinutes} minutes to cook.`);
  }
}

findRecipesByMaxTime(100);
findRecipesByMaxTime(50);
