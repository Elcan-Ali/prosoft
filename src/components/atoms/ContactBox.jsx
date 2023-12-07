import React from 'react'

function ContactBox({ img ,title,value}) {
    return (
        <div className='w-full md:w-[calc((100%-60px)/2)] pb-[30px] lg:w-[calc((100%-120px)/4)] text-center flex-col flex justify-center items-center'>
            <div className='bg-green w-[48px] h-[48px] flex-center rounded-full'>
                <img src={img} alt="img" />
            </div>
            <h3 className='text-[30px] font-bold'>{title}</h3>
            <p className='text-[20px] font-medium'>{value}</p>
        </div>
    )
}

export default ContactBox