import React from "react";
import { PRODUCT_ADD } from "./constant";
import { PRODUCT_UPDATE } from "./constant";
import { PRODUCT_DELETE } from "./constant";
import { PRODUCT_ADD_SHOP } from "./constant";
import { ADD_TO_CART } from "./constant";
import { REMOVE_TO_CART } from "./constant";
import { EMPTY_CART } from "./constant";
import { ADD_TO_WISHLIST } from "./constant";
import { REMOVE_TO_WISHLIST } from "./constant";
import { EMPTY_WISHLIST } from "./constant";
import { WISHLIST_TO_CART } from "./constant";
import { CART_TO_WISHLIST } from "./constant";
import { INCREMENT } from "./constant";
import { DECREMENT } from "./constant";

const initialState = {
    numOfCake:12,
    numOfChoco:24,
    cart: [],
    wishlist: [],
   
}

const Reducer = (state = initialState , action) => {
    switch(action.type){
        case PRODUCT_ADD : return {
            ...state,
            numOfCake:state.numOfCake - 1
        }
        case PRODUCT_UPDATE : return {
            ...state,
            numOfChoco:state.numOfChoco - 1
        }
        case PRODUCT_DELETE : return {
            ...state,
            numOfChoco:state.numOfChoco - 1
        }
        case PRODUCT_ADD_SHOP : return {
            ...state,
            numOfChoco:state.numOfChoco + 1
        }
        case ADD_TO_CART : return {
            ...state,
            numOfChoco:state.numOfChoco - 1
        }
        case REMOVE_TO_CART: return {
            ...state,
            numOfChoco:state.numOfChoco - 1
        }
        case EMPTY_CART : return {
            ...state,
            cart: []
        }
        case ADD_TO_WISHLIST : return {
            ...state,
            numOfChoco:state.numOfChoco - 1
        }
        case REMOVE_TO_WISHLIST : return {
            ...state,
            numOfChoco:state.numOfChoco - 1
        }
        case EMPTY_WISHLIST : return {
            ...state,
            wishlist: []
        }
        case WISHLIST_TO_CART : return {
            ...state,
            numOfChoco:state.numOfChoco - 1
        }
        case CART_TO_WISHLIST : return {
            ...state,
            numOfChoco:state.numOfChoco - 1
        }
        case INCREMENT : return {
            ...state,
            numOfChoco:state.numOfChoco + 1
        }
        case DECREMENT : return {
            ...state,
            numOfCake: state.numOfCake > 0 ? state.numOfCake - 1 : 0
        }
        default:return state
    }
}

export default Reducer