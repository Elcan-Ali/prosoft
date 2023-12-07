import { Skeleton } from '@mui/material'


function ProjectItemSkeleton() {
    return (
        <div className='flex flex-wrap py-[50px]'>
            <div className='w-full lg:w-1/2  shrink-0 xl:w-7/12 2xl:w-2/3'>
                <Skeleton className='block shrink-0 h-[515px]' variant="rectangle" height={"515px"} />
            </div>
            <div className='w-full lg:w-1/2 xl:w-5/12 2xl:w-1/3 flex flex-col justify-between p-[60px] bg-[#fff]'>
                <div className='pb-[60px]'>
                    <div className='pb-[20px]'>
                    <Skeleton className='text-[48px] font-semibold' variant="text" width={"200px"} />
                    </div>

                    <Skeleton className='text-[16px] font-semibold' variant="text" width={"100%"} />
                    <Skeleton className='text-[16px] font-semibold' variant="text" width={"100%"} />
                    <Skeleton className='text-[16px] font-semibold' variant="text" width={"100%"} />
                    <Skeleton className='text-[16px] font-semibold' variant="text" width={"100%"} />
                    <Skeleton className='text-[16px] font-semibold' variant="text" width={"100%"} />
                </div>
                <div className='flex gap-[30px] flex-wrap'>
                <Skeleton className='text-[16px] font-semibold' variant="text" width={"100px"} />
                <Skeleton className='text-[16px] font-semibold' variant="text" width={"140px"} />
                </div>

            </div>
        </div>
    )
}

export default ProjectItemSkeleton