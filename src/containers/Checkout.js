import React, { Component } from 'react'
import {connect} from 'react-redux'
import ProductCheckout from '../components/ProductCheckout'
import '../styles/checkout.css'


export class Checkout extends Component {
    render() {
        return (
            <div id='checkout-container'>
                <div className='top-button'>
                    Your Products to Checkout
                </div>
                <div>
                    <p className='float-right'>What you are eating</p> <p className='float-left'>Price</p>
                </div>
                <div className="checkout-card-container">
                {this.props.clickedTitle.map(product =>
                    <ProductCheckout
                    key={product.id}
                    title={product}/>
                    )}

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return{
        clickedTitle: state.Product.clickedTitle
    }
  }



export default connect(mapStateToProps)(Checkout)
