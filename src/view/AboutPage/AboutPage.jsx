import React from 'react'
import vantsuraImg from '../../assets/vantsuraImg1.png'
import './AboutPage.css'

export default function AboutPage() {
  return (
    <div className='about_wrap'>
      <h1>Про мене</h1>
      <div className='about_content'>
        <img className='about_img' src={vantsuraImg} alt="Maria Vantsura"/>
        <div className='about_content-container'>
        <p>
          Привіт! Мене звати Maria Vantsura, я професійний фотограф з багаторічним досвідом у 
          різних жанрах фотографії. Моя пристрасть до фотографії почалася з юних років, 
          коли я вперше взяла в руки камеру. З того часу я присвятила своє життя мистецтву 
          збереження митей.
        </p>
        <p>
          Я спеціалізуюся на портретній, фешн, сімейній фотографії та росписах. Кожен 
          проект для мене — це унікальна можливість створити щось особливе і відобразити 
          емоції та зв'язки між людьми.
        </p>
        <p>
          Моя мета — допомогти вам зберегти найцінніші миті вашого життя, чи то святкування 
          особливої події, чи просто момент спілкування з близькими. Я вірю, що фотографія 
          має здатність розповідати історії, і я готова допомогти вам розповісти вашу.
        </p>
        <p>
          Запрошую вас ознайомитися з моїми роботами у портфоліо і зв'язатися зі мною, 
          якщо у вас є запитання або ви хочете обговорити фотосесію.
        </p>
        </div>
        
      </div>
    </div>
  )
}
