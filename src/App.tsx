import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { Home } from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { Signup } from "./pages/Signup/Signup";
import { NewArrivalProduct } from "./pages/Product/NewArrivalProduct";
import ShoppingCart from "./pages/Cart/ShoppingCart";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/newArrival/:id" element={<NewArrivalProduct />} />
        <Route path="/shop-cart" element={<ShoppingCart />} />

      </Routes>
    </Router>
  );
}

export default App;
