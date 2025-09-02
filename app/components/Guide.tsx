import React from 'react'
import Image from 'next/image'

const Guide = () => {
  return (
    <section className='flexCenter flex-col'>
      <div className='padding-container max-container w-full pb-24 '>
        <img src="/camp.svg" alt="camp" width={50} height={50}/>
        <p className='uppercase regular-18 -mt-1 mb-3 text-green-50'>We're to support your camping Journey</p>

        <div className=' flex flex-wrap justify-between gap-5 lg:gap-10'>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>Structured Camping Guide</h2>
          <p>Everything you need to know about camping starts with the Morhe's Trips & Camping Guide where you will learn how to use offline maps and resources like a pro. Meet fellow campers that match your energy and get the peaceful mental reset you need. Get ready for your next adventure!</p>
        </div>
      </div>

      <div className='flexCenter max-container relative w-full'>
        <Image 
        src="/ghana-aburi-botanical-gardens.png" 
        alt="gardens" 
        width={1440} 
        height={580}
        className='w-full object-cover object-center 2xl:rounded-5xl'
        />

        <div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20 hover:scale-90' >
          <Image 
            src="/meter.svg" 
            alt="meter" 
            width={16} 
            height={1}
            className='h-full w-auto'
          />


          <div className='flexBetween flex-col'>
            <div className='flex w-full flex-col '>
              <div className='flexBetween w-full'>
                <p className='regular-16 text-gray-20 '>Destination</p>
                <p className='bold-16 text-green-50 m-3'>48 min</p>
              </div>
              <p className='bold-20 mt-2'>Aburi Gardens</p>
            </div>

            <div className='flex w-full flex-col '>
              <p className='regular-16 text-gray-30'>Start Track</p>
              <h4 className='bold-20 mt-2 whitespace-nowrap'>Peduasi-Lodge, Aburi</h4>
            </div>
          
          </div>
        </div>

      </div>
 
      
    </section>
  )
}

export default Guide
