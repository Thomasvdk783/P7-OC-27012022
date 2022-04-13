// Cette page va être appeler quand l'utilisateur va écrire dans la barre de recherche.
import { fetchDataRecipe } from "./fetchDataRecipe.js";
import { showRecipes } from "./showRecipes.js";

export const btnSearchData = async (showArrBadge) => {
  // Tu récupères le Json
  console.log(showArrBadge);
  const data = await fetchDataRecipe();
  const result = data.recipes;
  let showGoodCard = [];

  // Tu vérifies le nombre de caractère que l'utilisateur à entrer
  if (showArrBadge.length === 0) {
    showGoodCard = result;
  } else {
    for (const item of showArrBadge) {
      for (const recipe of result) {
        const ingredients = recipe.ingredients;
        for (const ing of ingredients) {
          if (ing.ingredient.toLowerCase().includes(item.name) === true) {
            showGoodCard.push(recipe); //
          }
        }
        const appareils = recipe.appliance;
        if (appareils.toLowerCase().includes(item.name) === true) {
          showGoodCard.push(recipe);
        }
        const ustensiles = recipe.ustensils;
        for (const ust of ustensiles) {
          if (ust.toLowerCase().includes(item.name) === true) {
            showGoodCard.push(recipe);
          }
        }
      }
    }
  }
  showRecipes(showGoodCard);
};
