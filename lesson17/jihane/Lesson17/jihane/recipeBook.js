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
  { name : 'Pasta',
    ingredients : ['pasta', 'tomato', 'garlic'],
    cookingTime : 20, 
  },
  {
    name : 'Guacamole',
    ingredients: ['lime', 'avocados', 'salt'],
    cookingTime : 10,
  },
  {
    name : 'Pizza',
    ingredients: ['surdough', 'tomato', 'cheese'],
    cookingTime : 15, 
  },
  {
    name : 'Pancake',
    ingredients: ['milk', 'egg', 'flour', 'sugar'],
    cookingTime : 10, 
  }
]


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

  console.log('-------------------');

  for (let i = 0; i < recipeBook.length; i++) {
    console.log(`Name: ${recipeBook[i].name}`);
    console.log(`Ingredients: ${recipeBook[i].ingredients}`);
    console.log(`Cooking Time: ${recipeBook[i].cookingTime}`);
    console.log('End of the recipe.');
    console.log('----------------------');
  }
}

displayAllRecipes(recipeBook);


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
  console.log(`Trying to add recipe: ${name}`);

  // Check if recipe already exists
  for (let i = 0; i < recipeBook.length; i++) {
    if (recipeBook[i].name.toLowerCase() === name.toLowerCase()) {
      console.log(`Recipe "${name}" already exists.`);
      return;
    }
  }

  // Create new recipe object
  const newRecipe = {
    name: name,
    ingredients: ingredients,
    cookingTime: cookingTime
  };

  // Add to recipeBook
  recipeBook.push(newRecipe);

  console.log(`Recipe "${name}" added successfully.`);
}

addRecipe('Omelette', ['egg', 'salt', 'butter'], 5, recipes);
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
  console.log(`Searching for recipe: ${name}`);

  // Search for the recipe
  for (let i = 0; i < recipeBook.length; i++) {
    if (recipeBook[i].name.toLowerCase() === name.toLowerCase()) {
      console.log('Recipe found:');
      console.log(`Name: ${recipeBook[i].name}`);
      console.log(`Ingredients: ${recipeBook[i].ingredients.join(', ')}`);
      console.log(`Cooking Time: ${recipeBook[i].cookingTime} minutes`);
      console.log('----------------------');
      return;
    }
  }

  // If not found
  console.log(`No recipe found with the name: ${name}`);
}

viewRecipe('Pasta', recipes);
viewRecipe('Burger', recipes);

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
  console.log(`Trying to update recipe: ${name}`);

  // Search for the recipe
  for (let i = 0; i < recipeBook.length; i++) {
    if (recipeBook[i].name.toLowerCase() === name.toLowerCase()) {
      
      // Update values
      recipeBook[i].ingredients = newIngredients;
      recipeBook[i].cookingTime = newCookingTime;

      console.log(`Recipe "${name}" updated successfully.`);
      return;
    }
  }

  // If not found
  console.log(`No recipe found with the name: ${name}`);
}

updateRecipe('Pasta', ['pasta', 'cream', 'mushroom'], 25, recipes);
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
  console.log(`Trying to delete recipe: ${name}`);

  // Find index of the recipe
  for (let i = 0; i < recipeBook.length; i++) {
    if (recipeBook[i].name.toLowerCase() === name.toLowerCase()) {
      
      // Remove recipe using splice
      recipeBook.splice(i, 1);

      console.log(`Recipe "${name}" deleted successfully.`);
      return;
    }
  }

  // If not found
  console.log(`No recipe found with the name: ${name}`);
}

deleteRecipe('Pizza', recipes);
displayAllRecipes(recipes);


/*
-----------------------------------------------------------
  STEP 7: Extra Challenge â€“ Filter Recipes
-----------------------------------------------------------
Function: filterByIngredient(ingredient)
- Shows all recipes that use a certain ingredient.

Function: filterByMaxTime(maxMinutes)
- Shows recipes that take <= maxMinutes to cook.
*/


function filterByIngredient(ingredient, recipeBook) {
  console.log(`Filtering recipes with ingredient: ${ingredient}`);

  let found = false;

  for (let i = 0; i < recipeBook.length; i++) {
    if (recipeBook[i].ingredients.includes(ingredient)) {
      console.log(`Name: ${recipeBook[i].name}`);
      console.log(`Ingredients: ${recipeBook[i].ingredients.join(', ')}`);
      console.log(`Cooking Time: ${recipeBook[i].cookingTime} minutes`);
      console.log('----------------------');
      found = true;
    }
  }

  if (!found) {
    console.log(`No recipes found with ingredient: ${ingredient}`);
  }
}

function filterByMaxTime(maxMinutes, recipeBook) {
  console.log(`Filtering recipes with cooking time <= ${maxMinutes} minutes`);

  let found = false;

  for (let i = 0; i < recipeBook.length; i++) {
    if (recipeBook[i].cookingTime <= maxMinutes) {
      console.log(`Name: ${recipeBook[i].name}`);
      console.log(`Ingredients: ${recipeBook[i].ingredients.join(', ')}`);
      console.log(`Cooking Time: ${recipeBook[i].cookingTime} minutes`);
      console.log('----------------------');
      found = true;
    }
  }

  if (!found) {
    console.log(`No recipes found under ${maxMinutes} minutes`);
  }
}

filterByIngredient('tomato', recipes);
filterByMaxTime(15, recipes);