import logo from './logo.svg';
import './App.css';
import FruitCard from './components/FruitComponents/FruitCard';
import fruitimages from './models/fruitimages'
import FruitDisplay from './components/FruitDisplay/FruitDisplay';

function App() {
  return (
    <div className="App">
        <FruitDisplay fruitimages={fruitimages}/>
        {/* <FruitCard/> */}

    </div>
  );
}

export default App;
