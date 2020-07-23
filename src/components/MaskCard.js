import React from 'react'

const maskTypes = [
  {id: 1, name: "Olsen pattern, cotton, 700 threadcount"},
  {id: 2, name: "N95, no valve, 3M 8210"},
  {id: 3, name: "KN95, polypropylene, various manufacturers."}
];

export default function MaskCard() {
  return (
    <div className="mask-card">
      <form>
        <label for="product">Choose a mask type:</label>
        <select id="products" name="products" type="dropdown">
          {maskTypes.map(item => {
            return <option key={item.id} value={item.id}>{item.name}</option>
          })}
        </select>
      </form>
      <p></p>
    </div>
  )
}
