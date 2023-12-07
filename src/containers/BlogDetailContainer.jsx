import React from 'react'
import blogImg from "../../public/img/blog-detail.png"
import Copy from "../../public/img/copy.svg"
import fb from '../../public/img/teammate-icon-fb.svg'
import linkedin from '../../public/img/teammate-icon-linkedin.svg'
import tweet from '../../public/img/teammate-icon-twitter.svg'
import blogImg2 from "../../public/img/blog-detail2.png"
import { Link } from 'react-router-dom'

function BlogDetailContainer() {
    return (
        <section className='rounded-t-[40px] bg-[#000] md:rounded-t-[70px]  mt-[40px] md:mt-[70px] '>
            <div className='rounded-[40px] pb-[70px] pt-[65px] bg-[#fff] md:rounded-[70px]'>
                <div className='container'>
                    <div className='text-center'>
                        <h4 className='mb-[20px] justify-center flex gap-[10px] text-[#00000080]'><p>Əsas səhifə</p>  —  <p>Lahiyələrimiz</p></h4>
                        <h2 className=' font-bold  leading-[1.2] lg:text-[36px]  text-[28px]'>
                            Müasir dünyada ağıllı ev sistemləri
                        </h2>
                        <span className='shadow inline-block mt-[30px] bg-[#000] rounded-[36px] text-green text-[12px] font-medium px-[12px] py-[4px]'>
                            Texnologiya
                        </span>
                    </div>

                    <div className='flex justify-center py-[50px] w-full'>
                        <img src={blogImg} alt="blog-img" />
                    </div>
                    <div className='max-w-[750px] mx-auto'>
                        <p className='text-[18px] mb-[40px] md:mb-[73px] md:text-[20px]'>Ağıllı ev sistemləri, son on ildə texnologiya və mühitdostu yaşayışın birləşməsi ilə populyarlıq qazanıb. Bu sistemlər evinizdəki bir çox avadanlıqları və sistemləri avtomatlaşdıraraq, həyatınızı daha asan, təhlükəsiz və əlverişli edir.</p>

                        <h4 className='md:text-[30px] font-semibold pb-[16px] text-[24px]'>Ağıllı Ev Sistemləri: Gələcəyin Yaşayış Konsepti</h4>
                        <p className='md:text-[18px] text-[16px]'>Ağıllı ev sistemlərinin əsas xüsusiyyətləri arasında təmperaturun və aydınlanmanın avtomatik idarə olunması, təhlükəsizlik sistemlərinin idarə olunması və energetika effektivliyinin artırılmasıdır. Bu texnologiyalar vasitəsi ilə ev sahibləri istədikləri vaxt və yerdə evlərində baş verən hər şeyi nəzarət edə bilərlər.</p>

                        <div className='border-l-[2px] my-[20px] border-[#afff2c] pl-[25px] py-[20px]'>
                            <p className='text-[20px] font-medium mb-[16px] md:text-[24px]'>Ağıllı ev sistemləri, mobil tətbiqlər və ya mərkəzi nəzarət panelləri vasitəsi ilə idarə edilə bilər. Bu, ev sahiblərinə evlərindəki avadanlıqları və funksiyaları doğrudan doğruya və ya uzaqdan idarə etmək imkanı verir.</p>
                            <span className='text-[#9e9e9e] text-[18px] font-medium'>
                                — Nəsib Dadaş, CEO & Founder
                            </span>
                        </div>

                        <div className='flex flex-wrap justify-center pb-[16px] pt-[50px] w-full'>
                            <img src={blogImg2} alt="blog-img" />
                        </div>
                        <h4 className='font-medium text-[18px]'>Tabletlərdən distant idarə</h4>
                        <h3 className='md:text-[30px] font-semibold pt-[26px] pb-[16px] text-[24px]'>Energetika Effektivliyi:</h3>
                        <p className='pb-[16px]'>Ağıllı termostatlar, avtomatik pəncərə açaraq və yumağa kömək edən ağıllı aydınlatma sistemləri kimi texnologiyalar energetika sərfiyyatını azaldır və energetika effektivliyini artırır.</p>
                        <p className='pb-[49px]'>Ağıllı ev sistemləri, texnologiya və konforun ideal birləşməsidir. Onlar, həyatın hər bir aspektinə yenilik və asanlıq gətirərək, gələcəyin yaşayış standartlarını təşkil edir. Bu sistemlərin məqsədi, insanlara daha əlverişli, təhlükəsiz və mühitdostu bir yaşayış təmin etməkdir.</p>
                        <div className='flex justify-center items-center'>
                            <div className='text-[#556987] text-[14px] rounded-[6px] mr-[16px] gap-[6px] px-[15px] py-[8px] border-dotted border inline-flex border-[#556987]'>
                                <img src={Copy} alt="copy" />
                                <span>Copy Link</span>
                            </div>
                            <div className='flex items-center gap-[8px]'>
                                <Link to="/" className="w-[37px] border-dotted border-[#556987] border h-[37px] rounded-[6px] flex-center bg-[#fff]">
                                    <img className='w-[15px]' src={fb} alt="social" />
                                </Link>
                                <Link to="/" className="w-[37px]  border-dotted border-[#556987] border h-[37px] rounded-[6px] flex-center bg-[#fff]">
                                    <img className='w-[15px]' src={tweet} alt="social" />
                                </Link>
                                <Link to="/" className="w-[37px]  border-dotted border-[#556987] border h-[37px] rounded-[6px] flex-center bg-[#fff]">
                                    <img className='w-[15px]' src={linkedin} alt="social" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogDetailContainer