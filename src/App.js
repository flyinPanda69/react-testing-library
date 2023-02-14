import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";


export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setIsDisabled] = useState(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const onButtonClick = (e) => {

  }
  const onCheckBoxClick = (e ) => {
    setIsDisabled(e.target.checked);
  }
  return (
    <div>
      <button
        disabled={disabled}
        style={{ backgroundColor: disabled ? 'grey' : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        onChange={onCheckBoxClick}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
