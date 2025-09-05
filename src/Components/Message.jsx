import { CgCheckO } from 'react-icons/cg';
import { CgCloseO } from 'react-icons/cg';

export default function Message(props)
{
    return(
        <div className='flex justify-center items-center  bg-black/30 w-full h-full absolute top-0 bottom-0 left-0 right-0 z-[1]'>
            <div className='w-[290px] sm:w-[330px] h-[150px] shadow-xl flex items-start flex-col gap-3 pl-[17px] justify-center bg-[#FFFFFF] rounded-[5px]'>
              {
                props.msg === 'Added successfully' ?
                <div className='flex gap-[4px]'><p className='text-[#a8a6a6] text-[19px]'>{props.msg}</p> <CgCheckO className='w-[30px] h-[30px] fill-current text-[#008000]'/></div>
                :
                <div className='flex gap-[4px]'><p className='text-[19px] text-[#a8a6a6]'>{props.msg}</p> <CgCloseO className='w-[30px] h-[30px] fill-current text-[#ff0000]'/></div>
              }
               <button className='text-[15px] text-[#FFFFFF] bg-[#b8b4b4] w-[50px] h-[30px] rounded-[5px]' onClick={props.closeMessage}>Close</button>
            </div>
        </div>
    )
}