import React from 'react';
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';
function About() {
  return (
    <div className='about'>
      <div
        className='aboutTop'
        style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
      <div className='aboutBottom'>
        <h1> ABOUT US</h1>
        <p>
          Yaygın bir inanışa göre Haziran 1889'da pizza ustası Raddaele
          Esposito, İtalya Kraliçesi ve İtalya'nın birleşmesi şerefine "Pizza
          Margherita" adını verdiği bir pizza icat etti. Pizzadaki domates
          (kırmızı), mozarella (beyaz) ve fesleğen (yeşil) İtalyan bayrağını
          simgeliyordu.Pizza Margherita adı kraliçenin ziyaretiyle popüler
          olsa da 1796 ve 1810'da bu pizzanın malzemeleriyle yapılan pizzalar
          olduğu bildiriliyor.1830'da Napoli üzerine yazılmış olan bir
          kitapta pizza malzemeleri olarak domates, mozarella ve fesleğen
          sıralanıyor. 1849'da Emanuele Rocco, fesleğen, domates ve mozarella
          dilimleri başta olmak üzere farklı pizza malzemeleri kayda
          geçmiştir.İnce dilimlenmiş mozzarella ve fesleğen yapraklarıyla
          birlikte domates sosu üzerine çiçek şeklinde dizilmiştir: Margherita
          (papatya anlamına gelir) isminin gerçek kökeni bu olabilir.
        </p>
      </div>
    </div>
  );
}

export default About;
