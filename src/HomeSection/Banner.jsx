import React from 'react'
import BusinessPromo from './BusinessPromo'

const Banner = () => {
    return (
        <>
            <div className='md:flex lg:mx-12 lg:my-8 md:flex-row-reverse md:justify-center mx-2 '>
                <img className='w-[90%] lg:w-[100%] lg:h-[550px] mx-auto' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Bing-AI-Open-Preview:VP2-859x540"></img>
                <div className="left md:absolute md:mr-[300px] md:mt-[67px] md:w-[400px]  mx-2 flex flex-col md:bg-white   justify-center items-start md:items-baseline ">
                    <h1 className='text-2xl font-medium my-2 mx-5'> Announcing the next wave of AI innovation</h1>
                    <p className='w-3/4 mx-5 font-medium  text-start md:text-base'> The new Microsoft Bing and Edge will soon feature more visual search responses, chat history, and persistent chat within Edge. We’re also adding actions to help people complete tasks</p>
                    <button className='text-lg font-medium indent-1 mx-4 px-8 py-2  my-4 mb-9 inline-block bg-blue-800 text-white '>Learn more about it</button>
                </div>
            </div>
            <BusinessPromo />
        </>
    )
}

export default Banner
