import React from 'react'
import Img1 from "../../../public/img/about-img1.png"
import Img2 from "../../../public/img/about-img2.png"


function AboutBanner() {
    return (
        <div  className=' bg-[#000]  py-[70px]  text-[#fff] rounded-[40px] md:rounded-[70px]'>
            <div className='container  flex-wrap gap-y-[50px] gap-x-[100px] flex justify-between '>
                <div className='shrink-0 w-full lg:w-[calc((100%-100px)/2-30px)]'>
                    <div className='flex  gap-[10px] mb-[16px] items-center'>
                        <hr className='about-line border-0 w-[60px] h-[4px] ' />
                        <h4 className='flex items-center gap-[10px]'><p>Əsas səhifə</p>  —  <p>Haqqımızda</p></h4>
                    </div>
                    <h3 className='lg:whitespace-nowrap text-green mb-[30px] text-[28px] lg:text-[38px] xl:text-[48px] font-bold'>
                        <p className='leading-[1] '>Peşəkar təcrübəmizlə</p>
                        <p className='leading-[1]'>çoxsaylı IT həllər</p>
                    </h3>
                    <p className=''>Mükəmməl menecerlərdən, Keyfiyyət Təminatında ixtisaslaşmış mütəxəssislərdən və ixtisaslaşmış veb-developer və koderlərdən ibarət funksional işləyən bir komanda formalaşdırırıq. Komandamızın internet həllərinin yaradılmasında və inkişafında bir çox illik təcrübəsi var və onlar C2C-nin əsas nüvəsidir.</p>
                </div>
                <div className=' w-full md:w-[500px]   mx-auto lg:w-[calc((100%-100px)/2)] min-h-[30vh] sm:min-h-[50vh] lg:min-h-[0]  relative'>
                    <img className='absolute w-[62%] lg:max-h-[430px] object-cover rounded-[5px] right-0' src={Img1} alt="about-img" />
                    <img className='absolute w-[45%] left-[5%]  top-[53%]' src={Img2} alt="about-img" />
                </div>
            </div>
        </div>
    )
}

export default AboutBanner