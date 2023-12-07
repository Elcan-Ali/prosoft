import React, { useEffect } from 'react'
import ProjectDetailContainer from '../containers/ProjectDetailContainer'
import { useDispatch } from 'react-redux'
import { setHamburgerMenu } from '../store/slices/layoutSlice'


function ProjectDetail() {
    const dispatch = useDispatch()
    useEffect(()=>{
        window.scrollTo(0,0),
        dispatch(setHamburgerMenu(false))
    },[])
    return (
        <ProjectDetailContainer />
    )
}

export default ProjectDetail