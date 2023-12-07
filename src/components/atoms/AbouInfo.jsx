import React from 'react'
import Check from "../../../public/img/about-check-icon.svg"

function AboutInfo() {
    return (
        <div className='flex flex-wrap items-start gap-[50px] w-full 2xl:w-[calc((100%-100px)/2-100px)]'>
            <div data-aos="fade-right" className='w-full md:w-[calc((100%-50px)/2)]'>
                <div className='flex items-center gap-[10px] pb-[16px]'>
                    <img src={Check} className='w-[30px] h-[30px]' alt="check" />
                    <h4 className='text-[18px]'>Texniki dəstək</h4>
                </div>
                <p className=''>Layihələri təhvil verdikdən sonra uzunmüddətli əsasla texniki xidmət göstəririk</p>
            </div>
            <div data-aos="fade-right" className='w-full md:w-[calc((100%-50px)/2)]'>
                <div className='flex items-center gap-[10px] pb-[16px]'>
                    <img src={Check} className='w-[30px] h-[30px]' alt="check" />
                    <h4 className='text-[18px]'>Etibarlı iş</h4>
                </div>
                <p className=''>Müştərilimizə göstərdiyimiz yüksək xidmət keyfiyyətli işimizə zəmanətdir</p>
            </div>
        </div>
    )
}

export default AboutInfo