import React, { useEffect, useState } from 'react'
import Back from "../../public/img/back-to-home-.svg"
import { Link, useParams } from 'react-router-dom'
import ProjectDetailCard from '../components/atoms/ProjectDetailCard'
import Arrow from "../../public/img/long-arrow.svg"
import ProjectImg from "../../public/img/project-inner-card.png"
import ProjectImg2 from "../../public/img/project-inner-card2.png"
import Author from "../../public/img/acun.png"
import quote from "../../public/img/quote.svg"
import ProjectItem from '../components/atoms/ProjectItem'
import { getData } from '../service/getData'
import { generatePath } from '../utils/generatePath'

function ProjectDetailContainer() {


    const { catId, projectName } = useParams()
    const [category, setCategory] = useState({})
    const project = category?.projects?.find(item => generatePath(`${item.project_name}`) === projectName)
    console.log(project);

    useEffect(() => {
        (async () => {
            const data = await getData(`/projects/${catId}`)
            setCategory(data);
            console.log(data);
        })()
    }, [])

    return (
        <section className=' mt-[40px] text-left  md:mt-[70px] rounded-t-[40px] md:rounded-t-[70px]'>
            <div className='flex justify-between  container  items-start'>
                <div>
                    <h4 className='mb-[20px] flex gap-[10px] text-[#00000080]'><p>Əsas səhifə</p>  —  <p>Lahiyələrimiz</p></h4>
                    <h2 className=' font-bold  leading-[1.2] lg:text-[36px]  text-[28px]'>
                        <p>SABIS® SUN International School</p>
                        <p>üçün CRM hazırlanması</p>
                    </h2>
                </div>
                <Link to="/projects" className='flex items-center gap-[13px]'>
                    <span className='md:block text-[24px]'>Geriyə</span>
                    <img className='w-[40p] h-[40px] object-cover' src={Back} alt="" />
                </Link>
            </div>
            <div className='container py-[60px]'>
                <ProjectDetailCard />
            </div>
            <div className='bg-[#fff] rounded-b-[40px] pb-[100px] md:rounded-b-[70px] min-h-[50vh]'>
                <div className='container'>
                    <div className='flex items-start flex-wrap justify-between gap-x-[200px] gap-y-[60px]  py-[75px] '>
                        <div className='w-full md:w-[calc((100%-200px)/2)]'>
                            <h3 className='text-[28px] font-semibold md:text-[36px]'>Tapşırıq</h3>
                            <hr className='w-[40%] border-0 mt-[10px] mb-[26px]   bg-[#afff2c] h-[11px]' />
                            <p className='mb-[20px]'>SABIS® SUN Beynəlxalq Məktəbi (SABIS® SUN), 1 sentyabr 2015-ci il tarixində qapılarını məktəbəqədər təhsil səviyyəsindən 8-ci sinfə qədər olan şagirdlərin üzünə açmışdır. Məktəb, Xəyal Adası inkişaf layihəsi daxilində 67 000 kvadrat metr sahəyə malik şəhərcikdə yerləşir.
                            </p>
                            <p> İnzibati korpus və xidmət binaları ilə yanaşı ilkin mərhələdə ultra-müasir şəhərcikdə məktəbəqədər təhsil və ibtidai məktəbə aid tədris binaları, kiçik idman zalı, üzgüçülük hovuzu və oyun meydançası mövcuddur. Xüsusi yol cığırı, oyun meydançası, oyun otağı və xüsusilə məktəbəqədər şagirdlərin istifadəsi üçün tərtib edilmiş İT otağı, şagirdlərimiz üçün müxtəlif təlim imkanları yaradır.</p>
                        </div>
                        <div className='w-full md:w-[calc((100%-200px)/2)]'>
                            <h3 className='text-[28px] font-semibold md:text-[36px]'>Həlli</h3>
                            <hr className='w-[40%] border-0 mt-[10px] mb-[26px]   bg-[#afff2c] h-[11px]' />
                            <p className='mb-[20px]'>  SABIS® SUN Beynəlxalq Məktəbi müxtəlif imkanlara malik şagird heyətinə yüksək keyfiyyətli təhsil təminatçısı olaraq tanınacaqdır. Məktəb şagirdləri universitetlərdə müvəffəqiyyət qazanmağa hazırlamaqla yanaşı, onları daim öyrənmə bacarığı və arzusu ilə təmin edəcək və onların sivil, etik və əxlaqi dəyərlərini möhkəmləndirəcəkdir. Məktəb fəaliyyət göstərdiyi müddət ərzində səmərəlilik və öhdəçilik baxımından yüksək standartları qoruyub saxlayacaqdır.

                            </p>
                            <p>
                                SABIS® SUN Beynəlxalq Məktəbi tədris ili ərzində valideynlərin və şagirdlərin maraqla gözlədiyi bir sıra önəmli tədbirlər təşkil edir. Şagirdlər istedadlarını göstərmək, maraqlarını və biliklərini genişləndirmək və eyni zamanda həm yerli, həm də beynəlxalq səviyyədə təşkil olunan bir sıra akademik və idman tədbirlərindən təcrübə qazanmaq üçün unikal imkana malikdirlər.
                            </p>

                        </div>


                    </div>
                    <div className='flex flex-wrap gap-[24px]'>
                        <div className='w-full lg:w-[calc((100%-24px)/2)]'>
                            <img src={ProjectImg} alt="" />
                        </div>
                        <div className='w-full lg:w-[calc((100%-24px)/2)]'>
                            <img src={ProjectImg2} alt="" />
                        </div>
                    </div>

                    <div className='pt-[66px]'>
                        <h3 className='text-[28px] pb-[23px] font-semibold md:text-[36px]'>Müştəri rəyi</h3>
                        <div className='bg-[#000]  relative gap-[50px] flex items-center flex-col md:flex-row p-[52px] text-[#fff]'>
                            <p>
                                Baxmayaraq ki, 2 övladımız digər məktəbdən SABIS® SUN məktəbinə keçirilmişdir, onlar hər gün məktəbdə öyrəndiklərini və qazandıqları təcrübələri bizimlə həvəslə bölüşürlər. Bu da onu sübut edir ki, SABIS® SUN məktəbini seçməklə onlar üçün ən doğru qərarı vermişik.
                            </p>
                            <div className='w-[136px] shrink-0 h-[45px]'></div>
                            <img className='shrink-0 absolute -bottom-[20px] right-[20px]' src={quote} alt="" />
                        </div>

                        <div className='flex items-center pt-[23px] gap-[24px]'>
                            <img className='w-[75px] h-[75px] rounded-full' src={Author} alt="" />
                            <div>
                                <h3>Camal Cavadzadə</h3>
                                <p>Marketinq direktoru</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container py-[50px]'>
                <Link to={"/"} className='text-[24px] gap-[34px] flex items-center'> Növbəti layihə <img src={Arrow} alt='arrow' /></Link>

                {project && <ProjectItem {...project} />}
            </div>

        </section>
    )
}

export default ProjectDetailContainer