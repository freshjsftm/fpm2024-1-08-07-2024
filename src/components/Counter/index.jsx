import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isAdd, setIsAdd] = useState(true);
  const handleMode = () => {
    setIsAdd(!isAdd);
  };
  const handleCount = () => {
    setCount(isAdd ? count + 1 : count - 1);
  };
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleCount}>{isAdd ? '+1' : '-1'}</button>
      <button onClick={handleMode}>mode: {isAdd ? 'add' : 'sub'}</button>
    </div>
  );
};

export default Counter;
