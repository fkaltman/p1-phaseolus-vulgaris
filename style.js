// This api requires both a user id and an api key.
// To make a vegetarian search I had to exclude individual meats 
// and "meat words" (like sausage) from the search

const apiKey = 'd3c898c7d464fa12837f2d46ad960a11';
const appId = 'bea133e4';
const baseURL = "https://api.edamam.com/search?"
const search = `q=blackbeans&blackbean&excluded=pork&excluded=turkey&excluded=beef&excluded=chicken&excluded=sausage&app_id=${appId}&app_key=${apiKey}`

//The below variables grab html elements for ease of use and 
// readability in the api calls taht follow
const bean = document.querySelector('#bean');
const bean2 = document.querySelector('#bean2');
const recipe = document.querySelector('#recipe');
const page1 = document.querySelector("#page1")
const page2 = document.querySelector("#page2")

//The below axios call pulls a random recipe from Edamam using Math.random, rounding down to a whole number with Math.floor to avoid generating floats. Random number multiplied by the lenght of recipes available pulls a random recipe from the entire selection that fits the requirements specified in the original axios call (e.g. include recipes with black beans but filter out meats).
bean.addEventListener("click", async () => {
  const response = await axios.get(`${baseURL}${search} `)
  const recipes = response.data.hits
  const random = Math.floor(Math.random() * recipes.length)
  const randomRecipe = recipes[random].recipe

  //Switches the display type, for a 2 page "feel" in one page
  page1.style.display = "none"
  page2.style.display = "block"

  //Inserts the retrieved info into the html
  recipe.innerHTML = `<a class="link" href=${randomRecipe.url}><p id="recipelink">${randomRecipe.label}</p></a><br><img src=${randomRecipe.image} class="foodPic">`
});

//Second axios call replaces the first random recipe with different random recipe on the users click and updates the html and thus the display, accordingly.
bean2.addEventListener("click", async () => {
  const response = await axios.get(`${baseURL}${search} `)
  const recipes = response.data.hits
  const random = Math.floor(Math.random() * recipes.length)
  const randomRecipe = recipes[random].recipe
  recipe.innerHTML = `<a class="link" href=${randomRecipe.url}><p id="recipelink">${randomRecipe.label}</p></a><br><img src=${randomRecipe.image} class="foodPic">`
});