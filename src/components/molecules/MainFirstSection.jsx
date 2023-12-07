import React from 'react'
import FirstSectionBanner from '../atoms/FirstSectionBanner'
import FirstSectionBottom from '../atoms/FirstSectionBottom'
function MainFirstSection() {



  return (
    <section className='pt-[40px]  md:pt-[60px]'>
      <FirstSectionBanner />
      <FirstSectionBottom/>
    </section>
  )
}

export default MainFirstSection