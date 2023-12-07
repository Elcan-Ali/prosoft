import React from 'react'
import MainFirstSection from '../components/molecules/MainFirstSection'
import SectionProject from '../components/molecules/SectionProject'
import HomeLastSection from '../components/organisms/HomeLastSection'

function HomeContainer() {
    return (
        <>
            <MainFirstSection />
            <SectionProject />
            <HomeLastSection />
        </>
    )
}

export default HomeContainer