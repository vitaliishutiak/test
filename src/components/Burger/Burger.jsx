import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Burger() {

    const navigate = useNavigate();
    

    const handleBurgerClick = () => {
      navigate('/burger-page');
    };
    
  return (
    <div className='header_burger' onClick={handleBurgerClick}>
        <div className="header_row"></div>
        <div className="header_row"></div>
        <div className="header_row"></div>
      </div>
  )
}
