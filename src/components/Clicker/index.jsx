import { useState, useEffect } from 'react';
import './Clicker.css';
const Clicker = () => {
  const [clickCount, setClickCount] = useState(0);
  const [step, setStep] = useState(1);
  const handleStep = ({ target: { value } }) => {
    setStep(Number(value));
  };
  useEffect(() => {
    const handleClick = () => {
      setClickCount((clickCount) => clickCount + step);
    };
    document.body.addEventListener('click', handleClick);
    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, [step]);
  return (
    <h2>
      Clicker: {clickCount}
      <input type="text" value={step} onChange={handleStep} />
    </h2>
  );
};

export default Clicker;
