import React from 'react';
import bannerPic from '../assets/banner-stack.png'
const Banner = () => {
    return (
        <section className='flex justify-between items-center '>
            <div className='px-30'>
            <h1 className='text-[50px]  font-extrabold text-[#0F172A]'>Build your Ideal</h1>
            <h1 className='text-[50px]  font-extrabold bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</h1>
                 <p className='text-[18px] mx-1 my-6 text-[#475569]'>Explore frontend, backend, database, and tooling options,<br />
                 compare them side by side, and put together the stack that fits your<br />
                 next project.</p>
               
                 <div className='flex gap-3'>
                   <button className="btn rounded-[8px] bg-linear-to-r from-[#FF5722] to-[#D81B7E] px-8 text-white">Explore Technologies</button>
                   <button className="btn rounded-[8px] px-16 text-[#374151]">Learn More</button>
                   </div>
               </div>

               <div className=''>
                  <img src={bannerPic} alt="" />
               </div>

        </section>
        
    );
};

export default Banner;