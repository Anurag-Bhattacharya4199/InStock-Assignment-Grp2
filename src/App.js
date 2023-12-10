import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WareHouse from './pages/WareHouse/WareHouse';
import Inventory from './pages/Inventory/Inventory';
import './App.scss';
import './styles/partials/_global.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WareHouse/>}/>
          <Route path='/warehouse/:id/' element={<WareHouse/>}/>
          <Route path='/inventory' element={<Inventory/>}/>
          <Route path='/inventory/:id' element={<Inventory/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
