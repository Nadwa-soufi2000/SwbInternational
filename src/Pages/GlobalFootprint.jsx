import { useState } from 'react'
import mapBackground from '../assets/mapBackground.png'
import { IoClose } from "react-icons/io5";
import Footer from '../Components/Footer'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import bostani1 from '../assets/bostani1.png'
import swbfinal from '../assets/swbfinal.png'
import bostaniBelj from '../assets/bostaniBelj.png'
import daira from '../assets/daira.png'
import s from '../assets/s.png'
import g from '../assets/g.png'
import wh from '../assets/Wh.png'
import circle from '../assets/circle.png'
import map from '../assets/map.png'
import Navbar from '../Components/Navbar'
import CompaniesLinks from '../Components/CompaniesLinks';
import AboutLinks from '../Components/AboutLinks';

export default function GlobalFootprint()
{
    const[open , setOpen] = useState('')
    const[content , setContent] = useState(false)
   // const closeList = () =>
    //{
     //  setOpen('');
   // }


    return(
        <div className=" w-full md:w-[100%] lg:w-[100%] 2xl:w-[100%] xl:w-[1440px] min-h-screen">
             <div className="w-full h-[230px] sm:h-[350px] md:h-[440px] lg:h-[500px] xl:h-[582px] bg-cover bg-center relative" style={{backgroundImage:`url(${mapBackground})`}}>
                  <Navbar 
                     setOpen={setOpen}
                     setContent={setContent}
                     open={open}
                  />
                  <h1 className=' absolute left-[6%] top-[44%] text-[20px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[64px] text-[#FFFFFF] font-[Manrope] font-bold'>GLOBAL FOOTPRINT</h1>
                              
                  { open === 'About'  && <AboutLinks setOpen={setOpen}/> }               
                  { open === 'Companies' && <CompaniesLinks setOpen={setOpen}/> }
             </div>
             
            { !content &&
              <>
             <div className='py-[40px] w-full flex flex-col justify-center items-center' >
                <h1 className='text-center text-[16px] sm:text-[20px] md:text-[30px] lg:text-[40px] xl:text-[48px] text-[#000000] font-[Roboto] font-medium'>Subsidiaries of the SWB Groub</h1>
                <div className='flex justify-center lg:justify-between items-center flex-wrap gap-[13px] lg:gap-0 w-[95%] xl:w-[1184px] p-[5px]'>
                    <img src={bostani1} className='w-[50px] h-[50px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[106px] xl:w-[130px] xl:h-[122px] bg-[#f7eded] rounded-[10px] p-[5px] sm:p-[10px] shadow-lg hover:scale-[1.08] duration-[0.5s]'/>
                    <img src={swbfinal} className='w-[50px] h-[50px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[106px] xl:w-[122px] xl:h-[117px] bg-[#f7eded] rounded-[10px] p-[5px] sm:p-[10px] shadow-lg hover:scale-[1.08] duration-[0.5s]'/>
                    <img src={bostaniBelj} className='w-[50px] h-[50px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[106px] xl:w-[134px] xl:h-[110px] bg-[#f7eded] rounded-[10px] p-[5px] sm:p-[10px] shadow-lg hover:scale-[1.08] duration-[0.5s]'/>
                    <img src={daira} className='h-[50px] w-[50px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[106px] xl:w-[124px] xl:h-[118px] bg-[#f7eded] rounded-[10px] p-[5px] sm:p-[10px] shadow-lg hover:scale-[1.08] duration-[0.5s]'/>
                    <img src={s} className='w-[50px] h-[50px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[106px] xl:w-[130px] xl:h-[119px] bg-[#f7eded] rounded-[10px] p-[5px] sm:p-[10px] shadow-lg hover:scale-[1.08] duration-[0.5s]'/>
                    <img src={g} className='w-[50px] h-[50px] md:w-[90px] md:h-[90px] lg:w-[102px] lg:h-[104px] xl:w-[122px] xl:h-[125px] bg-[#f7eded] rounded-[10px] p-[5px] sm:p-[10px] shadow-lg hover:scale-[1.08] duration-[0.5s]'/>
                    <img src={wh} className='w-[50px] h-[50px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[106px] xl:w-[120px] xl:h-[124px] bg-[#f7eded] rounded-[10px] p-[5px] sm:p-[10px] shadow-lg hover:scale-[1.08] duration-[0.5s]'/>
                </div>
             </div>

             <div className='py-[10px] md:py-[20px] lg:py-[30px] xl:py-[40px] w-full flex flex-col justify-center items-center gap-[1px] lg:gap-[30px] xl:gap-[40px]'>
                 <h1 className='text-center text-[16px] sm:text-[20px] md:text-[30px] lg:text-[40px] xl:text-[48px] text-[#000000] font-[Roboto] font-medium'>GLOBAL FOOTPRINT</h1>
                 <div className='mt-[3px] md:w-[100%] lg:w-[800px] xl:w-[1061px] 2xl:w-[1274px] h-[174px] text-[#000000] text-[15px] md:text-[21px] lg:text-[26px] xl:text-[32px] flex flex-col justify-start  sm:justify-center items-center gap-[10px] sm:gap-[20px] sm:pt-0 pt-[13px] '>
                     <p className='text-center'>As part of our global expansion strategy, SWB operates in key regions worldwide.</p> 
                     <p className='text-center'>Below is an overview of the areas where we have a strong presence.</p>
                     <p className='text-center'>Then, you can follow with the list provided.</p>
                  </div>
             </div>

             <div className='w-full pl-[30px] py-[40px]'>
                <div className=' flex flex-col justify-center items-start'>
                 <h1 className=' text-[16px] sm:text-[19px] md:text-[23px] lg:text-[24px] xl:text-[24px] text-[#000000] font-[Roboto] font-medium'>Overview of regions where SWB operates:</h1>
                 <div className='flex flex-col justify-center items-start w-[220px] sm:w-[267px] h-[129px]'>
                     <div className='flex justify-start items-center gap-[4px]'><img className='w-[12px] h-[12px]' src={circle}/><p className='text-[14px] sm:text-[16px] text-[#000000]'>Middle East: UAE, Saudi Arabia</p></div> 
                     <div className='flex justify-start items-center gap-[4px]'><img className='w-[12px] h-[12px]' src={circle}/><p className='text-[14px] sm:text-[16px] text-[#000000]'>Europe: Belgium Paris, France</p></div>
                     <div className='flex justify-start items-center gap-[4px]'><img className='w-[12px] h-[12px]' src={circle}/><p className='text-[14px] sm:text-[16px] text-[#000000]'>Asia: China, Turkey</p></div>
                     <div className='flex justify-start items-center gap-[4px]'><img className='w-[12px] h-[12px]' src={circle}/><p className='text-[14px] sm:text-[16px] text-[#000000]'>Africa: Ghana, lvory Coast Tunisia</p></div>
                  </div>
             </div>
             </div>
             
             <div className='w-full h-[400px] sm:h-[600px] md:h-[1000px] lg:h-[1400px] xl:h-[1508px] bg-cover bg-center' style={{backgroundImage:`url(${map})`}}></div>
             <Footer/>
             </>
           }
        </div>
    )
}