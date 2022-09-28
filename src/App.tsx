import React, { useEffect, useState } from "react";
import axios from "axios";

import { Dropdown } from "./component/dropdown/dropdown";
import { Checkbox } from "./component/checkbox/checkbox";

import "./App.css";

function App() {
  const [pizzaType, setPizzaType] = useState<Array<string>>([]);
  const [selectedPizza, setSelectedPizza] = useState<string>("");
  const [selectedMaterial, setSelectedMaterial] = useState<Array<string>>();

  useEffect(() => {
    axios("/list/type").then((data) => setPizzaType(data.data.data));
  }, []);

  useEffect(() => {
    axios("/detail/material", { data: { material: selectedPizza } }).then(
      (data) => setSelectedMaterial(data.data.data)
    );
  }, [selectedPizza]);

  console.log(selectedMaterial);

  return (
    <div className="app">
      <Dropdown
        item={pizzaType}
        chosen={selectedPizza}
        onClick={setSelectedPizza}
      />
      <div className="material-container">
        <ul>
          {selectedMaterial?.map((it) => (
            <li className="item">
              <Checkbox id={it} />
              <label htmlFor={it}>
                <span>{it}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
