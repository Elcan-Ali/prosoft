import React from 'react'
import ApplyModalForm from '../atoms/ApplyModalForm'
import { useDispatch } from 'react-redux'
import { setModal } from '../../store/slices/layoutSlice'
import { TfiClose  } from "react-icons/tfi";



function ApplyModalWrapper() {




    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(setModal(false))
    }

    return (
        <div onClick={handleClose} className='overlay overflow-y-auto fixed inset-0 py-[70px]'>
            <div className='flex flex-col text-center items-center container pb-[60px]'>
                <h3 className='text-[28px]  lg:text-[38px] xl:text-[48px] font-medium text-[#fff] '>IT ilə bağlı həll yolu axtarırsınız?
                </h3>
                <p className='text-[28px] lg:text-[38px] xl:text-[48px] font-medium text-green'>Yazın, təklif verək.</p>
            </div>
            <button onClick={handleClose} className='absolute top-[40px] right-[40px]'>
                <TfiClose  size={26} fill='#fff' />
            </button>

            <div onClick={(e) => e.stopPropagation()} className='max-w-[994px] mx-auto apply-modal-form  overflow-hidden bg-[#f7f8f9]  rounded-[50px] ' >
                <ApplyModalForm />
            </div>
        </div>
    )
}

export default ApplyModalWrapper