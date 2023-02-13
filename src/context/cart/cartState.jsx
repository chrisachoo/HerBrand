import { useReducer } from 'react';
import CartContext from './cartContext';
import cartReducer from './cartReducer';
import { sumItems } from './cartReducer';

//Local Storage
const storage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

export const CartState = ({ children }) => {
  // Initial state from local storage
  const initialState = {
    cartItems: storage,
    ...sumItems(storage),
    checkout: false,
  };


  // Set the reducer
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (payload) => { dispatch({ type: 'Add', payload }); };
  const removeFromCart = (payload) => { dispatch({ type: 'Remove', payload }); };
  const increaseCart = (payload) => { dispatch({ type: 'Increase', payload }); };
  const decreaseCart = (payload) => { dispatch({ type: 'Decrease', payload }); };
  const clearCart = () => { dispatch({ type: 'Clear' }); };
  const handleCheckout = () => { dispatch({ type: 'Checkout' }); };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        removeFromCart,
        increaseCart,
        decreaseCart,
        handleCheckout,
        clearCart,
        ...state,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}