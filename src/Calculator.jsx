import React, { useState } from "react";


export default function Calculator() {
    const [baseDamage, setBaseDamage] = useState();
    const [damageModifier, setDamageModifier] = useState();
    const [totalDamage, setTotalDamage] = useState();
  
    const calculateDamage = () => {
      const calculatedDamage = baseDamage * damageModifier / 100 ;
      setTotalDamage(calculatedDamage);
    };
  
    return (
      
      <div id="calc">
        
        <h1>Schadensrechner</h1>
        <label for = "Grundschaden">Grundschaden: </label>
          <input id ="inp1"
          placeholder="in CHF"
          min={0}
          step={10}
            type="number"
            value={baseDamage}
            onChange={(e) => setBaseDamage(parseInt(e.target.value))}
          />
       
        <br />
        <label>
          Multiplikatoren:
          <input id = "inp2"
          min={0}
          max={100}
            placeholder="in %"
            type="number"
            step="5"
            value={damageModifier}
            onChange={(e) => setDamageModifier(parseFloat(e.target.value))}
          />
        </label>
        
        <br />
        <button id="calcButton" onClick={calculateDamage}>Berechnen</button>
        <br />
        <label>Schadensersatzbetrag: {totalDamage}</label>
      </div>
    );
  }
  
  //export default Calculator;