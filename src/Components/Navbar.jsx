//import s6 from '../assets/s6.png'
import swbW from '../assets/swblogo3.png'
import { SlArrowDown } from "react-icons/sl";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useContext , useState } from 'react';
import { Size } from './WindowSize';
import { Link } from 'react-router-dom';


export default function Navbar(props)
{
    const[openNav , setOpenNav] = useState('')
    const[openAboutList , setOpenAboutList] = useState(false)
    const[openCompaniesList , setOpenCompaniesList] = useState(false)

    const size = useContext(Size)
    
    const AboutFunc = () => 
    {
      if(size.windowSize > '1024')
        {
           props.setOpen('About')
        } 
       else
        {
            console.log('else')
            setOpenAboutList(prev => !prev)
        }  
       
    }

    const CompaniesFunc = () =>
    {
        if(size.windowSize > '1024')
        {
            props.setOpen('Companies')
        }
        else
        {
            console.log('else2')
            setOpenCompaniesList(prev => !prev)
        }
    }

    
    const changeIcon = () =>
    {
        let nav = document.getElementById('nav')
        nav.classList.add('bg-black')
        nav.classList.add('h-screen')
        let ul = document.querySelector('ul')
        ul.classList.add('mt-[80px]')
        ul.classList.add('absolute')
        ul.classList.add('left-[7%]')
        ul.classList.remove('hidden')
        ul.classList.add('gap-[40px]')
        ul.classList.add('flex')
        ul.classList.remove('flex-row')
        ul.classList.add('flex-col')
        setOpenNav('ok')
        props.setContent(prev => !prev)
    }

    const closeMenu = () =>
    {
        let nav = document.getElementById('nav')
        nav.classList.remove('bg-black')
        nav.classList.remove('h-screen')
        let ul = document.querySelector('ul')
        ul.classList.remove('mt-[80px]')
         ul.classList.remove('absolute')
        ul.classList.remove('left-[7%]')
        ul.classList.add('hidden')
        ul.classList.remove('gap-[40px]')
        ul.classList.remove('flex')
        ul.classList.add('flex-row')
        ul.classList.remove('flex-col')
        setOpenNav('')
        props.setContent(prev => !prev)
    }


    return(
        <div className="relative z-[1] md:w-full lg:bg-transparent lg:mt-0 lg:left-0  lg:w-[94%] xl:w-[1280.19px] px-[20px] lg:px-0 py-[20px] flex justify-between items-start my-[0px] mx-auto" id='nav'>
            <img src={swbW} className='w-[35px] h-[20px] sm:w-[60px] sm:h-[42px]'/>
            <ul className='hidden  lg:flex xl:flex justify-between items-start w-[487px] lg:flex-row lg:gap-0'>
                <Link to='/home' className='text-[#FFFFFF] text-[16px] lg:text-[20px] font-[Manrope]'>HOME</Link>
                <li className='flex flex-col'>
                  <li onClick={() => AboutFunc()} className="flex justify-start items-center gap-[7px] text-[16px] lg:text-[20px] font-[Manrope]" style={{color :props.open === 'About' || openAboutList ? '#a16207' : '#FFFFFF'}}>ABOUT<SlArrowDown/></li>
                  { props.open === 'About' && <span className='h-[3px] bg-yellow-700 w-full'></span> }
                  { openAboutList && <span className='h-[2px] bg-yellow-700 w-full'></span> }
                  {openAboutList &&
                    <div className='lg:hidden flex flex-col justify-center items-start pl-[10px] py-[25px] gap-[20px] w-[230px]  duration-1000 delay-1000'>
                         <div className='w-full flex text-[#FFFFFF] justify-between items-center lg:text-[15px] xl:text-[18px]  hover:border-b-[1px] hover:border-b-solid hover:border-b-[#FFFFFF]'><p>Who We Are</p><MdOutlineKeyboardArrowRight className='fill-current text-[#FFFFFF]'/></div>
                         <div className='w-full flex text-[#FFFFFF] justify-between items-center lg:text-[15px] xl:text-[18px] hover:border-b-[1px] hover:border-b-solid hover:border-b-[#FFFFFF]'><p>Global Footprint</p><MdOutlineKeyboardArrowRight className='fill-current text-[#FFFFFF]'/></div>
                         <div className='w-full flex text-[#FFFFFF] justify-between items-center lg:text-[15px] xl:text-[18px] hover:border-b-[1px] hover:border-b-solid hover:border-b-[#FFFFFF]'><p>The Story Behind The Brand</p><MdOutlineKeyboardArrowRight className='fill-current text-[#FFFFFF]'/></div>
                         <div className='w-full flex text-[#FFFFFF] justify-between items-center lg:text-[15px] xl:text-[18px] hover:border-b-[1px] hover:border-b-solid hover:border-b-[#FFFFFF]'><p>Contact Us</p><MdOutlineKeyboardArrowRight className='fill-current text-[#FFFFFF]'/></div>
                    </div>
                  }
                </li>
                <li className='flex flex-col'>
                   <li className='flex justify-start items-center gap-[7px] text-[16px] lg:text-[20px] font-[Manrope]' onClick={() => CompaniesFunc()} style={{color : props.open === 'Companies' || openCompaniesList ? '#a16207' : '#FFFFFF'}}>COMPANIES <SlArrowDown/></li>
                   {props.open === 'Companies' && <span className='h-[3px] bg-yellow-700 w-full'></span> }
                   { openCompaniesList && <span className='h-[3px] bg-yellow-700 w-full'></span> }
                    { openCompaniesList  && 
                     <div className='lg:hidden flex flex-col justify-center items-start py-[25px] gap-[20px] w-[230px]  duration-1000 delay-1000 pl-[10px]'>
                         <div className='w-full flex text-[#FFFFFF] justify-between items-center lg:text-[15px] xl:text-[18px]  hover:border-b-[1px] hover:border-b-solid hover:border-b-[#FFFFFF]'><p>Bostani Chocolate</p><MdOutlineKeyboardArrowRight className='fill-current text-[#FFFFFF]'/></div>
                         <div className='w-full flex text-[#FFFFFF] justify-between items-center lg:text-[15px] xl:text-[18px] hover:border-b-[1px] hover:border-b-solid hover:border-b-[#FFFFFF]'><p>Bostani Foundation</p><MdOutlineKeyboardArrowRight className='fill-current text-[#FFFFFF]'/></div>
                         <div className='w-full flex text-[#FFFFFF] justify-between items-center lg:text-[15px] xl:text-[18px] hover:border-b-[1px] hover:border-b-solid hover:border-b-[#FFFFFF]'><p>Robotic & AI</p><MdOutlineKeyboardArrowRight className='fill-current text-[#FFFFFF]'/></div>
                         <div className='w-full flex text-[#FFFFFF] justify-between items-center lg:text-[15px] xl:text-[18px] hover:border-b-[1px] hover:border-b-solid hover:border-b-[#FFFFFF]'><p>Daira Technology</p><MdOutlineKeyboardArrowRight className='fill-current text-[#FFFFFF]'/></div>
                         <div className='w-full flex text-[#FFFFFF] justify-between items-center lg:text-[15px] xl:text-[18px] hover:border-b-[1px] hover:border-b-solid hover:border-b-[#FFFFFF]'><p>Sawtru Group Packaging</p><MdOutlineKeyboardArrowRight className='fill-current text-[#FFFFFF]'/></div>
                    </div>
                  }
                </li>
                <li className='text-[#FFFFFF] text-[16px] lg:text-[20px] font-[Manrope]'>JOIN US</li>
            </ul>
            {openNav === '' && <AiOutlineMenu onClick={() => changeIcon()} className='xl:hidden lg:hidden md:flex fill-current text-[#FFFFFF] hover:border-solid hover:border-[1px] hover:border-[#FFFFFF] w-[20px] h-[20px] sm:w-[36px] sm:h-[40px] md:w-[36px] md:h-[40px] rounded-[2px]'/> }
            {openNav === 'ok' && <IoClose onClick={() => closeMenu()} className='xl:hidden lg:hidden md:flex fill-current text-[#FFFFFF] hover:border-solid hover:border-[1px] hover:border-[#FFFFFF] w-[20px] h-[20px] sm:w-[36px] sm:h-[40px] md:w-[36px] md:h-[40px] rounded-[2px]'/>}
        </div>
    )
}