import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./AboutUs";
import Contact from "./ContactUs";
import Login from "./Login";
import Menu from "./Menu";
import Order from "./Order";
import Payment from "./Payment";

function App() {
  return (
    <BrowserRouter>

      <nav className="navbar">
                <img src="logo1.png" style={{ width: "350px", height: "252x" }}></img>

        <div className="navlinks">
          <Link to="/">Home</Link>
          <br/>
          <Link to="/about">About Us</Link>
          <br/>
          <Link to="/contact">Contact Us</Link>
          <br/>
          <Link to="/login">Login</Link>
        </div>

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
