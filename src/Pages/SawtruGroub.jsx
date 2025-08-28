import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CompaniesLinks from '../Components/CompaniesLinks';
import AboutLinks from '../Components/AboutLinks';
import BostaniChocolatePicture from '../Components/BostaniChocolatePicture.jsx'
import BostaniChocolateDescription from '../Components/BostaniChocolateDescription.jsx'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useState } from 'react'
import swBg from '../assets/swBg.jpg'
import sw1 from '../assets/sw1.png'
import sw2 from '../assets/sw2.png'
import sw3 from '../assets/sw3.png'
import sw4 from '../assets/sw4.png'
import sw5 from '../assets/sw5.png'


export default function SawtruGroub()
{
    const[open , setOpen] = useState('')
    const[content , setContent] = useState(false)


    return(
          <div className=' w-full md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[1440px] min-h-screen'>
                <div className="w-full h-[230px] sm:h-[350px] md:h-[440px] lg:h-[500px] xl:h-[582px] bg-cover bg-center relative" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${swBg})`}}>
                    <Navbar 
                      setOpen={setOpen}
                      setContent={setContent}
                      open={open}
                    />
                    <h1 className=' absolute left-[6%] top-[44%] text-[17px] sm:text-[35px] md:text-[45px] lg:text-[60px] xl:text-[64px] text-[#FFFFFF] font-[Manrope] font-bold'>SAWTRU GROUP PACKAGING &<p>DECORATION</p></h1> 
                   <div className='rounded-full flex justify-center items-center bg-gray-500 text-[#FFFFFF] text-[13px] md:text-[16px] lg:text-[20px] xl:text-[20px] w-[160px] h-[35px] md:w-[200px] md:h-[40px] lg:w-[290px] lg:h-[50px] xl:w-[305px] xl:h-[56px] absolute left-[6%] top-[80%] underline gap-[3px]'>visit our website <MdOutlineArrowRightAlt className='fill-current text-[#FFFFFF] text-[25px] mt-[10px]'/></div>                        
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
                            head='SWB in China'
                            t1='Recognizing China’s position as one of the world’s most'
                            t2='dynamic and fast-evolving markets, SWB made the'
                            t3='strategic decision to  establish a strong presence there.'
                            t4='In a country where innovation, technology, and creativity'
                            t5='evolve daily, our presence in China has opened new'
                            t6='horizons and enriched  our global vision.'
                            width='600px'
                            height='440px'
                            diff={true}
                            diff2={false}
                        />
                        <BostaniChocolatePicture pic={sw1} diff={true}/>
                     </div>
          
                     <div className='w-full flex xl:gap-0 gap-[18px] flex-col md:flex-col lg:flex-row xl:flex-row justify-between items-center py-[30px] lg:rotate-0 rotate-[180deg]'>
                         <BostaniChocolatePicture pic={sw2} diff={false}/>
                         <BostaniChocolateDescription
                            head='Sawtru Luxury Packaging Team'
                            t1='SWB operates through a network of independent'
                            t2='companies across various sectors. Sawtru Group, part of'
                            t3='this network, specializes in premium packaging and'
                            t4='decoration, offering personalized luxury boxes, wooden'
                            t5='trays, and custom packaging with global standards of'
                            t6='creativity and service'
                            width='582px'
                            height='478px'
                            diff={false}
                            diff2={false}
                         />
                     </div>
          
                     <div className='flex justify-between items-center gap-[18px] xl:gap-0 w-full py-[30px] flex-col md:flex-col lg:flex-row xl:flex-row'>
                           <img src={sw3} className='w-[260px] h-[260px] md:w-[580px] md:h-[580px] lg:w-[50%] lg:h-[460px] xl:w-[650px] xl:h-[450px] rounded-[10px]'/>
                           <img src={sw4} className='w-[260px] h-[260px] md:w-[580px] md:h-[580px] lg:w-[50%] lg:h-[460px] xl:w-[580px] xl:h-[540px] rounded-[10px]'/>
                     </div>
          
                     <div className=' flex items-center xl:gap-0 gap-[18px] justify-between py-[30px] flex-col md:flex-col lg:flex-row xl:flex-row'>
                          <BostaniChocolateDescription
                             head='Design for Global Impact'
                             t1='SWBs talented design team drives both internal and'
                             t2='external projects, creating new concepts, brand identities,'
                             t3='and packaging innovations. With a highly efficient team in'
                             t4='China, SWB delivers fast, precise results while expanding'
                             t5='its global reach and understanding of diverse markets'
                             t6='and trends.'
                             width='600px'
                             height='440px'
                             diff={true}
                             diff2={false}
                           />
                           <BostaniChocolatePicture pic={sw5} diff={true}/>
                      </div>
                 </div>
             </div>
             <Footer/>
           </>
        }
   </div> 
    )
}