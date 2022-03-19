import './App.css';
import Philosophers from './components/Philosophers';

function App() {

  return (
    <div className="App">
      <h1>Advice From the Stoics</h1>
      <Philosophers 
        name={"Marcus Aurelius"}
        image={'../images/MarcusAurelius.jpg'}
        alt={"Marcus Aurelius"}
      />
      <Philosophers 
        name={"Epictetus"}
        image={'../images/epictetus.jpg'}
        alt={"Epictetus"}
      />
      <Philosophers 
        name={"Seneca the Younger"}
        image={'../images/SenecaTheYounger.jpg'}
        alt={"Seneca the Younger"}
      />
      <Philosophers 
        name={"Zeno of Citium"}
        image={'../images/ZenoOfCitium.jpg'}
        alt={"Zeno of Citium"}
      />
    </div>
  );
}

export default App;
