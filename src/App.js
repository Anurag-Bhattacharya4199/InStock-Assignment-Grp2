import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WareHouse from './pages/WareHouse/WareHouse';
import Inventory from './pages/Inventory/Inventory';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
