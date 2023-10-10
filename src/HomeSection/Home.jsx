import React from 'react'
import Promo from './Promo'
import Card from './Card'

const Home = () => {
    return (
        <>
            <div className='Slider bg-[#ffffff] drop-shadow-lg flex flex-col-reverse md:flex-row md:mx-2 md:bg-[#f2f2f2]'>
                <div className="left flex flex-col   justify-center items-start md:items-baseline ">
                    <span className='text-center indent-1 pr-2 mt-6 ml-5 w-12 bg-[#ffb900]'>New</span>
                    <h1 className='text-2xl font-medium my-2 mx-5'>Surface Laptop 4</h1>
                    <p className='w-3/4 mx-5  text-start md:text-base'>An ultraportable, everyday laptop with the performance and battery life you need to get it all done.</p>
                    <button className='text-start indent-1 mx-4 px-4 py-2  my-4 mb-9 inline-block bg-blue-800 text-white '>Learn More</button>
                </div>
                <div className="right">
                    <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Laptop-Go-3-CONS-M001-1:VP3-1083x600" alt="" />
                </div>
            </div>
            <Promo />
            
        </>

    )
}

export default Home
