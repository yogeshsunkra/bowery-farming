import React from 'react'
import Button from './Button'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);
// import MotionPathPlugin from 'gsap/MotionPathPlugin'


const Header = () => {

  
    // const path = MotionPathPlugin.path([
    //   { x: -100, y: 100 },
    //   { x: 0, y: 0 },
    //   { x: 100, y: 100 },
    // ],{curvature:0.5});

  useGSAP(() => {
    const header = gsap.timeline()


    header.fromTo('.boxsm',
      { scale: 2.5 },
      { delay: 1, duration: 0.3, opacity: 1, scale: 2, }),

      header.fromTo('.boxmd',
        { scale: 2 },
        {
          delay: 0.2, display: 'block', duration: 0.3, opacity: 1, scale: 1.5,

        }),
      header.to('.boxsm',
        { duration: 0, scale: 1.5, }, '<'),

      header.fromTo('.boxLg',
        { scale: 2 },
        { delay: 0.2, duration: 0.3, opacity: 1, scale: 1, display: 'block' }),
      header.to('.boxmd',
        { duration: 0.1, scale: 1, paddingTop: "0" }, '<'),
      header.to('.boxsm',
        { duration: 0.1, scale: 1 }, '<'),


      header.to('.slider', {
        duration: 0.4,
        height: "100%",
        
      }),
      header.to('.tempTxt', {
        duration: 0.1,
        opacity: 0,
        display: "none"
      }, "<"),
      header.to('.boxLg', {
        duration: 0.5,
        color: "#FFFFFF"
      }, "<")
    header.to('.main', {
      duration: 0.2,
      top: "45%"
    }, "<"),
      header.from('.hero-content', {
        duration: 0.5,
        delay: 0.2,
        display: "none",
        y: 200,
      }, "<")

  })


  return (
    <div className='header w-full h-screen flex flex-col relative items-center'>




      {/* Nav */}
      <div className='relative w-full h-max flex items-center justify-center'>


        <div className='logo absolute font-Finlandica font-[700] text-[36px] top-1/2  self-center'>
          Bowery
        </div>

        <div className='hidden xl:block nav w-full  xl:w-[65%] mx-auto z-30 pt-4'>

          <div className='flex justify-between items-center'>
            <div className='menu-items flex gap-4'>
              <Button className={'rounded-lg py-3 text-[10px] tracking-wider font-Finlandica font-[600] uppercase hover:bg-black/10'}
                children={'produce'} px={"px-3"} />
              <Button className={'rounded-lg py-3 text-[10px] tracking-wider font-Finlandica font-[600] uppercase hover:bg-black/10'}
                children={'about us'} px={"px-3"} />
              <Button className={'rounded-lg py-3 text-[10px] tracking-wider font-Finlandica font-[600] uppercase hover:bg-black/10'}
                children={'recipes'} px={"px-3"} />

            </div>

            <div className='menu-items flex gap-4'>
              <Button className={'rounded-lg py-3 text-[10px] tracking-wider font-Finlandica font-[600] uppercase hover:bg-black/10'}
                children={'stories'} px={"px-3"} />
              <Button className={'rounded-lg py-3 text-[10px] tracking-wider font-Finlandica font-[600] uppercase hover:bg-black/10'}
                children={'join us'} px={"px-3"} />
              <Button className={'rounded-lg py-3 text-[10px] bg-white  tracking-wider font-Finlandica font-[600] uppercase text-ui-1'}
                children={'find in store'} px={"px-4"} />
            </div>
          </div>


        </div>

        <div className='mobile-nav relative w-full flex items-center xl:hidden'>

          <div>

          </div>
        </div>

      </div>






      {/* Hero Text */}

      <div className='main w-full h-max absolute top-[50%] flex flex-row items-center  z-20 '>


        <div className='absolute hero-text w-full'>
          <h1 className='leading-none   text-center font-Anton font-[900] text-ui-1 py-4'>
            <span className='boxsm tempTxt block opacity-0 h4 h-full  static uppercase
              '>big impact</span>

            <span className='boxmd tempTxt hidden  opacity-0 h3  static uppercase pt-4 xl:pt-8'>biiiiig flavor</span>

            <span className='boxLg hidden opacity-0 h1  static uppercase'>eat up</span>

          </h1>
        </div>

      </div>


      {/* Hero Subject */}
      <div className='hero-content absolute hero-sm md:hero-bg z-20 flex justify-center items-center w-full h-[65%] 
       md:h-[55%] bottom-0 overflow-hidden '>

        <div className='absolute hidden xl:block w-full top-[10%] left-[70%] '>
          <img src='/bowery_logo.svg' />
        </div>

        <div className='absolute flex flex-col bottom-[15%] text-center items-center my-auto mx-auto '>

        <div className='w-[2rem] md:w-[4rem] xl:hidden'>
          <img src='/bowery_logo.svg' />
        </div>

          <span className='text-white/90 font-[500] text-[14px] font-Open py-4'>
            Deep inside our wonderful world of vertical farms,
            <br />
            freshness runs free, bland gets banished, and smart
            <br />
            produce secures the future of food.
          </span>


          <Button className='bg-white text-ui-2 rounded-[10px]
           p7 p-4 font-Finlandica font-[600] tracking-wider
            uppercase mx-auto '
            px={'0'}>Discover How</Button>




        </div>


      </div>

      {/* Sliders */}

      <div className='absolute slider  top-0 left-0 bg-ui-1 z-10  w-[35%]'></div>
      <div className='absolute slider  bottom-0 left-[35%] bg-ui-1 z-10 w-[30%]'></div>
      <div className='absolute slider  top-0 right-0 bg-ui-1 z-10  w-[35%]'></div>




    </div>
  )
}

export default Header
