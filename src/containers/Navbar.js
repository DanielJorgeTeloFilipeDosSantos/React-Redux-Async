import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../styles/Navbar.css'
import cart from '../UiMaterial/cart.svg'

export class Navbar extends Component {
    render() {
        return (
            <div id='navbar-container'>
                <div id='navbar-sub'>
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

export default connect(mapStateToProps)(Navbar)
