import roBg from '../assets/roBg.jpeg'
import ro1 from '../assets/ro1.png'
import ro2 from '../assets/ro2.png'
import ro3 from '../assets/ro3.png'
import ro4 from '../assets/ro4.png'
import ro5 from '../assets/ro5.png'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CompaniesLinks from '../Components/CompaniesLinks';
import AboutLinks from '../Components/AboutLinks';
import BostaniChocolatePicture from '../Components/BostaniChocolatePicture.jsx'
import BostaniChocolateDescription from '../Components/BostaniChocolateDescription.jsx'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Robotic()
{
    const[open , setOpen] = useState('')
    const[content , setContent] = useState(false)

    return(
        <div className=' w-full md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[1440px] min-h-screen'>
            <div className="w-full h-[230px] sm:h-[350px] md:h-[440px] lg:h-[500px] xl:h-[582px] bg-cover bg-center relative" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(${roBg})`}}>
                 <Navbar 
                    setOpen={setOpen}
                    setContent={setContent}
                    open={open}
                />
                <h1 className=' absolute left-[6%] top-[44%] text-[20px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[64px] text-[#FFFFFF] font-[Manrope] font-bold'>Robotic & AI</h1> 
                <Link to='https://www.bostani.com/ar-sa' className='rounded-full flex justify-center items-center bg-gray-500 text-[#FFFFFF] text-[13px] md:text-[16px] lg:text-[20px] xl:text-[20px] w-[170px] h-[40px] md:w-[200px] md:h-[40px] lg:w-[290px] lg:h-[50px] xl:w-[305px] xl:h-[56px] absolute left-[6%] top-[70%] underline gap-[3px]'>visit our website <MdOutlineArrowRightAlt className='fill-current text-[#FFFFFF] text-[25px] mt-[10px]'/></Link>                        
                { open === 'About'  && <AboutLinks setOpen={setOpen}/> }               
                { open === 'Companies' && <CompaniesLinks setOpen={setOpen}/> }
          </div>
          {
            !content &&
            <>
               <div className='w-full 2xl:w-[1440px] flex flex-col justify-center items-center'>
                 <div className='w-[98%] lg:w-[88%] xl:w-[1280px] flex flex-col justify-center py-[30px]'>
                     <div className=' flex items-center xl:gap-0 gap-[18px] justify-between py-[30px] flex-col md:flex-col lg:flex-row xl:flex-row'>
                         <BostaniChocolateDescription
                             head='SHAPING THE FUTURE OF INTELLIGENT SERVICE'
                             t1='SWBAI Robotics pioneers innovation with AI-driven'
                             t2='robotics solutions, uniting diverse teams to create'
                             t3='intelligent robots that enhance'
                             t4=' experiences across key'
                             t5='sectors.'
                             width='600px'
                             height='420px'
                             diff={true}
                             diff2={false}
                         />
                         <BostaniChocolatePicture pic={ro1} diff={true}/>
                     </div>


                     <div className='w-full flex xl:gap-0 gap-[18px] flex-col md:flex-col lg:flex-row xl:flex-row justify-between items-center py-[30px] lg:rotate-0 rotate-[180deg]'>
                        <BostaniChocolatePicture pic={ro2} diff={false}/>
                        <BostaniChocolateDescription
                            head='Almanara Robot'
                            t1='In Saudi Arabia, SWBAI is launching Almanara'
                            t2='Robot in Mecca to support visitors on their'
                            t3='spiritual journey. Parallel projects in China and Turkey are advancing '
                            t4='service and industrial robotics, forming a connected '
                            t5='development network'
                            width='582px'
                            height='478px'
                            diff={false}
                            diff2={false}
                          />
                    </div>

                    <div className='flex justify-between items-center gap-[18px] xl:gap-0 w-full py-[30px] flex-col md:flex-col lg:flex-row xl:flex-row'>
                          <img src={ro3} className='w-[260px] h-[260px] md:w-[580px] md:h-[580px] lg:w-[50%] lg:h-[460px] xl:w-[650px] xl:h-[450px] rounded-[10px]'/>
                          <img src={ro4} className='w-[260px] h-[260px] md:w-[580px] md:h-[580px] lg:w-[50%] lg:h-[460px] xl:w-[580px] xl:h-[540px] rounded-[10px]'/>
                    </div>

                    <div className=' flex items-center xl:gap-0 gap-[18px] justify-between py-[30px] flex-col md:flex-col lg:flex-row xl:flex-row'>
                         <BostaniChocolateDescription
                             head='AI-powered robots'
                             t1='We are developing practical human-centered'
                             t2='robots by integrating artificial intelligence,'
                             t3='automation, and accessibility - delivering next-'
                             t4='generation technology through globally-driven'
                             t5='adaptable solutions.'
                             width='600px'
                             height='430px'
                             diff={true}
                             diff2={false}
                         />
                         <BostaniChocolatePicture pic={ro5} diff={true}/>
                     </div>

                 </div>
               </div>
               <Footer/>
            </>
          }
        </div> 
    )
}