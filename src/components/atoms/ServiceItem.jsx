import React from 'react'
import { useTranslation } from 'react-i18next'

function ServiceItem({id, title,text}) {
    const {t}= useTranslation()

    return (
        <div className='flex cursor-pointer items-start gap-[12px] w-full md:w-[calc((100%-73px)/2)]'>
            <div className='service-item-list-type border-l-[5px] shrink-0 rounded-ee-[10px] text-center bg-[#000] w-[46px] border-[#AFFF2C]'>{id}</div>
            <div>
                <h3 className='text-[20px] md:text-[24px] font-semibold leading-[1] mb-[16px]'>{t(title)}</h3>
                <p>{t(text)}</p>
            </div>
        </div>
    )
}

export default ServiceItem