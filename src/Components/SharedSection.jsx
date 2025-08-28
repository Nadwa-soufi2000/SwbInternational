import { useContext } from "react"
import { Size } from "./WindowSize"

export default function SharedSection(props)
{
    const size = useContext(Size)
    
    return(
     <div className="flex w-[90%] md:w-[60%] lg:w-[90%] xl:w-full xl:flex-row lg:flex-row md:flex-col flex-col justify-center items-center gap-[20px]" style={{flexDirection: props.diff && size.windowSize > '768' ? 'row-reverse' : size.windowSize > '768' && !props.diff ? 'row' : 'column'}}>
           <div className="flex flex-col justify-center items-center gap-4 xl:h-[530px] xl:w-[700px] lg:w-[600px] lg:h-[540px] md:w-full md:h-[550px] w-full h-[440px]">
               <div className='flex flex-col w-full h-[220px] sm:h-[290px] gap-1  lg:gap-[7px] justify-center items-start pl-[12px] sm:pl-[30px] bg-[#f0ecea] rounded-[15px] shadow-xl'>
                    <h1 className="text-[18px] md:text-[20px] lg:text-[25px] xl:text-[26px] text-[#A2948A]">{props.title}</h1>
                    <div className="flex flex-col gap-[4px] lg:gap-[4px] Xl:gap-[20px] items-start w-full text-[13px] md:text-[16px] lg:text-[16px] xl:text-[18px] text-[#000000]">
                        <p>{props.p1}</p>
                        <p>{props.p2}</p>
                        <p>{props.p3}</p>
                        <p>{props.p4}</p>
                       {props.p5 && <p>{props.p5}</p>}
                   </div>
              </div>
                <div className="flex justify-center items-center gap-2 sm:gap-4 w-full">
                    <img src={props.pic1} className="w-[50%] h-[160px] md:w-[50%] md:h-[240px] lg:w-[230px] lg:h-[240px] xl:w-[330px] xl:h-[230px] rounded-[10px]"/>
                    <img src={props.pic2} className="w-[50%] h-[160px] md:w-[50%] md:h-[240px] lg:w-[230px] lg:h-[240px] xl:w-[330px] xl:h-[230px] rounded-[10px]"/>
                 </div>
          </div>
          <div className="w-full h-[300px] md:h-[420px] md:w-[100%]  lg:w-[390px] lg:h-[450px] xl:w-[460px] xl:h-[520px] ">
                <img src={props.pic3} className="w-full h-full rounded-[10px]"/>
         </div>
     </div>
    )
}