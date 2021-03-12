import React, { useState } from 'react'
import Link from './Link'

const Header = () => {
    const [activePath, setActive] = useState(window.location.pathname)
    
    return (
            <div style={{borderRadius: '0'}} className="ui inverted pointing top segment menu">
                <div className="ui container">
                    <a class="header item" href="/">
                      <img style={{paddingRight: '10px'}} src="logo192.png" alt="React Header Image"/> 
                      Widget Project Example
                      
                    </a>
                    <Link href="/" setActive={setActive} activePath={activePath} className="item">Accordion</Link>
                    <Link href="/list" setActive={setActive} activePath={activePath} className="item">Wikipedia Search</Link>
                    <Link href="/dropdown" setActive={setActive} activePath={activePath} className="item">Dynamic Dropdown</Link>
                    <Link href="/translate" setActive={setActive} activePath={activePath} className="item">Google Translate</Link>
                </div>
            </div>
    )
}

export default Header