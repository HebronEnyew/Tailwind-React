import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav =() =>{
    setNav(!nav);
  }


  return (
    <div className='flex justify-between items-center h-24 w-full mx-auto text-white cursor-pointer md:flex' >
        <h1 className='uppercase text-3xl w-[20%] font-bold text-[#00df9a] '>Valerie</h1>
        <ul className=' md:flex'>
          <li className='p-4'>Home</li>
          <li className='p-4'>Company</li>
          <li className='p-4'>Resources</li>
          <li className='p-4'>About</li>
          <li className='p-4'>Contact</li>
        </ul>

        <div onClick={handleNav} className=' top-4 right-4 cursor-pointer justify-end items-center md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} /> }
        </div>
        <div className={nav ?  
                             'fixed justify-end left-0 top-0 w-[40%] h-full  border-r-gray-900 bg-black text-left p-10 ease-in-out duration-500' 
                             : 'fixed  left-[-100%]'}>
            <h1 className='uppercase text-3xl w-full font-bold text-[#00df9a] md:hidden' >Valerie</h1>
            <ul className='pt-24'>
                <li className='p-4 border-b border-gray-600 '>Home</li>
                <li className='p-4 border-b border-gray-600 '>Company</li>
                <li className='p-4 border-b border-gray-600 '>Resources</li>
                <li className='p-4 border-b border-gray-600 '>About</li>
                <li className='p-4 border-b border-gray-600 '>Contact</li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar