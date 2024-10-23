import React from 'react'
import FruitsReducer from './FruitsReducer'
import VeggiesReducer from './VeggiesReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    Fruits:FruitsReducer,
    Veggies:VeggiesReducer
})


export default rootReducer
