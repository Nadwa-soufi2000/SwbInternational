import { IoClose } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

export default function AboutLinks(props)
{
     const closeList = () =>
      {
        props.setOpen('');
      }

    return(
         <div className='bg-black hidden md:hidden z-[1] lg:flex xl:flex justify-center items-start py-[10px] gap-[20px] lg:w-[300px] xl:w-[400px] px-[10px] flex-col rounded-[14px] absolute lg:top-[12%] xl:top-[10%] right-[27%]' id='About'>
            <div className='w-full flex p-[8px] text-[#FFFFFF] justify-between items-center lg:text-[15px] xl:text-[18px] border-b-solid border-b-[1px] border-b-[#FFFFFF]/40'><p>About</p><IoClose onClick={() => closeList()} className='fill-current text-[#FFFFFF] hover:border-[1px] hover:border-[#FFFFFF] hover:border-solid text-[23px] rounded-[4px] p-[1px]'/></div>
            <Link to='/whoWeAre' className='w-full flex text-[#FFFFFF] justify-between items-center lg:text-[15px] xl:text-[18px] hover:bg-white/20 hover:pl-[15px] p-[8px] hover:rounded-[10px] duration-[0.5s]'><p>Who We Are</p><MdOutlineKeyboardArrowRight className='fill-current text-[#FFFFFF]'/></Link>
            <Link to='/globalFootprint' className='w-full flex text-[#FFFFFF] justify-between items-center lg:text-[15px] xl:text-[18px] hover:bg-white/20 hover:pl-[15px] p-[8px] hover:rounded-[10px] duration-[0.5s]'><p>Global Footprint</p><MdOutlineKeyboardArrowRight className='fill-current text-[#FFFFFF]'/></Link>
            <Link to='/ourStory' className='w-full flex text-[#FFFFFF] justify-between items-center lg:text-[15px] xl:text-[18px] hover:bg-white/20 hover:pl-[15px] p-[8px] hover:rounded-[10px] duration-[0.5s]'><p>The Story Behind The Brand</p><MdOutlineKeyboardArrowRight className='fill-current text-[#FFFFFF]'/></Link>
            <Link to='/contactUs' className='w-full flex text-[#FFFFFF] justify-between items-center lg:text-[15px] xl:text-[18px] hover:bg-white/20 hover:pl-[15px] p-[8px] hover:rounded-[10px] duration-[0.5s]'><p>Contact Us</p><MdOutlineKeyboardArrowRight className='fill-current text-[#FFFFFF]'/></Link>
         </div>
    )
}
