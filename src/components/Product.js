import React, { Component } from 'react'
import '../styles/Card.css'
import {connect} from 'react-redux'
import { CHANGE_NUMBER,RECIEVE_PRODUCT,CHECKOUT_PRICE} from '../actionTypes/ActionTypes';
import pepper from '../UiMaterial/pepper.png'


export class Product extends Component {

    render() {
        return (
            <div id="Card" >
                 <br/><br/>
                <div>
                    <h2>{this.props.title}</h2>
                </div>
                  <img src={pepper} alt="Logo" width='150' height='auto'/>
                <br/><br/>
                <div>
                    <p>{this.props.description}</p><p>Price:{this.props.price}€</p>
                </div>
                <button onClick={this.props.onCheckoutClick} value={this.props.title}>Add to cart</button>
                <br/><br/>
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
        dispatch({type: RECIEVE_PRODUCT, title: evt.target.value})
        dispatch({type: CHECKOUT_PRICE, price: evt.target.value});
      }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Product)
