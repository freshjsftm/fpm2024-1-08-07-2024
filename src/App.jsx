import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StopWatch from './components/StopWatch';
import Coords from './components/Coords';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<StopWatch />} />
        <Route path="/coords" element={<Coords />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
