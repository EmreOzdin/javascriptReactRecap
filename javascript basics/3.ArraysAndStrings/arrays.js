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

//* pop() son elemanı siler ve sildiği elemanı döndürür
const deleted = cars.pop();
console.log(cars, "Silinen", deleted);

//* push() son elemanı ekler
const n = cars.push("volvo");
console.log(cars, n);

//* unshift() ilk elemanı siler ve sildiği elemanı döndürür
const boyut = cars.unshift("Audi");
console.log(boyut, cars);

//* shift() ilk elemanı siler ve sildiği elemanı döndürür
const silinen = cars.shift();
console.log(silinen);

//* reverse() diziyi tersine çevirir
console.log(cars.reverse());
console.log(cars);

//* sort() diziyi alfabetik olarak sıralar
console.log(cars.sort());

const rakamlar = [3, 5, 1, 10, 55];
console.log(rakamlar.sort()); //! alfabetik sıraladğı için doğru sonuç çıkmayabilir.

//* sort metodu diziyi iterasyona uğratır ve parametre olarak aldığı arrow fonksiyonunu dizinin her bir elemanına uygular. Bu sayede küçük sayılar ile büyük sayıları yer değiştirerek sıralama işlemini gerçekleştirir. 
rakamlar.sort((a,b) => a - b);
console.log(rakamlar);

cars.splice(1, 0, "Vosvos");
console.log(cars); // 1. indise Vosvos ekle(eleman sayısı bir artar)

cars.splice(2, 1, "Anadol");
console.log(cars); // 2. indistekini Anadol olarak değiştir (Eleman sayısı değişmez)