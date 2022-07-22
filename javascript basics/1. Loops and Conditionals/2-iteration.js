//* =========================================================
//*                  ITERATION
//* =========================================================
//* Dizideki herbir fiyati konsola basınız

console.log("*******ITERATION*******");
const fiyatlar = [100, 250, 50, 89];

fiyatlar.forEach(yazdir);

function yazdir (value) {
    console.log(value);
}

console.log("***********");

//fiyatlar.forEach((value) => console.log(value));

//* Fiyatlar dizisindekilerin toplamini konsola yazdiriniz
//! forEach in return ü yoktur. Void fonksiyondur.
let toplam=0;
fiyatlar.forEach((fiyat) => (toplam += fiyat));
console.log("Toplam: ", toplam);
//*---------------- ÖRNEK ---------------

let toplam1 = 0;
fiyatlar.forEach((value, indis, arr) =>  )