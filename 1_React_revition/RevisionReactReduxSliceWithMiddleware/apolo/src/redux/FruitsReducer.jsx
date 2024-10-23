import React from 'react'
import { BUY_FRUITS } from './Constant'

const initialFruitsState = {
    NumOfFruits:10
}

const FruitsReducer = (state = initialFruitsState , action) => {
    switch(action.type){
        case BUY_FRUITS:return{
            ...state,
            NumOfFruits:state.NumOfFruits - 1
        }
        default: return state
    }
}

export default FruitsReducer
