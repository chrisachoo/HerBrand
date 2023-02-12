import { useReducer } from 'react';
import cartContext from './cartContext';
import cartrReducer from './cartrReducer';

const CartState = ({ children }) => {
  // Initial state of the cart
  const initialState = {
    cartItems: [],
    checkout: false,
  };

  // Set the reducer
  const [state, dispatch] = useReducer(cartrReducer, initialState);

  const addToCart = (payload) => { dispatch({ type: 'add', payload }); };
  const deleteFromCart = (payload) => { dispatch({ type: 'remove', payload }); };
  const increaseCart = (payload) => { dispatch({ type: 'increase', payload }); };
  const decreaseCart = (payload) => { dispatch({ type: 'decrease', payload }); };
  const clearCart = (payload) => { dispatch({ type: 'clear', payload }); };
  const checkoutCart = (payload) => { dispatch({ type: 'checkout', payload }); };
}