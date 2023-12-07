import React, { useEffect } from 'react'
import ContactContainer from '../containers/ContactContainer'
import { useDispatch } from 'react-redux'
import { setHamburgerMenu } from '../store/slices/layoutSlice'

function Contact() {
   
    const dispatch = useDispatch()
    useEffect(()=>{
        window.scrollTo(0,0),
        dispatch(setHamburgerMenu(false))
    },[])

    return (
        <ContactContainer />
    )
}

export default Contact