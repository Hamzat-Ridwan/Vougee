import React from 'react'
import './directory.scss'
import {sections} from './directory.data'
import MenuItem from '../menu-item/MenuItem'

const Directory = () => {
  return (
    <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps})=>(
            <MenuItem key={id} {...otherSectionProps}/>
        ))}
    </div>
  )
}

export default Directory