import React from 'react';
import Logo from '../assets/logo-text.png'

const Nav = () => {
    return (
       <nav className=' bg-white
          sticky top-0 '>
        <div className='flex justify-between items-center mx-20 py-5 '>
          <button className="md:hidden text-2xl">
  ☰
</button>
            <img src={Logo} alt="" />
            <ul  className=' hidden md:flex justify-between items-center gap-6 ' >
                <li><a href="#"><span className="text-[#DB2777]">Home</span></a></li>
                <li><a href="#">Technologies</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className=' flex gap-2.5'>
               <button className="btn rounded-full bg-white px-5 text-[#334155]">Sign in</button>
               <button className="btn rounded-full bg-[#D91B7E] text-white px-5 hover:border-gray-400 ">Sign Up</button>
            </div>
        </div>
     </nav> 
    );
};

export default Nav;