//*1. Örnek function declaration

// function topla (a,b){

//     return a+b;
// }

//*2. Örnek function expressions

// const topla = function (a,b){

//     return a+b; 
// }

//*3. Örnek arrow function

//!birden fazla ifade kullanılacaksa {}ve return kullanılır. Örnek
//! this kullanılmaz.

// const topla = (a,b) => a+b;

const topla =(x,y) => x+y;
console.log(`SONUC= `, topla(5,3))

