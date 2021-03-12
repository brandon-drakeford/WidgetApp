import React from 'react'

const Link = ({ activePath, setActive, className, href, children }) => {

    const onClick = (event) => {

        if (event.metaKey || event.ctrlKey) {
            return
        }

        event.preventDefault()
        window.history.pushState({}, '', href)

        setActive(href)

        const navEvent = new PopStateEvent('popstate')
        window.dispatchEvent(navEvent)
    }

    return <a onClick={onClick} className={activePath === href ? className + ' active' : className} href={href}>{children}</a>
}

export default Link