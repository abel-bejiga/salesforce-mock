import React from 'react'
import logo from '../assets/logo-salesforce.svg'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa6'
import {VscTwitter} from 'react-icons/vsc'
import Buttons from './Buttons'
import {BsGlobe} from 'react-icons/bs'
import {LiaAngleUpSolid} from 'react-icons/lia'

const Footer = () => {


    const footer_items_1 = [
    { items: "What is CRM?"},
    { items: "What is Salesforce?"},
    { items: "Help Desk Software"},
    { items: "Marketing Automation Software"},
    { items: "Explore All Products"},
    { items: "What is Cloud Computing?"},
    { items: "Customer Success"},
    { items: "Product Pricing"},
    { items: "Privacy for Salesforce Products"},
    ]


    const footer_items_2 = [
        { items: "Our Story"},
        { items: "Newsroom"},
        { items: "Blog"},
        { items: "Careers"},
        { items: "Trust"},
        { items: "Salesforce.org"},
        { items: "Sustainability"},
        { items: "Investors"},
        { items: "Give us your Feedback"},
    ]
    const footer_items_3 = [ 
        { items: "Manage Your Account"}, 
        { items: "New Release Features"}, 
        { items: "Find or Become a Partner"}, 
        { items: "CRM Software"}, 
        { items: "Salesforce LIVE"}, 
        { items: "Dreamforce"}, 
        { items: "Salesforce Mobile"}, 
        { items: "Newsletter Sign-Up"}, 
        { items: ""}, 
    ]
    






  return (
    <>
    <footer className='mt-14'>
        <div className='text-[#032d60] h-full w-[900px] m-auto'>
            <ul className='flex justify-between mt-28 mb-20'>
                <li className="grid gap-5 place-content-start">
                    <img src={logo} alt="logo" className='w-20 h-full mb-10' />
                    <div className='social_ico flex items-center justify-center gap-3'>
                        <div className='w-7 h-7  bg-neutral-600 rounded grid place-content-center'>
                        <FaFacebookF  className='fill-white text-xl'/>
                        </div>
                        <div className='w-7 h-7 bg-neutral-600 rounded grid place-content-center'>
                        <VscTwitter  className='fill-white text-xl'/>
                        </div>
                        <div className='w-7 h-7 bg-neutral-600 rounded grid place-content-center'>
                        <FaLinkedinIn className='fill-white text-xl'/>
                        </div>
                        <div className='w-7 h-7 bg-neutral-600 rounded grid place-content-center'>
                        <FaInstagram  className='fill-white text-xl'/>
                        </div>
                        <div className='w-7 h-7 bg-neutral-600 rounded grid place-content-center'>
                        <FaYoutube  className='fill-white text-xl'/>
                        </div>
                    </div>
                    <p className='text-sm font-bold'>Call us at 1-800-664-9073</p>
                    <a href='' className='text-sm font-bold underline'>See all ways to contact us</a>
                </li>
                <li className="grid gap-3 text-xs">
                    <h1 className='mb-5 text-sm font-bold'>New to Salesforce?</h1>
                    {footer_items_1.map((data, i) => (
                        <a href="" key={i} className='text-blue-800'>{data.items}</a>
                    ))}
                </li>
                <li className="grid gap-2 text-xs">
                <h1 className='mb-5 text-sm font-bold'>About Salesforce</h1>
                {footer_items_2.map((data, i) => (
                        <a href="" key={i} className='text-blue-800'>{data.items}</a>
                    ))} 
                </li>
                <li className="grid gap-2 text-xs">
                <h1 className='mb-5 text-sm font-bold'>Popular Links</h1>
                {footer_items_3.map((data, i) => (
                        <a href="" key={i} className='text-blue-800'>{data.items}</a>
                    ))}
                </li>
            </ul>
        </div>
        <div className='w-full h-24 bg-[#032e61] text-white'>
                <div className="flex pt-4 gap-4 w-[900px] m-auto h-full justify-between">
                    <div className=''>
                        <Buttons name={<div className='flex items-center gap-2'><BsGlobe /> Worldwide <LiaAngleUpSolid /></div>}  styles={'border border-white text-white py-2 px-4'}/>
                    </div>
                    <div className='grid gap-4'>
                        <p className='text-[10px] '>© Copyright 2023 Salesforce, Inc. <span className='underline text-blue-400'>All rights reserved</span>. Various trademarks held by their respective owners. Salesforce, Inc. Salesforce Tower, 415 Mission Street, 3rd Floor, San Francisco, CA 94105, United States</p>
                        <ul className='text-[10px] flex items-center underline text-blue-400 gap-4'>
                            <li>Legal</li>
                            <li>Terms of Service</li>
                            <li>Privacy Information</li>
                            <li>Responsible Disclosure</li>
                            <li>Trust</li>
                            <li>Contact</li>
                            <li>Cookie Preferences</li>
                            <li>Your Privacy Choices</li>

                        </ul>
                    </div>
                </div>
        </div>
    </footer>
    </>
  )
}

export default Footer