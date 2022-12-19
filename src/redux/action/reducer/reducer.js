const initial_State = {
    User_data: []
}
export const todoreducer = (state = initial_State, action) => {
    switch (action.type) {
        case "ADD_DATA":
            return {
                ...state,
                User_data: [...state.User_data, action.payload]
            }
        case "RMV_DATA" :
            const dltdata = state.User_data.filter((item,index)=>index!==action.payload)
            return{
                ...state,
                User_data:dltdata
            }
        case "UPDATE_DATA":
            const updtdata = state.User_data.map((item,index)=>index == action.d ? action.payload:item)    
            return{
                ...state,
                User_data:updtdata
            }
        default:
            return state
    }
}