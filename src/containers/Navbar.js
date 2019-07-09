import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../styles/Navbar.css'
import cart from '../UiMaterial/cart.svg'
import {TOGGLE_CHECKOUT} from '../actionTypes/ActionTypes'

export class Navbar extends Component {
    render() {
        return (
            <div id='navbar-container'>
                <div id='navbar-sub' onClick={this.props.onToggleCheckoutClick}>
                    <div id='navbar-sub-1'>
                        <div id="navbar-sub-1-1">
                            <img id='navbar-img' src={cart} alt='cart'/>
                        </div>
                    </div>
                    <div id='navbar-sub-2'>
                        <div id="navbar-sub-1-2">
                            {this.props.number}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
      number: state.changeNumberName.number
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      onToggleCheckoutClick: () =>{
        console.log('checkout clicked')
        dispatch({type: TOGGLE_CHECKOUT});
      }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)
