import { useContext } from "react"
import { Size } from "./WindowSize"

export default function BostaniChocolatePicture(props)
{
    const size = useContext(Size)
    return(
        <div className="w-[260px] h-[260px] md:w-[580px] md:h-[580px] lg:w-[440px] lg:h-[460px] xl:w-[630px] xl:h-[478px]" style={{rotate: size.windowSize > '1024' || props.diff ? '0deg' : '180deg'}}>
           <img src={props.pic} className="w-full h-full"/>
        </div>
    )
}