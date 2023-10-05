import React from 'react'
import newsLogo from '../assets/newsLogo.webp'

const News = () => {
  return (
    <>
    <div className='text-[13px] font-bold bg-green-950 text-white flex justify-center gap-5 items-center py-2'>
        <img src={newsLogo} alt="img" className='w-auto h-5' />
        <p>Catch what you missed from Dreamforce 2023.
            <span className="underline pl-3 font-semibold text-xs">Watch on Salesforce+</span>
        </p>
    </div>
    </>
  )
}

export default News