import CartReducer from "./ReduxCart/CartReducer";
// import ProductReducer from "./ReduxProduct/ProductReducer";
import WishlistReducer from "../redux/ReduxWhishList/WishlistReducer"; // Ensure correct import path

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cart: CartReducer,
  wishlist: WishlistReducer // Changed 'whishlist' to 'wishlist'
  // product: ProductReducer
});

export default rootReducer;
