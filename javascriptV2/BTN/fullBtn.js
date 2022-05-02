import { btnSearchData } from "../btnSearchData.js";

export const fullBtn = async (data) => {
  const sortArrayIngredients = [];
  const sortArrayUstensiles = [];
  const sortArrayAppareils = [];

  const showArrBadge = [];
  const boxBadgesArr = [];
  const boxBadges = document.getElementById("container-result-btn-filter");

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
  });

  // Affichage de la data dans les boutons

  ///////////////////////////////
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
  });

  // EventListener quand il appuit sur l'ingrédient
  const clicIngredients = document.querySelectorAll(".li-btn-ingredients");
  clicIngredients.forEach((itemIngBtn) => {
    itemIngBtn.addEventListener("click", () => {
      if (!showArrBadge.length > 0) {
        showArrBadge.push({
          name: itemIngBtn.txtContent,
          type: "ingredients",
        });
      } else {
        const result = showArrBadge.find(
          (item) => item.name === itemIngBtn.textContent
        );
        if (!result) {
          showArrBadge.push({
            name: itemIngBtn.textContent,
            type: "ingredients",
          });
        }
      }

      const el = document.createElement("span");
      showArrBadge.forEach((item) => {
        el.innerHTML = " ";
        const badgeIngredients = item.name;
        const ingType = item.type;
        boxBadges.style.display = "flex";
        el.innerHTML = `${badgeIngredients}<img class="icon-cross-badge" src="../medias/cross.svg" alt="">`;
        el.classList.add(`badge-${ingType}`);
        boxBadges.appendChild(el);
      });
      el.addEventListener("click", () => {
        console.log("clique ok");
        boxBadges.removeChild(el);
      });
      btnSearchData(showArrBadge);
      // showRecipes(showGoodCard);
    });
  });

  // Fonction qui sert à remplir le tableau des badges
  // const fullArrayBadge = (itemIngBtn) => {
  //   if (!showArrBadge.length > 0) {
  //     showArrBadge.push({
  //       name: itemIngBtn.textContent,
  //       type: "ingredients",
  //     });
  //   } else {
  //     // On cherche si il y a un doublon.
  //     const result = showArrBadge.find((item) => {
  //       console.log("dsqds", item.name, itemIngBtn.textContent);
  //       return item.name === itemIngBtn.textContent;
  //     });
  //     console.log("result", result);
  //     // Si pas de doublon, result est undefined, donc faux.
  //     if (result === undefined) {
  //       console.log("JE SUIS PAS UN DOUBLON", itemIngBtn.textContent);
  //       showArrBadge.push({
  //         name: itemIngBtn.textContent,
  //         type: "ingredients",
  //       });
  //     } else {
  //       console.log("JE SUIS UN DOUBLON");
  //     }
  //   }

  //   console.log("showArrBadge", showArrBadge);
  // };

  ////////////////////////////
  // Mise en place de appareils
  const ulDropAppareils = document.getElementById("ul-btn-appareils");
  let showAppareilsInBtn = " ";
  ulDropAppareils.innerHTML = showAppareilsInBtn;
  sortArrayAppareils.forEach((itemApp) => {
    showAppareilsInBtn = `<li class="li-btn-appareils">${itemApp}</li>`;
    ulDropAppareils.innerHTML += showAppareilsInBtn;
  });

  // Eventlistener quand il appuit sur un Appareil
  const searchArrBadge = () => {
    const clicAppareils = document.querySelectorAll(".li-btn-appareils");
    clicAppareils.forEach((itemAppBtn) => {
      itemAppBtn.addEventListener("click", function () {
        if (!showArrBadge.length > 0) {
          showArrBadge.push({
            name: itemAppBtn.textContent,
            type: "appareils",
          });
        } else {
          const result = showArrBadge.find(
            (item) => item.name === itemAppBtn.textContent
          );
          if (!result) {
            showArrBadge.push({
              name: itemAppBtn.textContent,
              type: "appareils",
            });
          }
        }
        const el = document.createElement("span");
        showArrBadge.forEach((item) => {
          el.innerHTML = " ";
          const badgeAppareils = item.name;
          const appType = item.type;
          boxBadges.style.display = "flex";
          el.innerHTML = `${badgeAppareils}<img class="icon-cross-badge" src="../medias/cross.svg" alt="">`;
          el.classList.add(`badge-${appType}`);
          boxBadges.appendChild(el);
        });
        el.addEventListener("click", () => {
          console.log("clique ok");
          boxBadges.removeChild(el);
        });
        btnSearchData(showArrBadge);
      });
    });
  };
  searchArrBadge();

  //Recherche des Appareils
  const inputAppareils = document.getElementById("myInputAppareil");
  inputAppareils.addEventListener("input", () => {
    const showAppareilsFilter = [];
    const resultSearchAppareils = inputAppareils.value.toLowerCase();
    ulDropAppareils.innerHTML = "";
    if (resultSearchAppareils.length >= 3) {
      sortArrayAppareils.forEach((itemApp) => {
        if (itemApp.includes(resultSearchAppareils)) {
          showAppareilsFilter.push(itemApp);
        }
      });
      showAppareilsFilter.forEach((itemApp) => {
        ulDropAppareils.innerHTML += `<li class="li-btn-ingredients">${itemApp}</li>`;
      });
    } else {
      sortArrayAppareils.forEach((itemApp) => {
        const AppareilsInBtn = `<li class="li-btn-ingredients">${itemApp}</li>`;
        ulDropAppareils.innerHTML += AppareilsInBtn;
      });
    }
    searchArrBadge();
  });

  ulDropAppareils.addEventListener("click", () => {
    console.log("Click");
  });

  ///////////////////////////////////
  // Mise en place des ustensiles
  const ulDropUstensiles = document.getElementById("ul-btn-ustensiles");
  let showUstensilesInBtn = " ";
  ulDropUstensiles.innerHTML = showUstensilesInBtn;
  sortArrayUstensiles.forEach((itemUst) => {
    showUstensilesInBtn = `<li class="li-btn-ustensiles">${itemUst}</li>`;
    ulDropUstensiles.innerHTML += showUstensilesInBtn;
  });

  // Eventlistener quand il appuit sur un Ustensiles
  const clicUstensiles = document.querySelectorAll(".li-btn-ustensiles");
  clicUstensiles.forEach((itemUstBtn) => {
    itemUstBtn.addEventListener("click", function () {
      if (!showArrBadge.lenght > 0) {
        showArrBadge.push({
          name: itemUstBtn.textContent,
          type: "ustensiles",
        });
      } else {
        const result = showArrBadge.find(
          (item) => item.name === itemUstBtn.textContent
        );
        if (!result) {
          showArrBadge.push({
            name: itemUstBtn.textContent,
            type: "ustensiles",
          });
        }
      }
      const el = document.createElement("span");
      showArrBadge.forEach((item) => {
        el.innerHTML = " ";
        const badgeUstensiles = item.name;
        const ustType = item.type;
        boxBadges.style.display = "flex";
        el.innerHTML = `${badgeUstensiles}<img class="icon-cross-badge" src="../medias/cross.svg" alt="">`;
        el.classList.add(`badge-${ustType}`);
        boxBadges.appendChild(el);
      });
      el.addEventListener("click", () => {
        console.log("clique ok");
        boxBadges.removeChild(el);
      });
      console.log(showArrBadge);
      btnSearchData(showArrBadge);

      // const badgeUstensiles = `<span class="badge-ustensiles">${itemUstBtn.textContent}<img class="icon-cross-badge" src="../medias/cross.svg" alt=""></span>`;
      // console.log(badgeUstensiles);
      // boxBadges.style.display = "flex";
      // showArrBadgeUstensiles.push(badgeUstensiles);
      // boxBadgesArr.push(showArrBadgeUstensiles);
      // boxBadges.innerHTML = boxBadgesArr;
    });
  });

  return {
    sortArrayIngredients: sortArrayIngredients,
    sortArrayUstensiles: sortArrayUstensiles,
    sortArrayAppareils: sortArrayAppareils,
  };
};
