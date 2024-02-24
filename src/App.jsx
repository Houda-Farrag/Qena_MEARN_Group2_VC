import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductDetails } from "./Pages/ProductDetails";
import { PropertyDetails } from "./Pages/PropertyDetails";
import { SellPage } from "./Pages/SellPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductDetails />} />
          <Route path="property" element={<PropertyDetails />} />
          <Route path="/sell" element={<SellPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
