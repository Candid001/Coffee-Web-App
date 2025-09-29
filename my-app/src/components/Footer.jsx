import React from 'react'
import Facebook from '../assets/Facebook.svg'
import Twitter from '../assets/Twitter.svg'
import WhatsApp from '../assets/WhatsApp.svg'
import Instagram from '../assets/Instagram.svg'

const Footer = () => {
  return (
    <>
        <div className='bg-[#4B2C20] py-[40px] px-[10px] grid grid-cols-2 gap-4 justify-center items-center md:flex md:gap-6 lg:gap-20'>
            {/* Privacy */}
            <div className='flex flex-col gap-2'>
                <h2 className='text-[#FFF3E0] font-inter text-lg font-bold'>Privacy</h2>
                <p className='text-[#FFF3E0B2] font-inter text-base font-medium'>Terms of use</p>
                <p className='text-[#FFF3E0B2] font-inter text-base font-medium'>Privacy Policies</p>
                <p className='text-[#FFF3E0B2] font-inter text-base font-medium'>Cookies</p>
            </div>

            {/* Services */}
            <div className='flex flex-col gap-2'>
                <h2 className='text-[#FFF3E0] font-inter text-lg font-bold'>Services</h2>
                <p className='text-[#FFF3E0B2] font-inter text-base font-medium'>Shop</p>
                <p className='text-[#FFF3E0B2] font-inter text-base font-medium'>Order ahead</p>
                <p className='text-[#FFF3E0B2] font-inter text-base font-medium'>Menu</p>
            </div>

            {/* About Us */}
            <div className='flex flex-col gap-2'>
                <h2 className='text-[#FFF3E0] font-inter text-lg font-bold'>About Us</h2>
                <p className='text-[#FFF3E0B2] font-inter text-base font-medium'>Contact</p>
                <p className='text-[#FFF3E0B2] font-inter text-base font-medium'>Information</p>
                <p className='text-[#FFF3E0B2] font-inter text-base font-medium'>Menu</p>
            </div>

            {/* Social Media */}
            <div className='flex flex-col gap-2'>
                
                <h2 className='text-[#FFF3E0] font-inter text-lg font-bold'>Social Media</h2>
                <div className='flex gap-2'>
                    <img src={Facebook} alt="" />
                    <img src={Twitter} alt="" />
                    <img src={WhatsApp} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer