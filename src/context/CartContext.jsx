import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  totalQuantity: 0,
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const calculateTotal = () => {
      const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setTotal(newTotal);
    };

    calculateTotal();
  }, [cart]);

  const [total, setTotal] = useState(0);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error('El producto ya fue agregado');
    }
  };

  const removeItem = (itemId) => {
    const cartUpdate = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdate);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalQuantity: cart.reduce((acc, item) => acc + item.quantity, 0),
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
