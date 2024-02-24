import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductDetails } from "./Pages/ProductDetails";
import { PropertyDetails } from "./Pages/PropertyDetails";
import { SellPage } from "./Pages/SellPage";
import Home from "./Pages/Home";
import Header from "./Components/Header/Header";
import  Footer from "./Components/Footer/Footer"
const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="details-prod" element={<ProductDetails />} />
          <Route path="detailsproperty" element={<PropertyDetails />} />
          <Route path="sell" element={<SellPage />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
