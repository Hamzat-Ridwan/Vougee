import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './collections-overview.styles.scss'
import PreviewComponent from '../preview/PreviewComponent'
import { selectCollections } from '../../redux/shop/shop-selector'


const CollectionsOverview = ({collections}) => {
  const dispatch = useDispatch()
  // const collections2 = dispatch({
  //   type, 
  //   payload
  // })
  return (
    <div className='collections-overview'>
      {
            collections.map(({id, ...otherProps})=>(
                <PreviewComponent key={id} {...otherProps}/>
            ))
        }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview) 