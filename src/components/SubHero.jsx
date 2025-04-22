import React from 'react'
import Button from './Button'
import Slider from './Slider'

const SubHero = () => {
  return (
    <div className='flex w-full  bg-bg-main items-center justify-center overflow-hidden p-2'>

      <div className='flex flex-col w-full xs:w-[90%] md:w-[80%]   min-h-screen p-8 '>

        <div className='my-2 font-Finlandica font-[700] '>
          <span className='bg-ui-2 w-4 h-4 rounded-2xl'></span>
          <p className='text-text-2 p6'>Our Produce</p>
        </div>

        <div className='flex flex-col w-full items-center justify-center'>
          {/*content*/}
          <div className='relative w-full sm:w-[80%] md:w-[100%] lg:w-[80%]   mx-auto py-8  flex flex-col 
          items-center justify-center text-[6rem] md:text-[10rem] xl:[16rem] leading-[0.95]
           text-text-2'>
            <div className=' self-start font-Anton font-[900] leading-none'>BITE</div>
            <div className=' self-end font-Anton font-[900] leading-[6rem]'>INTO</div>
            <div className=' self-start font-Anton font-[900] mx-8 leading-none'>GOOD</div>

            <div className='absolute  lg:left-auto'>
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
                  <div className='flex flex-row-reverse absolute font-Anton text-black h6 top-1/3 left-10' >
                    <span className='p-1 bg-white rounded-full text-black p8  w-max h-max'>01</span>
                    <div className='flex flex-col justify-center border-2 border-[#616161] p-4 opacity-80'>
                      <span className='capitalize p5'> no bad stuff</span>
                      <p className='p7'>Our products are pesticide-free,
                        which is better for your plate and the
                        planet.</p>
                    </div>
                  </div>
                  <div className='flex flex-col absolute font-Anton text-black h6 top-2/3 left-1/3' >
                    <span className='p-1 bg-white rounded-full text-black p8  w-max h-max'>01</span>
                    <div className='flex flex-col justify-center border-2 border-[#616161] p-4 opacity-80'>
                      <span className='capitalize p5'> no bad stuff</span>
                      <p className='p7'>Our products are pesticide-free,
                        which is better for your plate and the
                        planet.</p>
                    </div>
                  </div>
                  <div className='absolute font-Anton text-black h6 top-2/3 left-2/3' >
                    <span className='p-1 bg-white rounded-full text-black p8  w-max h-max'>01</span>
                    <div className='flex flex-col justify-center border-2 border-[#616161] p-4 opacity-80'>
                      <span className='capitalize p5'> no bad stuff</span>
                      <p className='p7'>Our products are pesticide-free,
                        which is better for your plate and the
                        planet.</p>
                    </div>
                  </div>
                  <div className='absolute font-Anton text-black h6 top-1/3 right-10' >
                    <span className='p-1 bg-white rounded-full text-black p8  w-max h-max'>01</span>
                    <div className='flex flex-col justify-center border-2 border-[#616161] p-4 opacity-80'>
                      <span className='capitalize p5'> no bad stuff</span>
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
