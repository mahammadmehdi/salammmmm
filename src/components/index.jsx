import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleInputChange = (event, setter) => {
    setter(parseInt(event.target.value) || 0);
  };

  const performOperation = (operation) => {
    let newResult = 0;

    switch (operation) {
      case 'add':
        newResult = num1 + num2;
        break;
      case 'subtract':
        newResult = num1 - num2;
        break;
      case 'multiply':
        newResult = num1 * num2;
        break;
      case 'divide':
        newResult = num1 / num2;
        break;
      default:
        break;
    }

    setResult(newResult);
  };

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => handleInputChange(e, setNum1)}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => handleInputChange(e, setNum2)}
      />
      <br />
      <button onClick={() => performOperation('add')}>Add</button>
      <button onClick={() => performOperation('subtract')}>Cix</button>
      <button onClick={() => performOperation('multiply')}>Vur</button>
      <button onClick={() => performOperation('divide')}>Böl</button>
      <br />
      <p>Cavab: {result}</p>
    </div>
  );
};

export default Calculator;
