import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Router - pagrindinis router komponentas
// Routes - komponentas, kuriame aprašomi visi galimi URL'ai (arba routes)
// Route - komponentas, kuris nurodo, ka rodyti, kai URL'as atitinka nurodyta kelią
import { WelcomeMessage } from './components/WelcomeMessage';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage/HomePage';
import { AboutPage } from './pages/AboutPage/AboutPage';

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
        <Route
          path="/contacts"
          element={<WelcomeMessage message={'Esu Kontaktu puslapis'} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
