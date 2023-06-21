import React from 'react'
import logoNCC_1 from '../public/logoNCC_1.svg';
import ContentItem from './ContentItem';
import html_icon_1 from '../public/html_icon_1.svg'
import css_icon_1 from '../public/css_icon_1.svg'
import url_icon_1 from '../public/url_icon_1.svg'

const Content = () => {
    const contentItems = [
        { url: html_icon_1, alt: "html_icon_1" },
        { url: css_icon_1, alt: "css_icon_1" },
        { url: url_icon_1, alt: "url_icon_1" }
    ]
    return (
        <div className='content-container'>
            <img src={logoNCC_1} alt="Logo" />
            <div className='content-section'>
                <p className='content-title'>Lorem ipsum dolor sit asmet?</p>
                <div className='content-description'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
                </div>
            </div>
            <div className='content-item-block'>
                {contentItems.map(item => {
                    return <ContentItem key={item.alt} itemInfo={item} />
                })}
            </div>

        </div>
    )
}

export default Content