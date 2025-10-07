import React from 'react'
import Pic1 from '../assets/Ellipse 1.svg'
import Pic2 from '../assets/Ellipse 1 (1).svg'
import Pic3 from '../assets/Ellipse 1 (2).svg'

const Customer = () => {

    const cusRev = [
        {
            id : 1,
            img : Pic1,
            name: "Christian",
            prof: "Lawyer",
            review: "I recently tried the Irish coffee. It's an absolute gem! The aroma alone, when I first opened the bag, was enchanting. When brewed, the coffee had a full-bodied richness that was simply unmatched. The deep, earthy notes with hints of dark chocolate made every sip a true pleasure. I can't recommend this coffee enough; it's now a staple in my morning routine!",
        },
        {
            id: 2,
            img : Pic2,
            name: "Mark",
            prof: "Artist",
            review: "I recently tried the Espresso medium roast, and I must say it's nothing short of exceptional. The first thing that struck me was the enticing aroma as I opened the bag – a promise of the good things to come. Upon brewing, the coffee had a beautifully balanced flavor profile with subtle notes of caramel and a hint of nuttiness. It had a smooth, velvety texture that made each sip a pure pleasure. This coffee has quickly become a favorite morning ritual, and I can't wait to explore more from this brand.",
        },
        {
            id: 3,
            img : Pic3,
            name: "Austin",
            prof: "Lawyer",
            review: "I recently tried the Irish coffee. It's an absolute gem! The aroma alone, when I first opened the bag, was enchanting. When brewed, the coffee had a full-bodied richness that was simply unmatched. The deep, earthy notes with hints of dark chocolate made every sip a true pleasure. I can't recommend this coffee enough; it's now a staple in my morning routine!",
        }
    ];

  return (
    <>
        <div className='bg-[#FFF3E0] h-fit flex flex-col gap-10 lg:gap-16 w-auto px-[10px] pb-15'>
            {/* Coffee */}
            <div className='flex flex-col gap-2 lg:gap-6'>
                <div className=''>
                    <h1 className='text-2xl font-bold font-serif4 content-center justify-self-center'>Our Customer Review</h1>
                </div>

                <div className='flex flex-col gap-2 h-auto w-auto px-[35px] md:flex md:flex-row md:gap-4'>{cusRev.map((rev) =>
                    <div key={rev.id} className='flex p-2 flex-col items-start gap-2 bg-[#8B451321] w-70 h-fit md:w-100'>
                        <div className='flex gap-2'> 
                            <img src={rev.img} alt={rev.name} className='w-20 h-auto object-cover rounded-full '/>
                            
                            <div className='pt-3'>
                                <p className='text-[#4B2C20] font-serif4 text-xl'>{rev.name}</p>
                                <p className='text-[#4B2C20] font-serif4 text-xl'>{rev.prof}</p>
                            </div>
                        </div>

                        <p>{rev.review}</p>

                    </div>
                )}</div>
            </div>
        </div>
    </>
  )
}

export default Customer