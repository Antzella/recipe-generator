function generateRecipe(event) {
event.preventDefault();


new Typewriter('#recipe', {
  strings: ['Your recipe will appear here!'],
  autoStart: true,
  delay: 20,
  cursor: '',
});
}
let recipeForm = document.querySelector("#ingredients-form"); 
recipeForm.addEventListener("submit", generateRecipe);

