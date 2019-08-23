import axios from 'axios';

const DELETE_TASK = 'DELETE_TASK';

export const deleteTask = (id) => {
    return dispatch => {
        return axios.delete(`http://localhost:8000/deleteTask/${id}`)
            .then(result => result.data)
                .then(id => dispatch({
                    type: DELETE_TASK,
                    payload: id
                }))
    }
}