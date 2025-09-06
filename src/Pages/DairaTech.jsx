import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CompaniesLinks from '../Components/CompaniesLinks';
import AboutLinks from '../Components/AboutLinks';
import BostaniChocolatePicture from '../Components/BostaniChocolatePicture.jsx'
import BostaniChocolateDescription from '../Components/BostaniChocolateDescription.jsx'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useState } from 'react'
import daBg from '../assets/daBg.jpg'
import da1 from '../assets/da1.png'
import da2 from '../assets/da2.png'
import da3 from '../assets/da3.png'
import da4 from '../assets/da4.png'
import da5 from '../assets/da5.png'
import da6 from '../assets/da6.png'
import da7 from '../assets/da7.png'
import { Link } from 'react-router-dom';


export default function DairaTech()
{
    const[open , setOpen] = useState('')
    const[content , setContent] = useState(false)
    
    const ArrRobots = [
        {
            'img': da4,
            'title':'Hygiene Station'
        }
        ,
        {
            'img': da3,
            'title':'Liquid Chocolate Filing Machine'
        }
        ,
        {
            'img': da2,
            'title':'Chocolate Sifting Machine'
        }
        ,
        {
            'img': da7,
            'title':'Cocoa Bean Roaster Machine'
        }
        ,
        {
            'img': da6,
            'title':'Tempering Machine'
        }
        ,
        {
            'img': da5,
            'title':'Automatic Caramel Making Machine'
        }
    ]
    console.log(ArrRobots)
    
    const showRobots = ArrRobots.map((index , key) => 
                                    <div key={key} className='w-[255px] h-[320px] sm:w-[260px] sm:h-[360px] md:w-[280px] md:h-[400px] lg:w-[300px] lg:h-[430px] xl:w-[388px] xl:h-[462px] shadow-xl bg-[#f0ecea] rounded-[10px] hover:scale-[1.05] duration-[1s]'>
                                        <img className='w-full h-[240px] sm:h-[260px] md:h-[290px] lg:h-[330px] xl:h-[390px]' src={index.img}/>
                                        <p className='text-center text-[#A2948A] pt-[20px] text-[17px] sm:text-[17px] md:text-[20px] lg:text-[20px] xl:text-[22px]'>{index.title}</p>
                                    </div>
                                )                 

    return(
        <div className=' w-full md:w-[100%] lg:w-[100%] 2xl:w-[1700px] xl:w-[1510px] min-h-screen'>
            <div className="w-full h-[230px] sm:h-[350px] md:h-[440px] lg:h-[500px] xl:h-[582px] bg-cover bg-center relative" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(${daBg})`}}>
                 <Navbar 
                    setOpen={setOpen}
                    setContent={setContent}
                    open={open}
                 />
                 <h1 className=' absolute left-[6%] top-[44%] text-[20px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[64px] text-[#FFFFFF] font-[Manrope] font-bold'>DAIRA TECHNOLOGY</h1> 
                 <Link to='https://www.bostani.com/ar-sa' className='rounded-full flex justify-center items-center bg-gray-500 text-[#FFFFFF] text-[13px] md:text-[16px] lg:text-[20px] xl:text-[20px] w-[170px] h-[40px] md:w-[200px] md:h-[40px] lg:w-[290px] lg:h-[50px] xl:w-[305px] xl:h-[56px] absolute left-[6%] top-[70%] underline gap-[3px]'>visit our website <MdOutlineArrowRightAlt className='fill-current text-[#FFFFFF] text-[25px] mt-[10px]'/></Link>                        
                 { open === 'About'  && <AboutLinks setOpen={setOpen}/> }               
                 { open === 'Companies' && <CompaniesLinks setOpen={setOpen}/> }
             </div>
             {
                !content &&
                <>
                 <div className='w-full xl:w-[1510px] 2xl:w-[1700px] flex  justify-center items-center'>
                    <div className='w-[98%] lg:w-[88%] xl:w-[1280px] 2xl:w-[80%] flex flex-col justify-center py-[30px] gap-[15px]'>
                        <div className=' flex items-center xl:gap-0 gap-[18px] justify-between py-[30px] flex-col md:flex-col lg:flex-row xl:flex-row'>
                             <BostaniChocolateDescription
                                head='THE POWER OF SMART SOLUTIONS, ONE INNOVATION AT A TIME'
                                t1='Daira Technology, based in Istanbul, focuses on developing'
                                t2='advanced machines that combine automation, AI, and IoT to'
                                t3='improve efficiency in food production. The company aims to boost'
                                t4='productivity by eliminating unproductive tasks through innovative'
                                t5='tech solutions'
                                width='600px'
                                height='440px'
                                diff={true}
                                diff2={false}
                            />
                            <BostaniChocolatePicture pic={da1} diff={true}/>
                        </div>
                        <div className='w-full flex justify-center md:justify-center lg:justify-start xl:justify-start items-center'>
                            <h1 className='font-bold text-[18px] sm:text-[20px] md:text-[33px] lg:text-[44px] xl:text-[48px] text-[#A2948A]'>Innovative products from DAIRA</h1>
                        </div>
                        <div className='flex justify-center items-center flex-wrap w-full xl:w-[1280px] 2xl:w-[100%] p-[20px] gap-[34px]'>
                            {
                                showRobots
                            }
                        </div>
                    </div>
                 </div>
                 <Footer/>
                </>
             }
        </div>
    )
}
