import React from 'react'
import ServiceCard from '../components/atoms/ServiceCard'
import { nanoid } from '@reduxjs/toolkit'
import TechnologyItem from '../components/atoms/TechnologyItem'
function ServiceContainer() {

    const techItems = [
        { id: 1, title:"Front-End", techs:['#Vue.js', '#Vuetify', '#Nuxt.js', '#TypeScript', '#Sass', '#Less', '#Styles', '#Webpack', '#Flutter']},
        { id: 2, title:"Back-End", techs:['#RESTful', 'API', '#Swagger', '#OpenAPI', '#PHP', '#Laravel', '#Symfony', '#1C-Bitrix']},
        { id: 3, title:"Platforma və İnteqrasiya", techs:['#Docker', '#GitLab', '#CI/CD', '#Memcached', '#Redis', '#PostgreSQL', '#MySQL', '#Nginx', '#Apache', '#Keycloak#', '#Bitrix24']},
    ]

    return (
        <section className='bg-[#000] mt-[40px]  md:mt-[70px] rounded-t-[40px] md:rounded-t-[70px]'>

            <div className='bg-[#fff] pt-[60px] pb-[60px] md:pb-[100px]  rounded-[40px] md:rounded-[70px]'>
                <h4 className='justify-center  mb-[20px] flex gap-[10px] text-[#00000080]'><p>Əsas səhifə</p>  —  <p>Xidmətlərimiz</p></h4>
                <h2 className='text-center font-bold xl:text-[48px] lg:text-[38px]  text-[28px]'>
                    Xidmətlərimiz
                </h2>
                <h4 className='text-center text-[16px] lg:text-[20px] font-medium'>
                    <p>Çox sayda inteqrasiya, rol və proses olan mürəkkəb layihələrdə ixtisaslaşmışıq.</p>
                    <p>Buna görə mikro xidmət həllərini, yüklənmiş sistemləri və omnichannel platformalarını</p>
                    <p>inkişaf etdirmək üçün seçilirik.</p>
                </h4>
                <div className='flex container pt-[60px] flex-wrap gap-[20px]'>
                    {Array.from({ length: 6 }).map(item => <ServiceCard key={nanoid()} />)}
                </div>
                <div className='container pt-[70px] font-semibold md:pt-[100px] text-center'>
                    <h3 className='text-[28px] md:text-[36px]'>
                        İstifadə olunan alət və texnologiyalar
                    </h3>
                    <hr className='border-0 mb-[40px] mt-[10px] h-[11px] mx-auto bg-green w-[70%] md:w-[20%]' />
                    <div className='text-left gap-[26px] flex flex-col items-center'>
                        {techItems.map(item => <TechnologyItem key={nanoid()} {...item} />)}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ServiceContainer