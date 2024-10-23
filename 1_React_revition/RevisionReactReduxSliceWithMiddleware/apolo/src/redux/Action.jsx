import { BUY_FRUITS , BUY_VEGGIES } from "./Constant";


export const buy_fruits =  (data) => {
    console.log('buy_fruits Action Called');
    return{
        type:BUY_FRUITS,
        data:'fruits'
    }
}

export const buy_veggies = () =>{
    console.log('buy_veggies Action Called!!');
    return{
        type:BUY_VEGGIES
    }
}