class MealItem extends HTMLElement {
  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="card bg-light mb-3" style="max-width: 900px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${this._meal.strMealThumb}" class="img-fluid rounded-start" alt="Meal Thumb">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h2 class="card-title text-center style=padding-bottom: 15px;">${this._meal.strMeal}</h2>
                    <div class="row">
                        <div class="col-md-6 text-center">
                            <p class="card-text"><b>Category: </b>${this._meal.strCategory}</p>
                        </div>
                        <div class="col-md-6 text-center">
                            <p class="card-text"><b>Area: </b>${this._meal.strArea}</p>
                        </div>
                    </div>
                    <div class="text-truncate-container">
                         <p class="card-text"><b>Intruction: </b> ${this._meal.strInstructions}</p>             
                    </div>
                </div>
            </div>
        </div>
    </div>`;
  }
}

customElements.define('meal-item', MealItem);
