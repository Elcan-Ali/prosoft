import React from 'react'
import { Link } from 'react-router-dom'
import NoteBlack from "../../../public/img/note-black.png"
import NoteWhite from "../../../public/img/note-white.png"
import { useDispatch } from 'react-redux'
import { setModal } from '../../store/slices/layoutSlice'

function ServiceCard() {

    const dispatch = useDispatch()
    
    const handleApply =()=>{
        dispatch(setModal(true))
    }

    return (
        <div className='service-card group cursor-pointer p-[50px]  rounded-[5px] w-full md:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)]'>
            <div className='pb-[25px]'>
                <img className='hidden group-hover:block' src={NoteWhite} alt="note" />
                <img className='group-hover:hidden' src={NoteBlack} alt="note" />
            </div>
            <h3 className='text-[25px] pb-[14px] font-semibold'>Biznes analitika</h3>
            <p className='pb-[25px]'>Prosesləri öyrənərək qeyd aparır, tələbləri formalaşdırır və effektivlik ölçüləri tətbiq edirik.
            </p>
            <button onClick={handleApply} className='bg-green font-medium rounded-[25px] px-[30px] py-[10px] inline-block' >Müraciət et</button>
        </div>
    )
}

export default ServiceCard