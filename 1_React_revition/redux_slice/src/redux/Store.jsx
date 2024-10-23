// import {createStore} from 'redux'
// import rootReducer from './rootReducer'
import { configureStore } from '@reduxjs/toolkit'
import reduxReducer from '../reduxSlice/reduxSlice'


const Store = configureStore({
    reducer:{
        count:reduxReducer // alias from createSlice Reducer as name of the reducer
    }
})

export default Store