import axios from 'axios';

const GET_TASKS = 'GET_TASKS';

export const taskList = () => {
    return dispatch => {
        axios.get('http://localhost:8000/getAll')
            .then(result=>result.data)
                .then(result=>dispatch({
                    type: GET_TASKS,
                    payload:{
                        allTasks: result
                    }
                }))
    }
}