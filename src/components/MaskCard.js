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
              >{item.name}</option>
            )
          })}
        </select>
      </form>
      <div className="description">
        <p>{masks[index].desc}</p>
      </div>
        <h2>Per-mask information</h2>
      <div className="value">
        <p>${masks[index].cost} each.</p>
        <p>Reusable {masks[index].uses} times.</p>
      </div>
      <div className="impact">
        <p>Total Mass:</p>
        <p>Renewable material:</p>
        <p>Recycled material potential:</p>
        <p>Recyclable mass:</p>
        <p>CO2 footprint:</p>
        <p>Land use:</p>
      </div>
    </div>
  )
}
