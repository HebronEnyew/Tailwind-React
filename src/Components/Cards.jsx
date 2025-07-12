import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full border rounded-lg shadow-lg hover:scale-105 duration-300 my-8'>
                <img src={Single} alt='/' className='w-20 mx-auto pt-4 mt-[-4rem] bg-white'/> 
                <h1 className='text-2xl font-bold text-center py-8'>Single User</h1>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8 '>1 Granted User</p>
                    <p className='py-2 border-b mx-8 '>Send Up to 2 GB</p>
                </div>
                <button className='py-3 px-6 w-[200px] font-medium bg-[#00df9a]  rounded-md my-6-auto mx-auto my-6 '>Start Trial</button>
            </div>

            <div className='w-full border rounded-lg shadow-lg hover:scale-105 duration-300 md:my-0 bg-gray-100'>
                <img src={Double} alt='/' className='w-20 mx-auto pt-4 mt-[-4rem] bg-transparent'/> 
                <h1 className='text-2xl font-bold text-center py-8'>Single User</h1>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8 '>1 Granted User</p>
                    <p className='py-2 border-b mx-8 '>Send Up to 2 GB</p>
                </div>
                <button className='py-3 px-6 w-[200px] font-medium bg-black text-[#00df9a] rounded-md my-6-auto mx-auto my-6'>Start Trial</button>
            </div>

            <div className='w-full border rounded-lg shadow-lg hover:scale-105 duration-300 my-8 '>
                <img src={Triple} alt='/' className='w-20 mx-auto pt-4 mt-[-4rem] bg-white'/> 
                <h1 className='text-2xl font-bold text-center py-8'>Single User</h1>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8 '>1 Granted User</p>
                    <p className='py-2 border-b mx-8 '>Send Up to 2 GB</p>
                </div>
                <button className='py-3 px-6 w-[200px] font-medium bg-[#00df9a]  rounded-md my-6-auto mx-auto my-6'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards