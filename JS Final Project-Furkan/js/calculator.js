function calculateTotalCalories(meals) {
  return Object.values(meals)
    .flat()
    .reduce((total, item) => total + item.calories * item.quantity, 0);
}
