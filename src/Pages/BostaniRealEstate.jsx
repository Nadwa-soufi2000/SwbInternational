import { useContext, useState } from 'react'
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
import Footer from '../Components/Footer'
import SliderSmallScreen from '../Components/SliderSmallScreen.jsx'
import { Size } from '../Components/WindowSize'

export default function BostaniRealEstate()
{
    const[open , setOpen] = useState('')
    const[content , setContent] = useState(false)

    const images = [r2 , r3 , r4]
    const size = useContext(Size)

    return(
       <div className='w-full md:w-[100%] lg:w-[100%] 2xl:w-[1700px] xl:w-[1510px] min-h-screen'>
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
          <div className='w-full xl:w-[1510px] 2xl:w-[1700px] flex flex-col justify-center items-center'>
          <div className='w-[98%] lg:w-[88%] xl:w-[1281px] 2xl:w-[74%] flex flex-col items-start py-[20px] gap-[20px]'>
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
            { size.windowSize > '768' &&
               <div className='w-full flex justify-center items-center gap-[20px]'>
               <img src={r2} className='md:w-[240px] md:h-[280px]  xl:flex-nowrap lg:w-[360px] lg:h-[360px] xl:w-[500px] xl:h-[500px] rounded-[10px]'/>
               <img src={r3} className='md:w-[240px] md:h-[280px] lg:w-[360px] lg:h-[360px] xl:w-[500px] xl:h-[500px] rounded-[10px]'/>
               <img src={r4} className='md:w-[240px] md:h-[280px] lg:w-[360px] lg:h-[360px] xl:w-[500px] xl:h-[500px] rounded-[10px]'/>
            </div>
            }
            {
               size.windowSize < '768' &&
               <SliderSmallScreen images={images} />
            }

            <div className='w-full flex flex-col justify-center items-start gap-[20px]'>
               <div className='w-[100%] lg:w-[580px] xl:w-[755px] flex flex-col items-start sm:pl-0 pl-[10px]'>
                  <h1 className='text-[17px] md:text-[20px] lg:text-[30px] xl:text-[40px] font-medium text-[#A2948A]'>A TIMELESS ESCAPE</h1>
                  <p className='text-[13px] md:text-[17px] lg:text-[20px] xl:text-[24px] font-medium text-[#000000]'>OUR FRENCH CHATEAU PROJECT</p>
               </div>
                <div className='w-[100%] md:w-[100%] rounded-[10px] lg:w-[100%] xl:w-[1281px] 2xl:w-[100%] h-[230px] sm:h-[300px] md:h-[440px] lg:h-[500px] xl:h-[582px] bg-cover bg-center' style={{backgroundImage:`url(${r1})`}}></div>
            </div>
            <div className='w-full flex  items-center justify-between py-[20px] flex-col md:flex-col lg:flex-row xl:flex-row xl:gap-0 gap-[18px]'>
                <img src={r6} className='w-[260px] h-[260px] md:w-[580px] md:h-[580px] lg:w-[480px] lg:h-[400px] xl:w-[710px] xl:h-[405px] rounded-[10px]'/>
                <BostaniChocolateDescription
                 t1='We are transforming a prestigious'
                 t2='chateau in the South of France into '
                 t3='a unique luxury hotel, set to open in 2026.'
                 t4='Guests will live the charm of a historic'
                 t5='French castle while enjoying'
                 t6='fine gastronomy at our future'
                 width='467px'
                 height='405px'
                 diff={true}
                 diff2={true}
                />
            </div>
         </div>
         <Footer/>
         </div>     
        }
      </div>
    )
}
