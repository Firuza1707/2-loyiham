import logo from './logo.svg';
import img1 from "./img1.jpg"
import img2 from "./img2.webp"
import img3 from "./img3.jpg"
import img4 from "./img4.jpg"
import img5 from "./img5.jpg"
import img6 from "./img6.jpg"
import img7 from "./img7.jpg"
import img8 from "./img8.jpg"
import img9 from "./img9.jpg"
import './App.css';

function App() {
  return (
    <div>

      {/* header  */}
      <header>
        <div className="container">
          <a href='https://ru.wix.com/' className='logo'>WIX</a>
          <p>Нажмите «Редактировать», чтобы создать свой сайт    <a href="#">Подробнее</a></p>
          <button>Редактировать</button>
        </div>
      </header>


      {/* section */}

      <section id='main'>
        <div className='container'>
          <h1  >Олег Марков</h1> <br />
          <ul>
            <li><a href="#" >Главная</a></li>
            <li><a href="#"> Oбо мне</a></li>
            <li><a href="#">Связаться</a></li>
          </ul>

<div className='images'>
      <div> <img src={img1} alt=""/></div>    
      <div> <img src={img2} alt="" /></div>    
      <div> <img src={img3} alt="" className='img3' /></div> 
      
</div>
<div className='images'>
      <div><img src={img4} alt="" /> </div>    
      <div><img src={img5} alt="" /></div>    
      <div><img src={img6} alt="" /></div> 
      
</div>

<div className='images'>
      <div> <img src={img7} alt="" /></div>    
      <div><img src={img8} alt="" /></div>    
      <div><img src={img9} alt="" /></div> 
      
</div>

          
        </div>
      </section>
    </div>
  );
}

export default App;
