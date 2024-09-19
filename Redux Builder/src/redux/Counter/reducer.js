import { Add, Reduce } from "../actionType"

const initialstate={
     value:10,
}


console.log(initialstate)

export const reducer=(state=initialstate,action)=>{

    switch (action.type)
    {
        case Add :
            return{...state,value:state.value + action.payload}
        case Reduce :
            return{...state,value:state.value - action.payload}
        default:
            return state   
    }

}