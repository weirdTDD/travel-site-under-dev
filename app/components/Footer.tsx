import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FOOTER_CONTACT_INFO, FOOTER_LINKS,SOCIALS } from '../constants';

const Footer = () => {
  return (
    <footer className='flexCenter mb-24'>

      <div className='padding-container max-container flex flex-col w-full gap-14'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          <Link href='/' className='mb-10'>
            <Image 
              src='/explores-logo.png'
              alt='logo'
              width={150}
              height={40}
            />
          </Link>

          <div className='flex md:flex-1 flex-wrap gap-10 sm:justify-between '>
            {FOOTER_LINKS.map((columns) =>(
              <FooterColumn title={columns.title} >
                <ul className='regular-14 flex flex-col gap-4 text-gray-30'>
                  {columns.links.map((link) =>(
                    <Link href='/' key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className='flex flex-col'>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) =>(
                  <Link 
                    href='/' 
                    key={link.label}
                    className='flex gap-4 md:flex-col lg:flex-row'
                  >
                    <p className='whitespace-nowrap'>{link.label}: </p>
                    <p className='medium-14 whitespace-nowrap text-blue-70'>{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className='flex flex-col gap-6'>
                <FooterColumn title={SOCIALS.title}>
                  <ul className='regular-14 flex gap-4 text-gray-30'>
                    {SOCIALS.links.map((link) =>(
                      <Link href='/' key={link}>
                        <Image 
                          src={link}
                          alt='social-icon'
                          width={24}
                          height={24}
                        />
                      </Link>
                    ))}
                  </ul>
                </FooterColumn>
            </div>
          </div>
        </div>
        
        <div className='border bg-gray-20' />

        <p className='regular-14 text-gray-30 w-full text-center'>
          2025 Explores Ghana | All rights reserved
        </p>

      </div>

      
      
    </footer>
  )
}


type FooterColumnProps ={
  title: string;
  children: React.ReactNode;
}


const FooterColumn =({title, children}: FooterColumnProps ) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  )
}

export default Footer;
