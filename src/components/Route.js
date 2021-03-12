import { useEffect, useState } from 'react'

const Route = ({ path, children, onSetPath }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname)
            onSetPath(window.location.pathname)
        }

        window.addEventListener('popstate', onLocationChange)

        return () => {
            window.removeEventListener('popstate', onLocationChange)
        }

    }, [])

    return currentPath === path ? children : null
}


export default Route