import React from 'react'
const ContentItem = ({itemInfo}) => {
    return (
        <div className='content-item'>
            <p className='content-item-title'>Lorem ipsum dolor sit amet</p>
            <img className='content-item-img' src={itemInfo.url} alt={itemInfo.alt} />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis.
                Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue.
                Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id.
                Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
            </p>
        </div>
    )
}

export default ContentItem