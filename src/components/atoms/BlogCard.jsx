import React from 'react'
import BlogImg from '../../../public/img/blog-card.png'
import { Link } from 'react-router-dom';

function BlogCard({ media, blog_name, catNames, blog_category_id ,item}) {
    console.log(item);
    const catName = catNames.find(item => item.id.toString() === blog_category_id)
    console.log(catName);
    console.log(media);
    return (
        <Link to="/blog/dss" className='blog-card cursor-pointer w-full md:w-[calc((100%-50px)/2)] lg:w-[calc((100%-122px)/2)]'>
            <div className='card-top rounded-[6px] overflow-hidden '>   
                <img className='h-[312px] w-full object-cover' src={media[0]?.original_url} alt="blog-img" />
            </div>
            <div className='card-bottom pt-[24px]'>
                <span className='rounded-[36px] bg-green font-medium text-[12px] px-[12px] py-[4px]'>{catName.name.az}</span>
                <p className='font-medium py-[16px]'>22 oktyabr 2023</p>
                <h3 className='text-[30px] font-bold'>{blog_name}</h3>
            </div>
        </Link>
    )
}

export default BlogCard