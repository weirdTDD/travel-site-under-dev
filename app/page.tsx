import { FC } from 'react'
import './globals.css'
import Hero from './components/Hero';
import Features from './components/Features';
import Camp from './components/Camp';
import Guide from './components/Guide';
import GetApp from './components/GetApp';


export const Home = () => {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  )
}

export default Home;
