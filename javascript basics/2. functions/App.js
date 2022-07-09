// console.log('hello')

// sayHi();


// function sayHi(){
//     console.log('Hello');
// }

// function sayHi2(name){
//     return name
//     console.log(object);
// }

// console.log(sayHi2('Matthew'));

// console.log(typeof sayHi2());


// console.log(typeof sayHi());

// let userName = 'Münir'

// function sayHi(name = 'New User'){
//     console.log(`Hello ${name}`);
// }
// sayHi();
// sayHi(userName);
// sayHi('Mark')

// console.log(add100(23, 12));

// function add100(num1, num2 = 0){
//     return num1+num2
// }

// console.log(square(4));

// let square = function(a){return a*a};

// console.log(square(3));


// let adder = new Function ('a','b', 'return a+b');

// console.log(adder(2,6));

// console.log(typeof adder);


// let sum = function(a,b){ return a+b;};

// let addTwo = function (num1){
//     return sum(+num1,2)
// }

// console.log(addTwo(5));
// console.log(addTwo('4'));

/* //shortcut tanımlama
function sayHello(name = 'New User'){
    
    name && console.log(`Hello ${name}`);
    // 1 && 3 =>3
}

sayHello('mark')
sayHello()
 */

//Fonksiyon kendi verilen değeri değiştirmeyecek


/* function square(num1){
    num1 *= num1
    // myNum = num1 * num1; //globali bozar istenmeyen durum
    // return myNum;
    return num1;
}

let myNum = 4;

console.log(square(myNum));
console.log(myNum); */


//******FUNCTION DECLARATION*********

//! DECLARATION

//? ÖRNEK-1 Boş Fonksiyon (void)

function yazdır () {
    console.log("merhaba");
}
yazdır();

console.log(yazdır); //* function

//*bişey döndürmeyen fonksiyonlara (returnsüz) void function denir

//? ÖRNEK-2 Parametreli Fonksiyon

//! Bir parametreyi çağırma sırasında kullanmaz isek onun yerine default parametre ile değer atayabiliriz ya da boş bırakabiliriz.
function selamla (name, lastName=""){
    console.log(`Merhaba ${name} ${lastName}`);
}

selamla (`Emre`, "Özdin");
selamla (`Eren`, "Özdin");
selamla (`Erdi`);

//? ÖRNEK-3 Parametreli ve Dönüş Değerli Fonksiyon


function yasHesapla (year, name) {
    //     console.log(`${name}'in yaşı ${2022-year}'dir. `)
    const mesaj = `${name}'in yaşı ${2022-year}'dir. `
    return console.log(mesaj);;
}
yasHesapla(2001, "Elif")
