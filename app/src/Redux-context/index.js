import { createStore } from "redux";

const gobalSateEmployee = (state = {idArray :[]},action) =>{
    if (action.type === 'DELETE') {
        return({
            idArray:action.payload
        })
    }
    if(action.type === "ADD"){
        return({
            idArray:action.payload
        })
    } 
    if(action.type === 'EDIT'){
        return({
            idArray:action.payload
        })
    }
    return state
}


const store = createStore(gobalSateEmployee)

export default store