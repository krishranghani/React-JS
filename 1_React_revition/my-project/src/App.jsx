import { useState } from 'react';
import './App.css';
import Allcode from '../src/day1/all.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Allcode/>
    </div>
  );
}

export default App;
