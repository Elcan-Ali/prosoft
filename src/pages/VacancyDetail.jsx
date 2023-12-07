import React, { useEffect } from 'react'
import VacancyDetailContainer from '../containers/VacancyDetailContainer'
import { useDispatch } from 'react-redux'
import { setHamburgerMenu } from '../store/slices/layoutSlice'


function VacancyDeatil() {
    const dispatch = useDispatch()
    useEffect(()=>{
        window.scrollTo(0,0),
        dispatch(setHamburgerMenu(false))
    },[])

    return (
        <VacancyDetailContainer />
    )
}

export default VacancyDeatil