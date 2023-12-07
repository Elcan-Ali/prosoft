import React from 'react'
import Copy from "../../../public/img/copy.svg"
import fb from '../../../public/img/teammate-icon-fb.svg'
import linkedin from '../../../public/img/teammate-icon-linkedin.svg'
import tweet from '../../../public/img/teammate-icon-twitter.svg'
import { Link } from 'react-router-dom'
function VacancyInfo() {
    return (
        <div className='max-w-[750px] pt-[30px] mx-auto'>
            <h3 className='text-[20px] my-[15px] font-bold'>İş rejimi:</h3>
            <ul className='ml-[15px] list-disc'>
                <li className='text-[15px] font-medium' >7 saatlıq iş qrafiki</li>
                <li className='text-[15px] font-medium' >I-V günlər, 10:00-19:00</li>
                <li className='text-[15px] font-medium' >2 saat fasilə 13:00-15:00</li>
                <li className='text-[15px] font-medium' >Həftə sonu istirahət</li>
            </ul>
            <h3 className='text-[20px] my-[15px] font-bold'>Vəzifə öhdəlikləri:</h3>
            <ul className='ml-[15px] list-disc'>
                <li>PHP ilə yazılmış sistemə yeni funksionallıqlar əlavə etmək və hazırda var olan özəllikləri inkişaf etdirmək;</li>
                <li>Proyektdəki digər komandalarla (menecment və dizayn) sıx əlaqədə olmaq və proyektin vaxtında təhvil verilməsi üçün lazımi texniki dəstəyi göstərmək</li>
                <li>Cari kod arxitekturasını inkişaf etdirmək, lazım gələrsə fərqli arxitekturalar tətbiq etmək</li>
                <li>Səliqəli, optimal kod yazmaq, sistemin modulyarlığını qorumaq, ehtiyac olarsa cari kodlara da bunları tətbiq etmək</li>
                <li>Digər proqramçılar tərəfindən yazılan kodlar product-a əlavə olunmazdan öncə incələmək, lazımi geridönüşlər etmək, yeni yazılan kodların standartlara cavab verdiyinə əmin olmaq</li>
                <li>Komandaya qoşulan yeni developerlərə mentorluq etmək, proyekti öyrənməsini təmin etmək</li>
                <li>Proyekt üçün dokumentasiya hazırlamaq və cari dokumentasiyanı inkişaf etdirmək</li>
            </ul>
            <h3 className='text-[20px] my-[15px] font-bold'>Tələblər:</h3>
            <ul className='ml-[15px] list-disc'>
                <li>Obyekt-yönümlü proqramlaşdırmada (OOP) və MVC arxitekturasında uzunmüddətli təcübə (minimum 5 il)</li>
                <li>Yuxarı səviyyə MySQL bilikləri</li>
                <li>Yuxarı səviyyə Front-end texnologiyaları ilə (HTML, CSS, Javascript, jQuery, React) biliklər</li>
                <li>Yuxarı səviyyə Git/GitHub bilikləri</li>
                <li>Agile metodologiyası ilə tanışlıq və task management bacarıqları</li>
                <li>Güclü alqoritmik düşünmə və problem həll etmə bacarıqları</li>
                <li>Komanda ilə işləmək və sıx kommunikasiyada olmaq</li>
            </ul>

            <p className='text-[20px] my-[15px] font-bold'>Əməkhaqqı: 3,000+ AZN</p>
            <div className='flex flex-wrap gap-y-[16px] items-center mt-[30px]'>
                <button className='bg-[#afff2c] mr-[24px] px-[35px] py-[15px] rounded-[25px] flex items-center text-[15px] font-semibold'>
                    Onlayn müraciət:  <p className='font-bold'>job@prosofly.com</p>
                </button>
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

    )
}

export default VacancyInfo