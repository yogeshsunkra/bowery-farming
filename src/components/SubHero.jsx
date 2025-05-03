import React from 'react'
import Button from './Button'
import Slider from './Slider'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger);



const SubHero = () => {


  useGSAP(()=>{

    // gsap.from(".heroTxt",{
    //   scrollTrigger:".heroTxt",
    //   opacity:0,
    //   duration:0.5,
      
    // })
    const produce = gsap.timeline();

    const texts = gsap.utils.toArray(".heroTxt");

    texts.map((el)=>{

      gsap.from(el,{
        scrollTrigger:{
          // trigger:".heroTxt",
          trigger:el,
          start:"top 80%",
          // end:"70% 60%",
          end:"+=200",
          // duration:5,
          scrub:true,
          ease:'power1.inOut',
          markers:true,
          once:true
  
        },
        opacity:0,
        
      })

    })

  
      ScrollTrigger.create({
        trigger:'.lastTxt',
        start:"top 80%",
        end:"+=100",
        onEnter: () => {
          gsap.to(".content", {
            opacity: 1,
            scale: 1,
            duration: 0.2,
            ease: "power2.out",
          });
        },
        scrub:true,
        markers:true,
        once:true
      })
        // trigger:".heroTxt",


    

      
    




    // produce.from(".content",{
    //   opacity:0,
    //   scale:5,
    //   // duration:0.2
    // },"+=1")




  },[])


  return (
    <div className='flex w-full  bg-bg-main items-center justify-center overflow-hidden p-2'>

      <div className='flex flex-col w-full xs:w-[90%] md:w-[80%]   min-h-screen p-8 '>

        <div className='flex items-center gap-4 relative my-2 font-Finlandica font-[700] '>
          <span className=' bg-ui-2 p-[0.3rem] rounded-sm'></span>
          <p className='text-text-2 p6'>Our Produce</p>
        </div>

        <div className='flex flex-col w-full items-center justify-center'>
          {/*content*/}
          <div className='relative w-full sm:w-[80%] md:w-[100%] lg:w-[80%]   mx-auto py-8  flex flex-col 
          items-center justify-center text-[6rem] md:text-[10rem] xl:[16rem] leading-[0.95]
           text-text-2'>
            <div className='heroTxt self-start font-Anton font-[900] leading-none'>BITE</div>
            <div className='heroTxt self-end font-Anton font-[900] leading-[10rem]'>INTO</div>
            <div className='heroTxt lastTxt self-start font-Anton font-[900] mx-8 leading-none'>GOOD</div>

            <div className='content opacity-0 scale-[5] absolute  lg:left-auto'>
              <div className='relative w-[200px] xs:w-[250px]  md:w-[360px] xl:w-[450px]'>
                <img src='/sub_hero_leaf.svg' className='w-full h-full' />

                <div className='hidden lg:block'>
                  <div className='flex  flex-col-reverse gap-4 absolute font-Anton text-black h6 bottom-3/4 left-1/2' >
                    <span className='p-1 bg-white rounded-full text-black p8  w-max h-max'>01</span>
                    <div className='flex flex-col justify-center border-2 border-[#616161] p-4 opacity-80'>
                      <span className='capitalize p5'> no bad stuff</span>
                      <p className='p7'>Our products are pesticide-free,
                        which is better for your plate and the
                        planet.</p>
                    </div>
                  </div>
                  <div className='flex flex-row-reverse absolute font-Anton text-black h6 top-1/3 right-96' >
                    <span className='p-1 bg-white rounded-full text-black p8  w-max h-max'>02</span>
                    <div className='flex flex-col justify-center border-2 border-[#616161] p-4 opacity-80'>
                      <span className='capitalize p5'> no bad stuff</span>
                      <p className='p7'>Our products are pesticide-free,
                        which is better for your plate and the
                        planet.</p>
                    </div>
                  </div>
                  <div className='flex flex-col absolute font-Anton text-black h6 top-2/3 left-1/3'>
                    <span className='p-1 bg-white rounded-full text-black p8  w-max h-max'>03</span>
                    <div className='flex flex-col justify-center border-2 border-[#616161] p-4 opacity-80 max-w-60'>
                      <span className='capitalize p5'> no bad stuff</span>
                      <p className='p7'>Our products are pesticide-free,
                        which is better for your plate and the
                        planet.</p>
                    </div>
                  </div>
                  <div className='absolute font-Anton text-black h6 top-2/3 left-2/3' >
                    <span className='p-1 bg-white rounded-full text-black p8  w-max h-max'>04</span>
                    <div className='flex flex-col justify-center border-2 border-[#616161] p-4 opacity-80'>
                      <span className='capitalize p5'> no bad stuff</span>
                      <p className='p7'>Our products are pesticide-free,
                        which is better for your plate and the
                        planet.</p>
                    </div>
                  </div>
                  <div className='flex gap-4 absolute font-Anton text-black h6 top-1/3 left-96' >
                    <span className='p-1 bg-white rounded-full text-black p8  w-max h-max self-end'>05</span>
                    <div className='flex flex-col justify-center border-2 border-[#616161] p-4 opacity-80 min-w-60'>
                      <span className='capitalize p5 '> no bad stuff</span>
                      <p className='p7'>Our products are pesticide-free,
                        which is better for your plate and the
                        planet.</p>
                    </div>
                  </div>

                </div>

              </div>


            </div>
          </div>

          <Slider />

          {/* Buttons */}
          <div className='flex items-center gap-4'>
            <Button className={"bg-ui-1 rounded-xl py-4 font-Finlandica p7 font-[600] uppercase"}>Our Produce</Button>
            <Button className={"border-ui-1 border-2 rounded-xl py-4 font-Finlandica text-ui-1 p7 font-[600] uppercase"}>Find In Store</Button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SubHero
