
//* =================================================================
//*            NEW GENERATION OPERATORS: DESTRUCTURING (OBJECT)
//* =================================================================

console.log("****** NEW OPERATORS ******");

// const car = {
//     name: "BMW",
//     model: 1990,
//     engine: 1.6,
// };

// //* 1. YÖNTEM (Classical)

// console.log(car.model);
// console.log(car["name"]);

//* 2. YÖNTEM (Destructuring)

// const { name, model, engine } = car;
// console.log(name,model);
// console.log(name, model, engine);

//* EXAMPLE: NESTED

const cars = {
    car1: {
        name: "BMW",
        model: 1990,
        engine: 1.6,
    },
    car2: {
        name: "Audi",
        model: 2010,
        engine: 2.0,
    }
}
const { car1, car2 } = cars;
console.log(car1, car2);

const { name: c1Name, model: c1Model } = car1;
console.log(c1Name, c1Model);

const { name: c2Name, model: c2Model } = car2;
console.log(c2Name, c2Model);

const kisiler2= [ 
    {
        ad: "Ahmet",
        soyad: "Yilmaz",
        yas: 30,
        is: "developer",
    },
    {
        ad: "Mehmet",
        soyad: "Yilmaz",
        yas: 20,
        is: "team lead",
    },
    {
        ad: "Canan",
        soyad: "Yilmaz",
        yas: 22,
        is: "developer",
    },
];

kisiler2.forEach((kisi) => {
    console.log("*******************")
    console.log("NAME: ", kisi.ad);
    console.log("SOYAD: ", kisi.soyad);
    console.log("YAS: ", kisi.yas);
    console.log("IS: ", kisi.is);
});

kisiler2.forEach((kisi) => {
    console.log("*******************");
    const { ad, soyad, yas, is} = kisi; //? destructuring
    console.log("NAME: ", ad);
    console.log("SOYAD: ", soyad);
    console.log("YAS: ", yas);
    console.log("IS: ", is);
});

//* function
function getInfo(){
    return {
        id: 101,
        name: "Apple",
        price: 20000,
    }
}
const { id, name, price } = getInfo(); //? destructuring
console.log(id, price);

//* =================================================================
//*            NEW GENERATION OPERATORS: DESTRUCTURING (ARRAY)
//* =================================================================

const names = ["Ahmet", "Mehmet", "İsmet", "Saffet"];

// Classical Method

const name1 = names[0]; //Ahmet
const name2 = names[1]; //Mehmet

const [person1, person2, ,person4] = names;
console.log(person1, person2, person4)

//* =================================================================
//*            NEW GENERATION OPERATORS: SPREAD OR REST (...)
//* =================================================================

//* REST: (Arrays)

const vehicles = ["BMW", "Audi", "Mercedes", "Opel", "Ferrari"];

const [ vec1, vec2, ...restVehicles ] = vehicles;
console.log(vec1, vec2);
console.log(restVehicles);

//! const [ ...restVehicles, vec1, vec2,  ] = vehicles; // hata verir rest sonra olmalıdır

//* REST: (Objects)

const personel = {
    pName: "John",
    surname: "smith",
    job: "developer",
    age: 30,
}
const { pName, job, ...surNameAge } = personel; //key value yapısından dolayı istediğimizi alırız. arraylerde sıra olduğu için sıkınntı oluyor
console.log(pName, job, surNameAge);

//* REST (function Arguments)

const topla = (x, y) => {
    return x + y;
}
//? hata vermez fakat sadece 2 argümanı toplar

console.log(topla(1, 2, 3, 4,5,6));

const hepsiniTopla = (...sayilar) =>{
    let toplam = 0;
    sayilar.forEach((sayi) => {
        toplam += sayi;
    });
    return toplam;
}

console.log(hepsiniTopla(1, 2, 3, 4, 5, 6));

//* SPREAD

const araclar1 = ["ucak", "Helikopter", "Bisiklet"];
const otomobiller = ["BMW", "Audi", "Mercedes"];

const tumAraclar = [...araclar1, ...otomobiller];

console.log(tumAraclar);

//* EXAMPLE

const meyveler = ["cherry", "apple", "banana", "pear"];
const turunclar = ["mandarin", ...meyveler, "lime", "orange"];

console.log(turunclar);

//* Ornek (String spread)
let str = "Hello FS";
console.log([...str]);
console.log(Array.from(str))

//* Ornek (max)

console.log(Math.max(1, 3, 9, 5));
const rakamlar = [1, 3, 9, 5];
console.log("MAX: ", Math.max (...rakamlar));