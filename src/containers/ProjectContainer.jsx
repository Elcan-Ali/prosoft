import React, { useEffect, useState } from 'react'
import ProjectItem from '../components/atoms/ProjectItem'
import ArrowDown from "../../public/img/arrow-down.svg"
import ProjectsCategoryBtns from '../components/atoms/ProjectsCategoryBtns'
import { getData } from '../service/getData'
import ProjectItemSkeleton from '../components/skeleton/ProjectItemSkeleton'
import { nanoid } from '@reduxjs/toolkit'
import { Skeleton } from '@mui/material'


function ProjectContainer() {

    const [projectsCategories, setProjectsCategories] = useState([])
    const [loading, setLoading] = useState(true)
    const [activeCat, setActiveCat] = useState("All")


    const handleProjects = () => {
        const commonData = projectsCategories?.flatMap(item => item.projects)
        const filteredData = projectsCategories?.find(item => item?.name?.az === activeCat)?.projects
        return activeCat === "All" ? commonData : filteredData
    }

    const renderUI = () => {
        return (handleProjects().length === 0)
            ? <h1 className='text-center py-[100px] w-full text-[20px] font-semibold'>Bu kateqoriyaya uyğun lahiyə hal hazırda mövcud deyil ...</h1>
            : handleProjects()
                .slice(0, 4)
                .map(item => <ProjectItem key={item.id} {...item} />)
    }

    useEffect(() => {
        (async () => {
            const data = await getData("/projects")
            setProjectsCategories(data)
            setLoading(false)
            console.log(data);
        })()
    }, [])

    return (
        <>
            <div className='container pt-[40px] md:pt-[70px]'>
                <h4 className='flex gap-[10px] text-[#00000080]'><p>Əsas səhifə</p>  —  <p>Layihələrimiz</p></h4>
                <div className='flex-between flex-wrap '>
                    <h2 className='text-[28px] md:text-[38px] lg:text-[48px] font-bold'>Layihələrimiz</h2>
                    {loading ?
                        <div className='gap-[15px] pt-[20px] flex flex-wrap'>
                            {Array.from({ length: 4 }).map(_ => <Skeleton key={nanoid()} variant='rounded' height={"40px"} width={"100px"} />)}
                        </div>
                        : <ProjectsCategoryBtns
                            loading={loading}
                            setLoading={setLoading}
                            activeCat={activeCat}
                            setActiveCat={setActiveCat}
                            projectsCategories={projectsCategories} />}
                </div>
            </div>
            <section id='projects'>
                <div className='container pb-[100px] pt-[10px]'>
                    {
                        loading
                            ? Array.from({ length: 3 }).map(_ => <ProjectItemSkeleton key={nanoid()} />)
                            : renderUI()
                    }
                    {
                        handleProjects().length > 4 && (
                            <div className='flex justify-center pt-[50px] '>
                                <button className='flex items-center gap-[6px] bg-[#000] text-green px-[16px] py-[8px] rounded-[6px]'>Daha çox layihə <img src={ArrowDown} alt='arrow down' /></button>
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default ProjectContainer