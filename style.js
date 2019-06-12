const apiKey = 'd3c898c7d464fa12837f2d46ad960a11';
const appId = 'bea133e4';
const baseURL = "https://api.edamam.com/search?"
const search = `q=blackbeans&blackbean&excluded=pork&excluded=turkey&excluded=beef&excluded=chicken&excluded=sausage&app_id=${appId}&app_key=${apiKey}`
const bean = document.querySelector('#bean');
const bean2 = document.querySelector('#bean2');
const recipe = document.querySelector('#recipe');
const page1 = document.querySelector("#page1")
const page2 = document.querySelector("#page2")

bean.addEventListener("click", async () => {
  const response = await axios.get(`${baseURL}${search} `)
  const recipes = response.data.hits
  const random = Math.floor(Math.random() * recipes.length)
  const randomRecipe = recipes[random].recipe
  page1.style.display = "none"
  page2.style.display = "block"
  recipe.innerHTML = `<a class="link" href=${randomRecipe.url}><p>${randomRecipe.label}</p></a><br><img src=${randomRecipe.image} class="foodPic">`
});

bean2.addEventListener("click", async () => {
  const response = await axios.get(`${baseURL}${search} `)
  const recipes = response.data.hits
  const random = Math.floor(Math.random() * recipes.length)
  const randomRecipe = recipes[random].recipe
  recipe.innerHTML = `<a href=${randomRecipe.url}><p id="recipelink">${randomRecipe.label}</p></a><br><img src=${randomRecipe.image} class="foodPic">`
});