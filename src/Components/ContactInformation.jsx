export default function ContactInformation(props) 
{
    return(
        <div className="w-[1043px] h-[204px] py-[20px] rounded-[20px] border-[#A2948A]/40 flex  relative flex-col gap-[20px] border-[1.5px] border-solid">
            <div className="flex gap-[250px] w-[80%] my-0 mx-auto">
                {props.head1 &&
                   <> <h1 className='text-[36px] text-[#000000]'>{props.head1}</h1>
                    <span className=' h-[2px] bg-[#363940] block absolute top-[75px] left-[105px]' style={{width:props.three ? '620px' : '283px'}}></span></>
                }
                 {props.head2 &&
                   <><h1 className='text-[36px] text-[#000000]'>{props.head2}</h1>
                     <span className='w-[283px] h-[2px] bg-[#363940] block absolute top-[75px] left-[630px]'></span></>
                }
            </div>
           <div className="flex justify-around items-center"> 
                <div className="flex flex-col justify-center items-start">
                     {props.country1 &&<p className="text-[20px] font-medium text-[#000000]">{props.country1}</p>}
                     <div className="flex justify-center items-start gap-2">
                         <img src={props.img1} className="w-[24px] h-[24px]"/>
                         <div className="flex flex-col items-start justify-start">
                              <p className="text-[#14293E] text-[16px]">{props.p1}</p>
                              <p className="text-[#14293E] text-[16px]">{props.p2}</p>
                              {props.p3 &&<p className="text-[#14293E] text-[16px]">{props.p3}</p>}
                         </div>
                     </div>
                   { props.img2 && <div className="flex justify-center items-start gap-3">
                          <img src={props.img2} className="w-[20px] h-[20px]"/>
                          <p className="text-[#14293E] text-[16px]">{props.p4}</p>
                     </div>}
               </div>
               <div className="flex flex-col justify-center items-start ">
                      {props.country2 &&<p className="text-[20px] font-medium text-[#000000]">{props.country2}</p>}
                      <div className="flex justify-center items-start gap-2">
                           <img className="w-[24px] h-[24px]" src={props.img3}/>
                          <div className="flex flex-col items-start justify-start">
                               <p className="text-[#14293E] text-[16px]">{props.p5}</p>
                               <p className="text-[#14293E] text-[16px]">{props.p6}</p>
                               {props.p7 && <p className="text-[#14293E] text-[16px]">{props.p7}</p>}
                         </div>
                     </div>
                   {props.img4 && <div className="flex justify-center items-start gap-3" >
                           <img src={props.img4} className="w-[20px] h-[20px]"/>
                           <p className="text-[#14293E] text-[16px]">{props.p8}</p>
                     </div>}
               </div>
          </div>
      </div>
    )
}