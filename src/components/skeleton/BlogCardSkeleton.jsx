

import { Skeleton } from '@mui/material'
import React from 'react'

function BlogCardSkeleton() {

    return (
        <div className='blog-card cursor-pointer w-full md:w-[calc((100%-50px)/2)] lg:w-[calc((100%-122px)/2)]'>
            <div className='card-top rounded-[6px] overflow-hidden '>
                <Skeleton variant="rounded" width={"100%"} height={"312px"} />
            </div>
            <div className='card-bottom pt-[24px] flex flex-col gap-[10px]'>
                <Skeleton className='rounded-[36px] bg-green font-medium text-[20px]' variant="text"  width={"100px"} />
                <Skeleton className='text-[16px]  font-bold' variant="text" width={"200px"} />
                <Skeleton className='text-[30px] font-bold' variant="text" width={"100%"} />
            </div>
        </div>
    )
}

export default BlogCardSkeleton
