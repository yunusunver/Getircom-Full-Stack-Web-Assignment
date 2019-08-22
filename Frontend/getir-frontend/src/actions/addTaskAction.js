import axios from 'axios';

const ADD_TASK='ADD_TASK';

export const taskAdd = (title,description) => {
    return dispatch => {
        return axios.post('http://localhost:8000/addTask',{title,description})
            .then(result => result.data)
                .then(data => dispatch({
                    type:ADD_TASK,
                    payload:{
                        title: data.title,
                        description: data.description
                    }
                }))
    }
}