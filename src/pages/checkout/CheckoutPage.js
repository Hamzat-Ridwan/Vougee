import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import StripeButton from '../../components/stripe-button/StripeButton'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors'
import './checkout.styles.scss'

const CheckoutPage = ({cartItems, total}) => {
  return (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block' style={{width: '26%'}}>
                <span>Description</span>
            </div>
            <div className='header-block' style={{width: '23%'}}>
                <span>Quantity</span>
            </div>
            <div className='header-block' style={{width: '20%'}}>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span></span>
            </div>
        </div>
        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id}  cartItem={cartItem} />
        ))}
        <div className='total' style={{fontSize: '20px'}} >TOTAL: ${total}</div>
        <div className='test-details'>
            Please use the following test card details for payments. Do not use a real credit card !
             <br/> <br/>
            4242 4242 4242 4242   -   Exp: 12/34   -   CVV: 123 
        </div>
        <StripeButton price={total} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)