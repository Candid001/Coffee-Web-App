import React from 'react'
import Coffee from '../assets/Rectangle 5.svg'
import CoffeeCup from '../assets/Rectangle 4.svg'


const Hero = () => {
  return (
    <>
   
                <div className="relative bg-[#FFF3E0] h-fit pt-[40px] px-[10px] pb-35 md:px-[40px] md:pt-20 md:pb-5 lg:px-[100px] flex flex-col md:flex-row lg:gap-16">
        
                    
                    <div className="relative z-10 md:w-1/2 space-y-6">
                        <h1 className="bg-[radial-gradient(50%_50%_at_50%_50%,#000_35.53%,#8B4513_83.97%)] bg-clip-text text-transparent text-5xl font-bold font-serif4">Enjoy Every Sip of Your Coffee</h1>
                        <p className="bg-[radial-gradient(50%_50%_at_50%_50%,#000_35.53%,#8B4513_83.97%)] bg-clip-text text-transparent text-lg md:text-xl">Awaken your senses and indulge in the art of coffee at our enchanting café, where every cup is a journey and every moment is a sip of pure delight.</p>
                        <button className="bg-[#8B4513] text-white px-6 py-3 rounded-lg hover:bg-[#6a3410] transition">Make Your Own</button>
                    </div>

                    {/* Images Div */}
                    <div className="absolute inset-0 md:static flex ">

                        <div className="relative w-full h-full md:">
                            <img src={Coffee} alt="Coffee" className="w-[400px] h-[400px] opacity-50 md:opacity-100 md:w-[430px] md:h-[493px] lg:h-[380px] lg:w-[494px] lg:relative lg:bottom-10 lg:left-15"/>
                            <img src={CoffeeCup} alt="Coffee Cup" className="absolute opacity-50 bottom-40 left-1/2 transform -translate-x-1/2 translate-y-1/4 md:opacity-100 md:translate-y-0 md:left-auto md:right-[-190px] md:bottom-[95px] w-[250px] md:w-[350px] h-auto lg:absolute lg:bottom-13 lg:h-110"/>
                        </div>

                    </div>
                </div>
    
    </>
  )
}

export default Hero
