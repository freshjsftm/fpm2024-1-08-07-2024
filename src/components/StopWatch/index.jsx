import { useState, useEffect } from 'react';

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRuning, setIsRuning] = useState(false);

  const handleIsRuning = () => {
    setIsRuning(!isRuning);
  };

  useEffect(() => {
    if (isRuning) {
      console.log('add setInterval');
      const idInterval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      return () => {
        clearInterval(idInterval);
        console.log('clear Interval');
      };
    }
  }, [isRuning]);

  return (
    <div>
      <h2>{time}</h2>
      <button onClick={handleIsRuning}>{isRuning ? 'stop' : 'start'}</button>
    </div>
  );
};

export default StopWatch;
