// Card Color
const CARD_COLORS = [
  '#FFE5E5',
  '#E5F0FF',
  '#E5FFE9',
  '#FFF5E5',
  '#F0E5FF',
  '#E5FFFD',
];

const FOOD_EMOJIS = {
  apple: '🍎',
  bread: '🍞',
  chicken: '🍗',
  milk: '🥛',
  egg: '🥚',
  fish: '🐟',
  rice: '🍚',
  banana: '🍌',
  orange: '🍊',
  beef: '🥩',
  pork: '🥓',
  cheese: '🧀',
  carrot: '🥕',
  potato: '🥔',
  tomato: '🍅',
  coffee: '☕',
  juice: '🧃',
  water: '💧',
  cake: '🎂',
  cookie: '🍪',
  pizza: '🍕',
  pasta: '🍝',
  salad: '🥗',
  soup: '🍲',
};

function getFoodEmoji(name) {
  const n = name.toLowerCase();
  const match = Object.keys(FOOD_EMOJIS).find((key) => n.includes(key));
  return match ? FOOD_EMOJIS[match] : '🍽️';
}

function renderFoods(foods) {
  const productPanel = document.getElementById('product-panel');
  productPanel.innerHTML = '';
  foods.forEach((food, index) => {
    const emoji = getFoodEmoji(food.description);
    const color = CARD_COLORS[index % CARD_COLORS.length];
    const card = document.createElement('article');
    card.className = 'product';
    const calorie = food.foodNutrients.find((n) => n.nutrientName === 'Energy');
    const calorieValue = calorie ? calorie.value : 0;
    card.style.backgroundColor = color;
    card.setAttribute(
      'aria-label',
      `${food.description}, ${calorieValue} calories`,
    );
    card.innerHTML = `
    <div class="card-emoji">${emoji}</div>
    <h4>${food.description}</h4>
    <data value="${calorieValue}">${calorieValue} kcal</data>
    <select>
     <option value="breakfast">Breakfast</option>
     <option value="lunch">Lunch</option>
     <option value="dinner">Dinner</option>
    </select>
    <button type="button">Add to Meal</button>`;
    productPanel.appendChild(card);
  });
}

function renderMeals() {
  const meals = getMeals();
  ['breakfast', 'lunch', 'dinner'].forEach((mealType) => {
    const list = document.getElementById(`${mealType}-list`);
    list.innerHTML = '';

    meals[mealType].forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
  <p>${item.name}</p>
  <data>${item.calories * item.quantity} kcal</data>
  <button class="decrease-btn" aria-label="Decrease ${item.name} quantity" data-meal="${mealType}" data-index="${index}">-</button>
  <span>${item.quantity}</span>
  <button class="increase-btn" aria-label="Increase ${item.name} quantity" data-meal="${mealType}" data-index="${index}">+</button>
  <button class="remove-btn" aria-label="Remove ${item.name} from ${mealType}" data-meal="${mealType}" data-index="${index}">Remove</button>
`;
      list.appendChild(li);
    });
  });
}
function updateDashboard() {
  const meals = getMeals();
  const total = calculateTotalCalories(meals);
  const goal = Number(localStorage.getItem('dailyGoal'));
  const remaining = goal - total;
  const progress = goal > 0 ? (total / goal) * 100 : 0;

  document.getElementById('total-calories').textContent = total;
  document.getElementById('remaining-calories').textContent = remaining;

  const progressBar = document.querySelector('.progress-bar');
  const progressFill = document.getElementById('progress-fill');

  progressBar.setAttribute('aria-valuenow', Math.round(progress));
  progressBar.setAttribute('aria-valuemin', 0);
  progressBar.setAttribute('aria-valuemax', 100);
  progressFill.style.width = progress + '%';

  if (progress >= 100) {
    progressFill.classList.add('progress-danger');
    progressFill.classList.remove('progress-warning', 'progress-success');
  } else if (progress >= 80) {
    progressFill.classList.add('progress-warning');
    progressFill.classList.remove('progress-danger', 'progress-success');
  } else {
    progressFill.classList.add('progress-success');
    progressFill.classList.remove('progress-danger', 'progress-warning');
  }

  document.getElementById('live-region').textContent =
    `Total: ${total} calories. Remaining: ${remaining} calories.`;
}

function renderSavedMeals() {
  const savedMeals = getSavedMeals();
  const modalContent = document.querySelector('.modal-content');

  modalContent.innerHTML = '';

  if (savedMeals.length === 0) {
    modalContent.innerHTML = `<p>No recorded meals</p>`;
    return;
  }
  savedMeals.forEach((meal, index) => {
    const card = document.createElement('div');
    card.classList.add('saved-meal-card');

    card.innerHTML = `<h3>${meal.date} - ${meal.mealType}</h3>
    
    <ul>
    ${meal.items.map((item) => `<li>${item.name} × ${item.quantity} — ${item.calories * item.quantity} kcal</li>`).join('')}</ul>
    <p>Total Calories: ${meal.totalCalories}</p>
    <div class="card-actions">
  <button class="add-to-day-btn" data-index="${index}">Add to Day</button>
  <button class="delete-btn" data-index="${index}">Delete</button>
</div>`;

    modalContent.appendChild(card);
  });
}
