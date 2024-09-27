import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import './Loyaut.css';

export default function Loyaut() {

  return (
    <div className='loyout'>
      <Header/>
      <div className='main-content'>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}



