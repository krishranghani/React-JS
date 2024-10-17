const redux =  require ('redux')

const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'
const BUY_COCO = 'BUY_COCO'

function buy_cake(){
    return{
        type:BUY_CAKE
    }
}

function buy_coco (){
    return {
        type:BUY_COCO
    }
}

const initialState = {
    numOfCake:10,
    numOfCoco:20
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,   // Spread operator to carry forward the other state properties
                numOfCake: state.numOfCake - 1
            }

        case BUY_COCO:
            return {
                ...state,   // Spread operator to carry forward the other state properties
                numOfCoco: state.numOfCoco - 1
            }

        default:
            return state  
    }
}

const store = createStore(reducer)

console.log('InitialState' , store.getState())

const unsubscribe = store.subscribe(() => console.log("This Is A Update State", store.getState()))

store.dispatch(buy_cake())
store.dispatch(buy_coco())

unsubscribe();
