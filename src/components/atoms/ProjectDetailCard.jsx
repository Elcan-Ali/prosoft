import React from 'react'
import CardImg from "../../../public/img/project-item1.png"
import sabis from "../../../public/img/sabis.png"

function ProjectDetailCard({ payload }) {
    return (
        <div className='project-detail-card bg-[#fff]  rounded-[70px]'>
            <div className='card-top rounded-[70px] overflow-hidden '>
                <img className='min-h-[300px] max-h-[500px] w-full object-cover' src={CardImg} alt="card-img" />
            </div>
            <div className='flex items-center gap-y-[40px] gap-x-[100px] flex-wrap p-[50px]'>
                <div className='w-full lg:w-[calc((100%-100px)/12*9)]'>
                    <h3 className='text-[28px] font-medium mb-[16px]'>Müştəri haqqında</h3>
                    <p>{payload?.customer_info.az}</p>
                </div>
                <div className='w-full lg:w-[calc((100%-100px)/12*3)]'>
                    <img src={sabis} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ProjectDetailCard