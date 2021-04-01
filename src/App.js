import './App.css';
import { useState } from 'react';
import RandNames from './components/RandomName/RandName';
// import SpinTheBottle from './components/SpinTheBottle';

const App = () => {
  const [variable, setVariable] = useState('');
  return (
    <div className="app">
       <button onClick={() => {
        let newVar = prompt('What are you choosing?');
        if (newVar.charAt(newVar.length - 1) === 's') newVar = newVar.slice(0, -1)
        setVariable(newVar.charAt(0).toUpperCase() + newVar.slice(1));
      }}> {variable ? 'New Choice' : 'Start'}</button>
      {variable && <RandNames variable={variable} />}
      {/* <SpinTheBottle/> */}
    </div>
  );
};

export default App;
