import React from 'react'

const MenuItem = ({ name, activeItem, setActiveItem }) => {

    return (
        <div onClick={()=>setActiveItem(name)} className={`item-container ${activeItem === name ? "active-item": ""}`}><p>{name}</p></div>
    )
}

export default MenuItem