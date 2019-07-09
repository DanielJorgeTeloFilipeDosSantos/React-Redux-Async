import React from 'react';
import '../styles/App.css';
import {connect} from 'react-redux'
import {CHANGE_NAME, CHANGE_NUMBER, TOGGLE_CHECKOUT} from '../actionTypes/ActionTypes';
import Navbar from './Navbar'
import Checkout from '../containers/Checkout'
import ProductList from './ProductList';




function App(props) {
  return (
    <div className="App">
          <Navbar/>
        <br/><br/>
          <ProductList/>
          <Checkout/> 
    </div>
  );
}

function mapStateToProps(state) {
  return{
    name: state.changeNumberName.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    onChangeNameClick: () => {
      dispatch({type: CHANGE_NAME});
      dispatch({type: CHANGE_NUMBER});

    },
    onToggleCheckoutClick: () =>{
      dispatch({type: TOGGLE_CHECKOUT});
    }
  }
}




export default connect(mapStateToProps,mapDispatchToProps)(App);
