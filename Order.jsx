import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Order = () => {

  const navigate = useNavigate();

  const menuItems = [
    { id: 1, name: "Chips", price: 20 },
    { id: 2, name: "Chocolates", price: 20 },
    { id: 3, name: "Water Bottle", price: 20 },
    { id: 4, name: "Cold Drink", price: 20 }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    const token = Math.floor(100 + Math.random() * 90);

    navigate("/payment", {
      state: { total, token }
    });
  };

  return (
    <div style={{ padding: "30px" }}>
      
      <h2>Order Food</h2>

      <div className="features">
        {menuItems.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add</button>
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: "20px" }}>
        Cart Items: {cart.length}
      </h3>

      <h3>Total Amount: ₹{total}</h3>

      <button onClick={placeOrder} style={{ marginTop: "10px" }}>
        Place Order
      </button>

    </div>
  );
};

export default Order;