import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white bg-black'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want Tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <input type="email" name="email" placeholder='Enter email' className='p-2 rounded-md w-[80%] flex flex-col sm:flex-row items-center justify-between w-full' />
                <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium w-[200px] my-6 mx-auto py-3'>Notify Me</button> 
            </div>
        </div>
    </div>
  )
}

export default Newsletter