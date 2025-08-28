import face from '../assets/facebook.png'
import insta from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import swb from '../assets/swblogo3b.png'
import mapPoint from '../assets/MapPoint.png'
import mess from '../assets/mess.png'
export default function Footer()
{
    return(
        <div className="w-full py-[50px] flex justify-center items-center bg-[#f1ebe5]">
            <div className=' w-[90%] h-[90%] lg:h-[148px] lg:w-[990px] xl:w-[1280px] xl:h-[148px] flex flex-wrap justify-between items-start'>
                <div className=' flex flex-col justify-start items-center gap-[20px] pt-[4px]'>
                    <img className='w-[80px] h-[40px]' src={swb}/>
                    <div className='flex justify-between items-center w-[80px] h-[24px]'>
                        <img className='w-[24px] h-[24px]' src={face}/>
                        <img className='w-[24px] h-[24px]' src={insta}/>
                        <img className='w-[24px] h-[24px]' src={twitter}/>
                    </div>
                </div>
                <div className='smw-[99px] w-[133px] h-[118px] flex justify-start items-start flex-col'>
                    <h3 className='text-[15px] text-[#1B2228] font-semibold'>Company</h3>
                    <p className='text-[15px] text-[#5A6269]'>About Us</p>
                    <p className='text-[15px] text-[#5A6269]'>Global Adress</p>
                    <p className='text-[15px] text-[#5A6269]'>Our Story</p>
                </div>
                <div className='w-[174px] h-[144px] flex justify-start items-start flex-col '>
                    <h3 className='text-[15px] text-[#1B2228] font-semibold'>Our Investments</h3>
                    <p className='text-[15px] text-[#5A6269]'>Bastoni Chocolate</p>
                    <p className='text-[15px] text-[#5A6269]'>Robotic And Ai</p>
                    <p className='text-[15px] text-[#5A6269]'>Daira Technology</p>
                    <p className='text-[15px] text-[#5A6269]'>Sawtru Group Packaging</p>
                </div>
                <div className='w-[133px] h-[84px] flex justify-start items-start flex-col'>
                    <h3 className='text-[15px] text-[#1B2228] font-semibold'>Legal</h3>
                    <p className='text-[15px] text-[#5A6269]'>Privacy Policy</p>
                    <p className='text-[15px] text-[#5A6269]'>Terms Of Services</p>
                </div>
                <div className='flex justify-center items-start flex-col gap-[13px] w-[240px]'>
                    <h3 className='text-[15px] text-[#1B2228] font-semibold'>Connect Info</h3>
                    <div className='w-[119px] h-[24px] flex items-start justify-center gap-[7px]'>
                        <img className='w-[24px] h-[24px]' src={mess}/>
                        <p className='text-[12px] text-[#5A6269]'>Info@swboi.com</p>
                    </div>
                    <div className='w-[240px] h-[40px] flex items-start justify-start gap-[7px]'>
                        <img className='w-[28px] h-[28px] mt-[5px]' src={mapPoint}/>
                        <div className='flex flex-col items-start justify-center'>
                            <p className='text-[#5A6269] text-[12px]'>LINITED STATES: B The Green Street </p>
                            <p className='text-[#5A6269] text-[12px]'>DAVER, DI 19901</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}