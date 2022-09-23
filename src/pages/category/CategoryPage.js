import React from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom"
import { selectCollection } from '../../redux/shop/shop-selector'
import './collection.styles.scss'
import CollectionItem from '../../components/collection-item/CollectionItem'
import { getOneCollection } from '../../redux/collections/collection-actions'
import SHOP_DATA from '../../redux/shop/ShopData'
import shopReducer from '../../redux/shop/shop.reducer'

const CategoryPage = () => {
  const dispatch = useDispatch()
  let { collectionTitle } = useParams()
  // console.log(collectionTitle)
  // dispatch(getOneCollection(collectionTitle))
  // const collection = useSelector((state) => state.collection);
  // dispatch(shopReducer(collectionTitle))
  // const collections = useSelector((state) => state.collections);
  // const collection = selectCollection(collectionId)
  const collection = SHOP_DATA.find(coll => coll.routeName === collectionTitle)
  console.log(collection)
  const {title, items } = collection
  return (
    <div className='collection-page'>
      <h2 className='title'>{title.toUpperCase()}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  )
}

// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.collectionId)(state)
// })

// export default connect(mapStateToProps)(CategoryPage)
export default CategoryPage