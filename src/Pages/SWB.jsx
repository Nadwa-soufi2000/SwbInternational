
import { useState } from 'react'
import Description from '../Components/Description'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Picture from '../Components/Picture'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
import s4 from '../assets/s4.png'
import s5 from '../assets/s5.png'
import { IoClose } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import AboutLinks from '../Components/AboutLinks'
import CompaniesLinks from '../Components/CompaniesLinks'

export default function SWB()
{
  
  const[open , setOpen] = useState('')
  const[content , setContent] = useState(false)
  console.log(open)

  //const closeList = () =>
  //{
   // setOpen('');
  //}
  
    return(
        <div className=" w-full md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[1440px] min-h-screen">
          <div className="w-full h-[230px] sm:h-[350px] md:h-[440px] lg:h-[500px] xl:h-[582px] bg-cover bg-center relative" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.2)),url(${s1})`}} >
             <Navbar 
                 setOpen={setOpen}
                 setContent={setContent}
                 open={open}
                 />
             <h1 className=' absolute left-[6%] top-[44%] text-[20px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[64px] text-[#FFFFFF] font-[Manrope] font-bold'>OUR STORY</h1>
            
              { open === 'About'  && <AboutLinks setOpen={setOpen}/> }
              { open === 'Companies' && <CompaniesLinks setOpen={setOpen}/> }
            
          </div>
        { !content &&
          <>
          <div className='p-[20px] w-full flex flex-col justify-center items-center'>
            <h1 className='text-center text-[16px] sm:text-[20px] md:text-[30px] lg:text-[40px] xl:text-[48px] text-[#000000] font-[Roboto] font-semibold'>THE STORY BEHIND THE BRAND</h1>
            <div className='mt-[3px] md:w-[100%] lg:w-[800px] xl:w-[1061px] h-[228px] text-[#292D32] text-[14px] md:text-[17px] lg:text-[17] xl:text-[20px] flex flex-col justify-center items-center gap-[2px] sm:gap-[30px]'>
                <p className='text-center'>Raised in Aleppo, a city rish in cultural diversity and craftmanship, the founder of SWB spent his early years</p> 
                <p className='text-center'>immersed in his family’s chocolate factory. while formally trained in law, he developed a rare perspective that</p>
                <p className='text-center'> merges discpline with creativity-a balanced shape by tradition and personal passion</p>
           </div>
          </div>
          <div className='w-full sm:mt-0 mt-[40px] h-[230px] sm:h-[350px] md:h-[440px] lg:h-[500px] xl:h-[582px] bg-cover bg-center' style={{backgroundImage:`url(${s2})`}}></div>
          <div className='flex flex-col lg:flex-row  justify-center items-center rotate-[180deg] lg:rotate-0 py-[18px]   gap-[5px]'>
            <Picture img={s3} diff={false}/>
            <Description
             title="A New Vision Is Born"
             line1="After moving to saudi Arabia, he discoverd a gap in the luxury gifiting"
             line2="market: the absence of emotional depth and personal expression, Drawing"
             line3="on his roots in chocolate-making anc’rs refined taste, he envisioned a new"
             line4="experience-elegant chocolate gifts that tell stories and express identity"
             line5="From this vision, Bastani was born."
             diff={false}
            />
          </div>

          <div className='flex flex-col lg:flex-row  justify-center items-center py-[18px]  gap-[5px] '>
            <Description
             title="Trust as a Core Value"
             line1="Beyond business the heart of SWB lies in its founders belief in"
             line2="People he has a gift for spotting potential and empowering"
             line3="others to lead with confidence and creativity, A pivotal moment"
             line4="came when he entrusted his brother to lead Bastani Saudi- "
             line5="merging family values with strategic vision."
             diff={true}
            />
             <Picture img={s4}  diff={true}/>
          </div>

           <div className='flex flex-col lg:flex-row  justify-center items-center py-[18px]  gap-[5px] rotate-[180deg] lg:rotate-0'>
            <Picture img={s5} diff={false}/>
            <Description
             line1="Across borders, the founder followed the same principle: find the"
             line2="right leaders and let them carry the vision forward. Today, SWB is"
             line3="a collectiveof thriving ventures powered by empowered teams."
             line4="while the founder remains involved, his leadership is guided by vision"
             line5="not control-building a legacy through trust, empowerment, and shared purpose."
             diff={false}
            />
          </div>
          <Footer/>
          </>}
        </div>
    )
}