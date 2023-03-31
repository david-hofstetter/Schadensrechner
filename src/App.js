import React, { useState } from "react";

function Schadensrechner() {
  const [baseDamage, setBaseDamage] = useState();
  const [damageModifier, setDamageModifier] = useState();
  const [totalDamage, setTotalDamage] = useState();

  const calculateDamage = () => {
    const calculatedDamage = baseDamage * damageModifier / 100 ;
    setTotalDamage(calculatedDamage);
  };

  return (
    <div>
      <h1>Schadensrechner</h1>
      <label>
        Grundschaden:
        <input
        placeholder="in CHF"
          type="number"
          value={baseDamage}
          onChange={(e) => setBaseDamage(parseInt(e.target.value))}
        />
      </label>
      <br />
      <label>
        Schadensmodifikator:
        <input
          placeholder="in %"
          type="number"
          step="5"
          value={damageModifier}
          onChange={(e) => setDamageModifier(parseFloat(e.target.value))}
        />
      </label>
      <br />
      <button onClick={calculateDamage}>Berechnen</button>
      <br />
      <label>Gesamtschaden: {totalDamage}</label>
    </div>
  );
}

export default Schadensrechner;
