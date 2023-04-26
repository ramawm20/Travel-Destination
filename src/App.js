import './App.css';
import TourDetails from './components/TourDetails/TourDetails';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Dbjson from './data/db.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
      <div className='App-header'>
        <Header/>
        <br/>
        <Routes>
        <Route path='/' element={<Home data={Dbjson}/>}></Route>
        <Route path='/city/:id' element={<TourDetails data={Dbjson}/>} ></Route>
        <Route path='App'>App</Route>
        </Routes>
        <Footer/>
        
      </div>
    </>
  );
}

export default App;
