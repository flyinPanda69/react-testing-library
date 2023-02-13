import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button disabled={isButtonDisabled} style={{backgroundColor : buttonColor }} onClick={()=>setButtonColor(newButtonColor)}>Change to {newButtonColor}</button>
      <input type='checkbox' onChange={(e) => setIsButtonDisabled(e.target.checked)} />
    </div>
  );
}

export default App;
