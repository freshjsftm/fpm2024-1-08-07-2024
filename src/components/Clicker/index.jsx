import { useState, useEffect } from 'react';
import './Clicker.css';

const Clicker = () => {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const handleClick = () => {
      setClickCount((clickCount) => clickCount + 1);
    };
    console.log('add effect');
    document.body.addEventListener('click', handleClick);
    return () => {
      console.log('remove effect');
      document.body.removeEventListener('click', handleClick);
    };
  }, []);

  console.log('render');
  return <h2>Clicker: {clickCount}</h2>;
};

export default Clicker;
//  onClick={handleClick}
