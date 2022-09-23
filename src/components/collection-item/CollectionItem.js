import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart-actions'
import CustomButton from '../custom-button/CustomButton'
import './collection-item.styles.scss'

const CollectionItem = ({item, addItem}) => {
  const {name, price, imageUrl, image}  = item
  return (
    <div className='collection-item'>
        <div className='image'
            style={{
                // backgroundImage: `url(${imageUrl})`
                background: '#f7f7ff'
            }}
        >
          <img src={image} alt={name} />
        </div>
        <div className='collection-footer'>
            <div className='center'>
              <div className='name'>{name}</div>
              <div className='price'>${price}</div>
            </div>
        </div>
        <CustomButton onClick={()=> addItem(item)} inverted>Add to cart</CustomButton>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)