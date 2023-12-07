import React from 'react'
import VacancyCard from '../atoms/VacancyCard'
import { nanoid } from '@reduxjs/toolkit'

function AboutVacancies() {
    return (
        <section className='bg-[#fff] py-[80px]'>
            <div className='flex container lg:px-[90px] flex-wrap gap-[30px]'>
                {Array.from({ length: 4 }).map(_=> <VacancyCard key={nanoid()} />)}
            </div>
        </section>
    )
}
export default AboutVacancies