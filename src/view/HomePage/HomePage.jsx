import React from 'react';
import './HomePage.css';
import mainImg1 from '../../assets/img1.png';
import mainImg2 from '../../assets/img2.png';
import mainImg3 from '../../assets/img3.png';
import desImg from '../../assets/desImg.png';
import locationImg from '../../assets/locationImg.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 

export default function MainPage() {
  const imgArr = [mainImg1, mainImg2, mainImg3];

  return (
    <div className='home_wrap'>
      <Swiper
        spaceBetween={1}
        slidesPerView={1} 
        pagination={{ clickable: true }} 
      >
        {imgArr.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt={`img${index}`} className='home_slider-img' />
          </SwiperSlide>
        ))}
      </Swiper>
      
    <div className="description_wrap">
    <img src={desImg} className='des_img' alt="desImg" />
    <div className="textContent">
    <h2 className='description_title'>Професійна обробка фотографій</h2>
    <p>Моя обробка фотографій допомагає підкреслити найкращі моменти вашої події.Я використовую сучасні техніки та інструменти для досягнення вражаючих результатів. Незалежно від того, чи це весільна фотографія, портрет або захоплююча мить з вашого життя, я гарантую, що кожне зображення буде ідеально відображати емоції та атмосферу.<br/><br/> <b>Кожна обробка виконується з урахуванням ваших побажань, щоб ви отримали саме те, що хотіли.</b></p>
    </div>
    </div>
    <div className="description_wrap description_wrap_reverse">
    <div className="textContent">
    <h2 className='description_title'>Підбір ідеальних локацій для фотосесій</h2>
    <p>Я розумію, що правильна локація може суттєво вплинути на настрій і атмосферу фотографій. Тому я пропоную професійний підбір локацій, що відповідають вашій концепції та стилю.Разом ми можемо обрати як мальовничі природні пейзажі, так і затишні міські куточки, щоб підкреслити ваші унікальні моменти. Моя мета — створити ідеальні умови для зйомки, щоб ви могли насолоджуватися процесом та отримати найкращі результати.Від класичних до незвичайних локацій — я допоможу знайти те, що відображає вашу історію.</p>
    </div>
    <img src={locationImg} className='des_img' alt="desImg" />
    </div>
    <div className="description_wrap">
    <img src={desImg} className='des_img' alt="desImg" />
    <div className="textContent">
    <h2 className='description_title'>Підбір ідеальних локацій для фотосесій</h2>
    <p>Я розумію, що правильна локація може суттєво вплинути на настрій і атмосферу фотографій. Тому я пропоную професійний підбір локацій, що відповідають вашій концепції та стилю.Разом ми можемо обрати як мальовничі природні пейзажі, так і затишні міські куточки, щоб підкреслити ваші унікальні моменти. Моя мета — створити ідеальні умови для зйомки, щоб ви могли насолоджуватися процесом та отримати найкращі результати.Від класичних до незвичайних локацій — я допоможу знайти те, що відображає вашу історію.</p>
    </div>
    </div>

    </div>
  );
}
