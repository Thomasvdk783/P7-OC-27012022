// Appeller le JSON = Data
export const fetchDataRecipe = async () => {
    const responseJSON = await fetch("../../Data/ApiRecipes.json");
    return responseJSON.json();
}