"use strict";
/////////////////////////////////////////

// fetch initialization //
async function dataRecipes() {
  const responseJSON = await fetch("../../Data/ApiRecipes.json");
  const responseJS = await responseJSON.json();
  const recipes = responseJS.recipes;

  // Show Recipes
  recipes.forEach((item) => {
    const arrIngredients = item.ingredients;
    let showIngredients;
    

    // Ingredients //
    arrIngredients.forEach(function (ing) {
      const ingredient = ing.ingredient;
      const arrIngredients = [ing.ingredient];
      const quantity = ing.quantity;
      const unit = ing.unit;
      showIngredients += `<li>${ingredient} : ${quantity} ${unit}</li>`;

      /// BTN Ingredients ///
      const btnAfficheIngredients = document.querySelector(".dropbtn1");
      const dropContentIngredients = document.querySelector(".dropdown-content");
      const showIngredientList = `<p>${ingredient}</p>`;
      dropContentIngredients.innerHTML += showIngredientList;
      const iconeIngredients = btnAfficheIngredients.lastElementChild;

      btnAfficheIngredients.addEventListener("click", function () {
        dropContentIngredients.style.display = "flex";
        iconeIngredients.classList.add('fa-chevron-up');
        
        // dropDownIngredient.classList.toggle("dropdown-ingredients-width");
      });
    });
    

    /// Appareils ///
    const appareils = item.appliance;
    /// BTN Appareil ///
    const btnAfficheAppareils = document.querySelector(".dropbtn2");
    const dropContent2 = document.querySelector(".dropdown-content-appareil");
    const showAppareilList = `<p>${appareils}</p>`
    dropContent2.innerHTML += showAppareilList;
    const iconeAppareils = btnAfficheAppareils.lastElementChild;

    btnAfficheAppareils.addEventListener("click", function () {
      dropContent2.style.display = "flex";
      iconeAppareils.classList.add('fa-chevron-up');
      dropDownAppareils.classList.toggle("dropdown-ingredients-width");
    });

    /// Filtrage des doublons ///
    const arrayAppareils = new Array(appareils);
    // console.log(arrayAppareils);
    const arrayAppareilsFilter = [...new Set(arrayAppareils)];
    console.log(arrayAppareilsFilter);



    /// Ustensiles ///
    const ustensiles = item.ustensils;
    const showUstensiles = `<p>${ustensiles}</p>`;
    /// BTN Ustensiles ///
    const btnAfficheUstensiles = document.querySelector(".dropbtn3");
    const dropContent3 = document.querySelector(".dropdown-content-ustensiles");
    dropContent3.innerHTML += showUstensiles;
    const iconeUstensiles = btnAfficheUstensiles.lastElementChild;

    btnAfficheUstensiles.addEventListener("click", function () {
      dropContent3.style.display = "flex";
      iconeUstensiles.classList.add('fa-chevron-up');
    });
    

    

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
