import { userId, add } from "script.js";

console.log(userId);

console.log(add(3, 5));

let listItems = document.getElementsByClassName("listItem");
console.log(listItem);

let btn = document.querySelector("#btn");
btn.addEventListener("click", myFunc);

async function myFunc() {
  fetch("https://api.chucknorris.io/jokes/random?category-dev")
    .then((r) => r.json())
    .then((parsedResponse) => {
      let myP = document.createElement("p");

      let joke = document.querySelector("#joke");
      myP.innerText = parsedResponse.value;
      joke.appendChild(myP);
    });
}
