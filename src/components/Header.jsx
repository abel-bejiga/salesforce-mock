import React from 'react'
import {BsGlobe} from 'react-icons/bs'
import {FaMagnifyingGlass, FaUser} from 'react-icons/fa6'
import logo from '../assets/logo-salesforce.svg'
import Buttons from './Buttons'

const Header = () => {

    const menuData = [
        {label: 'Products'},
        {label: 'Industries'},
        {label: 'Customers'},
        {label: 'Learning'},
        {label: 'Support'},
        {label: 'Company'},
        {label: 'Salesforce+'},
    ]
    
  return (
    <>
        <nav className='bg-white py-2'>
           <div className='flex justify-between items-center px-10 text-sm'>
           <ul className="menu_items flex gap-5 items-center font-semibold">
                <li className='w-14 h-14'>
                    <img src={logo} alt="logo" className='w-full h-full object-contain object-center' />
                </li>
                {menuData.map((items, i) => (
                    <li key={i}>{items.label}</li>
                ))}
            </ul>
            <ul className="right_nav flex items-center gap-5">
                <div className='grid'>
                    <a href="" className='underline text-center text-xs'>Contact Us</a>
                    <p className='text-[13px]'>1-800-664-9073</p>
                </div>
                <FaMagnifyingGlass size={15}/>
                <BsGlobe size={15}/>

                <div className='flex items-center font-bold gap-5'>
                    <a href="" className='flex items-center gap-1'><FaUser size={15}/>Login</a>
                    <Buttons name={'Try for free'} styles={'bg-[#2e844a] text-white py-3 px-6'}/>
                </div>
            </ul>
           </div>
        </nav>
    </>
  )
}

export default Header