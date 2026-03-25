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
    name: "menemen",
    ingredients: ["egg", "tomato", "pepper"],
    cookingTime: 15,
  },
  {
    name: "soup",
    ingredients: ["lentil", "oil", "water"],
    cookingTime: 30,
  },
];

const emptyRecipeBook = [];
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

  if (recipeBook.length < 1) {
    console.log("No recipe to display.");
    console.log("----------------");
    return;
  }

  for (const recipe of recipeBook) {
    console.log(
      `Name: ${recipe.name},\nIngredients: ${recipe.ingredients.join(", ")},\nCooking Time: ${recipe.cookingTime} minutes`,
    );
  }
  console.log("End of recipes.");
  console.log("----------------");
}
displayAllRecipes(recipes);
displayAllRecipes(emptyRecipeBook);
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
  console.log("Adding recipe with name...", name);
  console.log("Verifying if the recipe exists");
  for (const recipe of recipeBook) {
    if (recipe.name.toLowerCase() === name.toLowerCase()) {
      console.log(`Warning: recipe with name ${name} already exists`);
      console.log("----------------");
      return;
    }
  }
  const newRecipe = {
    name: name,
    ingredients: ingredients,
    cookingTime: cookingTime,
  };
  recipeBook.push(newRecipe);
  console.log(`${name} is added succesfully!`);
}

addRecipe("soup", ["Mercimek", "Soğan", "Su"], 25, recipes);
addRecipe("pastaBolognese", ["pasta", "meat", "tomato"], 35, recipes);

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
  console.log("Looking for recipe with the name ", name);
  for (const recipe of recipeBook) {
    if (recipe.name.toLowerCase() === name.toLowerCase()) {
      console.log("Name: " + recipe.name);
      console.log("Ingredients: " + recipe.ingredients);
      console.log("Cooking Time: " + recipe.cookingTime);
      return;
    }
  }
  console.log("No recipe found with the name ", name);
  console.log("----------------");
}

viewRecipe("soup", recipes);
viewRecipe("Soup", recipes);
viewRecipe("meatball", recipes);

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
  let isFound = false;

  for (const recipe of recipeBook) {
    if (recipe.name.toLowerCase() === name.toLowerCase()) {
      recipe.ingredients = newIngredients;
      recipe.cookingTime = newCookingTime;
      console.log("Recipe updated succesfully!");
      isFound = true;
      break;
    }
  }
  if (!isFound) {
    console.log("No recipe found with the name:", name);
    console.log("----------------");
  }
}

updateRecipe(
  "soup",
  ["lentil", "oil", "water", "potato", "carrot"],
  40,
  recipes,
);
viewRecipe("soup", recipes);
updateRecipe("fish", ["fish", "oil", "potato"], 60, recipes);
displayAllRecipes(recipes);

/*
-----------------------------------------------------------
  STEP 6: Delete a Recipe
-----------------------------------------------------------
Function: deleteRecipe(name)
- Finds and removes the recipe from the array.
- Logs success or error message.
*/
function deleteRecipe(name, recipeBook) {
  const index = recipeBook.findIndex(function (recipe) {
    return recipe.name.toLowerCase() === name.toLowerCase();
  });
  if (index !== -1) {
    recipeBook.splice(index, 1);
    console.log(`${name} is deleted succesfully!`);
  } else {
    console.log(`No recipe found with the name: ${name}`);
  }
}
deleteRecipe("soup", recipes);
deleteRecipe("kebap", recipes);
displayAllRecipes(recipes);

/*
-----------------------------------------------------------
  STEP 7: Extra Challenge – Filter Recipes
-----------------------------------------------------------
Function: filterByIngredient(ingredient)
- Shows all recipes that use a certain ingredient.

Function: filterByMaxTime(maxMinutes)
- Shows recipes that take <= maxMinutes to cook.
*/

function filterByIngredient(ingredient, recipeBook) {
  const searchItem = ingredient.toLowerCase();
  const foundRecipes=[];

  for (const recipe of recipeBook) {
    if (recipe.ingredients.includes(searchItem)) {
      foundRecipes.push(recipe);
      console.log(`Recipe found: ${recipe.name}`);
    }
  }
  if (foundRecipes.length===0) {

    console.log("Recipe not found");
  }
}
filterByIngredient("potato", recipes);
filterByIngredient("meat", recipes);
filterByIngredient("Meat", recipes);
console.log('-----------------------');

function filterByMaxTime(maxMinutes, recipeBook) {
  let less30Minutes = [];
  console.log(`Recipes that take max ${maxMinutes} minutes to cook:`);
  for (const recipe of recipeBook) {
    if (recipe.cookingTime <= maxMinutes) {
      less30Minutes.push(recipe);
      console.log(`${recipe.name}: ${recipe.cookingTime} minutes.`);
    }
  }
  if (less30Minutes.length === 0) {

    console.log(`No recipes found that take less than ${maxMinutes} minutes.`);
  }
}

filterByMaxTime(30, recipes);

