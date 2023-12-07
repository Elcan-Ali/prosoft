import React from 'react'

function BlogsCategoryBtns({ activeCat, setActiveCat, blogsCategories }) {

    const handleClick =(arg)=>{
        window.scrollTo(0,531)
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
            {blogsCategories.map(item =>
            (<li onClick={() => handleClick(item.category_name.az)}
                className={` ${activeCat === item?.category_name.az && "active"} category-button  text-[14px] category-button font-bold px-[16px] py-[8px] rounded-[6px]`}>
                {item.category_name.az}
            </li>)
            )}
        </ul>
    )
}

export default BlogsCategoryBtns