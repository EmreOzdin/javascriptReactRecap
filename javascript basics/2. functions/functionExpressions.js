//* modern Jsde kullanılan yöntemlerden biridir noname fonksiyonları bir değişkene atayarak kullanırız. Önemli olan önce fonksiyon deklarasyonlarının yapılması gerekir.

//* ÖRNEK-1


// const  tekCift = function (num){

//     return num%2 ? `${num} sayısı tektir.` : `${num} sayısı çifttir.`;
// }


// console.log(tekCift(11));
// console.log(tekCift(98));

//* ÖRNEK-2 3 sayının en büyüğünü bulunuz


const buyukBul = function (num1,num2,num3){

    const sıra = [num1,num2,num3];
    return sıra.sort().pop();

}

console.log("En büyük sayı:", buyukBul (2,5,3));