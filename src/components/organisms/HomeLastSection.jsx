import React from 'react'
import OurCustomerSlider from '../molecules/OurCustomer'
import Accardion from '../molecules/Accardion'
import { useTranslation } from 'react-i18next'

function HomeLastSection() {
  const {t} = useTranslation()

  return (
    <section className='bg-[#000]  rounded-t-[70px]'>
      <div className='bg-[#fff] rounded-[70px]'>
        <div className='our-custom-slider-wrapper bg-[#fff] rounded-[70px]'>
          <div className='container pt-[40px]'>
            <h3 className='text-center font-semibold text-[28px] md:text-[36px]'>{t("our-customers")}</h3>
            <OurCustomerSlider />
          </div>
        </div>
        <div className='pb-[70px] container pt-[50px]'>
          <h3 className='text-center font-semibold pb-[50px] border-b text-[28px] md:text-[36px]'>Sizi maraqlandıra biləcək suallar</h3>
          <Accardion />
        </div>
      </div>
    </section>
  )
}

export default HomeLastSection