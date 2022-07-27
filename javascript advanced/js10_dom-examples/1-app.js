console.log("**** app.js ****");

const dilInput = document.querySelector(".diller");
const silBtn = document.getElementById("sil");
const ekleBtn = document.getElementById("ekle");

const dilSection = document.querySelector("#dil-section");

const ul = document.createElement("ul");
dilSection.appendChild(ul);

//? SELECTORS
//**************************************** */
console.log(dilSection.children[0]);
console.log(dilSection.parentNode.parentNode.parentNode);

const h1 = ul.closest(".container").firstElementChild;
console.log(h1);
h1.style.color = "red";

//?container class ı içerisindeki btn class ına ait olan elementleri arar.
const ekleBtn1 = ul.closest(".container").querySelectorAll(".btn");
console.log(ekleBtn1);
//***************************************** */
ekleBtn.onclick = function () {
    if(!dilInput.value) {
    alert("Lütfen bir dil giriniz");
    }else{
        ul.innerHTML += `<li>${dilInput.value}</li>`;
        dilInput.value = "";
    };
};