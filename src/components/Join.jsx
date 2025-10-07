import React from 'react'
import Mail from '../assets/mail.svg'

const Join = () => {
  return (
    <>
        <div className='bg-[#FFF3E0] flex flex-col justify-center align-middle gap-6 px-[25px] items-center pb-5'>
            <div>
                <p className='font-serif4 text-[16px] font-bold bg-[radial-gradient(50%_50%_at_50%_50%,#000_35.53%,#8B4513_83.97%)] bg-clip-text text-transparent h-6'>Join in and get 30% Off on your next three orders</p>
                <p className='text-xl font-serif4'>Subscribe to our newsletter and receive a 30% discount</p>
            </div>

            <div className=' flex gap-4'>
                <input type="email" name="" id="" placeholder='Email address' className='bg-[#8B451380] rounded-xl px-8'/>
                <img src={Mail} alt="mail" className='absolute pt-2 pl-1'/>
                <button className='bg-[#8B4513] rounded-xl p-2 text-white font-bold'>Subscribe</button>
            </div>
        </div>
    </>
  )
}

export default Join