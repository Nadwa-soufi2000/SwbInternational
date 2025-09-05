import { useState } from "react"
import Navbar from "../Components/Navbar"
import AboutLinks from "../Components/AboutLinks"
import CompaniesLinks from "../Components/CompaniesLinks"
import Footer from "../Components/Footer"
import BostaniChocolateDescription from "../Components/BostaniChocolateDescription"
import BostaniChocolatePicture from "../Components/BostaniChocolatePicture"
import whobg from '../assets/whoBg.png'
import bulding from '../assets/swbBulding.png'
import light from '../assets/light.png'

export default function WhoWeAre()
{
    const[open , setOpen] = useState('')
    const[content , setContent] = useState(false)

    return(
        <div className="w-full md:w-[100%] lg:w-[100%] 2xl:w-[100%] xl:w-[1440px] min-h-screen">
           <div className="w-full h-[230px] sm:h-[350px] md:h-[440px] lg:h-[500px] xl:h-[582px] bg-cover bg-center relative" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(${whobg})`}}>
            <Navbar 
                setOpen={setOpen}
                setContent={setContent}
                open={open}
             />
             <h1 className=' absolute left-[6%] top-[44%] text-[20px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[64px] text-[#FFFFFF] font-[Manrope] font-bold'>WHO WE ARE</h1>                           
             { open === 'About'  && <AboutLinks setOpen={setOpen}/> }               
             { open === 'Companies' && <CompaniesLinks setOpen={setOpen}/> }
         </div>

         { !content &&
             <>
          <div className="flex justify-center items-center w-full flex-col gap-[110px] py-[10px]">
            <div className="w-[98%] lg:w-[88%] xl:w-[1280px] 2xl:w-[80%] flex justify-center py-[20px]">
              <div className='w-full flex xl:gap-0 gap-[18px] flex-col md:flex-col lg:flex-row xl:flex-row justify-between items-center py-[30px] lg:rotate-0 rotate-[180deg]'>
                  <BostaniChocolatePicture pic={bulding} diff={false}/>
                  <BostaniChocolateDescription
                     head='SWB: Innovation and Global Growth'
                     t1='SWB is a US-based holding company with a global'
                     t2='presence, operating in diverse industries united by a shared'
                     t3='vision of growth, innovation, and sustainability. Each entity'
                     t4='thrives independently, delivering cutting-edge solutions while'
                     t5=' contributing to the strength of the group. At SWB, diversity'
                     t6='fuels creativity and collaboration drives progress'
                     width='562px'
                     height='460px'
                     diff={false}
                     diff2={false}
                  />
             </div>
         </div>

          <div className="w-[96%] lg:w-[88%] xl:w-[1280px] 2xl:w-[80%] rounded-[10px] md:border-0 border-[1px] border-solid border-[#A2948A] relative py-[20px] flex justify-end shadow-lg">
            <div className="flex flex-col items-start justify-between w-[100%] sm:w-[100%] md:w-[75%] lg:w-[75%] xl:w-[1010px]">
                <h1 className="text-[#A2948A] md:p-0 p-[10px] text-[18px] md:text-[30px] lg:text-[40px] xl:text-[48px] ">OUR VISION</h1>
                <div className="flex flex-col md:p-0 p-[10px] items-start justify-center text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#000000]">
                    <p>Our vision is to shape industries and inspire global change, creating a meaningful impact on</p>
                    <p>both sectors and people’s lives. As a multinational, multicultural organization</p>
                    <p>SWB unites diverse talents to drive innovation, sustainability, and collaboration, leaving a lasting</p>
                    <p>impact on industries and fostering global connections.</p>
                </div>
            </div>
            <img src={light} className="w-[24%] sm:w-[22%] h-[100px] md:w-[20%] md:h-[200px] lg:w-[200.66px] lg:h-[250px] xl:w-[220.66px] xl:h-[265px] absolute bottom-[85%] sm:bottom-[80%] md:bottom-[30%] left-[77%] md:left-[3%]"/>
          </div>
          </div>
         <Footer/>
         </>
        }
     </div>
    )
}