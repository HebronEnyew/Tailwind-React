import React from 'react'
import laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 '>
        <div className='max-w-[1249px] mx-auto grid md:grid-cols-2 '>
            <img src={laptop} alt=''  className='w-[500px] mx-auto my-4'/>
            <div className='flex flex-col justify-center  md:items-start  px-4 py-6 md:px-0 text-start md:mx-0'>
                <p className='uppercase text-[#00df9a] font-bold '>data analytics dashboard</p>
                <h1 className='text-2xl md:text-4xl sm:text-3xl font-bold py-2 '> Manage Data Analytics Centrally</h1>
                <p className='flex md:items-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vitae soluta minima sunt, a voluptatum suscipit? Aut id quod reiciendis, maiores dolorem dolore assumenda fugit voluptatem sequi architecto culpa tempore.</p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0  py-3 '>Get Started</button>
            </div>
        </div>

    </div>
  )
}

export default Analytics