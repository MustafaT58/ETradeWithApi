import ProductList from "./components/Product/ProductList";
import Registration from "./components/Registration";
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Layout from "./components/Layout";
import ProductCreate from "./components/Product/ProductCreate";
import ProductUpdate from "./components/Product/ProductUpdate";
import CategoriesList from "./components/Categories/CategoriesList";
import CategoriesCreate from "./components/Categories/CategoriesCreate";

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
        <Route path="/registration" element ={<Registration/>}></Route>
        <Route path="/categories/list" element ={<CategoriesList/>}></Route>
        <Route path="/categories/create" element ={<CategoriesCreate/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
