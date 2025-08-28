import s9 from '../assets/s9.png'
import s8 from '../assets/s8.png'
import s7 from '../assets/s7.png'
import { useContext } from 'react'
import { Size } from './WindowSize'

export default function Picture(props)
{
  const size = useContext(Size);
    return(
        <div className="lg:w-[50%] w-[100%] flex justify-center items-center py-[10px] relative" style={{rotate: size.windowSize > '1024' || props.diff ? '0deg' : '180deg'}}>
          <div className='relative w-[260px] h-[370px] sm:w-[330px] sm:h-[390px] md:w-[380px] md:h-[400px] lg:w-[410px] lg:h-[480] xl:w-[558px] xl:h-[607px] '>
            <div className='bg-[#A2948A] w-[225px] h-[325px] sm:w-[300px] sm:h-[345px] md:w-[340px] md:h-[350px] lg:w-[370px] lg:h-[340px] xl:w-[500px] xl:h-[545px] absolute top-[30px] left-[14px] xl:left-[30px]  rounded-[10px] flex justify-center items-center'>
               <img src={props.img} className='w-[100%] h-[94%] z-[1]'/>
            </div>
            <img className='absolute w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[90px] lg:h-[90px] xl:w-[105px] xl:h-[105px] right-[6px] top-[6px] sm:top-0 sm:right-0' src={s9}/>
            <img className='absolute right-[10px] bottom-0  w-[160px] h-[200px] sm:w-[194px] sm:h-[280px]  md:w-[210px] md:h-[300px] lg:w-[190px] lg:h-[230px] xl:w-[334px] xl:h-[466px]' src={s8}/>
            <img className='absolute top-[10px] left-0 w-[160px] h-[200px] sm:w-[194px] sm:h-[280px]  md:w-[210px] md:h-[300px] lg:w-[190px] lg:h-[230px] xl:w-[334px] xl:h-[466px]' src={s7}/>
          </div>
        </div>
    )
}