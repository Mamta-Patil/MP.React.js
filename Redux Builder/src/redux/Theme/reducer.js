import { Switch_Theme } from "../actionType"

const initailstate={
    theme:"light",
}

export const reducer=(state=initailstate,action)=>{
    switch(action.type)
    {
        case Switch_Theme:
        return{...state,theme:action.payload}
        default:
            return state;
    }

}