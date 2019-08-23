const initialState = {
    completeStatus:false
}

const UpdateReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'UPDATE_TASK':
            return state={
                completeStatus:action.payload.completeStatus
            }
            default:break;
    }
    return state;
}

export default UpdateReducer;