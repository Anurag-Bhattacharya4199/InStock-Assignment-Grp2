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
