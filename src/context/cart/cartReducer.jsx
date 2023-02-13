import {
  Add,
  Checkout,
  Clear,
  Decrease,
  Increase,
  Remove
} from './cartTypes';

// Save the cartItems to local storage
const Storage = (cartItems) => {
  localStorage.setItem(
    "cartItems",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

// Export function to calculate the total price of the cart and the total quantity of the cart
export const sumItems = (cartItems) => {
  Storage(cartItems);
  let itemCount = cartItems.reduce(
    (total, products) => total + products.quantity, 0);

  let total = cartItems
    .reduce((total, products) => total + products.price * products.quantity, 0)
    .toFixed(2);

  return { itemCount, total };
};

// The reducer is listening for an action, which is the type that we defined in the CartTypes.js file
const CartReducer = (state, action) => {
  // The switch statement is checking the type of action that is being passed in
  switch (action.type) {
    case Add:
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    // If the action type is Remove, we want to remove the item from the cartItems array
    case Remove:
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter((item) => item.id !== action.payload.id)
        ),
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.payload.id),
        ],
      };

    // If the action type is Increase, we want to increase the quantity of the particular item in the cartItems array
    case Increase:
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity++;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    // If the action type is Decrease, we want to decrease the quantity of the particular item in the cartItems array
    case Decrease:
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity--;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    // If the action type is Checkout, we want to clear the cartItems array and set the checkout to true
    case Checkout:
      return {
        cartItems: [],
        checkout: true,
        ...sumItems([]),
      };

    //If the action type is Clear, we want to clear the cartItems array
    case Clear:
      return {
        cartItems: [],
        ...sumItems([]),
      };

    //Return the state if the action type is not found
    default:
      return state;
  }
};

export default CartReducer;