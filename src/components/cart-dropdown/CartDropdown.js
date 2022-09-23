import React from 'react'
import {useNavigate} from 'react-router-dom'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart-selectors'
import { toggleCartHidden } from '../../redux/cart/cart-actions'
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'

const CartDropdown = ({cartItems, dispatch}) => {
  const navigate = useNavigate()
  return (
    <div className='cart-dropdown'>
        <div className='cart-items' >
          {
            cartItems.length?
            cartItems.map(cartItem =>(
              <CartItem key={cartItem.id} item={cartItem} />
            ))
            : <span className='empty-message'>Your cart is empty</span>
          }
        </div>
        <CustomButton onClick={()=> {navigate('/checkout'); dispatch(toggleCartHidden()) }} >GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = (state) =>({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown)