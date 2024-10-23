import React from 'react'
import { BUY_VEGGIES } from './Constant'

const initialVeggiesState = {
    NumOfVeggies:10
}

const VeggiesReducer = (state = initialVeggiesState , action) => {
    switch(action.type){
        case BUY_VEGGIES:return{
            ...state,
            NumOfVeggies:state.NumOfVeggies - 1
        }
        default: return state
    }
}

export default VeggiesReducer

