import {createStore} from 'redux'
// import rootReducer from './rootReducer'
import { configureStore } from '@reduxjs/toolkit'
import reduxReducer from '../reduxSlice/reduxSlice'
// import { applyMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'


// const Store = createStore(reducer , applyMiddleware())


const Store = configureStore({
    reducer:{
        count:reduxReducer // alias from createSlice Reducer as name of the reducer
    },
    middleware:(getDefaultmiddleware) => getDefaultmiddleware().concat(logger) 
})

export default Store