import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext, ThemeContext } from './contexts';
import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';
import EventPage from './pages/EventPage';
import Coords from './components/Coords';
import Header from './components/Header';
import CONSTANTS from './constants';

const {THEME} = CONSTANTS;

function App() {
  const [user] = useState({
    id: 5,
    login: 'max',
    avatar: '/images/defava.png',
  });
  const [theme, setTheme] = useState(THEME.LIGHT);
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <UserContext.Provider value={user}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/coords" element={<Coords />} />
            <Route path="/books" element={<BookPage />} />
            <Route path="/events" element={<EventPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
