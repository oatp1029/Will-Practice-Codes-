let headlinewords = document.getElementById("headline");
let button = document.getElementById("button");

button.addEventListener("click",changeText);

function changeText () {
    let changedwords = prompt("input word that you want to change : ");
    headlinewords.innerText = changedwords;
}