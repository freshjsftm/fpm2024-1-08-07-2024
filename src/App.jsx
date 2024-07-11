import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';

import Coords from './components/Coords';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coords" element={<Coords />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
