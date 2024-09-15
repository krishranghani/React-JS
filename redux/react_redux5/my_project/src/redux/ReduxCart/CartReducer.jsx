import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART, CART_TO_WISHLIST, INCREMENT, DECREMENT } from "../Constant";

const initialState = {
  cartItems: []
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log('CartData', action);
      return {
        ...state,
        cartItems: [action.data, ...state.cartItems]
      };

    case REMOVE_TO_CART:
      console.log('removeToCartData', action);
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.data.id)
      };

    case EMPTY_CART:
      console.log('emptyCart', action);
      return {
        ...state,
        cartItems: []
      };

    case CART_TO_WISHLIST:
    case INCREMENT:
    case DECREMENT:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default CartReducer;
