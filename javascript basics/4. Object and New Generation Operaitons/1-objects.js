//* =========================================================
//*                  OBJECTS
//* =========================================================

//? Diziler sıralı bellek bölgeleridir. Dolayısıyla bu
//? bölgelere indeksleme ile ulaşabiliriz.
//? Ancak daha karmaşık veri yapısı (unstructured data)
//? ihtiyaçlarımız için Objectleri kullanabiliriz.

//? Objectlerde key-value (property-value) yapısı kullanılır.
//? herhangi bir veriye erişmek için key'i kullanırız.

console.log("********* Objects **********");

//! 3 farklı yöntem ile Object oluşturulabilir.
//* ------------------------------------------------------------
//* 1. Object () classından new operatörü ile oluşturulur.  
//* ------------------------------------------------------------

const araclar = new Object();
araclar.marka = "BMW";
araclar.motor = 1.3;
araclar.model = 2022;

//! read
console.log(araclar);
console.log(araclar.motor); //? . notasyon => 1.3
console.log(araclar["model"]); //? square bracket => 2022

//* ------------------------------------------------------------
//* 2. Object () constructor metodu ile oluşturulur.(OOP ile ayrıntılandırılacaktır)  
//* ------------------------------------------------------------

//* Object () constructor metodu ile oluşturulur.
function Personel(id, ad, maas) {
    this.perId = id;
    this.perAdi = ad;
    this.perMaas = maas;
    console.log(this); //! Personel objesine bağlanmıştır(binded)
}

const ahmet = new Personel(101, "Ahmet", 75000);
const canan = new Personel(102, "Canan", 85000);
console.log(ahmet, canan);
console.log(canan.perMaas);
console.log(ahmet.perAdi);
console.log(this); //! Window objesine bağlanmıştır(binded)

//* ------------------------------------------------------------
//* 3. Object Literal (En Çok Kullanılan Yöntem)
//* ------------------------------------------------------------

const calisan = {
    ad: "Ahmet",
    soyad: "Yilmaz",
    yas: 30,
    is: "developer",
    diller: ["C", "C++", "Python", "JS"],
    maas: 120000,
}

console.log(calisan);
console.log(calisan.yas);
console.log(calisan.diller);
console.log(calisan.diller[3]); //? JS
console.log(calisan[1]); //? undefined

calisan.konum = "Turkey";
calisan.mail = "ahmet@gmail.com";
calisan["dogum"] = 1990;
console.log(calisan);

const isci = calisan; // referans aktarımı, sığ kopyalama
isci.maas = 50000;
console.log(isci, calisan);

//* =========================================================
//*                  OBJECTS METOTLARI
//* =========================================================

//! Metot obje, nesne ve classlara ait fonskiyonların birleşimidir.

const kisi = {
    ad: "Can",
    soyad: "Canan",
    dogum: 1990,
    meslek: "developer",
    ehliyet: true,
    yasHesapla: function(){
        return new Date().getFullYear() - this.dogum;
    },
    ozet: function(){
        return `${this.ad} ${this.yasHesapla()} yasındadır`;
    },
    // ozet: ()=> {
    //     console.log(this);
    //     return `${this.ad} ${this.yasHesapla()} yasındadır`;
    // },
}
console.log("YAS: " + kisi.yasHesapla());
console.log("BILGI: " + kisi.ozet());

//! NOT: arrow fonksiyonları farklı amaç için geliştirilmiş fonksiyonlardır.
//! ve lexical context'e sahiptirler. Dolayısıyla, bir arrow fonk. içerir.
//! this kelimesi kullnılırsa beklenmeyen sonuclar alabiliriz.
//! Çünkü, arrow içerisindeki this kelimesi global scope'u gösterir. (windows nesnesini) gösterir.
//! Bunu engellemek için object fonksiyonlarını tanımlamak için normal fonk. yöntemlerini kullanmak gerekir.

//* =========================================================
//*                  OBJECTS ITERATION
//* =========================================================

//? Nested Objects
const kisilerObject = { 
ahmet: {
    ad: "Ahmet",
    soyad: "Yilmaz",
    yas: 30,
    is: "developer",
    diller: ["C", "C++", "Python", "JS"],
    maas: 120000,},
mehmet: {
    ad: "Mehmet",
    soyad: "Yilmaz",
    yas: 24,
    is: "developer",
    diller: ["C", "C++", "Python", "JS"],
    maas: 200000,} 
}

console.log(kisilerObject);
console.log(kisilerObject.ahmet.is);

//? JSON (JavaScript Object Notation) 

const kisiler= [ 
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
    {
        ad: "Can",
        soyad: "Yilmaz",
        yas: 27,
        is: "tester",
    }, 
];
console.log(kisiler);
console.log(kisiler[3]); //? ad: 'Can', soyad: 'Yilmaz', yas: 24, is: 'developer'}

//* Örnek1: kisiler dizisindeki job.ları tek tek yazdırınız.
kisiler.forEach((kisi) => console.log(kisi.is));

//* Örnek2 : yaslari bir artirarak yeni bir diziye saklayiniz.

kisiler.forEach((kisi) => console.log(kisi.yas + 1));
const yaslar = kisiler.map((kisi) => kisi.yas + 1);
console.log(yaslar);

//* Örnek 3: ad ve soyadları birleştirip büyük harfe çeviren ve 
//* bunu ad key'i olarak saklayan, aynı zamanda yas degerlerini 
//* 5 artırarak yas key'i olarak saklayan bir dizi oluşturunuz.

const adSoyad = kisiler.map((kisi) => ({
        ad: kisi.ad.toUpperCase()+ " " + kisi.soyad.toUpperCase(),
        yas: kisi.yas + 5,
    }
));

//* ALTERNATİF SYNTAX

const adSoyad1 = kisiler.map((kisi) => {
    return {
    ad: kisi.ad.toUpperCase()+ " " + kisi.soyad.toUpperCase(),
    yas: kisi.yas + 5,
        }
    }
);

console.log(adSoyad);
console.log(adSoyad1);

//* Örnek 4: yası 33ten küçük olan kisilerin adlasını listeleyiniz.
const kucuk33 = kisiler.filter((kisi) => kisi.yas < 33).forEach(kisi => console.log(kisi.ad));


//* Örnek 5: 33 yaşından küçüklerin isimlerini diziye saklayiniz.

const kucuk33Isim = kisiler.filter((kisi) => kisi.yas < 33).forEach(kisi => console.log(kisi.ad));

//* Örnek 6: Mesleği developer olanlarin isim ve yaslarini obje olarak
//* saklayan bir dizi oluşturunuz.

const developer = kisiler.filter((kisi) => kisi.is === "developer");
console.log(developer);

//* Örnek 7: kisilerin ortalama yasini hesaplayiniz.
const ortalamaYas = kisiler.reduce((toplam, kisi) => toplam + kisi.yas, 0) / kisiler.length;
console.log(ortalamaYas);