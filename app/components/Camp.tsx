import React from 'react'
import Image from 'next/image'
import { PEOPLE_URL } from '../constants';
import Button from './Button'

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined}: CampProps) => {
  return(
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-center bg-no-repeat rounded-5xl`}>
      <div className=' flex flex-col h-full items-start justify-between p-6 lg:px-20 lg:py-10'>


        <div className='flexCenter gap-4'>
          <div className='rounded-full bg-green-50 p-4'>
            <Image
              src="/folded-map.svg"
              alt="map"
              width={28}
              height={28}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <h4 className='bold-18 text-white'>{title}</h4>
            <p className='regular-14 text-white'>{subtitle}</p>
          </div>

        </div>

        

        <div className='flexCenter gap-6'>
          <span className='flex -space-x-3.5 overflow-hidden'> {PEOPLE_URL.map((url) =>(
            <Image 
              className='rounded-full w-10 h-10 inline-block'
              src={url}
              alt='people'
              width={52}
              height={52}
              key={url}
            />
          ))} 
          </span><p className='bold-16 md:bold-20 text-white'>{peopleJoined}</p>
        </div>

        

      </div>
    </div>  
  )

}



const Camp = () => {

  return (
    <section className='2xl:max-container relative flex flex-col py-10 lg:py-20 xl:mb-20 '>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]' >

        <CampSite
          backgroundImage='bg-bg-img-1'
          title='Aburi Gardens'
          subtitle='A beautiful garden in the mountains'
          peopleJoined='100+ Joined' 
          
        />

        <CampSite
          backgroundImage='bg-bg-img-2'
          title='Kakum National Park'
          subtitle='A beautiful rainforest with a canopy walk-way'
          peopleJoined='200+ Joined'
        />

      </div>

      <div className= 'flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6'>
        <div className='bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl '>
          <h2 className='regular-24 md:regular-32 2xl:regular-64 capitalize text-white'> <strong>Feeling Lost?</strong> and not knowing the way?</h2>
          <p className='regular-14 md:regular-16 2xl:regular-24 mt-4 text-white'>Discover the joy of camping with us. Share your experiences, tips, and stories with fellow outdoor enthusiasts. Whether you're a seasoned camper or just starting out, our community is here to support you on your adventures.</p>

          <div className='flexBetween mt-6'>
            <p className='regular-14 md:regular-16 2xl:regular-24 mt-4 text-white bold-16'>Join Our Camping Community </p>
            <Button 
            type='button'
            title='Join Now'
            variant= 'btn_white_text' 
          />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Camp
