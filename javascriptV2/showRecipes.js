// Cette page va servir à afficher le HTML

// La variable Data ne doit contenir que le Json.
export const showRecipes = async (data) => {
  console.log('data', data)
  const showRecipesContainer = document.getElementById("list-recipes");
  showRecipesContainer.innerHTML = '';
  const recipes = data;
  


  for (const item of recipes ) {
    const ingredients = item.ingredients;
    // console.log(ingredients)
    let showIngredients
    for (const ing of ingredients ) {
      // console.log(ing)
      const ingredient = ing.ingredient
      const quantity = ing.quantity
      const unit = ing.unit
      showIngredients += `<li>${ingredient} : ${quantity} ${unit}</li>`
    }
    

    const cardRecipe = `<section class="card-recipe">
    <figure>
      <img src="medias/food.jpg" alt="" />
    </figure>
    <article class="bottom-part-card-recipe">
      <header class="card-header">
          <h2>${item.name}</h2>
          <p class="p-time">
              <img src="./medias/time.svg" alt="time of recipe">
              ${item.time}
          </p>
      </header>
      <article class="ingredients-explication">
    <ul class="show-ingredient">${showIngredients}</ul>
          <p>
              ${item.description}
          </p>
      </article>
    </article>
  </section>`;

    showRecipesContainer.innerHTML += cardRecipe
    

  
  }
};
