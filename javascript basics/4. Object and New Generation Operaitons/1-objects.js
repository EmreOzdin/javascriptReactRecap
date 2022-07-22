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
    // ozet: function(){
    //     return `${this.ad} ${this.yasHesapla()} yasındadır`;
    // },
    ozet: ()=> {
        return `${this.ad} ${this.yasHesapla()} yasındadır`;
    },
}
console.log("YAS: " + kisi.yasHesapla());
console.log("BILGI: " + kisi.ozet());