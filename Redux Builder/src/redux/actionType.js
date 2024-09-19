// ActionType
export const Add="Add"
export const Reduce="Reduce"
export const Switch_Theme="Switch_Theme"


// action Creater
export const handleAdd=(payload)=>({
       type:Add,
       payload,
})

export const handleReduce=(payload)=>({
    type:Reduce,
    payload,
})

export const handleTheme=(payload)=>({
    type:Switch_Theme,
    payload,
})

