import { useContext } from "react"
import { Size } from "./WindowSize"

export default function Description(props)
{
    const size = useContext(Size)
    return(
        <div className="lg:w-[50%] w-[100%] pl-0 sm:pl-[20px]  flex justify-center items-center py-[10px]" style={{rotate: size.windowSize > '1024' || props.diff ? '0deg' : '180deg'}}>
           <div className="w-[80%] h-[100%] sm:w-[50%] sm:h-[100%] md:w-[50%] md:h-[400px] lg:w-[460px] lg:h-[410px]  xl:w-[700px] xl:h-[554px] bg-[#f1ebe5] flex flex-col gap-[14px] items-start justify-center py-[16px] md:py-0  px-[10px] sm:rounded-0 rounded-[10px] sm:mx-0 sm:my-0 mx-0 my-auto">
            <h1 className="text-[16px] sm:text-[22px] md:text-[30px] lg:text-[35px] xl:text-[48px] text-[#000000] font-bold pl-[10px]">{props.title}</h1>
            <div className="w-full text-[14px] lg:text-[17px] xl:text-[20px] text-[#292D32] flex flex-col justify-center items-start gap-[2px] sm:gap-[20px] pl-[10px]" >
                <p>{props.line1}</p>
                <p>{props.line2}</p>
                <p>{props.line3}</p>
                <p>{props.line4}</p>
                <p>{props.line5}</p>
            </div>
           </div>
        </div>
    )
}