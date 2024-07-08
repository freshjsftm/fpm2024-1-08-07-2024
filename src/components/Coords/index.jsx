import { useState } from 'react';

const Coords = () => {
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  });
  const handleClick = (event) => {
    setCoords({
      x: event.clientX,
      y: event.clientY,
    });
  };
  return (
    <div onClick={handleClick} style={{background:'#eee'}}>
      <p>x = {coords.x}</p>
      <p>y = {coords.y}</p>
    </div>
  );
};

export default Coords;
