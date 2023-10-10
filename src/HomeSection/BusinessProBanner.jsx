import React from 'react'
import BusinessPromo from './BusinessPromo'
import Footer from './Footer'

const BusinessProBanner = () => {
    return (
        <>
            <div className='md:flex lg:mx-12 lg:my-8  md:flex-row-reverse md:justify-center mx-2 '>
                <img className='lg:w-[100%] lg:h-[550px]' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Microsoft-Responsible-AI:VP2-859x540"></img>
               
                <div className="left lg:  mx-2 flex flex-col md:bg-white   justify-center items-start md:items-baseline lg:absolute lg:mx-[107px] lg:my-[107px] lg:mr-[61%] lg:w-[38%] lg:h-[60%]">
                    <h1 className='text-2xl font-medium my-2 mx-5'>Our blueprint for governing AI in India</h1>
                    <p className='w-3/4 mx-5 font-medium  text-start md:text-base'>Microsoft is committed to developing and deploying AI in a safe, secure, and transparent way that can help expand positive outcomes in India—and the world.</p>
                    <button className='text-lg font-medium indent-1 mx-4 px-8 py-2  my-4 mb-9 inline-block bg-blue-800 text-white '>Learn about our approach to responsible AI</button>
                </div>
            </div>
           <Footer/>
        </>
    )
}

export default BusinessProBanner
