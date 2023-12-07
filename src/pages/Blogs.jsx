import React, { useEffect } from 'react'
import BlogsContainer from '../containers/BlogsContainer'
import { setHamburgerMenu } from '../store/slices/layoutSlice'
import { useDispatch } from 'react-redux'

function Blogs() {
   
    const dispatch = useDispatch()
    useEffect(()=>{
        window.scrollTo(0,0),
        dispatch(setHamburgerMenu(false))
    },[])
    return (
        <BlogsContainer />
    )
}

export default Blogs