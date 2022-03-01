import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./components/pages/home/Home";
import User from "./components/pages/user/User";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import NewUser from "./components/pages/newUser/NewUser";
import ProductList from "./components/pages/productList/ProductList";
import Product from "./components/pages/product/Product";
import NewProduct from "./components/pages/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/users" element={<UserList />} />
        </Routes>
        <Routes>
          <Route path="/user/:userId" element={<User />} />
        </Routes>
        <Routes>
          <Route path="/newUser" element={<NewUser />} />
        </Routes>
        <Routes>
          <Route path="/products" element={<ProductList />} />
        </Routes>
        <Routes>
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
        <Routes>
          <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
