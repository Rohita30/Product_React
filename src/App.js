import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import UpdateProduct from "./components/UpdateProduct";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<ProductList />} />
            <Route path="/" element={<ProductList />}></Route>
            <Route path="/productList" element={<ProductList />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/editProduct/:productId" element={<UpdateProduct />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
