import React from 'react'
import MenuItem from './MenuItem'

const Sidebar = ({menuItem, activeItem, setActiveItem}) => {
  return (
    <div className='sidebar-container'>
        {menuItem.map((item)=>{
            return <MenuItem key={item.name} name={item.name} activeItem={activeItem} setActiveItem={setActiveItem}/>
        })}
    </div>
  )
}

export default Sidebar