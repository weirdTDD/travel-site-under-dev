import React from 'react'

const Guide = () => {
  return (
    <section className='flexCenter flex-col'>
      <div className='border-2 border-red-700 padding-container max-container w-full pb-24 '>
        <img src="/camp.svg" alt="camp" width={50} height={50}/>
        <p className='uppercase regular-18 -mt-1 mb-3 text-green-50'>We're to support your camping Journey</p>

        <div className='border-2 border-blue-700 flex flex-wrap justify-between gap-5 lg:gap-10'>
          <h2>Camping Guide</h2>
          <p>Everything you need to know about camping starts with the Morhe's Trips & Camping Guide where you learn how to like a pro using offline maps and resources. Meet fellow campers that match your energy and get the peaceful mental reset you need. Get ready for your next adventure!</p>
        </div>
      </div>
 
      
    </section>
  )
}

export default Guide
