import React, { Component } from 'react'
import {connect} from 'react-redux'
import ProductCheckout from '../components/ProductCheckout'
import '../styles/checkout.css'


export class Checkout extends Component {
    render() {
        return (
            <div className='checkout-container'>
                <div className='top-button'>
                    Click to Checkout
                </div>
                <div>
                {this.props.clickedTitle.map(product =>
                    <ProductCheckout
                    key={product.id}
                    title={product}
                    product={product}/>
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
