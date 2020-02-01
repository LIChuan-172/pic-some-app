import React, { useState, useContext } from "react";
import { Context } from "../ContextPics";
import { PropTypes } from "prop-types";

function Image({ className, image }) {
  const { toggleFavorite, cartItems, addImage } = useContext(Context);
  
  const [hovered, setHovered] = useState(false);
  const isInCart = cartItems.some(item => item.id == image.id)

  const heartIcon = (hovered || image.isFavorite) && (
    <i
      onClick={() => toggleFavorite(image.id)}
      className={`ri-heart-${image.isFavorite ? "fill" : "line"} favorite`}
    ></i>
  );

  const cartIcon = (hovered || isInCart) && (
    <i
      className={`ri-${
        isInCart ? "shopping-cart-fill" : "add-circle-line"
      } cart`}
      onClick={() => isInCart || addImage(image)}
    ></i>
  );

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={image.url} className="image-grid" />
      {heartIcon}
      {cartIcon}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  image: PropTypes.shape({
    isFavorite: PropTypes.bool,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    url: PropTypes.string
  })
};

export default Image;
