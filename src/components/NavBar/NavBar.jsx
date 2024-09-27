import React from 'react'
import { Link, useLocation} from 'react-router-dom';
import { useState } from 'react';
import './NavBar.css'

export default function NavBar() {
    const [showSubList, setShowSubList] = useState(false); // Відкриття/закриття підменю

  const toggleSubList = (event) => {
    event.preventDefault(); // Запобігаємо переходу по лінці
    setShowSubList(!showSubList); // Перемикаємо стан підменю
  };



  const handleLinkClick = () => {
    setShowSubList(false); // Закриваємо підменю при переході
  };

  const location = useLocation(); // Хук для отримання поточного шляху

  const isBurgerPage = location.pathname === '/burger-page'; 

  return (
   
        <ul className={`header_nav_bar ${isBurgerPage ? 'show-nav-bar' : 'hide-on-small-screen'}`}>
        <li><Link to='/' className='header_nav_link' onClick={handleLinkClick}>ГОЛОВНА</Link></li>
        <li>
          <Link to='#' className='header_nav_link' onClick={toggleSubList}>
            ПОРТФОЛІО
          </Link>
          {showSubList && (
            <ul className='header_sublist'>
              <li><Link to='/portret' className='header_sublist_item' onClick={handleLinkClick}>ПОРТРЕТИ</Link></li>
              <li><Link to='/feshn' className='header_sublist_item' onClick={handleLinkClick}>FASHION</Link></li>
              <li><Link to='/mery' className='header_sublist_item' onClick={handleLinkClick}>РОСПИСКА</Link></li>
              <li><Link to='/family' className='header_sublist_item' onClick={handleLinkClick}>СІМЕЙНІ</Link></li>
            </ul>
          )}
        </li>
        <li><Link to='/video' className='header_nav_link' onClick={handleLinkClick}>ВІДЕО</Link></li>
        <li><Link to='/photobooks' className='header_nav_link' onClick={handleLinkClick}>ФОТОКНИГИ</Link></li>
        <li><Link to='/about' className='header_nav_link' onClick={handleLinkClick}>ПРО МЕНЕ</Link></li>
        <li><Link to='/reviews' className='header_nav_link' onClick={handleLinkClick}>ВІДГУКИ</Link></li>
        <li><Link to='/contact' className='header_nav_link' onClick={handleLinkClick}>КОНТАКТИ</Link></li>
      </ul>
   
  )
}
