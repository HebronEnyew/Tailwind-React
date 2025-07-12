import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-black text-gray-100 max-w-[1240px] mx-auto'>
       <div className='w-full py-8  mx-auto grid grid-cols-3 gap-10 text-start text-gray-100'>
        <div className='md:col-span-1 '>
            <h1 className='uppercase w-full font-bold text-[#00df9a] text-3xl py-2'>Valerie</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat unde laudantium id fuga, possimus sequi quis tenetur, sint impedit tempora aperiam velit. Velit ipsa numquam voluptatibus magnam voluptate quidem molestias.</p>
            <div className='flex w-[65%] my-6 justify-between bg-black text-2xl'> 
                <FaFacebookSquare />
                <FaInstagramSquare />
                <FaTwitterSquare />
                <FaGithubSquare />
                <FaDribbbleSquare />
            </div>
           
        </div>

        <div className='w-full flex lg:grid-cols-3 gap-10 col-span-2 md:justify-between'>
            <ul className='flex flex-col'>
                <li className='py-2  border-b-[#00df9a]
                '>Solutions</li>
                <li className='py-2 border-b-[#00df9a]
                '>Analytics</li>
                <li className='py-2  border-b-[#00df9a]
                '>Marketing</li>
                <li className='py-2  border-b-[#00df9a]
                '>Commerce</li>
                <li className='py-2  border-b-[#00df9a]
                '>Insights</li>
            </ul>
            <ul>
                <li className='py-2  border-b-[#00df9a]
                '>About</li>
                <li className='py-2  border-b-[#00df9a]
                '>Blog</li>
                <li className='py-2  border-b-[#00df9a]
                '>Jobs</li>
                <li className='py-2  border-b-[#00df9a]
                '>Peers</li>
                <li className='py-2  border-b-[#00df9a]
                '>Careers</li>
            </ul>
            <ul>
                <li className='py-2  border-b-[#00df9a]
                '>Claims</li>
                <li className='py-2  border-b-[#00df9a]
                '>Policy</li>
                <li className='py-2  border-b-[#00df9a]
                '>Terms</li>
                <li className='py-2  border-b-[#00df9a]
                '>Guides</li>
                <li className='py-2  border-b-[#00df9a]
                '>API Status</li>
            </ul>
        </div>
       </div>
    </div>
  )
}

export default Footer