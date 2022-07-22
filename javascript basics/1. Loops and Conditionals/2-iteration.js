//* =========================================================
//*                  ITERATION
//* =========================================================
//* Dizideki herbir fiyati konsola basınız

console.log("*******ITERATION*******");
const fiyatlar = [100, 250, 50, 89];

fiyatlar.forEach(yazdir);

function yazdir(value) {
    console.log(value);
}

console.log("***********");

//fiyatlar.forEach((value) => console.log(value));

//* Fiyatlar dizisindekilerin toplamini konsola yazdiriniz
//! forEach in return ü yoktur. Void fonksiyondur.
let toplam = 0;
fiyatlar.forEach((fiyat) => (toplam += fiyat));
console.log("Toplam: ", toplam);
//*---------------- ÖRNEK ---------------

// let toplam1 = 0;
// fiyatlar.forEach((deger, indis, dizi) => {
//     toplam1 += deger
//     console.log(`${indis}.iterasyon toplami: ${toplam1}`);
//     dizi[indis] = deger + 10;
// })
// console.log(fiyatlar);

//*------------ ÖDEV ----------------------
//* fiyatlar dizisinde her bir fiyata %10 zam yapalım.

//* =========================================================
//*                        MAP METHOD
//* =========================================================
//! Orijinal transformasyona uğratmasa da kopyasını modifiye ederek return eder.

//? İsimler dizisinin içerisindeki her ismi büyük harf olarak yeni
//? bir diziye saklayalım.

const isimler = [
    "Ahmet",
    "mehmet",
    "ismet",
    "SAFFET",
    "Can",
    "Canan",
    "Cavidan",
];
console.log(isimler.map(isim => isim.toUpperCase()));
console.log(isimler.map((isim) => isim.toLocaleUpperCase()));
const kucukIsimler = isimler.map(isim => isim.toLowerCase());
console.log(kucukIsimler);

//*------------ ÖDEV ----------------------

const buyukIsimler = isimler.map((isim, i, dizi) => {

    dizi[i] = isim.toLocaleLowerCase(); // orijinal diziyi değiştirdik
    return isim.toLocaleUpperCase();
});

console.log(buyukIsimler);

//* =========================================================
//*                        CHAINING (PIPELINE)
//* =========================================================
// Tüm isimleri büyük harfe çevirip konsolda yazdırınız.
isimler
.map(isim => isim.toUpperCase())
.forEach(isim => console.log(isim));

//* map() metodundan sonra eğer forEach gibi bir terminal (consumer) işlemi
//* kullanılırsa yazılan ifade bir dizi döndürmemiş olur.

// isimler
// .map(isim => isim.toUpperCase())
// .forEach(isim => console.log(isim)); // undefined döndürür


//* Ahmet olanları seçip, büyük harfe çevirip konsolda yazdırınız.
isimler.filter((x) => x === "ahmet")
    .map((x) => x.toLocaleUpperCase())
    .forEach(x => console.log(x));

//* fiyatlar dizisindeki fiyatı 250 ₺ den az olanlari ayri bir diziye saklayalım

const kucuk250 = fiyatlar.filter((f) => f < 250);

console.log(kucuk250);

//* fiyatlar dizisindeki fiyatı 90dan büyük olanlari ayri bir diziye saklayalım

const buyuk90 = fiyatlar.filter((f) => f > 90);
console.log(buyuk90);

//* fiyatlar dizisindeki fiyatı 110dan küçük olan değerlere %10 artış yapın
//* ve bu değerleri konsola tek tek bastırınız.

const kucuk110 = fiyatlar.filter((f) => f < 110).map((f) => f + (f*0.10)).forEach(f => console.log(f));

console.log(kucuk110);

//* maaşlar 4000'den düşük olanlara %50 zam yapmak istiyoruz. 
//* ve bunu ayrı dizi olarak saklamak istiyoruz.

const maaslar = [3000, 5000, 4000, 6000, 6500];

const zamli = maaslar.filter((f) => f < 4000).map((f) => f + (f*0.50));

console.log(zamli);

//* Maasi 4000den büyük olanlara %25 zam yaparak sonuçları saklayalım.

const buyuk4000 = maaslar.filter((f) => f > 4000).map((f) => f + (f*0.25));

console.log(buyuk4000);