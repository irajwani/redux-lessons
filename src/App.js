import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';

import {updateA, updateB} from './store/actions/actions.js'

//reducers are designed to execute synchronous code
//Thunk and Saga are different types of Middleware
//Middleware helps us integrate async actions

//In JS world, Thunk means that wrap a function designed to do something with another function which waits
//to exit that function until the code executes

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div>
          <span>A:</span> <span>{this.props.a}</span>
          <button onClick={()=>this.props.updateA(this.props.b)}>Update A</button>
        </div>

        <div>
          <span>B:</span> <span>{this.props.b}</span>
          <button onClick={() => this.props.updateB(this.props.a)}>Update B</button>
        </div>
      </div>
    );
  }
  
}

//these functions can be named whatever

//Whatever values in the global store are utilized by this component
const mapStoreToProps = (store) => {
  return {
    a: store.rA.a,
    b: store.rB.b
  }
}

//Whatever functions in the global list of actions are utilized by this component
const mapDispatchToProps = (dispatch) => {
  //over here, we attach the name of the function being called in this component with the action type
  return {
    updateA: (b) => dispatch(updateA(b)),  //second argument acts as payload
    updateB: (a) => dispatch(updateB(a))
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(App);
