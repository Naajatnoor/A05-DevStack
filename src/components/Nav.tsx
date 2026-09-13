
import Logo from '../assets/logo-text.png'

const Nav = () => {
    return (
       <nav className=' bg-white
          sticky top-0 z-50'>
        <div className='grid grid-cols-3 items-center mx-4 py-5 md:flex md:justify-between md:mx-20'>
          <button className="md:hidden justify-self-start text-2xl">
                   ☰
            </button>
            <img src={Logo} alt=""  className="justify-self-center md:justify-self-start"/>
            <ul  className=' hidden md:flex justify-between items-center gap-6 ' >
                <li><a href="#"><span className="text-[#DB2777]">Home</span></a></li>
                <li><a href="#">Technologies</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className=' flex gap-2.5 justify-self-end'>
               <button className="btn rounded-full bg-white md:px-5 text-[#334155]">Sign in</button>
               <button className="btn rounded-full bg-[#D91B7E] text-white md:px-5 hover:border-gray-400 ">Sign Up</button>
            </div>
        </div>
     </nav> 
    );
};

export default Nav;