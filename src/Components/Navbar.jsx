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
            let item = document.getElementById('itemAbout')
            item.classList.toggle('bg-white/20')
            item.classList.add('rounded-[4px]')
            item.classList.toggle('p-[10px]')
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
            let item = document.getElementById('itemCom')
            item.classList.toggle('bg-white/20')
            item.classList.add('rounded-[4px]')
            item.classList.toggle('p-[10px]')
            setOpenCompaniesList(prev => !prev)
        }
    }

    
    const changeIcon = () =>
    {
        let nav = document.getElementById('nav')
        nav.classList.add('bg-black')
        nav.classList.add('min-h-screen')
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
        nav.classList.remove('min-h-screen')
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
        <div className="relative z-[1] md:w-full lg:bg-transparent lg:mt-0 lg:left-0  lg:w-[94%] xl:w-[1280.19px] px-[20px] lg:px-0 py-[20px] flex justify-between items-start my-[0px] mx-auto overflow-x-scroll" id='nav'>
            <img src={swbW} className='w-[35px] h-[20px] sm:w-[60px] sm:h-[42px]'/>
            <ul className='hidden  lg:flex xl:flex justify-between items-start w-[90%] md:w-[487px] lg:w-[487px] lg:flex-row lg:gap-0'>
                <Link to='/home' className='text-[#FFFFFF] text-[16px] lg:text-[20px] font-[Manrope]'>HOME</Link>
                <li className='flex flex-col md:w-auto w-[100%]'>
                  <li id='itemAbout' onClick={() => AboutFunc()} className="flex justify-start items-center gap-[7px] text-[16px] lg:text-[20px] font-[Manrope] duration-500" style={{color :props.open === 'About' || openAboutList ? '#a16207' : '#FFFFFF'}}>ABOUT<SlArrowDown/></li>
                  { props.open === 'About' && <span className='h-[3px] bg-yellow-700 w-full'></span> }
                  { openAboutList && <span className='h-[2px] bg-yellow-700 w-full'></span> }
                  {openAboutList &&
                    <div className='lg:hidden flex flex-col justify-center items-start pl-[2px] py-[25px] gap-[20px] w-[100%]'>
                         <Link to='/whoWeAre' className='w-full flex p-[5px] rounded-[4px] hover:bg-white/20 hover:pl-[20px] duration-500 text-[#FFFFFF] justify-between items-center lg:text-[15px] xl:text-[18px]'><p>Who We Are</p><MdOutlineKeyboardArrowRight className='fill-current text-[#FFFFFF]'/></Link>
                         <Link to='/globalFootprint' className='w-full flex text-[#FFFFFF] justify-between items-center lg:text-[15px] xl:text-[18px] p-[5px] rounded-[4px] hover:bg-white/20 hover:pl-[20px] duration-500'><p>Global Footprint</p><MdOutlineKeyboardArrowRight className='fill-current text-[#FFFFFF]'/></Link>
                         <Link to='/ourStory' className='w-full flex text-[#FFFFFF] justify-between items-center lg:text-[15px] xl:text-[18px] p-[5px] rounded-[4px] hover:bg-white/20 hover:pl-[20px] duration-500'><p>The Story Behind The Brand</p><MdOutlineKeyboardArrowRight className='fill-current text-[#FFFFFF]'/></Link>
                         <Link to='/contactUs' className='w-full flex text-[#FFFFFF] justify-between items-center lg:text-[15px] xl:text-[18px] p-[5px] rounded-[4px] hover:bg-white/20 hover:pl-[20px] duration-500'><p>Contact Us</p><MdOutlineKeyboardArrowRight className='fill-current text-[#FFFFFF]'/></Link>
                    </div>
                  }
                </li>
                <li className='flex flex-col w-full md:w-auto'>
                   <li id='itemCom' className='flex justify-start items-center gap-[7px] text-[16px] lg:text-[20px] font-[Manrope]' onClick={() => CompaniesFunc()} style={{color : props.open === 'Companies' || openCompaniesList ? '#a16207' : '#FFFFFF'}}>COMPANIES <SlArrowDown/></li>
                   {props.open === 'Companies' && <span className='h-[3px] bg-yellow-700 w-full'></span> }
                   { openCompaniesList && <span className='h-[3px] bg-yellow-700 w-full'></span> }
                    { openCompaniesList  && 
                     <div className='lg:hidden flex flex-col justify-center items-start py-[25px] gap-[20px] w-[100%]  pl-[2px]'>
                         <Link to='/bostaniChocolate' className='w-full flex text-[#FFFFFF] justify-between items-center lg:text-[15px] xl:text-[18px] p-[5px] rounded-[4px] hover:bg-white/20 hover:pl-[20px] duration-500'><p>Bostani Chocolate</p><MdOutlineKeyboardArrowRight className='fill-current text-[#FFFFFF]'/></Link>
                         <Link to='/bostaniFoundation' className='w-full flex text-[#FFFFFF] justify-between items-center lg:text-[15px] xl:text-[18px] p-[5px] rounded-[4px] hover:bg-white/20 hover:pl-[20px] duration-500'><p>Bostani Foundation</p><MdOutlineKeyboardArrowRight className='fill-current text-[#FFFFFF]'/></Link>
                         <Link to='/Robotic' className='w-full flex text-[#FFFFFF] justify-between items-center lg:text-[15px] xl:text-[18px] p-[5px] rounded-[4px] hover:bg-white/20 hover:pl-[20px] duration-500'><p>Robotic & AI</p><MdOutlineKeyboardArrowRight className='fill-current text-[#FFFFFF]'/></Link>
                         <Link to='/DairaTechnology' className='w-full flex text-[#FFFFFF] justify-between items-center lg:text-[15px] xl:text-[18px] p-[5px] rounded-[4px] hover:bg-white/20 hover:pl-[20px] duration-500'><p>Daira Technology</p><MdOutlineKeyboardArrowRight className='fill-current text-[#FFFFFF]'/></Link>
                         <Link to='/sawtruGroub' className='w-full flex text-[#FFFFFF] justify-between items-center lg:text-[15px] xl:text-[18px] p-[5px] rounded-[4px] hover:bg-white/20 hover:pl-[20px] duration-500'><p>Sawtru Group Packaging</p><MdOutlineKeyboardArrowRight className='fill-current text-[#FFFFFF]'/></Link>
                    </div>
                  }
                </li>
                <Link to='/joinUs' className='text-[#FFFFFF] text-[16px] lg:text-[20px] font-[Manrope]'>JOIN US</Link>
            </ul>
            {openNav === '' && <AiOutlineMenu onClick={() => changeIcon()} className='xl:hidden lg:hidden md:flex fill-current text-[#FFFFFF] hover:border-solid hover:border-[1px] hover:border-[#FFFFFF] w-[20px] h-[20px] sm:w-[36px] sm:h-[40px] md:w-[36px] md:h-[40px] rounded-[2px]'/> }
            {openNav === 'ok' && <IoClose onClick={() => closeMenu()} className='xl:hidden lg:hidden md:flex fill-current text-[#FFFFFF] hover:border-solid hover:border-[1px] hover:border-[#FFFFFF] w-[20px] h-[20px] sm:w-[36px] sm:h-[40px] md:w-[36px] md:h-[40px] rounded-[2px]'/>}
        </div>
    )
}