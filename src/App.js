import './App.css';
import { useState } from 'react'; 
// probably not needed
// import Philosophers from './components/Philosophers';

function App() {
  const [ showNames, setShowNames] = useState(true)
  const philosophers = ["Marcus Aurelius", "Epictetus", "Seneca", "Zeno"]

  return (
    <div className="App">
      <h1>Advice From the Stoics (A work in progress)</h1>
      {/* <Philosophers name="Marcus Aurelius" />
      <Philosophers name="Epictetus" />
      <Philosophers name="Seneca" />
      <Philosophers name="Zeno" /> */}
      <div className="philosopher-container">
        {showNames && philosophers.map((name, index) => {
          return (
            <div key={index} className="philosopher-container">
              <h2>{name}</h2>
            </div>
          )
        })}
        {showNames && <div>
          <button onClick={() => setShowNames(false)}>Hide philosophers</button>
        </div>}
        {!showNames && <div>
          <button onClick={() => setShowNames(true)}>Show philosophers</button>
        </div>}
      </div>
    </div>
  );
}

export default App;
