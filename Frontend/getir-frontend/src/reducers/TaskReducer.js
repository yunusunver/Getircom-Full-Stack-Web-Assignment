const initialState = {
    allTasks:[]
}

const TaskReducer = (state=initialState,action) => {
    switch(action.type){
        case 'ADD_TASK':
            return [
                ...state,
                action.payload
            ]
        case 'DELETE_TASK':
            return {...state};
        case 'GET_TASKS':
            state = {
                allTasks: action.payload.allTasks
            }
            break;
        default:
            break;
    }
    return state;
}

export default TaskReducer;