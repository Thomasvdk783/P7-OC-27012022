"use strict";
/////////////////////////////////////////

// fetch initialization //
async function dataRecipes() {
  const responseJSON = await fetch("../../Data/ApiRecipes.json");
  const responseJS = await responseJSON.json();
  const recipes = responseJS.recipes;
  let ingredients = [];
  console.log(ingredients)
  let arrUstensiles = [];
  let arrAppareils = [];

  

  // Show Recipes
  recipes.forEach((item) => {
    const arrIngredients = item.ingredients;
    let showIngredients;

    // Ingredients //
    arrIngredients.forEach(function (ing) {
      ingredients.push(ing.ingredient);
      arrAppareils.push(item.appliance);
      arrAppareils.join(', ');
      // console.log(arrAppareils)
      arrUstensiles.push(item.ustensils);
      const ingredient = ing.ingredient;
      const quantity = ing.quantity;
      const unit = ing.unit;
      showIngredients += `<li>${ingredient} : ${quantity} ${unit}</li>`;
    });

    // Show all recipes card in Doc Html //
    const containerRecipes = document.getElementById("list-recipes");
    const recipeCard = `<section class="card-recipe">
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

    containerRecipes.innerHTML += recipeCard;
  });
}
dataRecipes();
/// Search bar ///
// Search Bar //

function searchBarRecipes() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let cardsRecipes = document.querySelectorAll(".card-recipe");

  for (let i = 0; i < cardsRecipes.length; i++) {
    if (!cardsRecipes[i].innerHTML.toLowerCase().includes(input)) {
      cardsRecipes[i].style.display = "none";
    } else {
      cardsRecipes[i].style.display = "list-item";
    }
  }
  return cardsRecipes;
}
const searchBar = document.getElementById("searchbar");
searchBar.addEventListener("keyup", searchBarRecipes);