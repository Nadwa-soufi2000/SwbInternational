import { useState } from "react"
import leftBtn from '../assets/leftBtn.png'
import rightBtn from '../assets/rightBtn.png'

export default function SliderBigScreen(props)
{
    const[sliderIndex , setSliderIndex] = useState(0)
    console.log(sliderIndex)

    const PlusIndex = () =>
    {
        if(sliderIndex >= props.Arr1.length - 1)
          setSliderIndex(0)
        else
          setSliderIndex(prev => prev + 1)
    }

    const MunsIndex = () => 
    {
        if(sliderIndex <= 0 )
          setSliderIndex(props.Arr1.length - 1)
        else 
          setSliderIndex(prev => prev - 1)
    }
    return(
        <div className='md:w-[90%] lg:w-[88%] xl:w-[1280px] 2xl:w-[80%] flex gap-[30px] items-center py-[10px]'>
             <div className='md:w-[40%] md:h-[340px] lg:w-[40%] lg:h-[450px] xl:w-[490px] xl:h-[520px]'>
                <img src={props.Arr1[sliderIndex]} className='w-full h-full'/>
            </div>
            <div className='flex flex-col items-start md:w-[60%] lg:w-[60%] xl:w-[700px]'>
             <div className='md:w-[100%] lg:w-[100%] xl:w-[700px] flex flex-col items-start'>
                  {props.title &&<h2 className='tracking-wide lg:text-[30px] xl:text-[36px] font-medium text-[#000000]'>{props.title}</h2>}
                  <p className='md:text-[15px] lg:text-[17px] xl:text-[18px] font-medium text-[#000000]'>{props.p1}</p>
                  <p className='md:text-[15px] lg:text-[17px] xl:text-[18px] font-medium text-[#000000]'>{props.p2}</p>
                  {props.p3 &&<p className='md:text-[15px] lg:text-[17px] xl:text-[18px] font-medium text-[#000000]'>{props.p3}</p>}
                  <div className='flex w-full justify-end items-center gap-[5px] pr-[20px]'>
                        <img onClick={() => PlusIndex()} src={leftBtn} className='md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px] xl:w-[60px] xl:h-[60px] hover:border-[5px] duration-500 rounded-full hover:border-[#817b7b] hover:border-solid'/>
                        <img onClick={() => MunsIndex()} src={rightBtn} className='md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px] xl:w-[60px] xl:h-[60px] hover:border-[5px] duration-500 rounded-full hover:border-[#817b7b] hover:border-solid'/>
                  </div>
            </div>
            <div className='flex justify-start py-[20px] items-center gap-[4px] w-full'>
                <img src={props.pic1} className='md:w-[33%] md:h-[160px] lg:w-[33%] lg:h-[200px] xl:w-[200px] xl:h-[230px]'/>
                <img src={props.pic2} className='md:w-[33%] md:h-[160px]  lg:w-[33%] lg:h-[200px] xl:w-[200px] xl:h-[230px]'/>
                <img src={props.pic3} className=' md:w-[33%] md:h-[160px] lg:w-[33%] lg:h-[200px] xl:w-[200px] xl:h-[230px] rounded-r-[10px]'/>
           </div>
            </div>
     </div>
    )
}