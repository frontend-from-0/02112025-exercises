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
console.log("--- STEP 1 ---")
console.log("Recipe book creating..")
const recipes = [
  {
   name: "Pasta",
   ingredients:["pasta", "tomato", "garlic"],
   cookingTime: 20,
  },
  {
   name: "Banana Milk" ,
   ingredients:["milk", "banana", "honey"],
   cookingTime: 4,
  },
  {
   name: "Omlet" ,
   ingredients:["egg", "cheese", "dill"],
   cookingTime: 10,
  }
];

const emptyReciepeBook = [ ];
console.log("Recipe book is ready!")
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
console.log("--- STEP 2 ---")
console.log("Recipe book displaying..")
function displayAllRecipes(recipeBook){
  if(recipeBook.length < 1){
    console.log("No recipe to display.")
    return;
  }
  for(let i = 0; i < recipeBook.length; i++){
    console.log(
      `Name: ${recipeBook[i].name}, Ingredients: ${recipeBook[i].ingredients}, Cooking Time: ${recipeBook[i].cookingTime} minutes `)
    }
    console.log('End of recipies.');
}
displayAllRecipes(recipes);


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
console.log("--- STEP 3 ---")

function addRecipe(name, ingredients, cookingTime){
  console.log(`Searching is there ${name} recipe..`)
  for(let i = 0; i < recipes.length; i++){
    if(recipes[i].name === name){
     console.log("This recipe is already exist."); 
    return;
    }
  } ;
 
const newRecipe = {
    name: name,
    ingredients: ingredients,
    cookingTime: cookingTime,
  }
  console.log(`There is no ${name} recipe..Updating Recipe Book..`)
  recipes.push(newRecipe)
 } 
addRecipe("Pancake", ["egg","milk","flour","vanilla","cherry","honey"], 15);
displayAllRecipes(recipes);

/*
-----------------------------------------------------------
  STEP 4: View a Recipe by Name
-----------------------------------------------------------
Function: viewRecipe(name)
- Looks for the recipe by name and logs all its info.
- If not found, shows a message.
*/
console.log("--- STEP 4 ---")
function viewRecipe(name){
   console.log(`Searcing ${name} recipe..`);
   
for(let i = 0; i < recipes.length; i++){
  if(recipes[i].name === name){
    console.log(`${name} recipe is found. You can see as below;`);
    console.log(recipes[i]); 
    return;
  } 
    }
    console.log(`Sorry, but there is no recipe called ${name} :(`)
}
viewRecipe("Omlet");
viewRecipe("Bread");
/*
-----------------------------------------------------------
  STEP 5: Update a Recipe
-----------------------------------------------------------
Function: updateRecipe(name, newIngredients, newCookingTime)
- Finds the recipe by name.
- Updates ingredients and cookingTime.
- Logs success or error message.
*/
console.log("--- STEP 5 ---")

function updateRecipe(name, newIngredients, newCookingTime){
  console.log(`Searcing ${name} recipe..`);
for(let i = 0; i < recipes.length; i++){
  if(recipes[i].name === name){
recipes[i].ingredients = newIngredients;
recipes[i].cookingTime = newCookingTime; 
console.log(`${name} recipe is found and updated`);
displayAllRecipes(recipes);
return;
  }
}
console.log("Sorry, update is unsuccsessfull!");

}
updateRecipe("Pasta", ["pasta", "butter", "salt"], 17);
/*
-----------------------------------------------------------
  STEP 6: Delete a Recipe
-----------------------------------------------------------
Function: deleteRecipe(name)
- Finds and removes the recipe from the array.
- Logs success or error message.
*/
console.log("--- STEP 6 ---")
function deleteRecipe(name, recipeBook){
 console.log(`Searcing ${name} recipe..`);
 let index = -1;
for(let i = 0; i < recipeBook.length; i++){
  if(recipeBook[i].name === name){
    index = i;
  }
}
if (index !== -1){
  recipeBook.splice(index,1);
  console.log(`${name} recipe is deleting..`)
  console.log(`${name} recipe deleted..`)

} else {console.log(`Sorry, but there is no recipe called ${name} :( , delete unseccsessfull!`)
}
}
deleteRecipe("Omlet",recipeBook);
deleteRecipe("Beef",recipeBook);


console.log("-----------------------------------------------------------");
  console.log("STEP 7: Extra Challenge – Filter Recipes")
console.log("-----------------------------------------------------------");
/*
Function: filterByIngredient(ingredient)
- Shows all recipes that use a certain ingredient.
*/

console.log("--- STEP 7 ---")
console.log("--Additional Practice 1--")
function filterByIngredient(ingredient, recipeBook){
  let found = false;
  for(const recipe of recipeBook){
  if(recipe.ingredients.includes(ingredient)){
    console.log("Recipe was found by ingredient: ", recipe); 
    found = true;
  }   
}
if(!found){
  console.log("Recipe doesn't exist.")
}
}
filterByIngredient("salt", recipes);
filterByIngredient("sugar", recipes);

/*
Function: filterByMaxTime(maxMinutes)
- Shows recipes that take <= maxMinutes to cook.
*/
console.log("--Additional Practice 2--")
console.log(`Looking for recipe for less than ${maxMinutes} minutes cooking time from Recipe Book.. `);
function filterByMaxTime(maxMinutes,recipeBook){
  for(let i = 0; i < recipeBook.length; i++){
    if(recipeBook[i].cookingTime <= maxMinutes){
      console.log("Found! Here you are, bonna petit!")
      console.log(recipeBook[i])
    }
  }
}
filterByMaxTime(10,recipes);