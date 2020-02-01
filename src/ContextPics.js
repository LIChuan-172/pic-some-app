import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const Context = createContext();
const JSONUrl =
  "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(JSONUrl)
      .then(res => res.json())
      .then(data => setAllPhotos(data));
  }, []);

  function toggleFavorite(id) {
    setAllPhotos(prevPhotos =>
      prevPhotos.map(photo => {
        if (photo.id == id) {
          return {
            ...photo,
            isFavorite: !photo.isFavorite
          };
        }
        return photo;
      })
    );
  }

  function addToCart(image) {
    setCartItems(prevItems => [...prevItems, image]);
  }

  function removeFromCart(id) {
    setCartItems(prevItems => prevItems.filter(item => item.id != id));
  }

  function cleanCart(){
    setCartItems([])
  }

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        cartItems,
        addToCart,
        removeFromCart,
        cleanCart
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node
};

export { ContextProvider, Context };
