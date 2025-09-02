import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className='flexCenter w-full flex-col pb-[100px]'>
      <div className='get-app'>
        <div className='w-full z-20 flex flex-col flex-1 items-start justify-center gap-12'>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[320px]'> 
            Get for free now!
          </h2>

          <p className='regular-16 text-gray-10'>
            Available on iOS and Android 
          </p>

          <div className='flex flex-col w-full whitespace-nowrap gap-3  xl:flex-row'>
            <div className=' hover:scale-105'>
              <Button 
                type='button'
                title='App Store'
                icon='/apple.svg'
                variant= 'btn_white'
                full
              /> 
            </div>
            <div className=' hover:scale-105'>
              <Button 
                type='button'
                title='Play Store'
                icon='/android.svg'
                variant= 'btn_dark_green_outline'
                full
              /> 
            </div>  

          </div>

        </div>

        <div className='flex flex-1 items-center justify-end'>
          <Image src='/phones.png' alt='phones' width={550} height={870} />

        </div>
      </div>
    </section>
  )
}

export default GetApp
