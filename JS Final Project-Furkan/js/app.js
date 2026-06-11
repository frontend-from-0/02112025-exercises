const input = document.getElementById('product');
const form = document.querySelector('form');
const productPanel = document.getElementById('product-panel');
const goalInput = document.getElementById('daily-goal');
const hamburgerBtn = document.querySelector('.hamburger-btn');
const leftPanel = document.querySelector('.left-panel');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const recordedMealsBtn = document.querySelector('.nav-list-item:last-child');

recordedMealsBtn.addEventListener('click', () => {
  renderSavedMeals();
  modalOverlay.classList.remove('hidden');
});

modalClose.addEventListener('click', () => {
  modalOverlay.classList.add('hidden');
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.add('hidden');
  }
});

hamburgerBtn.addEventListener('click', () => {
  leftPanel.classList.toggle('open');
  hamburgerBtn.setAttribute(
    'aria-label',
    leftPanel.classList.contains('open')
      ? 'Arama panelini kapat'
      : 'Arama panelini aç',
  );
  console.log('hamburger clicked');
  console.log('leftPanel:', leftPanel);
});

let timer;
input.addEventListener('input', () => {
  clearTimeout(timer);
  timer = setTimeout(async () => {
    const query = input.value.trim();
    if (query === '') return;
    const foods = await getFoods(query);
    renderFoods(foods);
  }, 300);
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = input.value.trim();
  if (query === '') {
    return;
  }
  const foods = await getFoods(query);
  renderFoods(foods);
});

productPanel.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    const card = e.target.closest('article');
    const name = card.querySelector('h4').textContent;
    const calories = card.querySelector('data').value;
    const mealType = card.querySelector('select').value;

    const meals = getMeals();
    const existing = meals[mealType].find((item) => item.name === name);
    if (existing) {
      existing.quantity += 1;
    } else {
      meals[mealType].push({ name, calories, quantity: 1 });
    }
    saveMeals(meals);
    renderMeals();
    updateDashboard();
  }
});

document.addEventListener('click', (e) => {
  if (e.target.matches('.remove-btn')) {
    const mealType = e.target.dataset.meal;
    const index = e.target.dataset.index;

    const meals = getMeals();
    meals[mealType].splice(Number(index), 1);
    saveMeals(meals);
    renderMeals();
    updateDashboard();
  }
  if (e.target.matches('.increase-btn')) {
    const mealType = e.target.dataset.meal;
    const index = Number(e.target.dataset.index);
    const meals = getMeals();
    meals[mealType][index].quantity += 1;
    saveMeals(meals);
    renderMeals();
    updateDashboard();
  }
  if (e.target.matches('.decrease-btn')) {
    const mealType = e.target.dataset.meal;
    const index = Number(e.target.dataset.index);
    const meals = getMeals();
    meals[mealType][index].quantity -= 1;
    if (meals[mealType][index].quantity === 0) {
      meals[mealType].splice(index, 1);
    }
    saveMeals(meals);
    renderMeals();
    updateDashboard();
  }

  if (e.target.matches('.delete-btn')) {
    const index = Number(e.target.dataset.index);
    const savedMeals = getSavedMeals();
    savedMeals.splice(index, 1);
    localStorage.setItem('savedMeals', JSON.stringify(savedMeals));
    renderSavedMeals();
  }

  if (e.target.matches('.save-meal-btn')) {
    const mealType = e.target.dataset.meal;
    saveMealByType(mealType);
    e.target.textContent = 'Saved!';
    setTimeout(() => {
      e.target.textContent = `Save ${mealType}`;
    }, 2000);
  }

  if (
    leftPanel.classList.contains('open') &&
    !leftPanel.contains(e.target) &&
    !hamburgerBtn.contains(e.target)
  ) {
    leftPanel.classList.remove('open');
    hamburgerBtn.setAttribute('aria-label', 'Arama panelini aç');
  }

  if (e.target.matches('.add-to-day-btn')) {
    const index = Number(e.target.dataset.index);
    const savedMeals = getSavedMeals();
    const record = savedMeals[index];

    const meals = getMeals();

    record.items.forEach((item) => {
      const existing = meals[record.mealType].find((m) => m.name === item.name);
      if (existing) {
        existing.quantity += item.quantity;
      } else {
        meals[record.mealType].push(item);
      }
    });
    saveMeals(meals);
    renderMeals();
    updateDashboard();
    modalOverlay.classList.add('hidden');
  }
});

goalInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const goal = Number(goalInput.value);
    localStorage.setItem('dailyGoal', goal);
    updateDashboard();
  }
});
const savedGoal = localStorage.getItem('dailyGoal');
if (savedGoal) {
  goalInput.value = savedGoal;
}

renderMeals();
updateDashboard();
