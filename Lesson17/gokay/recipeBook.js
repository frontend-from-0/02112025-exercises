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
    name: 'Omlet',
    ingredients: ['yumurta', 'süt', 'peynir'],
    cookingTime: 10
  },
  {
    name: 'Makarna',
    ingredients: ['makarna', 'su', 'tuz', 'salça'],
    cookingTime: 15
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
  console.log('--- Yemek Kitabı ---');
  if (recipes.length === 0) {
    console.log('Henüz kayıtlı tarif yok.');
    return;
  }

  recipes.forEach(recipe => {
    console.log(`Name: ${recipe.name}`);
    console.log(`Ingredients: ${recipe.ingredients.join(', ')}`);
    console.log(`Cooking Time: ${recipe.cookingTime} minutes`);
    console.log('--------------------');
  });
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
  const exists = recipes.find(r => r.name.toLowerCase() === name.toLowerCase());

  if (exists) {
    console.warn(`Uyarı: "${name}" tarifi zaten mevcut!`);
    return;
  }

  const newRecipe = { name, ingredients, cookingTime };
  recipes.push(newRecipe);
  console.log(`"${name}" başarıyla eklendi.`);
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
  const recipe = recipes.find(r => r.name.toLowerCase() === name.toLowerCase());

  if (recipe) {
    console.log(`Tarif Bulundu: ${recipe.name}`);
    console.log(`Malzemeler: ${recipe.ingredients.join(', ')}`);
    console.log(`Süre: ${recipe.cookingTime} dk`);
  } else {
    console.log(`"${name}" isminde bir tarif bulunamadı.`);
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
function updateRecipe(name, newIngredients, newCookingTime) {
  const recipe = recipes.find(r => r.name.toLowerCase() === name.toLowerCase());

  if (recipe) {
    recipe.ingredients = newIngredients;
    recipe.cookingTime = newCookingTime;
    console.log(`"${name}" tarifi güncellendi.`);
  } else {
    console.log("Güncellenecek tarif bulunamadı.");
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
function deleteRecipe(name) {
  const index = recipes.findIndex(r => r.name.toLowerCase() === name.toLowerCase());

  if (index !== -1) {
    recipes.splice(index, 1);
    console.log(`"${name}" silindi.`);
  } else {
    console.log("Silinecek tarif bulunamadı.");
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
// Malzemeye göre filtrele
function filterByIngredient(ingredient) {
  console.log(`İçinde "${ingredient}" olan tarifler:`);
  const found = recipes.filter(r => 
    r.ingredients.some(ing => ing.toLowerCase().includes(ingredient.toLowerCase()))
  );
  
  found.length > 0 ? console.table(found) : console.log("Eşleşen tarif yok.");
}

// Süreye göre filtrele (Hızlı yemekler)
function filterByMaxTime(maxMinutes) {
  console.log(`${maxMinutes} dakika veya daha kısa sürede pişenler:`);
  const quickRecipes = recipes.filter(r => r.cookingTime <= maxMinutes);
  
  quickRecipes.length > 0 ? console.table(quickRecipes) : console.log("Hızlı tarif bulunamadı.");
}


addRecipe('Menemen', ['yumurta', 'domates', 'biber'], 12);
filterByIngredient('yumurta'); // Hem Omlet hem Menemen gelmeli
filterByMaxTime(11); // Sadece Omlet gelmeli
displayAllRecipes();