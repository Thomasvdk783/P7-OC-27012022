"use strict";
/////////////////////////////////////////

// fetch initialization //
async function dataRecipes() {
  const responseJSON = await fetch("../../Data/ApiRecipes.json");
  const responseJS = await responseJSON.json();
  const recipes = responseJS.recipes;
  let ingredients = [];
  let arrUstensiles = [];
  let arrAppareils = [];

  // Search Bar //
  function searchBarRecipes() {
    let input = document.getElementById("searchbar").value;
    input = input.toLowerCase();
    let cardsRecipes = document.getElementsByClassName("card-recipe");

    for (let i = 0; i < cardsRecipes.length; i++) {
      if (!cardsRecipes[i].innerHTML.toLowerCase().includes(input)) {
        cardsRecipes[i].style.display = "none";
      } else {
        cardsRecipes[i].style.display = "list-item";
      }
    }
    return cardsRecipes;
  }
  searchBarRecipes();

  // Show Recipes
  recipes.forEach((item) => {
    const arrIngredients = item.ingredients;
    let showIngredients;

    // Ingredients //
    arrIngredients.forEach(function (ing) {
      ingredients.push(ing.ingredient);
      arrAppareils.push(item.appliance);
      arrUstensiles.push(item.ustensils);
      const ingredient = ing.ingredient;
      const arrIngredients = [ing.ingredient];
      const quantity = ing.quantity;
      const unit = ing.unit;
      showIngredients += `<li>${ingredient} : ${quantity} ${unit}</li>`;
    });

    /// Ustensiles ///
    const ustensiles = recipes.ustensils;
    const showUstensiles = `<p>${ustensiles}</p>`;
    /// BTN Ustensiles ///
    const btnAfficheUstensiles = document.querySelector(".dropbtn3");
    const dropContent3 = document.querySelector(".dropdown-content-ustensiles");
    const dropContentIngredients = document.querySelector(".dropdown-content");
    const dropContent2 = document.querySelector(".dropdown-content-appareil");
    dropContent3.innerHTML += showUstensiles;
    const iconeUstensiles = btnAfficheUstensiles.lastElementChild;

    btnAfficheUstensiles.addEventListener("click", function () {
      dropContent3.style.display = "flex";
      dropContent2.style.display = "none";
      dropContentIngredients.style.display = "none";
      iconeUstensiles.classList.add("fa-chevron-up");
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

  /// BTN Appareil ///
  // console.log(arrUstensiles);
  // console.log(arrAppareils);

  const btnAfficheAppareils = document.querySelector(".dropbtn2");
  const dropContent2 = document.querySelector(".dropdown-content-appareil");
  // const showAppareilList = `<p>${appareils}</p>`
  // dropContent2.innerHTML += showAppareilList;
  const iconeAppareils = btnAfficheAppareils.lastElementChild;

  btnAfficheAppareils.addEventListener("click", function () {
    dropContent2.style.display = "flex";
    dropContent3.style.display = "none";
    dropContentIngredients.style.display = "none";
    iconeAppareils.classList.add("fa-chevron-up");
    dropDownAppareils.classList.toggle("dropdown-ingredients-width");
  });

  /// BTN Ingredients ///
  const newArrayIngredients = new Set(ingredients);
  // console.log(newArrayIngredients);
  // console.log(new Set(ingredients));
  const btnAfficheIngredients = document.querySelector(".dropbtn1");

  btnAfficheIngredients.addEventListener("click", function () {
    dropContentIngredients.style.display = "flex";
    dropContent2.style.display = "none";
    dropContent3.style.display = "none";
    iconeIngredients.classList.add("fa-chevron-up");
    // dropDownIngredient.classList.toggle("dropdown-ingredients-width");
  });

  // const showIngredientList = `<p>${ingredient}</p>`;
  // dropContentIngredients.innerHTML += showIngredientList;
  // const iconeIngredients = btnAfficheIngredients.lastElementChild;
}
dataRecipes();
searchBarRecipes();
/// Search bar ///
