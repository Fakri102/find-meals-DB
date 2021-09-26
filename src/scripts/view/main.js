import '../component/meal-list';
import DataSource from '../data/data-source';

const main = () => {
  const inputFood = document.querySelector('#inputFood');
  const findButton = document.querySelector('#findButton');
  const mealItemElement = document.querySelector('meal-list');

  const renderResult = (results) => {
    mealItemElement.meals = results;
  };

  const fallbackResult = (message) => {
    mealItemElement.renderError(message);
  };

  findButton.addEventListener('click', async () => {
    try {
      const result = await DataSource.searchMeal(inputFood.value);
      renderResult(result);
    } catch (message) {
      console.log(message);
      fallbackResult(message);
    }
  });
};

export default main;
