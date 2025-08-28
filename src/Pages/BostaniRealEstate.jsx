import { useState } from 'react'
import r1 from '../assets/r1.jpeg'
import r2 from '../assets/r2.jpeg'
import r3 from '../assets/r3.jpeg'
import r4 from '../assets/r4.jpeg'
import r5 from '../assets/r5.jpeg'
import r6 from '../assets/r6.jpg'
import Navbar from '../Components/Navbar'
import AboutLinks from '../Components/AboutLinks'
import CompaniesLinks from '../Components/CompaniesLinks'
import BostaniChocolateDescription from '../Components/BostaniChocolateDescription'

export default function BostaniRealEstate()
{
    const[open , setOpen] = useState('')
    const[content , setContent] = useState(false)


    return(
       <div className='w-full md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[1440px] min-h-screen'>
         <div className="w-full h-[230px] sm:h-[350px] md:h-[440px] lg:h-[500px] xl:h-[582px] bg-cover bg-center relative" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${r3})`}}>
             <Navbar
                setOpen={setOpen}
                setContent={setContent}
                open={open}
             />
             <h1 className=' absolute left-[6%] top-[44%] text-[20px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[64px] text-[#FFFFFF] font-[Manrope] font-bold'>BOSTANI REAL ESTATE</h1> 
             { open === 'About'  && <AboutLinks setOpen={setOpen}/> }               
             { open === 'Companies' && <CompaniesLinks setOpen={setOpen}/> }
        </div>
       {
        !content &&
          <div className='w-full 2xl:w-[1440px] flex flex-col justify-center items-center'>
          <div className='w-[98%] lg:w-[88%] xl:w-[1281px] flex flex-col items-start py-[20px]'>
             <div className='w-full flex  items-center justify-between py-[20px] flex-col md:flex-col lg:flex-row xl:flex-row xl:gap-0 gap-[18px]'>
                <img src={r5} className='w-[260px] h-[260px] md:w-[580px] md:h-[580px] lg:w-[480px] lg:h-[400px] xl:w-[710px] xl:h-[405px] rounded-[10px]'/>
                <BostaniChocolateDescription
                 head='Real Estate Projects'
                 t1='Our Real Estate division is committed ot the'
                 t2='development of cutting-edge architectural'
                 t3='projects across strategic international'
                 t4='markets, including France, Belgium, the'
                 t5='USA, Europe, Dubai, the Gulf region, and'
                 t6='China'
                 width='467px'
                 height='405px'
                 diff={true}
                 diff2={true}
                />
            </div>
         </div>
         </div>
            
        }
      </div>
    )
}