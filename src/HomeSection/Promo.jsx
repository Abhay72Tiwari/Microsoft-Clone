import React from 'react'
import Card from './Card'

const Promo = () => {
    return (
        // <div className='md:flex md:flex-wrap'>
        <>
            <div className='flex flex-wrap justify-center items-center my-9 md:items-center md:justify-center md:mx-4 lg:space-x-12' >
                <div className='mx-6'>
                    <img className='ml-14' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Quick-Link-Icon-80x80-Microsoft-365?wid=40&hei=40" />
                    <span className='underline text-[#0067b8] '>Choose your Microsoft 365</span>
                </div>
                <div className='mx-6 '>
                    <img className='ml-14 mr-4' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface-go2-link-list-120x120?wid=40&hei=40" />
                    <span className='underline text-[#0067b8] '>Explore Surface devices</span>
                </div>

                <div className='mx-6 mt-9 md:mt-0'>
                    <img className='ml-14' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/xbox-blk-logo-link-list-120x120?wid=40&hei=40" />
                    <span className='underline text-[#0067b8] '>Buy Xbox games and consoles</span>
                </div>
                <div className='mx-6 mt-9 md:mt-0 pt-4'>
                    <img className='ml-14' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Quick-Link-Icon-80x80-Microsoft-365?wid=40&hei=40" />
                    <span className='ml-4 underline text-[#0067b8] '>Get Windows 11</span>
                </div>
            </div>
            <Card />
        </>

    )
}

export default Promo
