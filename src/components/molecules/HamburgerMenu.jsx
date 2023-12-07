import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../../../public/img/white-logo.svg"
import close from "../../../public/img/hamburger-close.svg"
import phone from "../../../public/img/mobile-menu-phone.png"
import { useDispatch } from 'react-redux'
import { setHamburgerMenu } from '../../store/slices/layoutSlice'

function HamburgerMenu() {
    const dispatch = useDispatch()

    const closeMenu = () => {
        dispatch(setHamburgerMenu(false))
    }

    return (
        <div className='lg:hidden block overlay fixed inset-x-0 bottom-0 top-[0px]'>
            <div className='w-full md:w-[400px] py-[30px]  text-[#fff] overflow-y-auto h-full absolute right-0 bg-[#181819]'>
                <div className='flex-between  pb-[26px] px-[20px]' >
                    <Link><img src={logo} alt="logo" /></Link>
                    <img onClick={closeMenu} className='w-[16px] cursor-pointer' src={close} alt="close" />
                </div>
                <div>
                    <div className='flex pt-[10px] gap-[35px] items-center'>
                        <span className='w-[28px] h-[1px] bg-[#5B5B5B]'></span>
                        <h4 className='leading-[1] text-[#5B5B5B] text-[14px] uppercase font-medium tracking-[.4px]'>Menu</h4>
                    </div>
                    <ul className='px-[63px] pt-[20px] flex flex-col gap-[16px]'>
                        <li><NavLink to="/about" className="navlink-mobile text-[20px]">Haqqımızda</NavLink></li>
                        <li><NavLink to="/services" className="navlink-mobile text-[20px]">Xidmətlərimiz</NavLink></li>
                        <li><NavLink to="/projects" className="navlink-mobile text-[20px]">Layihələrimiz</NavLink></li>
                        <li><NavLink to="/blogs" className="navlink-mobile text-[20px]">Bloq</NavLink></li>
                        <li><NavLink to="/contact" className="navlink-mobile text-[20px]">Əlaqə</NavLink></li>
                    </ul>
                </div>
                <div className='pt-[30px]'>
                    <div className='flex pt-[10px] gap-[35px] items-center'>
                        <span className='w-[28px] h-[1px] bg-[#5B5B5B]'></span>
                        <h4 className='leading-[1] text-[#5B5B5B] text-[14px] uppercase font-medium tracking-[.4px]'>Bizimlə Əlaqə</h4>
                    </div>
                    <div className='px-[63px] flex  flex-col gap-[20px] pt-[24px] '>
                        <Link to={"tel:+994708314376"} className='flex items-center  gap-[14px]'><img src={phone} alt="phone" /> +994 (70) 831 43 76</Link>
                        <button className='w-[100%] h-[40px] bg-green rounded-[20px] text-[20px] text-[#181819] font-medium'>Müraciət et</button>
                    </div>
                </div>
                <div className='pt-[30px]'>
                    <div className='flex pt-[10px] gap-[35px] items-center'>
                        <span className='w-[28px] h-[1px] bg-[#5B5B5B]'></span>
                        <h4 className='leading-[1] text-[#5B5B5B] text-[14px] uppercase font-medium tracking-[.4px]'>Dil seçimi</h4>
                    </div>
                    <ul className='px-[63px] flex items-center text-[20px] gap-[26px] pb-[50px] pt-[24px] '>
                        <li className='border-b-[3px] border-[#Afff2c]'>Az</li>
                        <li>Eng</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HamburgerMenu