import React from 'react'
import AccardionItem from '../atoms/AccardionItem'
import { nanoid } from '@reduxjs/toolkit'

function Accardion() {
    return (
        <div className='accardion '>
            {Array.from({length:3}).map((item,index)=> <AccardionItem key={nanoid()} index={index} />)}
        </div>
    )
}

export default Accardion