import React, { useEffect } from 'react'

import HomeContainer from '../containers/HomeContainer'
import { useDispatch } from 'react-redux'
import { setHamburgerMenu } from '../store/slices/layoutSlice'
function Home() {
    const dispatch = useDispatch()
    useEffect(()=>{
        window.scrollTo(0,0),
        dispatch(setHamburgerMenu(false))
    },[])

    return (
        <>
            <HomeContainer />
        </>
    )
}

export default Home