import React, { useEffect } from 'react'
import AboutContainer from '../containers/AboutContainer'
import { useDispatch } from 'react-redux'
import { setHamburgerMenu } from '../store/slices/layoutSlice'


function About() {

    const dispatch = useDispatch()
    useEffect(()=>{
        window.scrollTo(0,0),
        dispatch(setHamburgerMenu(false))
    },[])

    return (
        <>
            <AboutContainer />
        </>
    )
}

export default About