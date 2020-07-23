import React, { useState, useEffect } from 'react';

const Calculator = ({ setMaskDays }) => {
  const [result, setResult] = useState();
  const [pop, setPop] = useState("0");
  const [days, setDays] = useState("0");
  // const [fields, setFields] = useState({
  //   pop: "0",
  //   days: "0"
  // });
  useEffect(() => {
    console.log(typeof(pop));
    let product = parseFloat(pop) + parseFloat(days);
    if (isNaN(product)) product = 0;
    setResult(product);
    setMaskDays(product);
  }, [pop, days, setMaskDays]);

  // const handleFieldChange = e => {
  //   e.preventDefault();
  //   console.log(`Trying to set ${e.target.name} to ${e.target.value}`);
  //   setFields([e.target.name], e.target.value);
  //   console.log(fields);
  //   console.log(typeof(fields.pop));
  // }

  const handlePopChange = e => {
    e.preventDefault();
    setPop(e.target.value);
  }

  const handleDaysChange = e => {
    e.preventDefault();
    setDays(e.target.value);
  }

  return (
    <div className="calculator">
      <h1>PPE Calculator</h1>
      <form>
        <label for="pop">Number of employees:</label><br />
        <input type="text"
          id="pop"
          name="pop"
          value={pop}
          onChange={handlePopChange}
        /><br />
        <label for="days">Number of days:</label><br />
        <input type="text"
          id="days"
          name="days"
          value={days}
          onChange={handleDaysChange}
        /><br />
      </form>
  <p>Total mask days = {result}</p>
    </div>
  );
}

export default Calculator;