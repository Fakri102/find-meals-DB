import './meal-item';

class MealList extends HTMLElement {
  set meals(meals) {
    this._meals = meals;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._meals.forEach((meal) => {
      const mealItemElement = document.createElement('meal-item');
      mealItemElement.meal = meal;
      this.appendChild(mealItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('meal-list', MealList);
