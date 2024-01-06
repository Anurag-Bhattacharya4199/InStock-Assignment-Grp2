//import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WareHouseDetailPage from "./pages/WareHouseDetailPage/WareHouseDetailPage";
import WareHouse from "./pages/WareHouse/WareHouse";
import Inventory from "./pages/Inventory/Inventory";
import InventoryDetail from "./pages/InventoryDetail/InventoryDetail";
import EditInventory from "./pages/EditInventory/EditInventory";
import "./App.scss";
import "./styles/partials/_global.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WareHouseAdd from "./pages/WareHouseAdd/WareHouseAdd";
import InventoryAdd from "./pages/InventoryAdd/InventoryAdd";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WareHouse />} />
          <Route path="/warehouses/:id" element={<WareHouseDetailPage />} />
          <Route path="/warehouses/:id/edit" element={<EditWarehouse />} />
          <Route path="/inventories" element={<Inventory />} />
          <Route path="/inventories/:id" element={<InventoryDetail />} />
          <Route path="/inventories/:id/edit" element={<EditInventory />} />
          <Route path="/warehouses/add" element={<WareHouseAdd />} />
          <Route path="/inventories/add" element={<InventoryAdd />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
