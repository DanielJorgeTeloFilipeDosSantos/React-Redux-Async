import React, { Component } from 'react'
import '../styles/cardCheckout.css'
import {connect} from 'react-redux'
import { CHANGE_NUMBER,RECIEVE_PRODUCT} from '../actionTypes/ActionTypes';


export class ProductCheckout extends Component {

    render() {
        return (
            <div id="Card2">
                <div>
                    {this.props.title}
                </div>
                <div>
                </div>
            </div>
        )
    }
}

function mapStateToProps() {  
    return{
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      onCheckoutClick: (evt) => {
        dispatch({type: CHANGE_NUMBER});
        dispatch({type: RECIEVE_PRODUCT, title: evt.target.value});
      }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(ProductCheckout)