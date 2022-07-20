//* =========================================================
//*                  FOR LOOPS
//* =========================================================

console.log("********* LOOPS IN ARRAYS *********");

//? DİZİLERDE İTERASYON
//* Döngüler ile
//* Klasik for, while, do while döngüleri
//* for in
//* for of
//!imperative programminge örnektir.

//* Dizi iterasyon metotları (en çok kullanılan)
//* Array.forEach()
//* Array.map()
//* Array.filter()
//* Array.reduce()
//! bunlar function based programminge örnektir ya da declarative programminge örnektir.

const islemler = [-3000, 4500, -2200, -6000, 9000]; 
const islemleriTopla= ()=>{
    let yatirma = 0;
    let cekme = 0;
    for(let i = 0; i < islemler.length; i++){
        if (islemler[i]>0){
            yatirma += islemler[i]
    }else{
        cekme += islemler[i];
        }
    }
    return `Toplam yatirma: ${yatirma}, Toplam cekme: ${-cekme}`;
}

console.log(islemleriTopla());


//* =========================================================
//*                  FOR-IN LOOPS
//* =========================================================

//* SORU: Ogrenciler dizisinde ogrenci işlemleri saklanmaktadır. 
//* ogrencileri aramamızı sağlayacak ve aranılan ogrenciden ne kadar
//* sayıda bulunulduğunu ana programa döndürecek bir fonksiyonu
//* yazınız. Eğer aranılan isimde bir öğrenci yok ise fonksiyon
//* aranılan ogrenci bulunamadı mesajı döndürmelidir.

const ogrenciler = [
    'ahmet',
    'mehmet',
    'ismet',
    'saffet',
    'ahmet',
    'nur',
    'can',
    'nur',
    'mehmet',
    'cem',
]

const ogrenciBul = function(isim){
    let sayac = 0;
    for (let i in ogrenciler){
        if (ogrenciler[i] === isim) {
            sayac++;
        }
    }
    if(sayac === 0){
        return `${isim} isimli öğrenci bulunamadı.`;
    }else{
        return `${isim} isimli öğrenci ${sayac} kez bulundu.`;
    }
}
let ogrIsim = prompt ("Ogrenci ismi giriniz: ").toLocaleLowerCase();
console.log(ogrenciBul(ogrIsim));

//* =========================================================
//*                  FOR-OF LOOPS
//* =========================================================

//* for of dongusu, for in dongusu bir çok veri yapısını 
//* kapsayacak şekilde güncellenmiş halidir. Bu döngüde dizi
//* içerisindeki veriye erişirken indisleme kullanmaya gerek yoktur.


const ogrenciBulForOf = function(isim){
    let sayac = 0;
    for (let ogrenci of ogrenciler){
        ogrenci === isim ? sayac++ : null; // ternary
        // ogrenci === isim && sayac++; 
        //Shortcut circuit koşul doğruysa ifadeyi çalıştır.
        // ogrenci === isim || sayac--; //Shortcut circuit
         //Shortcut circuit koşul yanlışsa ifadeyi çalıştır.
        if (ogrenci === isim) {
            sayac++;
        }
    }
    return !sayac ? `${isim} isimli öğrenci bulunamadı.` : `${isim} isimli öğrenci ${sayac} kez bulundu.`;
    // if(sayac === 0){
    //     return `${isim} isimli öğrenci bulunamadı.`;
    // }else{
    //     return `${isim} isimli öğrenci ${sayac} kez bulundu.`;
    // }
}
let name = prompt ("Ogrenci ismi giriniz: ").toLocaleLowerCase();
console.log(ogrenciBulForOf(ogrName));