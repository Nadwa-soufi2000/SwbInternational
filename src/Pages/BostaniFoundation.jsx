import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CompaniesLinks from '../Components/CompaniesLinks';
import AboutLinks from '../Components/AboutLinks';
import { useState } from 'react';
import fo1 from '../assets/fo1.jpg'
import fo2 from '../assets/fo2.jpg'
import fo3 from '../assets/fo3.png'
import C from '../assets/C.png'
import Co from '../assets/Co.png'
import last5 from '../assets/last5.png'
import slide6 from '../assets/slide6.png'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaTypo3 } from 'react-icons/fa6';
import SharedSection from '../Components/SharedSection';

export default function BostaniFoundation()
{
    const[open , setOpen] = useState('')
    const[content , setContent] = useState(false)
    
    return(
        <div className='w-full md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[1440px] min-h-screen'>
            <div className="w-full h-[230px] sm:h-[350px] md:h-[440px] lg:h-[500px] xl:h-[582px] bg-cover bg-center relative" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${fo1})`}}>
                <Navbar 
                  setOpen={setOpen}
                  setContent={setContent}
                  open={open}
                />
            <h1 className=' absolute left-[6%] top-[44%] text-[20px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[64px] text-[#FFFFFF] font-[Manrope] font-bold'>BOSTANI FOUNDATION</h1> 
            <div className='rounded-full flex justify-center items-center bg-gray-500 text-[#FFFFFF] text-[13px] md:text-[16px] lg:text-[20px] xl:text-[20px] w-[170px] h-[40px] md:w-[200px] md:h-[40px] lg:w-[290px] lg:h-[50px] xl:w-[305px] xl:h-[56px] absolute left-[6%] top-[70%] underline gap-[3px]'>visit our website <MdOutlineArrowRightAlt className='fill-current text-[#FFFFFF] text-[25px] mt-[10px]'/></div>                        
            { open === 'About'  && <AboutLinks setOpen={setOpen}/> }               
            { open === 'Companies' && <CompaniesLinks setOpen={setOpen}/> }
         </div>
         {
            !content &&
            <div className='w-full 2xl:w-[1440px] flex flex-col justify-center items-center'>
            <div className='w-[98%] gap-8 lg:w-[88%] xl:w-[1280px] flex flex-col justify-center items-center py-[30px]'>
                <div className="flex w-[90%] md:w-[60%] lg:w-[90%] xl:w-full xl:flex-row lg:flex-row md:flex-col flex-col justify-center items-center gap-[20px]">
                    <div className="w-full h-[300px] md:h-[420px] md:w-[100%]  lg:w-[390px] lg:h-[450px] xl:w-[460px] xl:h-[520px] ">
                       <img src={fo3} className="w-full h-full rounded-[10px]"/>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 xl:h-[530px] xl:w-[700px] lg:w-[600px] lg:h-[540px] md:w-full md:h-[550px] w-full h-[440px]">
                       <div className='flex flex-col w-full h-[220px] sm:h-[290px] gap-1 sm:gap-[7px] justify-center items-start pl-[12px] sm:pl-[30px] bg-[#f0ecea] rounded-[15px] shadow-xl'>
                          <h1 className="text-[18px] md:text-[20px] lg:text-[25px] xl:text-[26px] text-[#A2948A]">Empowering Communities</h1>
                          <div className="flex flex-col gap-[4px] lg:gap-[4px] Xl:gap-[20px] items-start w-full text-[13px] md:text-[16px] lg:text-[16px] xl:text-[18px] text-[#000000]">
                               <p>Founded in Ghana in 2021 , the Bostani Foundation is a symbol</p>
                               <p>of hope, unity, and progress, dedicated to adding value through</p>
                               <p>initiatives in education, clean water, rural development, and</p>
                               <p>healthcare.</p>
                          </div>
                      </div>
                        <div className="flex justify-center items-center gap-2 sm:gap-4 w-full">
                             <img src={fo2} className="w-[50%] h-[150px] md:w-[50%] md:h-[240px] lg:w-[230px] lg:h-[240px] xl:w-[330px] xl:h-[230px] rounded-[10px]"/>
                             <img src={C} className="w-[50%] h-[150px] md:w-[50%] md:h-[240px] lg:w-[230px] lg:h-[240px] xl:w-[330px] xl:h-[230px] rounded-[10px]"/>
                        </div>
                   </div>
             </div>

             <div className="flex w-[90%] md:w-[60%] lg:w-[90%] xl:w-full xl:flex-row lg:flex-row md:flex-col flex-col justify-center items-center gap-[20px]">
                    <div className="flex flex-col justify-center items-center gap-4 xl:h-[530px] xl:w-[700px] lg:w-[600px] lg:h-[540px] md:w-full md:h-[550px] w-full h-[440px]">
                       <div className='flex flex-col w-full h-[260px] sm:h-[290px] gap-1  lg:gap-[7px] justify-center items-start pl-[12px] sm:pl-[30px] bg-[#f0ecea] rounded-[15px] shadow-xl'>
                          <h1 className="text-[18px] md:text-[20px] lg:text-[25px] xl:text-[26px] text-[#A2948A]">Bostani Charity Association</h1>
                          <div className="flex flex-col gap-[4px] lg:gap-[4px] Xl:gap-[20px] items-start w-full text-[13px] md:text-[16px] lg:text-[16px] xl:text-[18px] text-[#000000]">
                               <p>Bostani Charity, established in 2024 in syria, is dedicated to</p>
                               <p>supporting underprivileged communities by providing various</p>
                               <p>donations, including food and clothing. Our mission is to uplift</p>
                               <p>those in need and faster a sense of hope and solidarity within</p>
                               <p>society.</p>
                          </div>
                      </div>
                        <div className="flex justify-center items-center gap-2 sm:gap-4 w-full">
                             <img src={last5} className="w-[50%] h-[160px] md:w-[50%] md:h-[240px] lg:w-[230px] lg:h-[240px] xl:w-[330px] xl:h-[230px] rounded-[10px]"/>
                             <img src={Co} className="w-[50%] h-[160px] md:w-[50%] md:h-[240px] lg:w-[230px] lg:h-[240px] xl:w-[330px] xl:h-[230px] rounded-[10px]"/>
                        </div>
                   </div>
                   <div className="w-full h-[300px] md:h-[420px] md:w-[100%]  lg:w-[390px] lg:h-[450px] xl:w-[460px] xl:h-[520px] ">
                       <img src={slide6} className="w-full h-full rounded-[10px]"/>
                    </div>
             </div>
             
         </div>
         <Footer/>
         </div>

         }
     </div>
    )
}