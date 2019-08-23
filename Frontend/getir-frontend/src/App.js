import React,{Component} from 'react';
import Header from './components/Header/Header';
import {Route, Switch} from 'react-router-dom';
import List from './components/Body/List';
import CompletedTasks from './components/Body/CompletedTasks';
import IncompletedTasks from './components/Body/IncompletedTasks';
import AllTasks from './components/Body/AllTasks';
import New from './components/Body/New';


class  App extends Component {
  render(){
    return (
      <div>
        <div className=''>
        <Header/>
        </div>
        <div>
          {/* <Switch>
            <Route exact path="/" component={List}/>
            <Route exact path="/complete" component={CompletedTasks}/>
            <Route exact path="/incomplete" component={IncompletedTasks}/>
          </Switch> */}
          <New/>
          <AllTasks/>
        </div>
      </div>
    );
  }
}

export default App;
