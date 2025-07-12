import React from 'react'
import  {ReactTyped}  from 'react-typed';


const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-full mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center'>
            <p className='text-[#00df9a] uppercase font-bold p-2'>growing with data analytics</p>
            <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold py-6' >Grow With Data</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-2'>Fast, flexible financing for</p>
                <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                    strings={['BTB', 'BTC', 'SASS']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                />
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500 pt-1' >Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms </p>
                <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero