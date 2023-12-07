import React, { useEffect } from 'react'
import Header from '../components/molecules/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/molecules/Footer'
import ApplyModalWrapper from '../components/organisms/ApplyModalWrapper'
import { useSelector } from 'react-redux'
import { layoutSlice } from '../store/slices/layoutSlice'
import HamburgerMenu from '../components/molecules/HamburgerMenu'
import Aos from 'aos'
import "aos/dist/aos.css";

function MainLayout() {
    const { applyModal, hamburgerMenu } = useSelector(store => store[layoutSlice.name])


    useEffect(() => {
        Aos.init();
    }, []);

    useEffect(() => {
        document.body.style.overflowY = (applyModal || hamburgerMenu) ? "hidden" : "auto"
    }, [applyModal, hamburgerMenu])

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            {applyModal && <ApplyModalWrapper />}
            {hamburgerMenu && <HamburgerMenu />}

        </>
    )
}

export default MainLayout