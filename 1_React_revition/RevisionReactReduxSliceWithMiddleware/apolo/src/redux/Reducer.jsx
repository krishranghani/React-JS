import { BUY_FRUITS , BUY_VEGGIES } from "./Constant";

const initialState = {
    NumOfFruits:20,
    NumOfVeggies:30
} 

const Reducer = (state = initialState , action) => {
    console.log('FruitsReducer Called!!');
    switch(action.type){
        case BUY_FRUITS:return{
            ...state,
            NumOfFruits:state.NumOfFruits - 1
        }
        case BUY_VEGGIES:return{
            ...state,
            NumOfVeggies:state.NumOfVeggies - 1
        }
        default: return state
    }
}

export default Reducer