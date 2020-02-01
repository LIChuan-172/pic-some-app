import React, { useContext, useState } from "react";

import { Context } from "../ContextPics";
import PropTypes from 'prop-types'

function CartItem({ item }) {
  const { removeFromCart } = useContext(Context);
  const [hovered, setHovered] = useState(false);

  return (
    <div className="cart-item">
      <i
        className={`ri-delete-bin-${hovered ? "fill":"line"}`}
        onClick={() => removeFromCart(item.id)}
        onMouseMove={()=> {setHovered(true)}}
        onMouseLeave={()=> {setHovered(false)}}
      ></i>
      <img src={item.url} width="130.px" />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    url: PropTypes.string
  })
}

export default CartItem;
