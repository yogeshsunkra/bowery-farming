import React from 'react'
import Button from './Button'
import Slider from './Slider'

const SubHero = () => {
  return (
    <div className='flex w-full items-center my-auto bg-bg-main h-screen'>
      
      <div className='w-full lg:w-[80%] xl:w-[60%] mx-auto px-8'>

        <div className=' font-Finlandica font-[700]'>
          <span className='bg-ui-2 w-4 h-4'></span>
          <p className='text-text-2'>Our Produce</p></div>

        <div className='flex flex-col w-full items-center justify-center '>
          {/* content */}
          <div className='relative w-full md:w-[80%] mx-auto py-8  flex flex-col 
          items-center justify-center h2 leading-[0.95]
           text-text-2'>
            <div className='  self-start   font-Anton font-[900]'>BITE</div>
            <div className=' self-end  font-Anton font-[900]'>INTO</div>
            <div className=' self-start  font-Anton font-[900]'>GOOD</div>

            <div className='absolute'>
              <div className='relative w-[60%] sm:w-[40%] lg:w-[80%]'>
              <img src='/sub_hero_leaf.svg' />


              {/* <span className='absolute font-Anton text-black h6' >A</span> */}
              {/* <span>b</span>
              <span>c</span>
              <span>d</span>
              <span>e</span> */}
              </div>
              

            </div>
          </div>

          <Slider/>

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
