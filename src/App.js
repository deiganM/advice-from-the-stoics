import './App.css';
import Philosophers from './components/Philosophers';

function App() {
  const philosophers = ["Marcus Aurelius", "Epictetus", "Seneca", "Zeno"]

  return (
    <div className="App">
      <h1>Advice From the Stoics (A work in progress)</h1>
      {/* <Philosophers name="Marcus Aurelius" />
      <Philosophers name="Epictetus" />
      <Philosophers name="Seneca" />
      <Philosophers name="Zeno" /> */}
      <div>
        {philosophers.map((name, index) => {
          return (
            <div key={index} className="philosopher-container">
              <h2>{name}</h2>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
