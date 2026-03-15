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
    name: 'Pasta',
    ingredients: ['pasta', 'tomato', 'garlic', 'olive oil'],
    cookingTime: 20
  },
  {
    name: 'Omelette',
    ingredients: ['egg', 'milk', 'butter', 'cheese'],
    cookingTime: 10
  }
];

function findRecipe(name, recipeBook) {
  return recipeBook.find(recipe => recipe.name.toLowerCase() === name.toLowerCase());
}





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

  console.log('\n--- Recipe Book ---');
  if (recipeBook.length === 0) {
    console.log('No recipes found.');
    return;
 }
 for (let recipe of recipeBook) {
    console.log(`Name: ${recipe.name}`);
    console.log(`Ingredients: ${recipe.ingredients.join(', ')}`);
    console.log(`Cooking Time: ${recipe.cookingTime} minutes`);
    console.log('-------------------');
  }
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
  const existingRecipe = findRecipe(name, recipeBook);

  if (existingRecipe) {
    console.warn(`Warning: Recipe "${name}" already exists!`);
    return;
  }

  const newRecipe = { name, ingredients, cookingTime };
  recipeBook.push(newRecipe);
  console.log(`Success: Recipe "${name}" added.`);
}




/*
-----------------------------------------------------------
  STEP 4: View a Recipe by Name
-----------------------------------------------------------
Function: viewRecipe(name)
- Looks for the recipe by name and logs all its info.
- If not found, shows a message.
*/


function viewRecipe(name, recipeBook) {
  const recipe = findRecipe(name, recipeBook);

  if (recipe) {
    console.log(`\n--- Viewing: ${recipe.name} ---`);
    console.log(`Ingredients: ${recipe.ingredients.join(', ')}`);
    console.log(`Cooking Time: ${recipe.cookingTime} minutes`);
  } else {
    console.log(`Not Found: No recipe found with the name "${name}".`);
  }
}




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
    recipe.ingredients = newIngredients;
    recipe.cookingTime = newCookingTime;
    console.log(`Success: Recipe "${name}" updated.`);
  } else {
    console.log(`Not Found: Cannot update. Recipe "${name}" does not exist.`);
  }
}




/*
-----------------------------------------------------------
  STEP 6: Delete a Recipe
-----------------------------------------------------------
Function: deleteRecipe(name)
- Finds and removes the recipe from the array.
- Logs success or error message.
*/


function deleteRecipe(name, recipeBook) {
  const index = recipeBook.findIndex(recipe => recipe.name.toLowerCase() === name.toLowerCase());

  if (index !== -1) {
    recipeBook.splice(index, 1);
    console.log(`Success: Recipe "${name}" deleted.`);
  } else {
    console.log(`Not Found: Cannot delete. Recipe "${name}" does not exist.`);
  }
}




/*
-----------------------------------------------------------
  STEP 7: Extra Challenge – Filter Recipes
-----------------------------------------------------------
Function: filterByIngredient(ingredient)
- Shows all recipes that use a certain ingredient.

Function: filterByMaxTime(maxMinutes)
- Shows recipes that take <= maxMinutes to cook.
*/



// Malezemeye göre  filitrele 


function filterByIngredient(ingredient, recipeBook) {
  console.log(`\n--- Recipes containing: ${ingredient} ---`);
  const lowerIngredient = ingredient.toLowerCase();

  const results = recipeBook.filter(recipe => {
    return recipe.ingredients.some(ing => ing.toLowerCase().includes(lowerIngredient));
  });

  if (results.length > 0) {
    displayAllRecipes(results); 
  } else {
    console.log(`No recipes found with "${ingredient}".`);
  }
}

// Süreye göre filtrele

function filterByMaxTime(maxMinutes, recipeBook) {
  console.log(`\n--- Recipes taking ${maxMinutes} minutes or less ---`);
  
  const results = recipeBook.filter(recipe => recipe.cookingTime <= maxMinutes);

  if (results.length > 0) {
    displayAllRecipes(results);
  } else {
    console.log(`No recipes found under ${maxMinutes} minutes.`);
  }
}
console.log("=== STARTING TESTS ===");

displayAllRecipes(recipes);

addRecipe("Pancakes", ["flour", "milk", "egg", "sugar"], 15, recipes);
addRecipe("Pasta", ["flour"], 10, recipes); 

viewRecipe("Omelette", recipes);

updateRecipe("Omelette", ["egg", "milk", "butter", "cheese", "mushroom"], 12, recipes);

deleteRecipe("Pasta", recipes);

filterByIngredient("egg", recipes);
filterByMaxTime(15, recipes);