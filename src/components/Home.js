import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import SplitType from 'split-type';
import Typed from 'react-typed';

const text = new SplitType('#boubacar');

const Home = () => {

  return (
    
    <div name='home' className='w-full h-screen bg-[#08192f] sm:mt20'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-screen'>
        <p className='text-red-400 font-bold sm:mt-[150px]'>Hi, my name is</p>
        <h1 id='boubacar' className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Boubacar FALL</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          <Typed 
            strings={[
              "I'm a Full Stack Web Developer."
            ]}
            typeSpeed={100}
            backSpeed={50}
            backDelay={3000}
            loop
          />
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I’m a full-stack web developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.</p>
          <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-500 hover:border-red-400'>Scroll Down 
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-2' />
              </span>
            </button>
          </div>
      </div>
    </div>
  )
}

export default Home;