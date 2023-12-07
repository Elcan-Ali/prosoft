import React from 'react'
import VacancyInfo from '../components/atoms/VacancyInfo'

function VacancyDetailContainer() {
  return (
    <section className='bg-[#000] mt-[40px]  md:mt-[70px] rounded-t-[40px] md:rounded-t-[70px]'>

      <div className='bg-[#fff] pt-[60px] pb-[60px] md:pb-[100px]  rounded-[40px] md:rounded-[70px]'>
        <h4 className='justify-center  mb-[10px] flex gap-[10px] text-[#00000080]'><p>Əsas səhifə</p>  —  <p>Haqqımızda</p>-  <p>Karyera</p></h4>
        <h2 className='text-center font-bold xl:text-[48px] lg:text-[38px]  text-[28px]'>
          Tech Lead PHP Developer
        </h2>
        <hr className='w-[20%] border-0 bg-[#afff2c] h-[11px] mx-auto' />
        <div className='container'>
          <VacancyInfo />
        </div >
      </div>
    </section>
  )
}

export default VacancyDetailContainer