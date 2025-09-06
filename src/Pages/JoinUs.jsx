import { Link } from 'react-router-dom'
import joinBg from '../assets/joinBg.jpg'
import upload from '../assets/upload.png'
import Navbar from '../Components/Navbar'
import { useState } from 'react'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import AboutLinks from '../Components/AboutLinks'
import CompaniesLinks from '../Components/CompaniesLinks'
import circleb from '../assets/circleb.png'
import Footer from '../Components/Footer'
import axios from 'axios'
import Message from '../Components/Message'

export default function JoinUs()
{
    const[open , setOpen] = useState('')
    const[content , setContent] = useState(false)
    const[name , setName] = useState('')
    const[email , setEmail] = useState('')
    const[phone , setPhone] = useState('')
    const[job , setJob] = useState('')
    const[cv , setCv] = useState()
    const[country , setCountry] = useState('')
    const[vedio , setVedio] = useState()
    const[message , setMessage] = useState('')
    const[msgRes , setmsgRes] = useState('')
    const[openMsg , setOpenMsg] = useState(false)

    console.log(cv)
    console.log(vedio)

    const Arr = [
        {
            'p1': 'Our team will review your application and resume. We evaluate every application',
            'p2': 'carefully to find the best fit for our team.',
            'img': circleb
        }
        ,
        {
            'p1': 'If your CV matches our current needs, we will contact you for an initial interview or',
            'p2': 'screening call.',
            'img': circleb
        }
        ,
        {
            'p1': 'If shortlisted, you will be invited for a formal interview. We will provide further details regarding',
            'p2': 'the time and platform',
            'img': circleb
        }
        ,
        {
            'p1': 'If selected, we will extend a job offer and guide you through the next steps for onboarding.',
            'p2': '',
            'img': circleb
        }
        ,
        {
            'p1': 'Even if we are not able to move forward with your application, we will keep your details on file for',
            'p2': 'future opportunities. Thank you again for your interest in joining our team',
            'img': circleb
        }
    ]

    const showArr = Arr.map((item , key) =>
        <div className='w-[100%] sm:w-[96%] md:w-[96%] lg:w-[870px] xl:w-[870px] 2xl:w-[870px] flex justify-start items-start gap-2' key={key}>
             <img src={item.img} className='w-[16px] h-[16px] relative top-[6px]'/>
             <div className='w-[] flex flex-col items-start justify-start text-[14px] sm:text-[18px] font-medium text-[#000000]'>
                 <p>{item.p1}</p>
                 <p>{item.p2}</p>
             </div>
        </div>
    )

    const closeMessage = () =>
    {
        setOpenMsg(false)
    }

    const handleFormData = async (e) => 
    {
        e.preventDefault()


        const form = new FormData()
        form.append('name' , name)
        form.append('email' , email)
        form.append('phone_number' , phone)
        form.append('job_role' , job)
        form.append('country' , country)
        form.append('cv' , cv)
        form.append('application_letter' , message)
        try{
          let res = await axios.post('https://swbinternational.backend.daira.website/api/join-us' , form )
          console.log(res)
          setOpenMsg(true)
          setmsgRes('Added successfully')
        }catch(err){
            console.log(err)
          setOpenMsg(true)
          setmsgRes('Failed to add')
        }
    }



    return(
        <div className='relative min-h-screen'>
         {
            openMsg &&
            <Message
             msg={msgRes}
             closeMessage={closeMessage}
            />
        }
       <div className='w-full md:w-[100%] lg:w-[100%] 2xl:w-[100%] xl:w-[1510px] min-h-screen '>
          <div className="w-full h-[230px] sm:h-[350px] md:h-[440px] lg:h-[500px] xl:h-[582px] bg-cover bg-center relative" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${joinBg})`}}>
                 <Navbar 
                     setOpen={setOpen}
                     setContent={setContent}
                     open={open}
                 />
                 <h1 className=' absolute left-[6%] top-[44%] text-[20px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[64px] text-[#FFFFFF] font-[Manrope] font-bold'>JOIN US</h1>  
                 <Link to='https://www.bostani.com/ar-sa' className='rounded-full flex justify-center items-center bg-gray-500 text-[#FFFFFF] text-[13px] md:text-[16px] lg:text-[20px] xl:text-[20px] w-[170px] h-[40px] md:w-[200px] md:h-[40px] lg:w-[290px] lg:h-[50px] xl:w-[305px] xl:h-[56px] absolute left-[6%] top-[70%] underline gap-[3px]'>visit our website <MdOutlineArrowRightAlt className='fill-current text-[#FFFFFF] text-[25px] mt-[10px]'/></Link>                       
                 { open === 'About'  && <AboutLinks setOpen={setOpen}/> }               
                 { open === 'Companies' && <CompaniesLinks setOpen={setOpen}/> }
            </div>
            {
                !content &&
                <>
                <div className='w-full xl:w-[1510px] 2xl:w-full flex flex-col justify-center items-center py-[40px]'>
                    <div className='w-[290px] h-auto sm:w-[400px] sm:h-auto  md:w-[600px] md:h-auto lg:w-[700px] lg:h-[1100px]  xl:w-[985px] xl:h-[1101px] 2xl:w-[985px] 2xl:h-[1101px] rounded-[10px] py-[20px] bg-[#CBC0B7]/30'>
                        <div className='flex flex-col justify-center items-start pl-[2px]  sm:pl-[10px] md:pl-[10px] lg:pl-[20px] xl:pl-[40px] w-full'>
                             <h1 className='text-[20px] sm:text-[24px] md:text-[30px] lg:text-[40px] xl:text-[48px] 2xl:text-[48px] text-[#363940] pl-[10px] font-semibold'>JOIN US !</h1>
                             <div className=' flex flex-col pl-[10px] justify-center items-start text-[13px] sm:text-[17px] md:text-[19px] lg:text-[22px] xl:text-[24px] 2xl:text-[24px] text-[#292D32]'>
                                 <p>Share your experience and skills with us, and we'll get in touch to explore exciting</p>
                                 <p>opportunities that match your expertise</p>
                            </div>
                        </div>
                     <div className='flex justify-center items-center py-[20px]'>
                        <form onSubmit={handleFormData} className='w-[96%] sm:w-[90%] md:w-[90%] lg:w-[550px] xl:w-[602px] 2xl:w-[602px] flex flex-col justify-start items-start gap-[20px] sm:gap-[25px] md:gap-[39px]'>
                            <div className='flex justify-between items-center flex-col md:flex-col lg:flex-row w-full'>
                                <div className='w-[97%] sm:w-[97%] md:w-[85%] lg:w-[260px] xl:w-[296px] 2xl:w-[296px] flex flex-col items-start justify-center gap-2'>
                                    <label className='text-[16px] sm:text-[18px] text-[#363940]'>Name</label>
                                    <input value={name} onChange={(e) => setName(e.target.value)} type='text' className='w-full h-[40px] sm:h-[48px] rounded-[8px] bg-[#FFFFFF] pl-[10px] outline-none' placeholder='Your name'/>
                                </div>
                                <div className='w-[97%] sm:w-[97%] md:w-[85%] lg:w-[260px] xl:w-[296px] 2xl:w-[296px]  flex flex-col items-start justify-center gap-2'>
                                    <label className='text-[16px] sm:text-[18px] text-[#363940]'>Email</label>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' className='w-full h-[40px] sm:h-[48px] rounded-[8px] bg-[#FFFFFF] pl-[10px] outline-none' placeholder='Your email'/>
                                </div>
                            </div>
                            <div className='flex justify-between items-center w-full flex-col md:flex-col lg:flex-row '>
                                 <div className='w-[97%] sm:w-[97%] md:w-[85%] lg:w-[260px] xl:w-[296px] 2xl:w-[296px]  flex flex-col items-start justify-center gap-2'>
                                    <label className='text-[16px] sm:text-[18px] text-[#363940]'>Phone Number</label>
                                    <input value={phone} onChange={(e) => setPhone(e.target.phone)} type='text' className='w-full h-[40px] sm:h-[48px] rounded-[8px] bg-[#FFFFFF] pl-[10px] outline-none' placeholder='+99'/>
                                 </div>
                                <div className='w-[97%] sm:w-[97%] md:w-[85%] lg:w-[260px] xl:w-[296px] 2xl:w-[296px]  flex flex-col items-start justify-center gap-2'>
                                    <label className='text-[16px] sm:text-[18px] text-[#363940]'>Select your job role</label>
                                    <select value={job} onChange={(e) => setJob(e.target.value)} className='w-full h-[40px] sm:h-[48px] rounded-[8px] bg-[#FFFFFF] pl-[10px] outline-none' >
                                            <option>Select a job role</option>
                                            <option>Graphic Designer</option>
                                            <option>FrontEnd Developer</option>
                                            <option>BackEnd Developer</option>
                                            <option>Full stack Developer</option>
                                            <option>UI/UX Designer</option>
                                            <option>Marketing spcialist</option>
                                            <option>Sales Representative</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex justify-between items-center w-full flex-col md:flex-col lg:flex-row '>
                                 <div className='w-[97%] sm:w-[97%] md:w-[85%] lg:w-[260px] xl:w-[296px] 2xl:w-[296px] relative flex flex-col items-start justify-center gap-2'>
                                    <label className='text-[16px] sm:text-[18px] text-[#363940]'>Upload your cv</label>
                                    <label htmlFor='cv' className='w-full absolute bottom-[1.8%] h-[40px] sm:h-[47px] rounded-[8px] bg-[#FFFFFF] flex justify-center items-center'><img src={upload} className='w-[24px] h-[24px]'/></label>
                                    <input onChange={(e) => setCv(e.target.files[0])} id='cv' type='file' className='w-full h-[40px] sm:h-[48px] rounded-[8px] bg-[#FFFFFF] pl-[10px] outline-none' />
                                 </div>
                                <div className='w-[97%] sm:w-[97%] md:w-[85%] lg:w-[260px] xl:w-[296px] 2xl:w-[296px]  flex flex-col items-start justify-center gap-2'>
                                    <label className='text-[16px] sm:text-[18px] text-[#363940]'>Select your country</label>
                                    <select value={country} onChange={(e) => setCountry(e.target.value)} className='w-full h-[40px] sm:h-[48px] rounded-[8px] bg-[#FFFFFF] pl-[10px] outline-none ' >
                                            <option>Select your country</option>
                                            <option>United States</option>
                                            <option>United Kingdom</option>
                                            <option>Canada</option>
                                            <option>Australia</option>
                                            <option>Germany</option>
                                            <option>France</option>
                                            <option>Saudi Arabia</option>
                                            <option>United Arab Emirates</option>
                                    </select>
                                </div>
                            </div>
                            <div className=' ml-0 md:ml-[33px] lg:ml-0 flex justify-center items-start gap-4 relative flex-col w-[97%] sm:w-[97%] md:w-[85%] lg:w-[398px] xl:w-[398px] 2xl:w-[398px]'>
                                <div className='flex flex-col items-start justify-center text-[14px] text-[#363940]'>
                                    <p>Please upload a 30-second video introducing yourself. In the</p>
                                    <p>video, kindly share a bit about who you are, your background,</p>
                                    <p>We look forward to learning more about you!*</p>
                                </div>
                                <label htmlFor='ved' className='w-full absolute bottom-[5%] sm:bottom-[5%] md:bottom-[7%] h-[40px] sm:h-[48px] rounded-[8px] bg-[#FFFFFF] flex justify-center items-center'><img src={upload} className='w-[24px] h-[24px]'/></label>
                                <input onChange={(e) => setVedio(e.target.files[0])} id='ved' type='file'className='w-full h-[40px] sm:h-[48px] rounded-[8px] bg-[#FFFFFF] pl-[10px] outline-none' />
                            </div>
                            <div className='flex justify-center items-start gap-2 ml-0 md:ml-[33px] lg:ml-0 flex-col w-[97%] sm:w-[97%] md:w-[85%] lg:w-[550px] xl:w-[602px] 2xl:w-[602px]'>
                                <label className='text-[16px] sm:text-[18px] text-[#363940]'>Jop application letter</label>
                                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='w-full h-[136px] rounded-[8px]  bg-[#FFFFFF] pl-[10px] pt-[10px] outline-none'></textarea>
                            </div>
                            <button className='  ml-0 md:ml-[33px] lg:ml-0 w-[97%] sm:w-[97%] md:w-[85%] lg:w-[550px] xl:w-[602px] 2xl:w-[602px] h-[50px] sm:h-[56px] rounded-[8px] bg-[#A2948A] text-[#F1F2F5] text-[18px] sm:text-[24px]'>Send Message</button>
                        </form>
                     </div>
                 </div>

                 <div className='w-[98%] lg:w-[88%] xl:w-[1280px] 2xl:w-[80%] flex flex-col justify-center py-[30px]'>
                    <div className='w-[100%] sm:pl-0 pl-[10px] sm:w-[90%] md:w-[80%] lg:w-[877px] xl:w-[877px] 2xl:w-[877px] flex justify-center items-start flex-col gap-[20px]'>
                        <h1 className='text-[18px] sm:text-[18px] md:text-[20px] lg:text-[30px] xl:text-[40px] 2xl:text-[48px] text-[#363940]'>What will be the Next Step ?</h1>
                        {showArr}
                    </div>
                 </div>
                </div>
               <Footer/>
               </>
            }
       </div>
       </div>
    )
}
