import React from 'react'
import fb from '../../../public/img/teammate-icon-fb.svg'
import linkedin from '../../../public/img/teammate-icon-linkedin.svg'
import tweet from '../../../public/img/teammate-icon-twitter.svg'
import { Link } from 'react-router-dom'

function TeamMateCard({ worker_name, worket_position, worker_img, sosial_facebook,
    sosial_linkedin,
    sosial_twitter }) {
    return (
        <div data-aos="fade-up" className='flex rounded-[20px] overflow-hidden  w-full lg:w-[calc((100%-20px)/2)]'>
            <div className='w-5/12'>
                <img className='h-[300px] w-full object-cover shrink-0' src={`${import.meta.env.VITE_API_BASE_URL+"storage/" + worker_img}`} alt="teammate" />
            </div>
            <div className='w-7/12 flex flex-col justify-between teammate-info text-green p-[35px]'>
                <div>
                    <h3 className='text-[25px] font-semibold'>{worker_name.az}</h3>
                    <p className='text-[13px] font-medium tracking-[4px]'>{worket_position.az}</p>
                </div>
                <div className='flex items-center gap-[15px]'>
                    <Link target='_blank' to={sosial_facebook} className="w-[34px] h-[34px] flex-center rounded bg-[#fff]">
                        <img className='w-[16px]' src={fb} alt="social" />
                    </Link>
                    <Link target='_blank' to={sosial_linkedin} className="w-[34px] h-[34px] flex-center rounded bg-[#fff]">
                        <img className='w-[16px]' src={tweet} alt="social" />
                    </Link>
                    <Link target='_blank' to={sosial_twitter} className="w-[34px] h-[34px] flex-center rounded bg-[#fff]">
                        <img className='w-[16px]' src={linkedin} alt="social" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TeamMateCard