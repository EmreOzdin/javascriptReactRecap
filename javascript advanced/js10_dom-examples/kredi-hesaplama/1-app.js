console.log("****Kredi Hesaplama****");

const select = document.querySelector(".form-select");
const vade = document.querySelector("#vade");
const tutar = document.querySelector("#tutar");
const hesaplaBtn = document.querySelector(".btn");
let oran = 0;
let taksit = 0;

hesaplaBtn.addEventListener("click", (e) => {
    //?preventDefault() event'ın default davranışını (submit etmek ve formu silme) engeller
    e.preventDefault();
    if(select.value === "Konut Kredisi"){
        oran = 1.29;
    }else if(select.value === "İhtiyac Kredisi"){
        oran = 1.99;
    } else if(select.value === "Arac Kredisi"){
        oran = 1.79;
    }
    if(!select.value || !vade.value || !tutar.value){
        alert("Lütfen kredi türü, vade ve tutarı giriniz!");
    }
    const faiz = oran / 100;
    taksit = 
    (tutar.value * (faiz * (1 + faiz) ** vade.value)) / 
    ((1+faiz) ** vade.value - 1);

    //console.log(taksit);
});