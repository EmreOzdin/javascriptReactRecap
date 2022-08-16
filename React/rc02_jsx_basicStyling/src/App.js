//? App componenti index.js dosyasinda cagrilir.
//? React, JSX kullanmaktadır.
//? JSX'de, HTML elementleri doğrudan JS içerisinde kullanılabilir.

//! Componentler, HTML, CSS ve JS kodlarından meydana gelmiş
//! bir kod parçasıdır.

//! Bir componentin return () kısmı ise JSX kodları içerir.

//! JSX'in kendine göre bazi kuralları vardır. Örneğin bir
//! component eger birden fazla HTML elementi dondurmesi 
//! gerekirse bunlari tek bir container elemanı ile 
//! sarmallayarak döndürmelidir. container için div, article,
//! header, <> vb. herhangi bir element kullanılabilir.

//? App componenti tanımlanması

import Footer from './Footer.jsx';
import Header from './Header.jsx';

function App() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};


export default App;