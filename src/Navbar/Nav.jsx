import React, { useState } from 'react'
import Home from '../HomeSection/Home'
import ReactWhatsapp from 'react-whatsapp'
import SearchIcon from '@mui/icons-material/Search';
import CartAccount from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Nav = () => {
    const [status, setstaus] = useState(false);

    return (
        <>
            <div className="z-10 navbar flex justify-between items-centerz p-2 my-2">
                <div className="flex justify-center items-center md:order-2" >
                    <div className="hamberer text-lg  p-2  md:hidden cursor-pointer" onClick={() => setstaus(!status)}>
                        {status ? <CloseIcon /> : <MenuIcon />}
                    </div>

                    <div className="searchIcon md:hidden"> <SearchIcon /></div>
                </div>
                <div className="logo text-center flex md:order-1">
                    <img className='w-28 md:w-32 md:ml-6' src='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31'></img>

                    <div className='features absolute w-fit md:w-auto md:bg-white  inset-0 md:flex md:mx-4 md:space-x-5 -translate-x-96 md:translate-x-0 md:static'>
                        <div className='filter'>Microsoft 365</div>
                        <div className='filter'>Teams</div>
                        <div className='filter'>Windows</div>
                        <div className='filter'>Surface</div>
                        <div className='filter'>Xbox</div>
                        <div className='filter'>Support</div>
                    </div>
                </div>
                <div className='md:order-3 flex'>
                    <div className="searchIcon hidden mx-2 md:block">All Micosoft <SearchIcon /></div>
                    <div className="card "><CartAccount /></div>
                </div>
            </div>

            <div className={`mobile z-0 bg-white ${status?'':'hidden'}`}>
                <ul className='ml-12 my-2   md:hidden inline-block text-xl  transition-all duration-100 ease-in '>
                    <li className='hover:underline'>Microsoft 365</li>
                    <li className='hover:underline'>Teams</li>
                    <li className='hover:underline'>Windows</li>
                    <li className='hover:underline'>Surface</li>
                    <li className='hover:underline'>Xbox</li>
                    <li className='hover:underline'>Support</li>
                </ul>
            </div>
            <Home />
            <div className='flex justify-end mr-28 cursor-pointer'>
                <ReactWhatsapp number='+91 7398081092' message='Hey! I want to talk you' action='send'>
                    <img className='w-[60px] rounded-full  md:w-[95px] fixed  bottom-2' src="./Whatsaap web.jpeg" alt="" />
                </ReactWhatsapp>
            </div>
        </>
    )
}

export default Nav
