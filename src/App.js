import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WareHouse from "./pages/WareHouse/WareHouse";
//temporary
import WareHouseDetail from "./components/WareHouseDetail/WareHouseDetail";
import Inventory from "./pages/Inventory/Inventory";
import "./App.scss";
import "./styles/partials/_global.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WareHouse />} />
          //Having trouble with Axios call to get specific Warehouse...
          temporary... all routes point to WareHouseDetail with static info
          <Route path="/warehouse/:id/" element={<WareHouseDetail />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/:id" element={<Inventory />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
