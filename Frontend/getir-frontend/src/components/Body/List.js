import React, { Component } from 'react'
import {connect} from 'react-redux';
import { deleteTask } from '../../actions/deleteTaskAction';
import { taskList } from '../../actions/getTaskAction';
import { updateTask } from '../../actions/updateTaskAction';

class List extends Component {

    state = {
        allTasks:[]
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.allTasks !== this.state.allTasks) {
          this.props.taskList();
        }
      }

      deleteTask = (id) =>{
        this.props.deleteTask(id);
      }

      updateTask = (id) => {
          this.props.updateTask(id,!this.props.completeStatus);
          this.setState({
            allTasks:this.props.taskList()
          })
      }


    render() {
        const { tasks } = this.props;
        console.log(tasks);
        return (
            <div>
            <div className="row" >
              {
                tasks.map(item =>
                  <div className="col-md-4" >
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title"> {item.title}  {item.completeStatus===true?<span class="fa fa-check" aria-hidden="true"></span>:<span class="fa fa-close" aria-hidden="true"></span> }</h5>
                        <p className="card-text"> <b>   {item.description}  </b> </p>
                        <div>
    
                          <button type="button" className="btn btn-danger mr-1" onClick={this.deleteTask.bind(this, item._id)}> <span  class="fa fa-trash" aria-hidden="true"></span> </button>
    
                          <button type="button" className={"btn btn-warning"} onClick={this.updateTask.bind(this, item._id)} >  <span  class={item.completeStatus===true?"fa fa-close":"fa fa-check"} aria-hidden="true"></span>  </button>
    
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      completeStatus: state.UpdateReducer.completeStatus
    }
}

const mapDispatchToProps = {
    taskList,
    deleteTask,
    updateTask

}

export default connect(mapStateToProps,mapDispatchToProps)(List);
