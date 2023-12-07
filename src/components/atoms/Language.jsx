import React, { useState } from 'react'
import Angle from "../../../public/img/lang-angle.svg"
import { useTranslation } from 'react-i18next'

function Language() {

  const { t, i18n } = useTranslation()
  const handleLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }


  return (
    <div className='relative group'>
      <div className="current-language  flex items-center gap-[8px]">
        <span className='uppercase'>{i18n.language}</span>
        <img className='group-hover:rotate-180 transition' src={Angle} alt="angle" /></div>
      <div className=' z-99 absolute'>
        <ul className="language-dropdown  uppercase group-hover:h-[90px] h-[0px] transition-all overflow-hidden box-shadow  group-hover:border w-[60px]  bg-[#fff] -translate-x-[25%]  rounded-[10px]">
          <li onClick={() => handleLanguage("en")} className='px-[14px] hover:bg-[#f7f8f9] py-[3px] border-b'>EN</li>
          <li onClick={() => handleLanguage("ru")} className='px-[14px] hover:bg-[#f7f8f9] py-[3px] border-b'>RU</li>
          <li onClick={() => handleLanguage("az")} className='px-[14px] hover:bg-[#f7f8f9] pb-[3px] '>AZ</li>
        </ul>
      </div>
    </div>
  )
}

export default Language