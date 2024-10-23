import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const reduxSlice = createSlice(   
    {
        name:'counter',
        initialState:{
            NumOfCake:20,
            NumOfFruits:30
        },
        reducers:{
            increment:(state) => {
                state.NumOfCake += 1 // state.NumOfCake = state.NumOfCake + 1
                state.NumOfFruits += 1
            },
            decrement:(state) => {
                state.NumOfCake -= 1 // state.NumOfCake = state.NumOfCake - 1
                state.NumOfFruits -= 1
            }
        }
    }
)

export const {increment , decrement} = reduxSlice.actions

export default reduxSlice.reducer
