import { useState } from 'react';
import StopWatch from './components/StopWatch';

function App() {
  const [visible, setVisible] = useState(true);
  const handleVisible = () => {
    setVisible(!visible);
  };
  return (
    <>
      <button onClick={handleVisible}>visible {visible ? 'on' : 'off'}</button>
      {visible && <StopWatch />}
    </>
  );
}

export default App;
