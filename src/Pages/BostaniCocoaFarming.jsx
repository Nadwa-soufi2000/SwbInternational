import { useState } from "react"
import cocoa from '../assets/cocoa.png'
import cocoa2 from '../assets/cocoa2.png'
import cocoa1 from '../assets/cocoa1.png'
import Navbar from "../Components/Navbar"
import AboutLinks from "../Components/AboutLinks"
import CompaniesLinks from "../Components/CompaniesLinks"
import Footer from "../Components/Footer"
import BostaniChocolateDescription from "../Components/BostaniChocolateDescription"
import BostaniChocolatePicture from "../Components/BostaniChocolatePicture"

export default function CocoaFarming()
{
     const[open , setOpen] = useState('')
     const[content , setContent] = useState(false)

    return(
      <div className="w-full md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[1440px] min-h-screen">
           <div className="w-full h-[230px] sm:h-[350px] md:h-[440px] lg:h-[500px] xl:h-[582px] bg-cover bg-center relative" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${cocoa})`}}>
                <Navbar 
                   setOpen={setOpen}
                   setContent={setContent}
                   open={open}
                />
               <h1 className=' absolute left-[6%] top-[44%] text-[20px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[64px] text-[#FFFFFF] font-[Manrope] font-bold'>BOSTANI<p>Cocoa Farming</p></h1>
                                         
               { open === 'About'  && <AboutLinks setOpen={setOpen}/> }               
               { open === 'Companies' && <CompaniesLinks setOpen={setOpen}/> }
         </div>

        { !content &&
           <>
         <div className="w-full 2xl:w-[1440px] flex justify-center items-center">
            <div className="w-[98%] lg:w-[88%] xl:w-[1280px] flex flex-col justify-center py-[30px]">
                <div className='w-full flex xl:gap-0 gap-[18px] flex-col md:flex-col lg:flex-row xl:flex-row justify-between items-center py-[30px] lg:rotate-0 rotate-[180deg]'>
                    <BostaniChocolatePicture pic={cocoa2} diff={false}/>
                    <BostaniChocolateDescription
                        head='IVORY COAST - FROM BEAN TO EXPORT'
                        t1='In 2025, we will launch a new chocolate'
                        t2='processing facility in Ivory Coast, transforming'
                        t3='premium local cocoa beans into cocoa mass and'
                        t4=' cocoa butter'
                        width='562px'
                        height='430px'
                        diff={false}
                        diff2={true}
                    />
                </div>
                <div className=' flex items-center xl:gap-0 gap-[18px] justify-between py-[30px] flex-col md:flex-col lg:flex-row xl:flex-row'>
                    <BostaniChocolateDescription
                        head='Expanding Our Value Chain: From Internal Supply to Global Exports'
                        t1='This project is a significant step in expanding our'
                        t2='value chain, from sourcing to processing. We will'
                        t3='start by fulfilling internal needs and later scale to'
                        t4='global exports. A dedicated team is already'
                        t5='working on building operations with a focus on'
                        t6='quality, sustainability, and traceability'
                        width='600px'
                        height='440px'
                        diff={true}
                       diff2={false}
                    />
                    <BostaniChocolatePicture pic={cocoa1} diff={true}/>
             </div>
             
        </div>
      </div>
     <Footer/>
      </>
     }
   </div>
    )
}