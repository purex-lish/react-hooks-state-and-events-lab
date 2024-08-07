
import React, { useState } from "react";


function Item({ name, category }) {
  // State variable to track if the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Function to handle button click and toggle cart status
  const toggleCartStatus = () => {
    setInCart(prevStatus => !prevStatus);
  };

  return (
    <li className={inCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={toggleCartStatus} className="add">
        {inCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
