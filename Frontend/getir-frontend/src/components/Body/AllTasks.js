import React, { Component } from 'react'
import {connect} from 'react-redux';
import { taskList } from '../../actions/getTaskAction';
import List from './List';


class AllTasks extends Component {

    componentDidMount(){
        this.props.taskList();
    }

    render() {

        const {tasks} =this.props;

        return (
            <div>
                <List tasks={this.props.tasks.allTasks} />
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        tasks: state.TaskReducer
    }
}

const mapDispatchToProps = {
    taskList
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTasks);