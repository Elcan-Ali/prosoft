import React, { useEffect } from 'react'
import ProjectContainer from '../containers/ProjectContainer'
import { useDispatch } from 'react-redux'
import { setHamburgerMenu } from '../store/slices/layoutSlice'

function Project() {
    const dispatch = useDispatch()
    useEffect(()=>{
        window.scrollTo(0,0),
        dispatch(setHamburgerMenu(false))
    },[])

    return (
        <ProjectContainer />
    )
}

export default Project