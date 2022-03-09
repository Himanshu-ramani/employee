import { createStore,combineReducers } from "redux";
const gobalSateEmployee = (state = [],action) =>{
    if (action.type === 'DELETE') {
        return(state = action.payload)
    }
    if(action.type === "ADD"){
        return(state = action.payload)
    } 
    if(action.type === 'EDIT'){
        return(state = action.payload)
    }
    if(action.type === 'CHECK'){
        return(state = action.payload)
    }
    if (action.type === 'SELECTALL') {
        return(state = action.payload)
    }
    return state
}

const selectToggle = (state = false,action) =>{
    if (action.type === 'SELECTTOGGLE') {
        return( state = action.payload)
    }
    return state
}
const store = createStore(combineReducers({gobalSateEmployee,selectToggle}))

export default store