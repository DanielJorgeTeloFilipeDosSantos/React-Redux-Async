import React, { Component } from 'react'
import '../styles/cardCheckout.css'
import {connect} from 'react-redux'
import { CHANGE_NUMBER,RECIEVE_PRODUCT} from '../actionTypes/ActionTypes';


export class ProductCheckout extends Component {

    render() {
        return (
            <div id="Card2">
              <div>
                <div className='float-right2'>
                    {this.props.title}
                </div>
                <div className='float-left2'>
                  <p>€12</p>
                </div>
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