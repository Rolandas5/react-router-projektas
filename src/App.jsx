import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Router - pagrindinis router komponentas
// Routes - komponentas, kuriame aprašomi visi galimi URL'ai (arba routes)
// Route - komponentas, kuris nurodo, ka rodyti, kai URL'as atitinka nurodyta kelią
import { NavBar } from './NavBar/NavBar';
import { Footer } from './Footer/Footer';
import { HomePage } from './pages/HomePage/HomePage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import Reviews from './pages/ReviewsPage/Reviews';

// / - homepage
// /about - About page
// /contacts - Contacts page

function App() {
  return (
    <Router>
      {/* {/* Navigacija visada atsivaizduos, nes nepriklauso jokiam urlui /*} */}
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
