//? =================================================================================
//? ***********Diziler (ARRAYS) ************
//? =================================================================================

console.log('********* ARRAYS ************');

//* Dizi Tanımlama
//* ----------------------------------------------------------------------------------------------

//! 1. Yöntem Array literal - tercih edilen yöntem
const isimler = ["ahmet", "mehmet", "ismet", "saffet"];
console.log(isimler);
console.log(isimler.length); //4 

//! 2. Yöntem (Object Constructor)
const diller = new Array ("Python", "Java", "C++", "JS", "Go");
console.log(diller);

const numbers = new Array (3,2,1);
console.log(numbers);

const sayilar = new Array (10); // 10 elemanlık boş bir array oluşturdu
console.log(sayilar);

//* Diziden Veri Okuma-Yazma
//* ----------------------------------------------------------------------------------------------

//! Okuma
const java = diller[1];
console.log(java);

isimler[2] = "Canan";

console.log(isimler);

// isimler = ["can", "canan", "cavidan"]; //! Uncaught TypeError: Assignment to constant variable

const yaslar = [22, 18, 15];
const kisiler = ["Ahmet", "Yilmaz", 2022, 2022 - 1970, true, 5.6, yaslar];
console.log(kisiler);
console.log(kisiler[6][1]);

const sonYas = ++kisiler [6][2];
console.log(sonYas, kisiler);

//? =================================================================================
//? DİZİYİ DEĞİŞTİREN (MUTATOR) METOTLAR
//? =================================================================================

const cars = ["BMW", "Porsche", "Mercedes", "Fiat"];

const deleted = cars.pop();
console.log(cars, "Silinen", deleted);
