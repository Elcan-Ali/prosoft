import React from 'react'
import contactBoxImg1 from "../../public/img/contact-email.svg"
import contactBoxImg2 from "../../public/img/contact-phone.svg"
import contactBoxImg3 from "../../public/img/contact-location.svg"
import contactBoxImg4 from "../../public/img/contact-social.svg"
import ContactBox from '../components/atoms/ContactBox'
import { nanoid } from '@reduxjs/toolkit'
function ContactContainer() {

    const contactItems = [
        { id: 1, img: contactBoxImg1, title: "Email", link: "mailto:contact@prosofly", value: "contact@prosofly" },
        { id: 1, img: contactBoxImg2, title: "Telefon", link: "tel:+994122345678", value: "+994 12 234 56 78" },
        { id: 1, img: contactBoxImg3, title: "Ünvan", link: "https://www.google.com/maps/place/Vurgun+Residence/@40.3842828,49.8359237,17z/data=!3m1!4b1!4m6!3m5!1s0x40307d9f915bf741:0x7e38e72dd9a2ba4c!8m2!3d40.3842828!4d49.838504!16s%2Fg%2F11f3_gwjbs?entry=ttu", value: "Bakı, şəh. Səməd Vurğun küç. 10, AZ 1000" },
        { id: 1, img: contactBoxImg4, title: "Sosial", link: "social", value: "social" },
    ]

    return (
        <section className='bg-[#000] mt-[40px]  md:mt-[70px] rounded-t-[40px] md:rounded-t-[70px]'>

            <div className='bg-[#fff] pt-[60px] pb-[60px] md:pb-[100px]  rounded-[40px] md:rounded-[70px]'>
                <h4 className='justify-center  mb-[20px] flex gap-[10px] text-[#00000080]'><p>Əsas səhifə</p>  —  <p>Bizimlə Əlaqə</p></h4>
                <h2 className='text-center font-bold xl:text-[48px] lg:text-[38px] text-[28px]'>
                    Bizimlə əlaqə
                </h2>
                <h4 className='text-center text-[16px] md:text-[20px] font-medium'>
                    <p>Peşəkarlardan ibarət komanda biznes məqsədlərinizə çatmaqda</p>
                    <p>Sizə kömək etməyə hazırdır.</p>
                </h4>
                <div className='container'>
                    <div className='flex pt-[60px] pb-[40px] flex-wrap items-start gap-[30px]'>
                        {contactItems.map(item => <ContactBox key={nanoid()} {...item} />)}
                    </div>
                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.296585347811!2d49.83817618964113!3d40.38441151040233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d9f915bf741%3A0x7e38e72dd9a2ba4c!2sVurgun%20Residence!5e0!3m2!1str!2saz!4v1701265919005!5m2!1str!2saz" width="100%" height="500" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    )
}

export default ContactContainer