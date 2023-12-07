import React, { useState } from 'react'

function ProjectsCategoryBtns({ activeCat, setActiveCat, projectsCategories }) {

const handleClick =(arg)=>{
    window.scrollTo(0,150)
    setActiveCat(arg)
}

    return (
        <ul className='gap-[15px] pt-[20px] flex flex-wrap'>
            <li
                onClick={() => handleClick("All")}
                className={`
                    ${activeCat === "All" && "active"} 
                    text-[14px] category-button font-bold px-[16px] py-[8px] rounded-[6px]`
                }>
                Bütün kateqoriyalar
            </li>
            {projectsCategories.map(item =>
            (<li onClick={() => handleClick(item.name.az)}
                className={` ${activeCat === item.name.az && "active"}  text-[14px] category-button font-bold px-[16px] py-[8px] rounded-[6px]`}>
                {item.name.az}
            </li>)
            )}
        </ul>
    )
}

export default ProjectsCategoryBtns