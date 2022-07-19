//? ***********STRING METODLARI************

console.log('*****STRING METHODS************');


//! Klasik yöntem ile string tanımlanırsa bu string primitive değişkendir
const str1 = 'Clarusway';
const str2 = ' Hello';
const str3 = ' World';

console.log(typeof str1);
const str4 = str1 + str2;
console.log(str4);

console.log(str4.concat(str3));

//! Non-primitive string tanımlama
const str5 = new String("non-primitive String");
console.log(str5, typeof str5);

//*----------------------------------------------------------------
//*concat() - immutable
//*----------------------------------------------------------------
const s1 = 'hello';
const s2 = ' world';
const s3 = s1.concat(s2);
console.log(s3);
console.log(s3.concat(" Clarusway", str2));
console.log(s2, s3);
//*----------------------------------------------------------
//*charAt()
//*----------------------------------------------------------------
console.log(s3.charAt()); //0.indexte bulunan charı getirir
console.log(s3.charAt(4)); 
console.log(s3.charAt(s3.length- 1));

//*----------------------------------------------------------------
//*includes
//*----------------------------------------------------------------
const word = "to be or not to be, that is the question";

console.log(word.includes("to be")); //!true
console.log(word.includes("That")); //!false
console.log(word.includes('')); //!true
console.log(word.includes('to be',14)); //!false
console.log(word.includes('to be',13)); //!true

//*----------------------------------------------------------------
//*indexOf(), lastindexOf()
//*----------------------------------------------------------------

const tobeIndex = word.indexOf('or');
console.log(tobeIndex);
console.log(word.indexOf('be'));
console.log(word.lastIndexOf('be'));
console.log(word.lastIndexOf('Be'));

//*----------------------------------------------------------------
//*startswith() - endswith() - case sensitive
//*----------------------------------------------------------------
const word2 = 'Salına salına sinsice :)';
console.log(word2.startsWith('sa')) //! false
console.log(word2.startsWith('sa', 7)) //! true
console.log(word2.endsWith(')')) //! true

//*----------------------------------------------------------------
//*replace(searchFor, replaceWith)
//*----------------------------------------------------------------
let oku = 'Oku baban gibi, saf olma'
console.log(oku.replace('saf olma', 'akıllı ol'))
console.log(oku)
oku = oku.replace('saf olma', 'akilli ol');
console.log(oku)

//* Detaylı değiştirme alternatifleri için regex kullanılabilir
console.log(oku.replace(/AKILLI/i, "Zeki"))
//*----------------------------------------------------------------
//* slice(beginIndex[, endIndex])
//* substring (beginIndex[, endIndex])
//* substr (depreceated)
//*----------------------------------------------------------------
const veysel = "Uzun ince bir yoldayım yürüyorum gündüz gece.."
const sliced = veysel.slice(33);
console.log(sliced, typeof sliced); // gündüz gece, string
console.log(veysel.slice(17, 30)); //dayım yürüyor
console.log(veysel.slice(-10)); //düz gece..
console.log(veysel.slice(-23, -19)); //yürü
console.log(veysel.substring(17, 30)); //dayım yürüyor
//*----------------------------------------------------------------
//*split([[, limit] ])
//*----------------------------------------------------------------
const tarkan = 'Gel gündüzle gece olalım';
const splited = tarkan.split(' '); // boşluklara göre ayırdı Arraye çevirdi
console.log(splited, typeof splited);
const gece = splited[2]; //indisleme ile değer okunabilir
console.log(gece);

const chars = tarkan.split("");
console.log(chars); //null karakterine göre harfleri ayırarak bir char dizisi oluşturdu

const copyTarkan = tarkan.split();
console.log(copyTarkan); // stringi tek elemanlı array haline getirdi

//*----------------------------------------------------------------
//*trim();
//*----------------------------------------------------------------
const ramazan = "        Hoş geldin ya şehri Ramazan        ";
console.log(ramazan);
console.log(ramazan.length); // 43
console.log(ramazan.trim());
console.log(ramazan.trim().length); //27
