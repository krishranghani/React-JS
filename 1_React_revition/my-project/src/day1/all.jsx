import React, { useState } from 'react';

function App() {
  // 3. Form Component (Handling Input)
  const [inputValue, setInputValue] = useState('');

  // 5. Multiple State Variables
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // 6. Object State
  const [user, setUser] = useState({
    name: 'John',
    age: 25,
  });

  // 7. Toggle State (Boolean)
  const [isOn, setIsOn] = useState(false);

  // 8. State with Arrays
  const [items, setItems] = useState([1, 2, 3]);

  // 9. Counter with Previous State
  const [prevCount, setPrevCount] = useState(0);

  // 10. Form Input with Multiple Fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  // Handlers
  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleNameChange = () => setUser((prev) => ({ ...prev, name: 'Doe' }));

  const toggleSwitch = () => setIsOn((prev) => !prev);

  const addItem = () => setItems([...items, items.length + 1]);

  const incrementPrevCount = () => setPrevCount((prevCount) => prevCount + 1);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="App p-8">
      {/* 1. Conditional Rendering Examples */}
      <h2 className="text-xl font-bold mb-4">Conditional Rendering</h2>
      {true ? <div className="bg-green-100 p-2 rounded">Ternary True</div> : <div>Ternary False</div>}
      {true && <div className="bg-blue-100 p-2 mt-2 rounded">Logical && Condition is True</div>}

      {/* 2. Nesting React Component */}
      <h2 className="text-xl font-bold mt-6 mb-4">Nesting Components</h2>
      <Parent />

      {/* 3. Form Component (Handling Input) */}
      <h2 className="text-xl font-bold mt-6 mb-4">Form Handling Input</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="border p-2 rounded w-full"
      />
      <p className="mt-2">Input: {inputValue}</p>

      {/* 4. List Rendering */}
      <h2 className="text-xl font-bold mt-6 mb-4">List Rendering</h2>
      <ul className="list-disc pl-5">
        {['Apple', 'Banana', 'Orange'].map((item, index) => (
          <li key={index} className="mb-1">{item}</li>
        ))}
      </ul>

      {/* 5. Multiple State Variables */}
      <h2 className="text-xl font-bold mt-6 mb-4">Multiple State Variables</h2>
      <p>Count: {count}</p>
      <p>Name: {name}</p>

      {/* 6. Object State */}
      <h2 className="text-xl font-bold mt-6 mb-4">Object State</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={handleNameChange} className="bg-blue-500 text-white py-2 px-4 mt-2 rounded">
        Change Name to Doe
      </button>

      {/* 7. Toggle State (Boolean) */}
      <h2 className="text-xl font-bold mt-6 mb-4">Toggle State</h2>
      <p>{isOn ? 'On' : 'Off'}</p>
      <button onClick={toggleSwitch} className="bg-blue-500 text-white py-2 px-4 mt-2 rounded">
        Toggle
      </button>

      {/* 8. State with Arrays */}
      <h2 className="text-xl font-bold mt-6 mb-4">State with Arrays</h2>
      <ul className="list-disc pl-5">
        {items.map((item, index) => (
          <li key={index} className="mb-1">{item}</li>
        ))}
      </ul>
      <button onClick={addItem} className="bg-green-500 text-white py-2 px-4 mt-2 rounded">
        Add Item
      </button>

      {/* 9. Counter with Previous State */}
      <h2 className="text-xl font-bold mt-6 mb-4">Counter with Previous State</h2>
      <p>Previous Count: {prevCount}</p>
      <button onClick={incrementPrevCount} className="bg-purple-500 text-white py-2 px-4 mt-2 rounded">
        Increment
      </button>

      {/* 10. Form Input with Multiple Fields */}
      <h2 className="text-xl font-bold mt-6 mb-4">Form with Multiple Fields</h2>
      <form className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleFormChange}
          placeholder="Name"
          className="border p-2 rounded w-full"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleFormChange}
          placeholder="Email"
          className="border p-2 rounded w-full"
        />
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
      </form>
    </div>
  );
}

// Child Component for nesting example
function Parent() {
  return (
    <div>
      <h3 className="text-lg font-semibold">This is the Parent component</h3>
      <Child />
    </div>
  );
}

function Child() {
  return <div className="ml-4 text-gray-700">I'm the Child component</div>;
}

export default App;
