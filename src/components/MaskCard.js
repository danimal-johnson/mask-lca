import React, { useState, useEffect } from 'react'

const maskTypes = [
  { id: 1,
    name: "Olsen pattern, cotton, 700 threadcount",
    text: "Cotton home-made mask from the Internet",
    cost: 15.0,
    uses: 1
  },
  { id: 2,
    name: "N95, no valve, 3M 8210",
    text: "Heavy-duty respirator. NIOSH standard. Filters 95% of particulates.",
    cost: 7.25,
    uses: 1
  },
  { id: 3,
    name: "KN95, polypropylene, various manufacturers.",
    text: "Respirator. Chinese standard. Filters 94% of particulates.",
    cost: 3.0,
    uses: 30
  }
];

export default function MaskCard({style, update}) {
  const [index, setIndex] = useState(0); // TODO: Conditional on first instance.
  useEffect(() => {
    setIndex(maskTypes.findIndex(x => x.id === parseInt(style)));
  }, []);

  function handleChange(e) {
    e.preventDefault();
    console.log("Changing to", e.target.value); // Undefined!
    update(e.target.value); // e.target.value??

    setIndex(maskTypes.findIndex(x => x.id === parseInt(e.target.value)));
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
        <p>{maskTypes[index].text}</p>
        <p>${maskTypes[index].cost}</p>
    </div>
  )
}
