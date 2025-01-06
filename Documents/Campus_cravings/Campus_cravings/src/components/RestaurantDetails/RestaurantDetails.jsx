import React from "react";
import "./RestaurantDetails.css";

const RestaurantDetails = () => {
  const menu = [
    { name: "Masala Maggi", price: "₹50" },
    { name: "Cheese Sandwich", price: "₹60" },
    { name: "Cold Coffee", price: "₹40" },
  ];

  return (
    <div className="restaurant-details">
      <h1>H Block Canteen</h1>
      <h2>Menu</h2>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantDetails;
