
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
    ingredients: ["pasta", "tomato", "garlic"],
    cookingTime: 20
  },
  {
    name: "Omelette",
    ingredients: ["egg", "milk", "cheese"],
    cookingTime: 10
  },
  {
    name: "Salad",
    ingredients: ["lettuce", "tomato", "cucumber"],
    cookingTime: 5
  }
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

function displayAllRecipes() {

  for (const recipe of recipes) {
    console.log("Name:", recipe.name);
    console.log("Ingredients:", recipe.ingredients.join(", "));
    console.log("Cooking Time:", recipe.cookingTime, "minutes");
    console.log("--------------");
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

function addRecipe(name, ingredients, cookingTime) {

  const existing = recipes.find(r => r.name === name);

  if (existing) {
    console.log("Recipe already exists!");
    return;
  }

  recipes.push({
    name: name,
    ingredients: ingredients,
    cookingTime: cookingTime
  });

  console.log("Recipe added successfully!");

}


/*
-----------------------------------------------------------
  STEP 4: View a Recipe by Name
-----------------------------------------------------------
Function: viewRecipe(name)
- Looks for the recipe by name and logs all its info.
- If not found, shows a message.
*/

function viewRecipe(name) {

  const recipe = recipes.find(r => r.name === name);

  if (!recipe) {
    console.log("Recipe not found");
    return;
  }

  console.log("Name:", recipe.name);
  console.log("Ingredients:", recipe.ingredients.join(", "));
  console.log("Cooking Time:", recipe.cookingTime);

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
function updateRecipe(name, newIngredients, newCookingTime) {

  const index = recipes.findIndex(r => r.name === name);

  if (index === -1) {
    console.log("Recipe not found");
    return;
  }

  recipes[index].ingredients = newIngredients;
  recipes[index].cookingTime = newCookingTime;

  console.log("Recipe updated!");

}


/*
-----------------------------------------------------------
  STEP 6: Delete a Recipe
-----------------------------------------------------------
Function: deleteRecipe(name)
- Finds and removes the recipe from the array.
- Logs success or error message.
*/
function deleteRecipe(name) {

  const index = recipes.findIndex(r => r.name === name);

  if (index === -1) {
    console.log("Recipe not found");
    return;
  }

  recipes.splice(index, 1);

  console.log("Recipe deleted!");

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

function filterByIngredient(ingredient) {

  for (const recipe of recipes) {

    if (recipe.ingredients.includes(ingredient)) {
      console.log(recipe.name);
    }

  }

}
