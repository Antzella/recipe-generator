function displayRecipe(response) {
  

  new Typewriter("#recipe", {
    strings: [response.data.answer],
    autoStart: true,
    delay: 10,
    cursor: "",
    loop: false,
    deleteSpeed: Infinity,
  });
}

function handleError(error) {

}

function generateRecipe(event) {

  event.preventDefault();

  let instructionsInput = document.querySelector("#user-ingredients");
  let apiKey = "c2956837ba5cd37d3f08f4dft6ba2b6o"; 
  let context = "You are a professional chef. You will be given a list of ingredients. You will generate a simple recipe in basic HTML using tags like h3, ul, ol, li and strong. Do NOT include markdown code blocks, html, head, or body tags. The recipe should be easy to follow and in English.";
  let prompt = `Generate a simple recipe for home cooks using only the following ingredients: ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`;

 

  axios.get(apiUrl).then(displayRecipe).catch(handleError);
}

let recipeForm = document.querySelector("#ingredients-form"); 

recipeForm.addEventListener("submit", generateRecipe);