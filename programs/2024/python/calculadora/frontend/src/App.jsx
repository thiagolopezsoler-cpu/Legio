// src/App.jsx

import React, { useState } from 'react';
import Screen from './components/Screen';
import Button from './components/Button';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <Screen input={input} />
      <div className="buttons">
        <Button value="1" onClick={handleClick} />
        <Button value="2" onClick={handleClick} />
        <Button value="3" onClick={handleClick} />
        <Button value="+" onClick={handleClick} />

        <Button value="4" onClick={handleClick} />
        <Button value="5" onClick={handleClick} />
        <Button value="6" onClick={handleClick} />
        <Button value="-" onClick={handleClick} />

        <Button value="7" onClick={handleClick} />
        <Button value="8" onClick={handleClick} />
        <Button value="9" onClick={handleClick} />
        <Button value="*" onClick={handleClick} />

        <Button value="0" onClick={handleClick} />
        <Button value="C" onClick={handleClear} />
        <Button value="=" onClick={handleEvaluate} />
        <Button value="/" onClick={handleClick} />
      </div>
    </div>
  );
}

export default App;