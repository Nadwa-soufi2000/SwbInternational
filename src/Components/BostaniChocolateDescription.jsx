import { useContext } from "react"
import { Size } from "./WindowSize"

export default function BostaniChocolateDescription(props) 
{
    const size = useContext(Size)
    return(
        <div className='flex flex-col gap-1 sm:gap-[7px] justify-center items-start pl-[12px] sm:pl-[30px] bg-[#f0ecea] rounded-[15px] shadow-xl' style={{width: size.windowSize > '1024' ? props.width : size.windowSize > '768' ? '70%' : '260px', height: size.windowSize > '1024' ? props.height : props.diff2 ? '300px' : '400px' , rotate: size.windowSize > '1024' || props.diff ? '0deg' : '180deg'}}>
            <h1 className="text-[18px] md:text-[20px] lg:text-[25px] xl:text-[26px] text-[#A2948A]">{props.head}</h1>
            <div className="flex flex-col gap-[6px] sm:gap-[10px] md:gap-[20px] items-start w-full text-[13px] md:text-[17px] lg:text-[17px] xl:text-[18px] text-[#000000]">
                <p>{props.t1}</p>
                <p>{props.t2}</p>
                <p>{props.t3}</p>
                <p>{props.t4}</p>
                {props.t5 && <p>{props.t5}</p>}
                {props.t6 && <p>{props.t6}</p>}
            </div>
        </div>
    )
}