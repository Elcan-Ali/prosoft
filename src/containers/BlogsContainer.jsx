import React, { useState } from 'react'
import BlogsSearch from '../components/atoms/BlogsSearch'

import BlogCardsSection from '../components/molecules/BlogCardsSection'

function BlogsContainer() {

    const [activeCat, setActiveCat] = useState("All")
    const [search, setSearch] = useState("")


    return (
        <section className='bg-[#000] mt-[40px]  md:mt-[70px] rounded-t-[40px] md:rounded-t-[70px]'>
            <div className='bg-[#fff] pt-[60px] pb-[60px] md:pb-[100px]  rounded-[40px] md:rounded-[70px]'>
                <h4 className='justify-center  mb-[20px] flex gap-[10px] text-[#00000080]'><p>Əsas səhifə</p>  —  <p>Bloq</p></h4>
                <h2 className='text-center font-bold xl:text-[48px] lg:text-[38px] text-[28px]'>
                    <p>Məqsədimiz biliyi hər kəs üçün</p>
                    <p>əlçatan etməkdir</p>
                </h2>
                <BlogsSearch
                    setSearch={setSearch}
                    search={search} />
                <BlogCardsSection
                    activeCat={activeCat}
                    search={search}
                    setActiveCat={setActiveCat}
                />
            </div>
        </section>
    )
}

export default BlogsContainer