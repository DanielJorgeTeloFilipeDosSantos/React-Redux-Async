import React from 'react';
import '../styles/App.css';
import {connect} from 'react-redux'
import { CHANGE_NAME, CHANGE_NUMBER } from '../actionTypes/ActionTypes';
import Navbar from './Navbar'




function App(props) {
  return (
    <div className="App">
        <br/><br/><br/>
        {props.name}
        <br/><br/>
        <button onClick={props.onChangeNameClick}>CHANGE_NAME</button>
        <br/><br/>

        <br/><br/><br/>
        {props.name}
        <br/><br/>
        <button onClick={props.onChangeNameClick}>CHANGE_NAME2</button>
        <br/><br/>

        <Navbar/>
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state.name)

  return{
    name: state.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    onChangeNameClick: () => {
      dispatch({type: CHANGE_NAME});
      dispatch({type: CHANGE_NUMBER});
    }
  }
}




export default connect(mapStateToProps,mapDispatchToProps)(App);
