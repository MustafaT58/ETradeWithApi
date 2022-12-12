import ProductList from "./components/Product/ProductList";
import Registration from "./components/Registration";
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Layout from "./components/Layout";
import ProductCreate from "./components/Product/ProductCreate";
import ProductUpdate from "./components/Product/ProductUpdate";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
      <Layout/>
      <Routes>
        <Route path="/" element ={<ProductCreate/>}></Route>
        <Route path="/Products/List" element ={<ProductList/>}></Route>
        <Route path="/products/create" element ={<ProductCreate/>}></Route>
        <Route path="/products/update" element ={<ProductUpdate/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
