import React from 'react'
import './Footer.css'
import instagram from '../../assets/instagramImg.png';
import facebook from '../../assets/facebookImg.png';

export default function () {
  return (
    <footer>
        <h2 className='footer_logo'>Maria Vantsura</h2>
        <div className='footer_social'>
           <a href="https://www.instagram.com/marusya__inspiration_photo/" target="_blank"><img src={instagram} alt="instagram" /></a> 
            <img src={facebook} alt="facebook" />
        </div>
    </footer>
  )
}
