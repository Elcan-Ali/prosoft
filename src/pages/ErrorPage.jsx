import React, { useEffect } from 'react'
import ErrorPageContainer from '../containers/ErrorPageContainer'
import { useDispatch } from 'react-redux'
import { setHamburgerMenu } from '../store/slices/layoutSlice'
function ErrorPage() {
    const dispatch = useDispatch()
    useEffect(()=>{
        window.scrollTo(0,0),
        dispatch(setHamburgerMenu(false))
    },[])

    return (
        <>
            <ErrorPageContainer />
        </>
    )
}

export default ErrorPage