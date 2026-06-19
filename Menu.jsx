import { useState } from "react";

const Menu = () => {

  const menuItems = [
    { id: 1, name: "Chips", price: 20 },
    { id: 2, name: "Chocolates", price: 20 },
    { id: 3, name: "Water Bottle", price: 20 },
    { id: 4, name: "Cold Drink", price: 20 }
  ];

  return (
    <div className="features">
      {menuItems.map((item) => (
        <div className="card" key={item.id}>
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;