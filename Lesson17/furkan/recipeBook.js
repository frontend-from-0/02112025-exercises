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
    ingredients: ["pasta", "tomato", "sauce"],
    cookingTime: 20,
  },
  {
    name: "Omlette",
    ingredients: ["egg", "butter", "salt", "milk"],
    cookingTime: 10,
  },
  {
    name: "Fries",
    ingredients: ["Potato", "Oil", "Ketchup"],
    cookingTime: 5,
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
    console.log("No recipes to display.");
    console.log("------------------");
    return;
  }

  for (const recipe of recipeBook) {
    console.log(
      `Name: ${recipe.name}\nIngredients: ${recipe.ingredients.join(", ")}\nCooking Time: ${recipe.cookingTime} minutes`
    );
    console.log("------------------");
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
  console.log("Adding recipe:", name);

  const foundRecipe = findRecipe(name, recipeBook);

  if (foundRecipe) {
    console.log("Recipe already exists!");
    return;
  }

  const newRecipe = {
    name: name,
    ingredients: ingredients,
    cookingTime: cookingTime,
  };

  recipes.push(newRecipe);

  console.log("Recipe added successfully!");
}
addRecipe("Pancake", ["egg", "milk", "flour"], 15);

displayAllRecipes(recipes); /*
-----------------------------------------------------------
  STEP 4: View a Recipe by Name
-----------------------------------------------------------
Function: viewRecipe(name)
- Looks for the recipe by name and logs all its info.
- If not found, shows a message.
*/

function viewRecipe(name) {
  console.log("Looking for recipe with name" + " " + name);

  const foundRecipe = findRecipe(name, recipeBook);
  
  if (foundRecipe) {
      console.log("Name:", recipe.name);
      console.log("Ingredients:", recipe.ingredients);
      console.log("Cooking Time:", recipe.cookingTime);
    } else {
    console.log("Recipe not found");
  }
}

viewRecipe("Pancake", recipes);
viewRecipe("Omlette", recipes);
viewRecipe("Pasta", recipes);
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
function updateRecipe(name, newIngredients, newCookingTime) {
  const foundRecipe = findRecipe(name, recipeBook);

  if (foundRecipe) {
    foundRecipe.ingredients = newIngredients;
    foundRecipe.cookingTime = newCookingTime;
    console.log("Recipe updated successfully");
  } else {
    console.log("Recipe not found");
  }

updateRecipe("Pasta", ["pasta", "garlic", "sauce"], 15, recipes);
updateRecipe("omlette", ["egg", "salt", "avocado"], 12, recipes);
viewRecipe("Pasta", recipes);
viewRecipe("omlette", recipes);

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
  console.log("Trying to delete recipe:", name);

  const index = recipeBook.findIndex(
    (recipe) => recipe.name.toLowerCase() === name.toLowerCase(),
  );
  if (index === -1) {
    console.log("No recipe found with the name:", name);
    console.log("----------------");
    return;
  }
  recipeBook.splice(index, 1);
  console.log("Recipe deleted succesfully.");
  console.log("----------------");
}

deleteRecipe("pasta", recipes);
displayAllRecipes(recipes);
deleteRecipe("omlette", recipes);
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
  console.log("Recipes containing:", ingredient);

  const normalizedIngredient = ingredient.toLowerCase();
  let found = false;

  for (let recipe of recipeBook) {
    const hasIngredient = recipe.ingredients.some(
      (item) => item.toLoweCase() === normalizedIngredient
        );
    if (hasIngredient) {
      console.log(recipe.name);
      found = true;
    }
  }
}
filterByIngredient("tomato", recipes);
filterByIngredient("OIL", recipes);
filterByIngredient("cheese", recipes);
