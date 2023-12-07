import React, { useEffect, useState } from 'react'
import { projectItems } from '../../const/projectItems'
import ProjectItem from '../atoms/ProjectItem'
import { Link } from 'react-router-dom'
import Arrow from "../../../public/img/long-arrow.svg"

import { getData } from '../../service/getData'
import { useTranslation } from 'react-i18next'

function SectionProject() {

    const {t}= useTranslation()
    const [projectsCategories, setProjectsCategories] = useState([])
    const commonData = projectsCategories?.flatMap(item => item.projects)

    useEffect(() => {
        (async () => {
            const data = await getData("/projects")
            setProjectsCategories(data)
        })()
    }, [])



    return (
        <div className='container py-[100px]'>
            {commonData.map(item => <ProjectItem key={item.id} {...item} />)}
            <Link to='/projects' className="flex-center gap-[26px] text-[24px]"> {t('all-projects')} <img src={Arrow} alt='arrow' /></Link>
        </div>
    )
}

export default SectionProject