import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, useState } from 'react';
import FamilyPage from './view/FamilyPage/FamilyPage';
import FeshnPage from './view/FeshnPage/FeshnPage';
import MeryPage from './view/MeryPage/MeryPage';
import HomePage from './view/HomePage/HomePage';
import PhotobooksPage from './view/PhotobooksPage/PhotobooksPage';
import AboutPage from './view/AboutPage/AboutPage';
import VideoPage from './view/VideoPage/VideoPage';
import ContactPage from './view/ContactPage/Contact';
import ReviewsPage from './view/ReviewsPage/ReviewsPage';
import Loyaut from './Loyaut/Loyaut';
import AuthPage from './view/AuthPage/AuthPage';
import AdminPage from './view/AdminPage/AdminPage';
import BurgerPage from './view/BurgerPage/BurgerPage';
import './App.css';

function App() {

  return (
    <div className="wrap">
      {/* Додаємо Router */}
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Loyaut />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/mery" element={<MeryPage />} />
              <Route path="/feshn" element={<FeshnPage />} />
              <Route path="/family" element={<FamilyPage />} />
              <Route path="/video" element={<VideoPage />} />
              <Route path="/photobooks" element={<PhotobooksPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Route>
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/admin" element={<AdminPage />} /> 
            <Route path="burger-page" element={<BurgerPage />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
