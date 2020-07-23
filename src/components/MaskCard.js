import React from 'react'

const maskTypes = [
  {id: 1, name: "Olsen pattern, cotton, 700 threadcount"},
  {id: 2, name: "N95, no valve, 3M 8210"},
  {id: 3, name: "KN95, polypropylene, various manufacturers."}
];

export default function MaskCard({style, update}) {

  function handleChange(e) {
    e.preventDefault();
    console.log("Changing to", e.target.value); // Undefined!
    update(e.target.value); // e.target.value??
  }

  return (
    <div className="mask-card">
      <form>
        <label htmlFor="product">Choose a mask type:</label>
        <select
        id="products"
        name="products"
        type="dropdown"
        value={style}
        onChange={handleChange}>
          {maskTypes.map(item => {
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
    </div>
  )
}
