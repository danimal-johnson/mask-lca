import React, { useState, useEffect } from 'react'

export default function MaskCard({style, update, masks }) {
  const [index, setIndex] = useState(0); // TODO: Conditional on first instance.
  useEffect(() => {
    setIndex(masks.findIndex(x => x.id === parseInt(style)));
  }, []);

  function handleChange(e) {
    e.preventDefault();
    update(e.target.value);

    setIndex(masks.findIndex(x => x.id === parseInt(e.target.value)));
  }

  return (
    <div className="mask-card">
      <form>
        <label htmlFor="product">Choose a mask type:</label><br />
        <select
        id="products"
        name="products"
        type="dropdown"
        value={style}
        onChange={handleChange}>
          {masks.map(item => {
            return (
              <option
                key={item.id}
                value={item.id}
              >{item.id + ":" + item.name}</option>
            )
          })}
        </select>
      </form>
        <p>Selected: Style #{style}</p>
        <p>{masks[index].text}</p>
        <p>${masks[index].cost}</p>
    </div>
  )
}
