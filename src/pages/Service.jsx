import React, { useEffect } from 'react'
import ServiceContainer from '../containers/ServiceContainer'
import { useDispatch } from 'react-redux'
import { setHamburgerMenu } from '../store/slices/layoutSlice'

function Service() {
    
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0),
            dispatch(setHamburgerMenu(false))
    }, [])

    return (
        <ServiceContainer />
    )
}

export default Service