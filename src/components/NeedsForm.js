import React, { useState, useEffect } from 'react';

const NeedsForm = ({ setMaskDays }) => {
  const [result, setResult] = useState();
  const [pop, setPop] = useState("0");
  const [days, setDays] = useState("0");
  const [perDay, setPerDay] = useState("0");
  // const [fields, setFields] = useState({
  //   pop: "0",
  //   days: "0"
  // });
  useEffect(() => {
    let product = parseFloat(pop) * parseFloat(days) * parseFloat(perDay);
    if (isNaN(product)) product = 0;
    setResult(product);
    setMaskDays(product);
  }, [pop, days, perDay, setMaskDays]);

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

  const handlePerDayChange = e => {
    e.preventDefault();
    setPerDay(e.target.value);
  }

  return (
    <div className="needs-form">
      <h1>Mask Needs</h1>
      <form>
        <label htmlFor="pop">Number of employees:</label><br />
        <input type="text"
          id="pop"
          name="pop"
          value={pop}
          onChange={handlePopChange}
        /><br />
        <label htmlFor="days">Number of days:</label><br />
        <input type="text"
          id="days"
          name="days"
          value={days}
          onChange={handleDaysChange}
        /><br />
        <label htmlFor="perDay">Masks per day:</label><br />
        <input type="text"
          id="perDay"
          name="perDay"
          value={perDay}
          onChange={handlePerDayChange}
        /><br />
      </form>
    </div>
  );
}

export default NeedsForm;