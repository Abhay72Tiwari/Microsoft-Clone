import React from 'react'
import Banner from './Banner'

const Card = () => {
    return (
        <>
            <div className='flex flex-row text-left justify-center  flex-wrap md:mx-3 md:justify-center md:items-start'>
                <div className='flex flex-col flex-wrap mx-4'>
                    <img className='' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Pro-9-M1-Platinum-02-1?wid=406&hei=230&fit=crop"></img>
                    <p className='text-2xl font-medium'>Surface Pro 9</p>
                    <p className='text-lg  w-[27rem] font-medium'>The tablet flexibility you want and the laptop performance you need — all in one ultra-portable device.</p>
                    <a className='my-4 text-lg text-[#0067b8]' href='https://www.microsoft.com/en-in/surface/devices/surface-pro-9?icid=mscom_marcom_CPH1a_SurfacePro9&FY23FallSurface'>Learn more</a>
                </div>
                <div className='flex flex-col flex-wrap mx-4'>
                    <img className='' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-365-Lifestyle-Sandstone-Icon-Toss?wid=406&hei=230&fit=crop"></img>
                    <p className='text-2xl font-medium'>Microsoft 365</p>
                    <p className='text-lg  w-[27rem] font-medium'>Turn your ideas into reality, stay safer online and off, and focus on what matters most with Microsoft 365 apps.</p>
                    <a className='my-4 text-lg text-[#0067b8]' href="https://www.microsoft.com/en-in/microsoft-365/p/microsoft-365-personal/cfq7ttc0k5bf?icid=mscom_marcom_CPH2a_M365Personal">For one person</a>
                    <a className='my-3 text-lg text-[#0067b8]' href="https://www.microsoft.com/en-in/microsoft-365/p/microsoft-365-family/cfq7ttc0k5dm?icid=mscom_marcom_CPH2b_M365Family">For up to six people</a>
                </div>
                <div className='flex flex-col flex-wrap mx-4'>
                    <img className='' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSX-CP-Xbox-Series-X?wid=406&hei=230&fit=crop"></img>
                    <p className='text-2xl font-medium'>Xbox Series X</p>
                    <p className='text-lg  w-[27rem] font-medium'>The fastest, most powerful Xbox ever. </p>
                    <a className='my-4 text-lg text-[#0067b8]' href="https://www.xbox.com/en-in/consoles/xbox-series-x?icid=mscom_marcom_CPH3a_XboxSeriesX">Shop Xbox Series X</a>
                </div>
                <div className='flex flex-col flex-wrap mx-4'>
                    <img className='' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSS-CP-Xbox-Series-S-Evergreen?wid=406&hei=230&fit=crop"></img>
                    <p className='text-2xl font-medium'>Xbox Series S</p>
                    <p className='text-lg  w-[27rem] font-medium'>Next-gen performance in the smallest Xbox ever.</p>
                    <a className='my-4 text-lg text-[#0067b8]' href="https://www.xbox.com/en-in/consoles/xbox-series-s?icid=mscom_marcom_CPH4a_XboxSeriesS">Shop Xbox Series S</a>
                </div>
            </div>
            <Banner />
        </>
    )
}

export default Card
