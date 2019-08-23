import React, { Component } from 'react';
import {connect} from 'react-redux';
import {taskAdd} from '../../actions/addTaskAction';

class New extends Component {

    state = {
        title:'',
        description: ''
    };

    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    handleSubmit = () => {
        this.props.taskAdd(this.state.title,this.state.description);
    }

    render() {
        return (
        <div className={"card"}>
        <div className={"card-body"}>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label for="exampleInputEmail1">Başlık</label>
              <input
                name="title"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={this.handleChange}
                placeholder="Başlık Girin"
                value={this.state.title} />
            </div>

            <div className="form-group">
              <label for="exampleInputPassword1">Açıklama</label>
              <input
                placeholder="Açıklama Girin"
                name="description"
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                onChange={this.handleChange}
                value={this.state.description} />
            </div>
            <button type="submit" className="btn btn-success btn-block">Ekle</button>
          </form>
        </div>
      </div>
        )
    }
}

const mapStateToProps = () => {
    return {
        
    }
}

const mapDispatchToProps = {
    taskAdd
}


export default connect(mapStateToProps,mapDispatchToProps)(New);