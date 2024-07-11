import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext, ThemeContext } from './contexts';
import HomePage from './pages/HomePage';
import Coords from './components/Coords';
import Header from './components/Header';

function App() {
  const [user] = useState({
    id: 5,
    login: 'max',
    avatar: '/images/defava.png',
  });
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <UserContext.Provider value={user}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/coords" element={<Coords />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
