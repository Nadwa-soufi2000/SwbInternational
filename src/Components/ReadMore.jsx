import { Link } from "react-router-dom";
import {MdOutlineArrowRightAlt} from "react-icons/md"

export default function ReadMoreComponent(props)
{
    return(
        <div className="w-full flex flex-col justify-center items-center">
           <div className="flex justify-between items-center w-full p-1">
              <h1 className="text-[14px] sm:text-[25px] md:text-[30px] lg:text-[40px] xl:text-[47px] text-[#A2948A] flex justify-center items-center gap-[1px] sm:gap-8">{props.title} <span className="w-[10px] sm:w-[40px] md:w-[50px] lg:w-[60px] xl:w-[70px] h-[3px] rounded-[10px] block" style={{backgroundColor: '#A2948A'}}></span> </h1>
              <Link to={`${props.link}`} className='rounded-[11px] flex justify-center items-center bg-gray-500 text-[#FFFFFF] text-[12px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[22px] w-[84px] h-[30px] sm:w-[170px] sm:h-[40px] md:w-[180px] md:h-[45px] lg:w-[205px] lg:h-[56px]  xl:w-[205px] xl:h-[56px]  gap-[3px] hover:border-[1px] hover:border-solid hover:border-[#FFFFFF]'>Read More <MdOutlineArrowRightAlt className='fill-current text-[#FFFFFF] mt-[3px] sm:mt-[4px]'/></Link>    
           </div>
          { props.p1 && props.p2 &&
            <div className="flex p-1 flex-col items-start justify-center w-full text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#000000]">
               <p>{props.p1}</p>
               <p>{props.p2}</p>
           </div>
          }
        </div>
    )
}