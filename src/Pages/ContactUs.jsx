import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { useState } from 'react'
import mess from '../assets/mess.png'
import call from '../assets/call.png'
import MapPoint from '../assets/MapPoint.png'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import AboutLinks from '../Components/AboutLinks'
import CompaniesLinks from '../Components/CompaniesLinks'
import contact from '../assets/contact.jpg'
import Footer from '../Components/Footer';
import ContactInformation from '../Components/ContactInformation';


export default function ContactUs()
{
    const[open , setOpen] = useState('')
    const[content , setContent] = useState(false)

    return(
        <div className='w-full md:w-[100%] lg:w-[100%] 2xl:w-[1700px] xl:w-[1510px] min-h-screen'>
          <div className="w-full h-[230px] sm:h-[350px] md:h-[440px] lg:h-[500px] xl:h-[582px] bg-cover bg-center relative" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${contact})`}}>
                 <Navbar 
                     setOpen={setOpen}
                     setContent={setContent}
                     open={open}
                 />
                <h1 className=' absolute left-[6%] top-[44%] text-[20px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[64px] text-[#FFFFFF] font-[Manrope] font-bold'>CONTACT US</h1>  
                { open === 'About'  && <AboutLinks setOpen={setOpen}/> }               
                { open === 'Companies' && <CompaniesLinks setOpen={setOpen}/> }
           </div>
          {
            !content &&
            <>
           <div className='w-full xl:w-[1510px] 2xl:w-[1700px] flex flex-col justify-center items-center py-[40px]'>
                <div className='w-[290px] h-auto sm:w-[400px] sm:h-auto  md:w-[600px] md:h-auto lg:w-[700px] lg:h-[777px]  xl:w-[985px] xl:h-[777px] 2xl:w-[985px] 2xl:h-[777px] rounded-[10px] py-[20px] bg-[#CBC0B7]/30 flex flex-col justify-center items-center gap-[20px]'>
                   <h1 className='text-[20px] sm:text-[24px] md:text-[30px] lg:text-[40px] xl:text-[48px] 2xl:text-[48px] text-[#363940] pl-[10px] font-semibold'>Get In Touch with Us !</h1>
                   <form className='w-[96%] sm:w-[90%] md:w-[90%] lg:w-[550px] xl:w-[761px] 2xl:w-[761px] flex flex-col justify-start items-start gap-[20px] sm:gap-[25px] md:gap-[39px]'>
                         <div className='w-full flex flex-col items-start justify-center gap-2'>
                              <label className='text-[16px] sm:text-[18px] text-[#363940]'>Name</label>
                              <input type='text' className='w-full h-[40px] sm:h-[48px] rounded-[8px] bg-[#FFFFFF] pl-[10px] outline-none' placeholder='Your name'/>
                         </div>
                         <div className='w-full flex flex-col items-start justify-center gap-2'>
                                <label className='text-[16px] sm:text-[18px] text-[#363940]'>Email</label>
                                <input  type='text' className='w-full h-[40px] sm:h-[48px] rounded-[8px] bg-[#FFFFFF] pl-[10px] outline-none' placeholder='Your email'/>
                         </div>
                          <div className='w-full flex flex-col items-start justify-center gap-2'>
                                <label className='text-[16px] sm:text-[18px] text-[#363940]'>Phone Number</label>
                                <input type='text' className='w-full h-[40px] sm:h-[48px] rounded-[8px] bg-[#FFFFFF] pl-[10px] outline-none' placeholder='+99'/>
                          </div>
                          <div className='flex justify-center items-start gap-2  flex-col w-full'>
                                <label className='text-[16px] sm:text-[18px] text-[#363940]'>Jop application letter</label>
                                <textarea  className='w-full h-[136px] rounded-[8px]  bg-[#FFFFFF] pl-[10px] pt-[10px] outline-none'></textarea>
                          </div>
                         <button className=' w-full h-[50px] sm:h-[56px] rounded-[8px] bg-[#A2948A] text-[#F1F2F5] text-[18px] sm:text-[24px]'>Send Message</button>
                  </form>
                </div>

               <div className='flex flex-col justify-center gap-[30px] items-start py-[40px] '>
                    <h1 className='text-[20px] sm:text-[24px] md:text-[30px] lg:text-[40px] xl:text-[48px] 2xl:text-[48px] text-[#000000] pl-[10px] font-semibold'>Contact Information</h1>
                    <ContactInformation
                      head1='Bostani Chocolate'
                      country1='Saudi Arabia'
                      img1={MapPoint}
                      p1='Street 2,101 industrial Area Dammam'
                      p2='Saudi Arabia'
                      img2={mess}
                      p4='customercare@bostani.be'
                      country2='United Arab Emirates'
                      img3={MapPoint}
                      p5='561 Jumeirah Street -'
                      p6='Umm Suqeim-Umm Suqeim 1 - Dubai'
                      img4={mess}
                      p8='jumeira@bostani.be'
                    />

                     <ContactInformation
                      country1='France'
                      img1={MapPoint}
                      p1=' Location: 32 Avenue de l’Opéra 75002'
                      p2='Paris, France'
                      img2={call}
                      p4='Tel: +60 02 71 44 1 (0) 33'
                      country2='Belgium'
                      img3={MapPoint}
                      p5='Location: Bostani Chocolatier Rue César de'
                      p6='Paepe, 51 à 4683 Vivegnis, Oupeye, Belgique'
                      img4={call}
                      p8='Tel: +32 4 224 24 66'
                    />

                     <ContactInformation
                      head1='Sawtru Group Packaging & Decoration'
                      country1='Guangzhou'
                      three='3'
                      img1={MapPoint}
                      p1='Location: ROOM 203, Building No.102,'
                      p2='ZHENTA ROAD DAYUAN STREET, BAIYUN '
                      p3='DISTRICT, GUANGZHOU'
                      country2='Hong Kong'
                      img3={MapPoint}
                      p5='Location: FLAT/RM 13 1312/F LUCKY'
                      p6='CENTRE NO.177-165 WAN CHAI'
                      p7=' ROADWAN CHAI, HK'
                    />

                    <ContactInformation
                      head1='Daira Technology'
                      img1={MapPoint}
                      p1='Location: Mehmet Akif Ersoy, Özyıldırım'
                      p2='Sk. 17A, 34283 Arnavutköy/İstanbul'
                      img2={mess}
                      p4='info@dairatechnology.com'
                      head2='SwbAi Robotics'
                      img3={MapPoint}
                      p5='Location: UNITED STATES,8 The Green'
                      p6='Street, Dover, DE 19901'
                      img4={mess}
                      p8=' Info@swbai.com'
                    />
               </div>

           </div>
           <Footer/>
           </>
          }
        </div>
    )
}
