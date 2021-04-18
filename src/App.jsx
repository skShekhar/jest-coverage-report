import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((val) => val + 1);

  const handleDecrement = () => {
    if (count > 0) setCount((val) => val - 1);
  };

  return (
    <>
      <button type="button" onClick={handleIncrement}>Increment</button>
      <button type="button" onClick={handleDecrement}>Decrement</button>
      <p>{`Count ${count}`}</p>
    </>
  );
};

export default App;
