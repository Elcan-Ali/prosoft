import React, { useLayoutEffect, useState } from 'react'
import BlogsCategoryBtns from '../atoms/BlogsCategoryBtns'
import BlogCard from '../atoms/BlogCard'
import ArrowDown from "../../../public/img/arrow-down.svg"
import { getData } from '../../service/getData'
import { nanoid } from '@reduxjs/toolkit'
import BlogCardSkeleton from '../skeleton/BlogCardSkeleton'
import CategoryBtnsSkeleton from '../skeleton/categoryBtnsSkeleton'

function BlogCardsSection({ activeCat, setActiveCat, search }) {

    const [loading, setLoading] = useState(true)
    const [blogsCategories, setBlogsCategories] = useState([])
    const catNames = blogsCategories.map(item => ({ name: item.category_name, id: item.id }))



    const handleBlogs = () => {
        const commonData = blogsCategories?.flatMap(item => item.blog)
        const filteredData = blogsCategories?.find(item => item?.category_name?.az === activeCat)?.blog
        const data = activeCat === "All" ? commonData : filteredData
        return data.filter(item => item.blog_name.split(" ").some(word => word.toLowerCase().startsWith(search.toLowerCase())))

    }

    useLayoutEffect(() => {
        (async () => {
            const data = await getData("/blogs")
            setBlogsCategories(data.data)
            setLoading(false)
            console.log(data);
        })()
    }, [])


    const renderUI = () => {
        return (handleBlogs().length === 0 && search.trim() !== "") ?
            <h1 className='text-center py-[100px] w-full text-[20px] font-semibold'>Belə bir blog hal hazırda mövcud deyil ...</h1>
            : handleBlogs().length === 0 ?
                <h1 className='text-center py-[100px] w-full text-[20px] font-semibold'>Bu kateqoriyaya uyğun blog hal hazırda mövcud deyil ...</h1>
                : handleBlogs().slice(0, 4).map(item => <BlogCard key={nanoid()} item={item} catNames={catNames} {...item} />)
    }



    return (
        <section className='container'>
            <div className='mb-[30px]'>

                {loading ? <CategoryBtnsSkeleton /> : <BlogsCategoryBtns activeCat={activeCat} setActiveCat={setActiveCat} blogsCategories={blogsCategories} />}
            </div>
            <div className=' md:flex-row flex-col gap-y-[70px] md:gap-x-[50px] lg:gap-x-[122px] flex pb-[5w0px] items-start justify-center md:justify-normal flex-wrap'>
                {
                    loading ?
                        Array.from({ length: 4 }).map(_ => <BlogCardSkeleton key={nanoid()} />)
                        : renderUI()
                }
            </div>
            {handleBlogs().length > 4 && <div className='flex justify-center pt-[50px] md:pt-[100px] '>
                <button className='flex items-center gap-[6px] bg-[#000] text-green px-[16px] py-[8px] rounded-[6px]'>Daha çox məqalə <img src={ArrowDown} alt='arrow down' /></button>
            </div>}
        </section>
    )
}

export default BlogCardsSection