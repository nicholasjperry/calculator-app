import './App.css';
import React, { useState } from 'react';
import * as math from 'mathjs';

function App() {
  const [input, setInput] = useState('');

  const handleInputButton = (e) => {
    setInput(input.concat(e.target.name));
  }

  const handleEquals = () => {
    try {
      setInput(math.evaluate(input).toString());
    }
    catch(err) {
      console.log(err)
    }
  }

  const handleClear = () => {
      setInput('');
  }

  return(
    <>
      <h1 className="title">Press buttons.  Do math.</h1>
      <div className="calculator-body">
        <input className="input-output-field" type="text" value={input} />
        <div className="number-container">
          <button name="7" onClick={handleInputButton}>7</button>
          <button name="8" onClick={handleInputButton}>8</button>
          <button name="9" onClick={handleInputButton}>9</button>
          <button name="4" onClick={handleInputButton}>4</button>
          <button name="5" onClick={handleInputButton}>5</button>
          <button name="6" onClick={handleInputButton}>6</button>
          <button name="1" onClick={handleInputButton}>1</button>
          <button name="2" onClick={handleInputButton}>2</button>
          <button name="3" onClick={handleInputButton}>3</button>
          <button name="0" onClick={handleInputButton}>0</button>
          <button name="." onClick={handleInputButton}>.</button>
        </div>
        <div className="CE-container">
            <button className="CE-button" onClick={handleClear}>CE</button>
        </div>
        <div className="functions-container">
          <button name="=" onClick={handleEquals}>=</button>
          <button name="/" onClick={handleInputButton}>&divide;</button>
          <button name="*" onClick={handleInputButton}>&times;</button>
          <button name="-" onClick={handleInputButton}>&ndash;</button>
          <button name="+" onClick={handleInputButton}>+</button>
        </div>
      </div>
    </>
  )
}

export default App;
