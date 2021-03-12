import React, { useState } from 'react'
import Link from './Link'

const Header = ({ gitPath }) => {
    const [activePath, setActive] = useState(window.location.pathname)
    
    return (
            <div style={{borderRadius: '0'}} className="ui inverted pointing top segment menu">
                <div className="ui container">
                    <a className="header item" href={gitPath === '/WidgetApp/' ? gitPath : '/'}>
                      <img style={{paddingRight: '10px'}} src="logo192.png" alt="React Header"/> 
                      Widget Project Example
                      
                    </a>
                    <Link href={gitPath === '/WidgetApp/' ? gitPath : '/'} setActive={setActive} activePath={activePath} className="item">Accordion</Link>
                    <Link href={gitPath === '/WidgetApp/list' ? gitPath : '/list'} setActive={setActive} activePath={activePath} className="item">Wikipedia Search</Link>
                    <Link href={gitPath === '/WidgetApp/dropdown' ? gitPath : '/dropdown'} setActive={setActive} activePath={activePath} className="item">Dynamic Dropdown</Link>
                    <Link href={gitPath === '/WidgetApp/translate' ? gitPath : '/translate'} setActive={setActive} activePath={activePath} className="item">Google Translate</Link>
                </div>
            </div>
    )
}

export default Header