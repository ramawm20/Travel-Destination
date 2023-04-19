import './App.css';
import Home from './components/home/Home';
import Dbjson from './data/db.json'
import Tours from './components/tours/Tours';

function App() {

  return (
    <>
      <div className='App-header'>
        <Home />
        <Tours data={Dbjson}/>
      </div>
    </>
  );
}

export default App;
