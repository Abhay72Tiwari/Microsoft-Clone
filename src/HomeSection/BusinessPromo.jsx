import React from 'react'
import BusinessProBanner from './BusinessProBanner'

const BusinessPromo = () => {
    return (
        <>
            <div className='flex space-y-5 flex-row text-left justify-center  flex-wrap md:mx-3 md:justify-center md:items-start'>
                <div></div>
                <div className='flex flex-col flex-wrap mx-4'>
                    <img className='' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Surf-CP-SurfaceFamilyForBusiness?wid=406&hei=230&fit=crop"></img>
                    <p className='text-2xl font-medium'>Surface for Business</p>
                    <p className='text-lg  w-[27rem] font-medium'> No matter what you do, there’s a Surface to help you do it. </p>
                    <a className='my-4 text-lg text-[#0067b8]' href="https://www.microsoft.com/en-in/surface/business?icid=mscom_marcom_CPW1a_SurfaceforBusiness">Learn more</a>
                </div>
                <div className='flex flex-col flex-wrap mx-4'>
                    <img className='' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-CP-Microsoft-Teams-Commercial?wid=406&hei=230&fit=crop"></img>
                    <p className='text-2xl font-medium'>Get Microsoft Teams for free</p>
                    <p className='text-lg  w-[27rem] font-medium'>Online meetings, chat and shared cloud storage – all in one place.</p>
                    <a className='my-4 text-lg text-[#0067b8]' href="https://www.microsoft.com/en-in/microsoft-teams/group-chat-software?icid=mscom_marcom_CPW2a_MicrosoftTeams">Sign up for free</a>
                </div>
                <div className='flex flex-col flex-wrap mx-4'>
                    <img className='' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-365-For-Business-Woman-Teams-Call?wid=406&hei=230&fit=crop"></img>
                    <p className='text-2xl font-medium'>Try Microsoft 365 for free</p>
                    <p className='text-lg  w-[27rem] font-medium'>Get Microsoft Teams, secure cloud storage and premium apps across devices with a free one-month Microsoft 365 Business Standard trial.</p>
                    <a className='my-4 text-lg text-[#0067b8]' href="https://www.microsoft.com/en-in/microsoft-365/business/compare-all-microsoft-365-business-products?icid=mscom_marcom_CPW3a_M365forBusiness&activetab=tab%3aprimaryr2">Start your free trial</a>
                </div>
                <div className='flex flex-col flex-wrap mx-4'>
                    <img className='' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Azure-AI-Bloom?wid=406&hei=230&fit=crop"></img>
                    <p className='text-2xl font-medium'>Join the era of AI</p>
                    <p className='text-lg  w-[27rem] font-medium'>Create, communicate, and code with the latest Microsoft AI solutions.</p>
                    <a className='my-4 text-lg text-[#0067b8]' href="https://www.microsoft.com/en-in/ai?icid=mscom_marcom_CPW4a_AzureAI">Explore AI solutions</a>
                </div>
            </div>
            <BusinessProBanner />
        </>
    )
}

export default BusinessPromo
