import React from 'react';

const Calculator = () => {

  return (
    <div className="calculator">
      <h1>PPE Calculator</h1>
      <form>
        <label for="pop">Population:</label><br />
        <input type="text" id="population" name="pop" value="0" /><br />
        <label for="days">Duration:</label><br />
        <input type="text" id="duration" name="days" value="0" /><br />
      </form>
    </div>
  );
}

export default Calculator;