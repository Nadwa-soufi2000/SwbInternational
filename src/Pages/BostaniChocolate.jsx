import { useContext, useEffect, useState } from 'react'
import dubai from '../assets/dubai.png'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer.jsx'
import BostaniChocolatePicture from '../Components/BostaniChocolatePicture.jsx'
import BostaniChocolateDescription from '../Components/BostaniChocolateDescription.jsx'
import bostaniBg from '../assets/bostaniBg.png'
import bostaniBg2 from '../assets/bostaniBg2.png'
import bostaniBg3 from '../assets/bostaniBg3.png'
import love from '../assets/love.png'
import boxs from '../assets/boxs.png'
import sweet from '../assets/sweet.png'
import sweet2 from '../assets/sweet2.png'
import sweet3 from '../assets/sweet3.png'
import chocoBg from '../assets/chocoBg.jpg'
import CompaniesLinks from '../Components/CompaniesLinks.jsx'
import AboutLinks from '../Components/AboutLinks.jsx'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Size } from '../Components/WindowSize.jsx'
import b1 from '../assets/b6.png'
import b2 from '../assets/b2.png'
import b3 from '../assets/b3.png'
import b4 from '../assets/b4.png'
import b5 from '../assets/b5.png'
import b6 from '../assets/b6.png'
import b7 from '../assets/b7.png'
import SliderBigScreen from '../Components/SliderBigScreen.jsx'
import SliderSmallScreen from '../Components/SliderSmallScreen.jsx'
import { Link } from 'react-router-dom'

export default function BostaniChocolate() 
{
    const[open , setOpen] = useState('')
    const[content , setContent] = useState(false)
    const[index , setIndex] = useState(0)
    const[filter , setFilter] = useState('Middle East')

    const Arr1 = [bostaniBg3 , sweet , sweet2 , sweet3]
    const images = Arr1;
    const Arr2 = [bostaniBg , bostaniBg2 , bostaniBg3 , sweet , sweet2 , sweet3]
    const size = useContext(Size)

     useEffect(() => {
       const intervl = setInterval(() => {
        setIndex((prev) => (prev + 1) % Arr2.length)
       }, 1600);
       return () => clearInterval(intervl);
     }, [Arr2.length])

    const MiddleEast = () =>
    {
      setFilter('Middle East')
    }

    const Europe = () =>
    {
       setFilter('Europe')
    }
    

    return(
        <div className='w-full md:w-[100%] lg:w-[100%] 2xl:w-[1700px] xl:w-[1510px] min-h-screen'>
            <div className="w-full h-[230px] sm:h-[350px] md:h-[440px] lg:h-[500px] xl:h-[582px] bg-cover bg-center relative" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${chocoBg})`}}>
                 <Navbar 
                     setOpen={setOpen}
                     setContent={setContent}
                     open={open}
                 />
                 <h1 className=' absolute left-[6%] top-[44%] text-[20px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[64px] text-[#FFFFFF] font-[Manrope] font-bold'>BOSTANI CHOCOLATE</h1>  
                 <Link to='https://www.bostani.com/ar-sa' className='rounded-full flex justify-center items-center bg-gray-500 text-[#FFFFFF] text-[13px] md:text-[16px] lg:text-[20px] xl:text-[20px] w-[170px] h-[40px] md:w-[200px] md:h-[40px] lg:w-[290px] lg:h-[50px] xl:w-[305px] xl:h-[56px] absolute left-[6%] top-[70%] underline gap-[3px]'>visit our website <MdOutlineArrowRightAlt className='fill-current text-[#FFFFFF] text-[25px] mt-[10px]'/></Link>                       
                 { open === 'About'  && <AboutLinks setOpen={setOpen}/> }               
                 { open === 'Companies' && <CompaniesLinks setOpen={setOpen}/> }
            </div>

           { !content &&
            <div className='w-full xl:w-[1510px] 2xl:w-[1700px] flex flex-col justify-center items-center'>
         
            <div className='w-[98%] pl-[10px] sm:pl-0 xl:w-[1300px] flex flex-col items-start text-[16px] sm:text-[20px] md:text-[26px] lg:text-[33px] xl:text-[36px] text-[#000000] py-[14px]'>
                <p>Bostani is a story of passion transformed into reality, beginning with a simple love </p>
                <p>for chocolate and evolving into a global company with a strong presence.</p>
            </div>
            
            <div className='flex items-center justify-start w-[98%] xl:w-[1300px] py-[20px]'>
            <div className='sm:pl-0 pl-[10px] w-[70%] md:w-[39%] lg:w-[570px] flex items-center justify-start gap-[23px] md:gap-[33px] lg:gap-[40px] xl:gap-[40px]'>
                <p className={`h-full ${filter === 'Middle East' ? 'border-b-[#A2948A] border-b-solid border-b-[1px]' : 'no-border'} text-[17px] sm:text-[20px] md:text-[26px] lg:text-[39px] xl:text-[48px] text-[#A2948A] font-medium`} onClick={() => MiddleEast()}>Middle East</p>
                <p className={`font-medium text-[17px] sm:text-[20px] md:text-[26px] lg:text-[39px] xl:text-[48px] text-[#A2948A] h-full  ${filter === 'Europe' ? 'border-b-[#A2948A] border-b-solid border-b-[1px]' : 'no-border'}`} onClick={() => Europe()}>Europe</p>
            </div>
            </div>
             {
              filter === 'Middle East' && 
             <>
            <div className='w-[98%] lg:w-[88%] xl:w-[1280px] 2xl:w-[77%] flex flex-col justify-center py-[30px]'>
                <div className='w-[100%] lg:w-[580px] xl:w-[630px] flex flex-col items-start sm:items-center md:items-center lg:items-start sm:pl-0 pl-[8px]'>
                    <h2 className='tracking-wide text-[17px] md:text-[20px] lg:text-[30px] xl:text-[40px] font-medium text-[#000000]'>SAUDI ARABIA</h2>
                    <p className='text-[13px] md:text-[17px] lg:text-[20px] xl:text-[24px] font-medium text-[#000000]'>Bostani Chocolate-A Trusted Namein Saudi Arabia</p>
                </div>
                <div className='w-full flex xl:gap-0 gap-[18px] flex-col md:flex-col lg:flex-row xl:flex-row justify-between items-center py-[30px] lg:rotate-0 rotate-[180deg]'>
                 <div className="w-[260px] h-[260px] md:w-[580px] md:h-[580px] lg:w-[440px] lg:h-[460px] xl:h-[478px] xl:w-[582px] relative " style={{rotate: size.windowSize > '1024' ? '0deg' : '180deg'}} >
                      {
                        Arr2.map((bg , i) => (
                          <div key={i} className={`absolute w-full h-full inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out rounded-[10px] ${i === index ? "opacity-100" : "opacity-0"} `} style={{backgroundImage: `url(${bg})`}}></div>
                        ))
                      }
                   </div>
                    {/*<BostaniChocolatePicture pic={bostaniBg2} diff={false}/>*/}
                    <BostaniChocolateDescription
                      head='Bostani Chocolate'
                      t1='a trusted brand in Saudi Arabia for decades, operates'
                      t2='over 60 stores nationwide Bostani prioritizes customer'
                      t3='satisfaction by providing personalized, luxurious'
                      t4='experiences. Expanding beyond chocolates, it is also'
                      t5='venturing into cafés, training centers, and pastry concepts,'
                      t6='further solidifying its presence across the Gulf.'
                      width='582px'
                      height='478px'
                      diff={false}
                      diff2={false}
                    />
                </div>
                <div className=' flex items-center xl:gap-0 gap-[18px] justify-between py-[30px] flex-col md:flex-col lg:flex-row xl:flex-row'>
                    <BostaniChocolateDescription
                      head='Bostani Pioneer in Customized Seasonal Chocolate'
                      t1='The brand is known as a leader in the chocolate industry'
                      t2='and is also recognized for creating unique gifts. It has'
                      t3='become a trusted name for special occasions and'
                      t4='corporate gifts, offering custom seasonal designs for events'
                      t5='such as Eid al-Fitr, Valentines Day, and New Years.'
                       width='600px'
                      height='440px'
                      diff={true}
                      diff2={false}
                    />
                    <BostaniChocolatePicture pic={bostaniBg2} diff={true}/>
                </div>
                <div className='flex justify-between items-center gap-[18px] xl:gap-0 w-full py-[30px] flex-col md:flex-col lg:flex-row xl:flex-row'>
                    <img src={love} className='w-[260px] h-[260px] md:w-[580px] md:h-[580px] lg:w-[50%] lg:h-[460px] xl:w-[650px] xl:h-[540px] rounded-[10px]'/>
                    <img src={boxs} className='w-[260px] h-[260px] md:w-[580px] md:h-[580px] lg:w-[50%] lg:h-[460px] xl:w-[580px] xl:h-[540px] rounded-[10px]'/>
                </div>
            </div>

            <div className='w-[98%] lg:w-[88%] xl:w-[1281px] 2xl:w-[80%] flex flex-col items-start py-[20px]'>
               <div className='w-[100%] lg:w-[580px] xl:w-[755px] flex flex-col items-start sm:items-center md:items-center lg:items-start sm:pl-0 pl-[10px]'>
                  <h2 className='tracking-wide  text-[17px] md:text-[20px] lg:text-[30px] xl:text-[40px] font-medium text-[#000000]'>UNITED ARAB EMIRATES</h2>
                  <p className='text-[13px] md:text-[17px] lg:text-[20px] xl:text-[24px] font-medium text-[#000000]'>Swb in Dubai-At the Heart of Innovation and Global Opportunity</p>
               </div>
               <div className='w-full flex  items-center justify-between py-[20px] flex-col md:flex-col lg:flex-row xl:flex-row xl:gap-0 gap-[18px]'>
                    <img src={dubai} className='w-[260px] h-[260px] md:w-[580px] md:h-[580px] lg:w-[480px] lg:h-[400px] xl:w-[710px] xl:h-[405px]'/>
                    <BostaniChocolateDescription
                      head='Dubai as a Global Hup'
                      t1='Dubai is not just the headquarters of'
                      t2='SWB but a global hub for innovation,'
                      t3='luxury, and business excellence. '
                      t4='It represents the convergence of'
                      t5='cultures, creativity, and modern'
                      t6='enterprise'
                      width='467px'
                      height='405px'
                      diff={true}
                      diff2={true}
                    />
               </div>
            </div>

           { size.windowSize > '768' &&
            <SliderBigScreen 
              Arr1={Arr1}
              title='SWB Expansion into the UAE Chocolate market'
              p1='SWB’s expansion into the UAEs chocolate market reflects a commitment to'
              p2='staying ahead of global trends, bringing Bostanis luxury and personalized'
              p3='offerings to the region'
              pic1={sweet}
              pic2={sweet2}
              pic3={sweet3}
            />}
            {
              size.windowSize < '768' &&
              <SliderSmallScreen 
                images={images}
                p1='SWB’s expansion into the UAEs chocolate market reflects a commitment to'
                p2='staying ahead of global trends, bringing Bostanis luxury and personalized'
                p3='offerings to the region'
              />
            }
           
            </>
          }
          {
            filter === 'Europe' &&
            <>
              <div className='w-[98%] lg:w-[88%] xl:w-[1281px] 2xl:w-[77%] flex flex-col items-start py-[20px]'>
               <div className='w-[100%] lg:w-[580px] xl:w-[755px] flex flex-col items-start sm:pl-0 pl-[10px]'>
                  <h2 className='tracking-wide  text-[17px] md:text-[20px] lg:text-[30px] xl:text-[40px] font-medium text-[#000000]'>BELGIUM</h2>
                  <p className='text-[13px] md:text-[17px] lg:text-[20px] xl:text-[24px] font-medium text-[#000000]'>SWB in Europe — Expertise Rooted in Excellence</p>
               </div>
               <div className='w-full flex xl:gap-0 gap-[18px] flex-col md:flex-col lg:flex-row xl:flex-row justify-between items-center py-[30px] lg:rotate-0 rotate-[180deg]'>
                  <BostaniChocolatePicture pic={b1} diff={false}/>
                    <BostaniChocolateDescription
                      head='From Belgium to the World'
                      t1='Since 2014, SWB has built a strong industrial'
                      t2='presence in Europe, starting with a state-of-the-'
                      t3='art chocolate factory in Belgium. The factory'
                      t4='produces premium, high-quality chocolate using'
                      t5='advanced technology, catering to global brands'
                      t6='and retailers.'
                      width='582px'
                      height='478px'
                      diff={false}
                      diff2={false}
                    />
                </div>
            </div>
            <div className='w-[260px] md:w-[70%] rounded-[10px] lg:w-[88%] xl:w-[1281px] 2xl:w-[80%] h-[230px] sm:h-[300px] md:h-[440px] lg:h-[500px] xl:h-[582px] bg-cover bg-center' style={{backgroundImage:`url(${b2})`}}></div>
             <div className='w-[98%] lg:w-[88%] xl:w-[1300px] flex justify-center py-[30px]'>
                    <div className='w-full flex items-center xl:gap-0 gap-[18px] justify-between py-[30px] flex-col md:flex-col lg:flex-row xl:flex-row'>
                    <BostaniChocolateDescription
                      head='SWB: Diverse Flavors, Consistent Quality'
                      t1='Adapting to Global Markets While Maintaining Excellence'
                      t2='SWB focuses on adapting to diverse markets by blending'
                      t3='European and Middle Eastern tastes. The company offers'
                      t4='high-quality products tailored to global markets, while'
                      t5='maintaining the highest standards of excellence.'
                       width='600px'
                      height='480px'
                      diff={true}
                      diff2={false}
                    />
                    <BostaniChocolatePicture pic={b3} diff={true}/>
                </div>
             </div>
             <div className='w-[98%] lg:w-[90%] xl:w-[1280px] 2xl:w-[77%] flex flex-col justify-center py-[30px]'>
                  <div className='flex justify-between items-center gap-[18px] xl:gap-0 w-full py-[30px] flex-col md:flex-col lg:flex-row xl:flex-row'>
                    <img src={b4} className='w-[260px] h-[260px] md:w-[580px] md:h-[580px] lg:w-[50%] lg:h-[460px] xl:w-[650px] xl:h-[450px] rounded-[10px]'/>
                    <img src={b5} className='w-[260px] h-[260px] md:w-[580px] md:h-[580px] lg:w-[50%] lg:h-[450px] xl:w-[580px] xl:h-[540px] rounded-[10px]'/>
                </div>
             </div>
             <div className='w-[98%] lg:w-[88%] xl:w-[1281px] 2xl:w-[80%] flex flex-col items-start py-[20px]'>
               <div className='w-[100%] lg:w-[580px] xl:w-[755px] flex flex-col items-start sm:pl-0 pl-[10px]'>
                  <h2 className='tracking-wide  text-[17px] md:text-[20px] lg:text-[30px] xl:text-[40px] font-medium text-[#000000]'>PARIS</h2>
                  <p className='text-[13px] md:text-[17px] lg:text-[20px] xl:text-[24px] font-medium text-[#000000]'>Our Presence in Paris — A Jewel of Elegance and Identity</p>
               </div>
               <div className='w-full flex  items-center justify-between py-[20px] flex-col md:flex-col lg:flex-row xl:flex-row xl:gap-0 gap-[18px]'>
                    <img src={b6} className='w-[260px] h-[260px] md:w-[580px] md:h-[580px] lg:w-[480px] lg:h-[400px] xl:w-[710px] xl:h-[405px]'/>
                    <BostaniChocolateDescription
                      head=' SWB Paris: A Signature of Style and Substance'
                      t1='Located on the iconic Avenue de'
                      t2='l’Opéra, SWB’s Paris flagship is more'
                      t3='than a store — it’s a refined expression'
                      t4='of our brand’s identity, where heritage'
                      t5=' meets the timeless charm of French'
                      t6='luxury.'
                      width='467px'
                      height='405px'
                      diff={true}
                      diff2={true}
                    />
               </div>
            </div>
            <div className='w-[98%] lg:w-[88%] xl:w-[1300px] 2xl:w-[80%] flex justify-center py-[30px]'>
                    <div className='w-full flex items-center xl:gap-0 gap-[18px] justify-between py-[30px] flex-col md:flex-col lg:flex-row xl:flex-row'>
                    <BostaniChocolateDescription
                      head='A Taste of SWB: Where Design, Story, and Craft Unite'
                      t1='Through immersive design, curated products, and'
                      t2='storytelling, visitors experience the essence of SWB'
                      t3='This presence deepens our ties to the global pastry'
                      t4='capital, fueling creative collaborations and meaningful'
                      t5='partnerships across Europe, driven by innovation and'
                      t6='trust.'
                       width='600px'
                      height='480px'
                      diff={true}
                      diff2={false}
                    />
                    <BostaniChocolatePicture pic={b7} diff={true}/>
                </div>
             </div>

            </>
          }
            <Footer/>
            </div>
           }
        </div>
    )
}
