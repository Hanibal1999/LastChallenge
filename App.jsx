
import { Routes, Route, Navigate } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import ProductCreate from "./pages/ProductCreate";
import ProductEdit from "./pages/ProductEdit";
import './App.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/products" />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/show/:id" element={<ProductDetails />} />
      <Route path="/products/new" element={<ProductCreate />} />
      <Route path="/products/edit/:id" element={<ProductEdit />} />
    </Routes>
  );
}

export default App;
