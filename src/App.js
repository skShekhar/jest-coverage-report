import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count => count + 1)

  const handleDecrement = () => {
    if(count > 0)
      setCount(count => count - 1)
  }

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <p>{`Count ${count}`}</p>
    </div>
  );
}

export default App;
