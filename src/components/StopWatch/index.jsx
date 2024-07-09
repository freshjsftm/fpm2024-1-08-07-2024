import { useState, useEffect } from 'react';
import { format, addSeconds } from 'date-fns';

const StopWatch = () => {
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0, 0));
  const [isRuning, setIsRuning] = useState(false);

  const handleIsRuning = () => {
    setIsRuning(!isRuning);
  };
  const handleReset = ()=>{
    setTime(new Date(0, 0, 0, 0, 0, 0, 0));
    setIsRuning(false);
  }

  useEffect(() => {
    if (isRuning) {
      console.log('add setInterval');
      const idInterval = setTimeout(() => {
        setTime((time) => addSeconds(time, 1));
      }, 1000);
      return () => {
        clearTimeout(idInterval);
        console.log('clear Interval');
      };
    }
  }, [isRuning, time]);

  return (
    <div>
      <h2>{format(time, 'HH : mm : ss')}</h2>
      <button onClick={handleIsRuning}>{isRuning ? 'stop' : 'start'}</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default StopWatch;
