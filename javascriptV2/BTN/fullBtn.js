export const fullBtn = async (data) => {
    const sortArrayIngredients = [];
    const sortArrayUstensiles = [];
    const sortArrayAppareils = [];

    console.log('data', data)
    data.forEach((item) => {
        console.log('item', item)
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

        console.log('arrIngredients', arrIngredients)
      });

      console.log('sortArrayIngredients', sortArrayIngredients)

        // Affichage de la data dans les boutons
        //Mise en place des Ingrédients
        const ulDropIngredients = document.getElementById("ul-btn-ingredients");
        let showIngredientsInBtn = ' '
        ulDropIngredients.innerHTML = showIngredientsInBtn;
        sortArrayIngredients.forEach((itemIng) => {
            showIngredientsInBtn = `<li class="li-btn-ingredients">${itemIng}</li>`;
            ulDropIngredients.innerHTML += showIngredientsInBtn;
        });

      return {
        sortArrayIngredients: sortArrayIngredients,
        sortArrayUstensiles: sortArrayUstensiles,
        sortArrayAppareils: sortArrayAppareils
      }
  };
  