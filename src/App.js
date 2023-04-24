import './App.css';
import Home from './components/home/Home';
import Dbjson from './data/db.json'

function App() {

  return (
    <>
      <div className='App-header'>
        <Home data={Dbjson} />
      </div>
    </>
  );
}

export default App;
