export const fullBtn = async (data) => {
  const sortArrayIngredients = [];
  const sortArrayUstensiles = [];
  const sortArrayAppareils = [];

  // console.log("data", data);
  data.forEach((item) => {
    // console.log("item", item);
    const arrIngredients = item.ingredients;
    const ustensiles = item.ustensils;
    const appareils = item.appliance;

    arrIngredients.forEach((ing) => {
      if (!sortArrayIngredients.includes(ing.ingredient.toLowerCase())) {
        sortArrayIngredients.push(ing.ingredient.toLowerCase());
      }
    });

    // Remplie les appareil
    if (!sortArrayAppareils.includes(item.appliance.toLowerCase())) {
      sortArrayAppareils.push(item.appliance.toLowerCase());
    }

    // Remplie les ustensiles
    ustensiles.forEach((ust) => {
      if (!sortArrayUstensiles.includes(ust.toLowerCase())) {
        sortArrayUstensiles.push(ust.toLowerCase());
      }
    });

    // console.log("arrIngredients", arrIngredients);
  });

  // console.log("sortArrayIngredients", sortArrayIngredients);

  // Affichage de la data dans les boutons
  //Mise en place des Ingrédients
  const ulDropIngredients = document.getElementById("ul-btn-ingredients");
  let showIngredientsInBtn = " ";
  ulDropIngredients.innerHTML = showIngredientsInBtn;
  sortArrayIngredients.forEach((itemIng) => {
    showIngredientsInBtn = `<li class="li-btn-ingredients">${itemIng}</li>`;
    ulDropIngredients.innerHTML += showIngredientsInBtn;
  });
  const inputIngredients = document.getElementById("myInputIngredients");
  inputIngredients.addEventListener("input", () => {
    const showIngredientsFilter = [];
    const resultSearchIngredients = inputIngredients.value.toLowerCase();
    
  })
  

  // Mise en place de appareils
  const ulDropAppareils = document.getElementById("ul-btn-appareils");
  let showAppareilsInBtn = " ";
  ulDropAppareils.innerHTML = showAppareilsInBtn;
  sortArrayAppareils.forEach((itemApp) => {
    showAppareilsInBtn = `<li class="li-btn-appareils">${itemApp}</li>`;
    ulDropAppareils.innerHTML += showAppareilsInBtn;
  });

  // Mise en place des ustensiles
  const ulDropUstensiles = document.getElementById("ul-btn-ustensiles");
  let showUstensilesInBtn = " ";
  ulDropUstensiles.innerHTML = showUstensilesInBtn;
  sortArrayUstensiles.forEach((itemUst) => {
    showUstensilesInBtn = `<li class="li-btn-ustensiles">${itemUst}</li>`;
    ulDropUstensiles.innerHTML += showUstensilesInBtn;
  });

  return {
    sortArrayIngredients: sortArrayIngredients,
    sortArrayUstensiles: sortArrayUstensiles,
    sortArrayAppareils: sortArrayAppareils,
  };
};
