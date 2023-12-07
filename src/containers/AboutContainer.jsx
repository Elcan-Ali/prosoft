import React from 'react'

import AboutBanner from '../components/atoms/AboutBanner'
import AboutInfo from '../components/atoms/AbouInfo'
import AboutOurTeams from '../components/molecules/AboutOurTeams'
import AboutVacancies from '../components/molecules/AboutVacancies'



function AboutContainer() {


    return (
        <div className='mt-[40px] md:mt-[70px]'>
            <div className='bg-[#fff] rounded-t-[40px] md:rounded-t-[70px]'>
                <AboutBanner />
                <div className='pt-[70px] sm:pt-[150px] lg:pt-[90px] xl:pt-[100px] pb-[80px]  container'>
                    <AboutInfo />
                    <AboutOurTeams />
                </div>
            </div>
            <div className='about-banner  '>
                <div className='container overflow-hidden flex justify-between md:items-center  flex-col items-start  md:flex-row  py-[100px]'>
                    <h3 data-aos="fade-right" className='text-[28px] mb-[30px] md:text-[35px] lg:text-[45px] text-[#fff] leading-[1.3] font-semibold'>
                        Komandamızın bir <br />
                        parçasına çevril
                    </h3>
                    <button data-aos="fade-left" className='rounded-[25px] text-[#000] bg-green px-[35px] py-[16px] inline-flex items-center font-medium'>See Open Position</button>
                </div>
            </div>
            <AboutVacancies />
        </div>
    )
}

export default AboutContainer