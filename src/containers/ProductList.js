import React, { Component } from 'react'
import Product from '../components/Product'
import '../styles/App.css'

export class ProductList extends Component {
    
    render() {
        return (
            <div>
                <div className='gridContainer'>
                    <div className='gridProduct1'>
                    <Product  title='Vegeterian Pizza' description='Mediterranean-style,
                 this vegetarian pizza recipes prove fresh produce taste even better by the slice.'
                 price={12}/>
                    </div>
                    <div className='gridProduct2'>
                    <Product title='Cheese Pizza' description='Pizza cheese has several varieties of cheeses and
                 manufactured for use specifically on pizza.' style={{float:'right'}}
                 price={11}/>
                    </div>
                </div>

                <div className='gridContainer'>
                    <div className='gridProduct1'>
                    <Product title='Pepper Pizza' description='We know pizza like the back of our hand and it shows in the quality 
                of our food. This is the Pepper pizza.' 
                price={15}/>
                    </div>
                    <div className='gridProduct2'>
                    <Product title='Lasagna' description='This classic lasagna is made with an easy meat sauce as the base.
                 Layer the sauce with noodles and cheese,'
                 price={12}/>
                    </div>
                </div>

                <div className='gridContainer'>
                    <div className='gridProduct1'>
                    <Product title='Carbonara' description='This cheesy pasta dish is an Italian favourite and with the right technique,
                    it can became very tasty.' 
                    price={13}/>
                    </div>
                    <div className='gridProduct2'>
                    <Product title='Risotto' description='Risotto is an Italian dish consisting of rice cooked with ingredients
                     such as tomatoes.'
                     price={14}/>
                    </div>
                </div>

            </div>
        )
    }
}

export default ProductList
