import React from 'react';
import './footer.css'
import Logo from '../assets/logo-text.png'
const Footer = () => {
    return (
        <footer className=''>       
        <section className="flex justify-between items-top mx-10 border-b-1 border-gray-200 border-t-1  pt-5 ">
            <div className='pb-5'>
                 <img src={Logo} alt="" />

                 <p className='py-8 text-[#3a3b3c]'>Curated tools, technologies, and resources for developers building
                 <br /> modern software.</p>

                  <ul className='flex gap-3  font-mono'>
                    <li><a href="#">GitHub</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">LinkedIn</a></li>
                  </ul>

            </div>

            <div>
                {/* <h1> {
                    constructor(parameters) {
                        
                    }
                }>PRODUCT</h1> */}
                <h1 className=" font-[600]  py-[20px]">PRODUCT</h1>
            <ul >
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
            </ul>
        </div>

        <div>
                <h1 className=" font-[600]  py-[20px]" >COMPANY</h1>
            <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Careers</li>
            </ul>
        </div>

        <div>
                <h1 className=" font-[600] py-[20px]">PRODUCT</h1>
                <h1  >LEGAL</h1>
            <ul>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
            </ul>
        </div>

        </section>
        <section className='flex justify-between items-center mx-12 my-6 text-[13px]'>
            <p>© 2026 Dev Stack. All rights reserved.</p>
            <div className='flex gap-4 '>
                <p>Privacy</p>
                <p>Terms</p>
            </div>
        </section>
         </footer>
       
      
      
    );
};

export default Footer;