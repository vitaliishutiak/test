import React, { useState } from 'react';
import instagram from '../../assets/instagramImg.png';
import facebook from '../../assets/facebookImg.png';
import viber from '../../assets/viberImg.png';
import './Contact.css'; 

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Форма відправлена:', { name, email, message });
    
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='contact_wrap'>
      <h1>Контакти</h1>
      <p className='contact_text'>Буду рада допомогти вам зберегти важливі моменти вашого життя! <br/>
         Якщо у вас є питання, бажаєте замовити фотосесію або дізнатись більше про мої послуги, будь ласка, зв'яжіться зі мною зручним для вас способом.</p>
      <form onSubmit={handleSubmit} className='contact_form'>
        <div className='contact_form_group'>
          <input
            type='text'
            placeholder='Імя'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type='email'
            placeholder='E-mail'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            id='message'
            placeholder='Повідомлення'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
            <button type='submit' className='submit_btn'>Відправити</button>
        </div>
        <div className="contact_form_content">
          <h2 className='contact_form_title'>Телефон:</h2>
          <p >+380 99 999 99 99</p>
          <p>Готова відповісти на ваші дзвінки з понеділка по п'ятницю з 10:00 до 18:00.</p>
          <h2>E-mail:</h2>
          <p>mariavantsura@gmail.com</p>
          <p>Пишіть мені в будь-який час, і я відповім вам найближчим часом.</p>
          <div className="contact_social_container">
            <a href="https://www.instagram.com/marusya__inspiration_photo/" target="_blank"><img alt="instagram" src={instagram}/></a>
            <a href='' target="_blank"><img  alt="facebook" src={facebook} /></a>
            <a href='' target="_blank"><img  alt="telegram" src={viber} /></a>
          </div>
        </div>
        
      </form>
    </div>
  );
}
