import { Link, useNavigate } from 'react-router-dom';
import telegram from '../../assets/telegramImg.png';
import NavBar from '../NavBar/NavBar';
import './Header.css';
import Burger from '../Burger/Burger';

export default function Header() {

  return (
    <header>
      <Link to='/' className='header_logo'>Maria Vantsura</Link>
      <NavBar />
      <button className='header_telegram_btn'>
        <img className='header_telegram_icon' src={telegram} alt="" />Зв'язатися
      </button>
      <Burger />
    </header>
  );
}
