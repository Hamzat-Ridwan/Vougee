import React from 'react'
import { Route, Routes, Outlet } from 'react-router-dom'
import CollectionsOverview from '../../components/collections-overview/collections-overview'
import PreviewComponent from '../../components/preview/PreviewComponent'
import SHOP_DATA from '../../redux/shop/ShopData'
import CategoryPage from '../category/CategoryPage'


const ShopComponent = () => {
    const collections = SHOP_DATA
    
  return (
    
    <div className='shop-page'>
      <Routes>
      <Route path='/' element={<CollectionsOverview/>}/>
      {/* <Route path={`shop/:collectionId`} element={<CategoryPage/>}/> */}
      {/* <CollectionsOverview/> */}
      </Routes>
      <Outlet/>
    </div>
    
  )
}

export default ShopComponent