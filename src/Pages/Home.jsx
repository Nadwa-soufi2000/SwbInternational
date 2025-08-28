import { useContext, useEffect, useState } from "react"
import slide1 from '../assets/slide1.png'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'
import slide4 from '../assets/slide4.jpg'
import slide5 from '../assets/slide5.jpg'
import slide6 from '../assets/slide6.png'
import h1 from '../assets/h1.png'
import h2 from '../assets/h2.png'
import h3 from '../assets/h3.png'
import h4 from '../assets/h4.png'
import h5 from '../assets/h5.png'
import h6 from '../assets/h6.png'
import h7 from '../assets/h7.png'
import h8 from '../assets/h8.png'
import h9 from'../assets/h9.png'
import h10 from'../assets/h10.png'
import h11 from'../assets/h11.png'
import da1 from '../assets/da1.png'
import da2 from '../assets/da2.png'
import da3 from '../assets/da3.png'
import da5 from '../assets/da5.png'
import da7 from '../assets/da7.png'
import last1 from '../assets/last1.png'
import last2 from '../assets/last2.png'
import last3 from '../assets/last3.png'
import last4 from '../assets/last4.png'
import last5 from '../assets/last5.png'
import last6 from '../assets/last6.png'
import last7 from '../assets/last7.png'
import swBg from '../assets/swBg.jpg'
import arrow from '../assets/arrow.png'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CompaniesLinks from '../Components/CompaniesLinks';
import AboutLinks from '../Components/AboutLinks';
import { Link } from "react-router-dom"
import ReadMoreComponent from '../Components/ReadMore'
import { Size } from "../Components/WindowSize"
import SliderBigScreen from "../Components/SliderBigScreen"
import SliderSmallScreen from '../Components/SliderSmallScreen.jsx'
import {MdOutlineArrowRightAlt} from "react-icons/md"


export default function Home()
{
    const[open , setOpen] = useState('')
    const[content , setContent] = useState(false)
    const[index , setIndex] = useState(0)

    const size = useContext(Size)
    
    const Arr1 = [h5 , h6 , h7 , h8]
    const Arr2 = [last4 , last5 , last6 , last7]
    const images = Arr1;

    const slider = [
        {
            'img': slide1,
            'title': 'BOSTANI',
            'title2': 'CHOCOLATE',
            'para' : 'our innovative, cutting-edge equipment and',
            'para2': 'crafting methods make all this possible'
        }
        ,
        {
            'img': slide2,
            'title': 'BOSTANI',
            'title2': 'REAL ESTATE',
            'para' : 'Our focus is on practical, human-centric robotics—merging',
            'para2': 'artificial intelligence, and accessibility to bring  next-generation technology into daily life.'
        }
        ,
        {
            'img': slide3,
            'title': 'ROBOTIC &',
            'title2': 'AI',
            'para' : 'our innovative, cutting-edge equipment and',
            'para2': 'crafting methods make all this possible'
        }
        ,
        {
            'img': slide4,
            'title': 'DAIRA',
            'title2': 'TECHNOLOGY',
            'para' : 'Daira Technology is an innovative and industrious research',
            'para2': 'and development firm situated in Istanbul, Turkey.'
        }
        ,
        {
            'img': slide5,
            'title': 'SAWTRU GROUP',
            'title2': 'PAKAGING',
            'para' : 'Sawtru Company Limited is one to produce development',
            'para2': 'and production gift box packaging manufacturer'
        }
        ,
        {
            'img': slide6,
            'title': 'BOSTANI',
            'title2': 'FOUNDATION',
            'para' : 'The Bostani Foundation stands as a beacon of hope',
            'para2': 'unity, and progress in underserved communities'
        }
    ]
       
        
         useEffect(() => {
                const intervl = setInterval(() => {
                setIndex((prev) => (prev + 1) % slider.length)
              }, 2000);
              return () => clearInterval(intervl);
         }, [slider.length])


    
    return (
        <div className="w-full md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[1440px] min-h-screen">
          <div className="w-full h-[340px] sm:h-[394px] md:h-[540px] lg:h-[640px] xl:h-[682px]  relative">
            <Navbar 
                setOpen={setOpen}
                setContent={setContent}
                open={open}
            />
           {
             slider.map((bg , i) => (
                <div key={i} className={`absolute w-full h-full inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out  ${i === index ? "opacity-100" : "opacity-0"} `} style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${bg.img})`}}>
                   <h1 className=' absolute left-[6%] top-[30%] text-[23px] sm:text-[36px] md:text-[40px] lg:text-[60px] xl:text-[64px] text-[#FFFFFF] font-[Manrope] font-bold'>{bg.title}<p>{bg.title2}</p></h1>  
                   <div className=' text-[#FFFFFF] text-[10px] md:text-[16px] lg:text-[20px] xl:text-[20px]  absolute left-[6%] top-[57%]'><p>{bg.para}</p><p>{bg.para2}</p></div> 
                   <Link className="w-[250px] sm:w-[294px] flex justify-center gap-4 items-center left-[-4%] top-[73%] sm:left-[-3%] sm:top-[72%] md:left-[2%] md:top-[70%] lg:left-[6%] lg:top-[70%] xl:left-[6%] xl:top-[70%] relative"><p className="text-[#FFFFFF] text-[17px] md:text-[20px] lg:text-[24px]">Discover Our Story</p><img className="w-[25px] h-[25px] md:h-[40px] md:w-[40px] lg:w-[60px] lg:h-[60px]" src={arrow}/></Link>
                   <div className="flex justify-center items-center gap-4 sm:gap-7  h-[15px] absolute left-[20%] sm:left-[30%] md:left-[20%] lg:left-[27%] xl:left-[30%] top-[90%]">
                        <span className="w-[20px] sm:w-[25px] md:w-[60px] h-[3px] rounded-[10px]" style={{backgroundColor: index === 0 ? '#a16207' : 'gray'}}></span>
                        <span className="w-[20px] sm:w-[25px] md:w-[60px] h-[3px] rounded-[10px]" style={{backgroundColor: index === 1 ? '#a16207' : 'gray'}}></span>
                        <span className="w-[20px] sm:w-[25px] md:w-[60px] h-[3px] rounded-[10px]" style={{backgroundColor: index === 2 ? '#a16207' : 'gray'}}></span>
                        <span className="w-[20px] sm:w-[25px] md:w-[60px] h-[3px] rounded-[10px]" style={{backgroundColor: index === 3 ? '#a16207' : 'gray'}}></span>
                        <span className="w-[20px] sm:w-[25px] md:w-[60px] h-[3px] rounded-[10px]" style={{backgroundColor: index === 4 ? '#a16207' : 'gray'}}></span>
                        <span className="w-[20px] sm:w-[25px] md:w-[60px] h-[3px] rounded-[10px]" style={{backgroundColor: index === 5 ? '#a16207' : 'gray'}}></span>
                   </div>                         
                   { open === 'About'  && <AboutLinks setOpen={setOpen}/> }               
                   { open === 'Companies' && <CompaniesLinks setOpen={setOpen}/> }
                </div>
                ))
             }
         </div>
         
            {
              !content &&
               <div className="w-full 2xl:w-[1440px] flex flex-col justify-center items-center">
                  <div className='w-[98%] pl-[10px] sm:pl-0 xl:w-[1300px] flex flex-col items-start text-[16px] sm:text-[20px] md:text-[26px] lg:text-[33px] xl:text-[36px] text-[#000000] py-[14px]'>
                      <p>SWB is a Dubai-based holding company with a global reach. Through its</p>
                      <p>network of branches and interrelated companies across the  world.</p>
                  </div>
                  <div className="w-[98%] gap-8 lg:w-[88%] xl:w-[1280px] flex flex-col justify-center items-center py-[30px]">
                    <ReadMoreComponent 
                      title='BOSTANI CHOCOLATE'
                      link='/bostaniChocolate'
                      p1='Bostani Chocolate has been a key player in Saudi Arabia for decades'
                      p2='now operating more than 60 shops across the Kingdom.'
                    />
                    <div className="flex w-[90%] md:w-[77%] lg:w-[90%] xl:w-full xl:flex-row lg:flex-row md:flex-col flex-col justify-center items-center gap-[20px]">
                        <div className="w-full h-[300px] md:h-[440px] md:w-[100%] md:[550px] lg:w-[330px] lg:h-[540px] xl:w-[460px] xl:h-[700px] ">
                            <img src={h1} className="w-full h-full"/>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4 xl:h-[700px] xl:w-[800px] lg:w-[600px] lg:h-[540px] md:w-full md:h-[550px] w-[full h-[440px]">
                            <img src={h2} className="w-full h-[330px]"/>
                            <div className="flex justify-center items-center gap-4 w-full">
                                <img src={h3} className="w-[50%] h-[180px] md:w-[50%] md:h-[240px] lg:w-[230px] lg:h-[280px] xl:w-[370px] xl:h-[330px]"/>
                                <img src={h4} className="w-[50%] h-[180px] md:w-[50%] md:h-[240px] lg:w-[230px] lg:h-[280px] xl:w-[370px] xl:h-[330px]"/>
                            </div>
                        </div>
                    </div>

                    <ReadMoreComponent
                      title='BOSTANI REAL ESTATE'
                      link='/bostaniRealEstate'
                    />

                    { size.windowSize > '768' &&
                        <SliderBigScreen 
                             Arr1={Arr1}
                             p1='Our multinational teams are working to deliver seamless adaptive'
                             p2='solutions that meet the needs of modern society'
                             pic1={h6}
                             pic2={h7}
                             pic3={h8}
                        />
                    }

                    {
                       size.windowSize < '768' &&
                       <SliderSmallScreen
                         images={images}
                         p1='Our multinational teams are working to deliver seamless adaptive'
                         p2='solutions that meet the needs of modern society'
                       />
                    }

                    <div className="flex w-full justify-center items-center gap-[20px] flex-wrap">
                        <div className="flex justify-center items-start gap-[20px] w-[250px] h-[210px] sm:w-[60%] sm:h-[300px] md:w-[340px] md:h-[400px] lg:w-[400px] lg:h-[450px] xl:w-[555px] xl:h-[500px]  flex-col">
                            <h1 className="text-[17px] sm:text-[20px] md:text-[30px] lg:text-[40px] xl:text-[47px] text-[#A2948A] flex justify-center items-center gap-8 ">ROBOTIC & AI <span className="w-[20px] sm:w-[40px] md:w-[50px] lg:w-[60px] xl:w-[70px] h-[3px] rounded-[10px] block" style={{backgroundColor: '#A2948A'}}></span> </h1>
                            <div className="flex flex-col items-start justify-center w-full text-[15px] md:text-[16px] lg:text-[20px] xl:text-[22px] text-[#000000]">
                               <p>At SWBAI Robotics, we are leading innovation across borders with</p>
                               <p>advanced robotics and AI-driven solutions</p>
                             </div>
                              <Link to='/Robotic' className='rounded-[11px] flex justify-center items-center bg-gray-500 text-[#FFFFFF] text-[12px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[22px] w-[84px] h-[30px] sm:w-[170px] sm:h-[40px] md:w-[180px] md:h-[45px] lg:w-[205px] lg:h-[56px]  xl:w-[205px] xl:h-[56px]  gap-[3px] hover:border-[1px] hover:border-solid hover:border-[#FFFFFF]'>Read More <MdOutlineArrowRightAlt className='fill-current text-[#FFFFFF] mt-[3px] sm:mt-[4px]'/></Link>    
                        </div>
                        <div className='w-[250px] h-[220px] sm:w-[60%] sm:h-[310px] md:w-[340px] md:h-[410px] lg:w-[400px] lg:h-[480px] xl:w-[555px] xl:h-[580px]'><img src={h9} className="w-full h-full"/></div>
                        <div className='w-[250px] h-[220px] sm:w-[60%] sm:h-[310px] md:w-[340px] md:h-[410px] lg:w-[400px] lg:h-[480px] xl:w-[555px] xl:h-[580px]'><img src={h10} className="w-full h-full"/></div>
                        <div className='w-[250px] h-[220px] sm:w-[60%] sm:h-[310px] md:w-[340px] md:h-[410px] lg:w-[400px] lg:h-[480px] xl:w-[555px] xl:h-[580px]'><img src={h11} className="w-full h-full"/></div>
                    </div>
                    <ReadMoreComponent 
                      title='DAIRA TECHNOLOGY'
                      link='/dairaTechnology'
                      p1='Daira Technology is a dynamic tech company under SWB Development, focused on digital infrastructure, cloud'
                      p2='solutions, and enterprise IT services.'
                    />
                    <div className="flex w-[88%] md:w-[60%] lg:w-[90%] xl:w-full xl:flex-row lg:flex-row md:flex-col flex-col justify-center items-center gap-[20px]">
                        <div className="w-full h-[300px] md:h-[440px] md:w-[100%] md:[550px] lg:w-[420px] lg:h-[540px] xl:w-[460px] xl:h-[700px] ">
                            <img src={da1} className="w-full h-full"/>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4 xl:h-[700px] xl:w-[800px] lg:w-[560px]  lg:h-[580px] md:w-full md:h-[640px] w-full h-[540px] sm:h-[510px]">
                            <div className="flex justify-center items-center gap-4 w-full">
                               <div className="py-[14px] bg-[#ddd] rounded-[10px] xl:w-[370px] lg:w-[230px]  md:w-[50%] w-[50%]"><img src={da3} className="rounded-[10px] w-full h-[140px] sm:h-[170px] md:h-[240px]  lg:h-[210px]  xl:h-[280px]"/><p className="text-center text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] text-[#000000]">Liquid Chocolate Filling Machine</p></div>
                               <div className="py-[14px] bg-[#ddd] rounded-[10px] xl:w-[370px] lg:w-[230px]  md:w-[50%] w-[50%]"><img src={da5} className=" rounded-[10px] w-full h-[140px] sm:h-[170px] md:h-[240px] lg:h-[210px]  xl:h-[280px]"/><p className="text-center text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] text-[#000000]">Automatic Caramel Making Machine</p></div>
                            </div>
                            <div className="flex justify-center items-center gap-4 w-full">
                                <div className="py-[14px] bg-[#ddd] rounded-[10px] xl:w-[370px] lg:w-[230px]  md:w-[50%] w-[50%]"><img src={da2} className=" rounded-[10px] w-full h-[140px] sm:h-[170px] md:h-[240px]  lg:h-[210px]  xl:h-[280px]"/><p className="text-center text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] text-[#000000]">Chocolate Sifting Machine</p></div>
                                <div className="py-[14px] bg-[#ddd] rounded-[10px] xl:w-[370px] lg:w-[230px]  md:w-[50%] w-[50%]"><img src={da7} className="rounded-[10px] w-full h-[140px] sm:h-[170px]  md:h-[240px] lg:h-[210px]  xl:h-[280px]"/><p className="text-center text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] text-[#000000]">Cocoa Bean Roaster Machine</p></div>
                            </div>
                        </div>
                    </div>
                    <ReadMoreComponent 
                      title='SAWTRU GROUP PACKAGING'
                      link='/dairaTechnology'
                      p1='Recognizing China’s position as one of the world most dynamic and fast-evolving markets,'
                      p2='SWB made the strategic decision to establish a strong presence there.'
                    />
                    <div className="flex w-[88%] md:w-[60%] lg:w-[90%] xl:w-full xl:flex-row lg:flex-row md:flex-col flex-col justify-center items-center gap-[20px]">
                        <div className="w-full h-[300px] md:h-[440px] md:w-[100%] md:[550px] lg:w-[430px] lg:h-[540px] xl:w-[660px] xl:h-[700px] ">
                            <img src={swBg} className="w-full h-full bg-black/60"/>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4 xl:h-[700px] xl:w-[700px] lg:w-[500px] lg:h-[540px] md:w-full md:h-[550px] w-full h-[440px]">
                            <div className="flex justify-center items-center gap-4 w-full">
                                <img src={last1} className="w-[50%] h-[160px] md:w-[50%] md:h-[240px] lg:w-[230px] lg:h-[280px] xl:w-[370px] xl:h-[330px]"/>
                                <img src={last2} className="w-[50%] h-[160px] md:w-[50%] md:h-[240px] lg:w-[230px] lg:h-[280px] xl:w-[370px] xl:h-[330px]"/>
                            </div>
                            <img src={last3} className="w-full h-[290px]"/>
                        </div>
                    </div>
                    
                     <ReadMoreComponent
                      title='BOSTANI FOUNDATION'
                      link='/bostaniFoundation'
                    />

                    { size.windowSize > '768' &&
                        <SliderBigScreen 
                             Arr1={Arr2}
                             p1='the Bostani Foundation in Ghana is our non-profit initiaitve, created to'
                             p2='support cocoa communities through education, sustainable farming'
                             pic1={last5}
                             pic2={last6}
                             pic3={last7}
                        />
                    }

                    {
                       size.windowSize < '768' &&
                       <SliderSmallScreen
                         images={Arr2}
                         p1='the Bostani Foundation in Ghana is our non-profit initiaitve, created to'
                         p2='support cocoa communities through education, sustainable farming'
                       />
                    }
                  </div>
                  <Footer/>
               </div>
            }

        </div>
    )
}