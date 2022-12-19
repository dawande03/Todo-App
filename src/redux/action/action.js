export const Add = (items)=>{
    return{
        type:"ADD_DATA",
        payload:items
    }
}
// delete
export const Remove = (id)=>{
    return{
        type:"RMV_DATA",
        payload:id
    }
}

//update

export const Update_data = (items,id)=>{
    return{
        type:"UPDATE_DATA",
        payload:items,
        d:id
    }
}