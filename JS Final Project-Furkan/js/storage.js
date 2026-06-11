function saveMeals(meals) {
  localStorage.setItem('meals', JSON.stringify(meals));
}

function getMeals() {
  const meals = localStorage.getItem('meals');
  return meals
    ? JSON.parse(meals)
    : {
        breakfast: [],
        lunch: [],
        dinner: [],
      };
}

function saveMealByType(mealType) {
  const meals = getMeals();
  const items = meals[mealType];
  if (items.length === 0) return;

  const saved = getSavedMeals();
  const newRecord = {
    date: new Date().toLocaleDateString(),
    mealType: mealType,
    items: items,
    totalCalories: items.reduce(
      (total, item) => total + item.calories * item.quantity,
      0,
    ),
  };

  const existingIndex = saved.findIndex(
    (s) =>
      s.date === new Date().toLocaleDateString() && s.mealType === mealType,
  );

  if (existingIndex !== -1) {
    saved[existingIndex] = newRecord;
  } else {
    saved.push(newRecord);
  }

  localStorage.setItem('savedMeals', JSON.stringify(saved));
}
function getSavedMeals() {
  const data = localStorage.getItem('savedMeals');
  return data ? JSON.parse(data) : [];
}
