import React from 'react'
import Logo from "../../../public/img/white-logo.svg"
import { Link } from 'react-router-dom'
import facebook from "../../../public/img/fb.svg"
import instagram from "../../../public/img/instagram.svg"
import linkedin from "../../../public/img/linkedin.svg"

function Footer() {
    return (
        <footer className='bg-[#000] text-[#fff]'>
            <nav className='flex flex-wrap items-start container py-[70px] gap-[30px] lg:gap-[15px] xl:gap-[30px]'>
                <div className=' w-full md:w-[calc((100%-60px)/3)] lg:w-[calc((100%-60px)/4)] xl:w-[calc((100%-90px)/4)] flex flex-col items-start gap-[6px] '>
                    <div className='mb-[30px]'>
                        <img src={Logo} alt="logo" />
                    </div>
                    <Link className='inline-block' to={"tel:+994503119865"}>+994 (50) 311-98-65</Link>
                    <Link className='inline-block' to={"mailto:office@prosofly.com"}>office@prosofly.com</Link>
                    <Link className='inline-block' target='_blank' to={"https://www.google.com/maps/place/Vurgun+Residence/@40.3842828,49.8359237,17z/data=!3m1!4b1!4m6!3m5!1s0x40307d9f915bf741:0x7e38e72dd9a2ba4c!8m2!3d40.3842828!4d49.838504!16s%2Fg%2F11f3_gwjbs?entry=ttu"}>Səməd Vurğun küçəsi 110 Baku, Azerbaijan</Link>

                    <ul className='flex items-center mt-[16px] gap-[8px]'>
                        <Link to="/"><img src={facebook} alt="facebook" /></Link>
                        <Link to="/"><img src={instagram} alt="instagram" /></Link>
                        <Link to="/"><img src={linkedin} alt="linkedin" /></Link>
                    </ul>
                </div>
                <div className='w-[calc((100%-30px)/2)] md:w-[calc((100%-60px)/3)] lg:w-[calc((100%-60px)/4)] xl:w-[calc((100%-90px)/4)] '>
                    <h3 className='text-[20px] font-semibold mb-[20px]'>Əsas</h3>
                    <ul>
                        <li><Link className='text-[14px] inline-block py-[8px]'>Haqqımızda</Link></li>
                        <li><Link className='text-[14px] inline-block py-[8px]'>Xidmətlər</Link></li>
                        <li><Link className='text-[14px] inline-block py-[8px]'>Layihələr</Link></li>
                        <li><Link className='text-[14px] inline-block py-[8px]'>Rəylər</Link></li>
                    </ul>
                </div>
                <div className=' w-[calc((100%-30px)/2)] md:w-[calc((100%-60px)/3)] lg:w-[calc((100%-60px)/4)] xl:w-[calc((100%-90px)/4)] '>
                    <h3 className='text-[20px] font-semibold mb-[20px]'>İnformasiya</h3>
                    <ul>
                        <li><Link className='text-[14px] inline-block py-[8px]'>Bloq</Link></li>
                        <li><Link className='text-[14px] inline-block py-[8px]'>Əlaqə</Link></li>
                        <li><Link className='text-[14px] inline-block py-[8px]'>Karyera</Link></li>
                        <li><Link className='text-[14px] inline-block py-[8px]'>Yeniliklər</Link></li>
                    </ul>
                </div>
                <div className=' w-[calc((100%-30px)/2)] md:w-[calc((100%-60px)/3)] lg:w-[calc((100%-60px)/4)] xl:w-[calc((100%-90px)/4)] '>
                    <h3 className='text-[20px] font-semibold mb-[20px]'>Dil seçimi</h3>
                    <ul>
                        <li><Link className='inline-block py-[8px] footer-lang text-[14px] active'>Azərbaycanca</Link></li>
                        <li><Link className='inline-block py-[8px] footer-lang text-[14px]'>English</Link></li>
                        <li><Link className='inline-block py-[8px] footer-lang text-[14px]'>Русский</Link></li>
                    </ul>
                </div>
            </nav>
            <div></div>
        </footer>
    )
}

export default Footer