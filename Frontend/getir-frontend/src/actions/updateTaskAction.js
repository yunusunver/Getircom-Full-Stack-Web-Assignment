import axios from 'axios';

const UPDATE_TASK = 'UPDATE_TASK';

export const updateTask = (id,completeStatus) => {
    return dispatch => {
        return axios.put(`http://localhost:8000/modifiedTask/${id}`,{completeStatus})
            .then(result=>result.data)
                .then(data=>dispatch({
                    type:UPDATE_TASK,
                    payload:{
                        completeStatus:data.completeStatus
                    }
                }))
    }
}