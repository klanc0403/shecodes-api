function showAnswer(response) {
  alert(response.data.answer);
}

let apiKey = "0232oa2bd084ect6f17c5fee93b97744";

let context =
  "be polite and provide a very short answer. make sure to pick one";
let prompt = "what's the most expensive wine in the world?";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showAnswer);