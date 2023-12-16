import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WareHouse from "./pages/WareHouse/WareHouse";
import Inventory from "./pages/Inventory/Inventory";
import "./App.scss";
import "./styles/partials/_global.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WareHouseDetail from "./components/WareHouseDetail/WareHouseDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WareHouse />} />
          <Route path="/warehouses/:id/" element={<WareHouse />} />
          <Route path="/inventories" element={<Inventory />} />
          <Route path="/inventories/:id" element={<Inventory />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
