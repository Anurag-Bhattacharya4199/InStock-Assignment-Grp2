
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WareHouse from './pages/WareHouse/WareHouse';
import Inventory from './pages/Inventory/Inventory';
import logo from './logo.svg';
import './App.scss';
import './styles/partials/_global.scss';
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Header />
        <Routes>
          <Route path='/' element={<WareHouse/>}/>
          <Route path='/warehouse/:id/' element={<WareHouse/>}/>
          <Route path='/inventory' element={<Inventory/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
