import React from "react";
import Adspic1 from "../assets/Rectangle 6.svg";
import Adspic2 from "../assets/Rectangle 7.svg";
import Adspic3 from "../assets/Rectangle 8.svg";

const Ads = () => {
  return (
    <>
      <div className="bg-[#FFF3E0] h-fit w-auto px-[15px] pb-15 flex-col gap-12 md:flex md:flex-row md:gap-6 lg:px-[105px] lg:gap-12">
        <div className="flex gap-1 ">
          <img
            src={Adspic1}
            alt="image"
            className="h-50 w-50 rounded-2xl md:w-auto lg:h-[325px] lg:w-[395px]"
          />

          <div className="flex flex-col gap-0 md:flex md:flex-col md:gap-1">
            <img
              src={Adspic2}
              alt="image"
              className="h-35 rounded-2xl md:w-[132px] md:h-auto lg:w-[240px] lg:h-[210]"
            />
            <img
              src={Adspic3}
              alt="image"
              className="h-24 rounded-2xl md:w-[132px] md:h-auto lg:w-[236px] lg:h-[135px]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[24px] md:w-[50%] md:h-auto">
          <h1 className="bg-[radial-gradient(50%_50%_at_50%_50%,#000_35.53%,#8B4513_83.97%)] bg-clip-text text-transparent font-serif4 text-4xl font-bold md:text-2xl">
            Taking You On A Coffee Journey Like Never Before
          </h1>
          <p className="text-black font-serif4 text-base font-normal">
            Coffee, with its invigorating caffeine content, is a trusted
            companion for millions, helping them kickstart their day and
            maintain alertness. Beyond its energizing effects, coffee also
            serves as a catalyst for social interactions, fostering connections
            and meaningful conversations among people worldwide.
          </p>
          <button className="bg-[#8B4513] rounded-[20px] text-white w-fit px-8 py-4">
            Visit Menu
          </button>
        </div>
      </div>
    </>
  );
};

export default Ads;

// const Ads = () => {
//   return (
//     <>
//         <div className='flex flex-col gap-2 justify-between px-[10px]'>
//             <div className='border-2 w-fit h-fit grid grid-cols-2'>
//                 <img src={Adspic1} alt="image" className='w-1/2 h-40'/>
//                 <img src={Adspic2} alt="image" className=''/>
//                 <img src={Adspic3} alt="image" className=''/>
//             </div>
//             <div className='border-2 w-45'></div>
//         </div>
//     </>
//   )
// }

// export default Ads
