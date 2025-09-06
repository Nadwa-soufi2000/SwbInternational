import { useContext } from "react"
import { Size } from "./WindowSize"


export default function ContactInformation(props) 
{
    const size = useContext(Size)
    return(
        <div className="w-[310px] sm:w-[400px] md:[500px] lg:w-[800px] xl:w-[1043px] 2xl:w-[1043px] h-auto md:h-auto lg:h-auto xl:h-[204px] 2xl:h-[204px] py-[20px] rounded-[20px] border-[#A2948A]/40 flex  relative flex-col gap-[20px] border-[1.5px] border-solid">
            <div className="flex  gap-[250px] w-[94%] lg:w-[90%] xl:w-[80%] 2xl:w-[80%] my-0 mx-auto">
                {props.head1 &&
                   <> <h1 className=' text-[19px] md:text-[20px] sm:no-underline underline lg:text-[30px] xl:text-[36px] 2xl:text-[36px] font-bold text-[#000000]'>{props.head1}</h1>
                    <span className='sm:block hidden h-[2px] bg-[#363940] absolute top-[60px] md:top-[60px] lg:top-[75px] lg:left-[40px] xl:left-[105px] 2xl:left-[105px]' style={{width:props.three && size.windowSize > '1024' ? '620px' : '283px'}}></span></>
                }
                {props.head2 && size.windowSize > '1024' &&
                   <><h1 className=' relative right-[50px] xl:right-0 2xl:right-0 sm:no-underline underline text-[19px] md:text-[20px] lg:text-[30px] xl:text-[36px] 2xl:text-[36px] font-bold text-[#000000]'>{props.head2}</h1>
                     <span className='w-[283px] h-[2px] bg-[#363940] sm:block hidden absolute top-[75px] lg:left-[470px] xl:left-[630px] 2xl:left-[630px]'></span></>
                }
            </div>
           <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-around pl-[10px] lg:pl-0 items-start lg:items-center lg:gap-0 gap-[20px]"> 
                <div className="flex flex-col justify-center items-start">
                     {props.country1 &&<p className="text-[18px] sm:text-[20px] font-medium text-[#000000]">{props.country1}</p>}
                     <div className="flex justify-center items-start gap-2">
                         <img src={props.img1} className=" w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]"/>
                         <div className="flex flex-col items-start justify-start">
                              <p className="text-[#14293E] text-[14px] sm:text-[16px]">{props.p1}</p>
                              <p className="text-[#14293E] text-[14px] sm:text-[16px]">{props.p2}</p>
                              {props.p3 &&<p className="text-[#14293E] text-[14px] sm:text-[16px]">{props.p3}</p>}
                         </div>
                     </div>
                   { props.img2 && <div className="flex justify-center items-start gap-3">
                          <img src={props.img2} className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]"/>
                          <p className="text-[#14293E] text-[14px] sm:text-[16px]">{props.p4}</p>
                     </div>}
               </div>
                {props.head2 && size.windowSize < '1024' &&
                   <><h1 className='text-[19px] md:text-[20px] font-bold sm:no-underline underline lg:text-[30px] xl:text-[36px] 2xl:text-[36px] text-[#000000]'>{props.head2}</h1>
                     <span className='w-[283px] h-[2px] bg-[#363940] sm:block hidden '></span></>
                }
               <div className="flex flex-col justify-center items-start ">
                      {props.country2 &&<p className="text-[18px] sm:text-[20px] font-medium text-[#000000]">{props.country2}</p>}
                      <div className="flex justify-center items-start gap-2">
                           <img className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]" src={props.img3}/>
                          <div className="flex flex-col items-start justify-start">
                               <p className="text-[#14293E] text-[14px] sm:text-[16px]">{props.p5}</p>
                               <p className="text-[#14293E] text-[14px] sm:text-[16px]">{props.p6}</p>
                               {props.p7 && <p className="text-[#14293E] text-[14px] sm:text-[16px]">{props.p7}</p>}
                         </div>
                     </div>
                   {props.img4 && <div className="flex justify-center items-start gap-3" >
                           <img src={props.img4} className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]"/>
                           <p className="text-[#14293E] text-[14px] sm:text-[16px]">{props.p8}</p>
                     </div>}
               </div>
          </div>
      </div>
    )
}
