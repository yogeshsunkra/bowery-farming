import React from 'react'
import Button from './Button'

const Stories = () => {
  return (
    <div className='flex flex-col p-4 bg-[#ffffff]  w-full items-center'>
      <div className='flex flex-col mt-12 w-full md:w-[70%] lg:w-[55%]'>

        <div className='my-2'>
          <span></span>
          <p className='text-text-1'>Stories</p>
        </div>

        <div className='my-4 w-[70%] xs:self-end'>
          <h1 className='text-[2.5rem] font-[700] text-text-1 leading-none'>Leaf through what’s new. </h1>
          <span className='p6 text-text-1 font-[500] '>From tech to farm to table, we’re always<br/>
          cooking up something fresh.</span>
        </div>
        <div className='flex flex-col xs:flex-row  gap-4 w-full place-items-end'>
          <div className=' relative w-full h-[20rem] xs:h-[20rem] rounded-2xl  overflow-hidden'>
            
              <img src='/stories/stories-1.jpg' className='w-full h-full object-cover object-center'/>
    
          </div>
          <div className=' relative w-full h-[20rem] xs:h-[14rem] rounded-2xl  overflow-hidden'>
            
              <img src='/stories/stories-2.webp' className='w-full h-full object-cover object-center'/>
    
          </div>
          <div className=' relative w-full h-[20rem] xs:h-[10rem] rounded-2xl  overflow-hidden'>
            
              <img src='/stories/stories-3.jpg' className='w-full h-full object-cover object-center'/>
    
          </div>



        </div>

        <div className='w-full flex items-center justify-center p-8'>
        <Button className={"bg-ui-1 rounded-md py-[0.8rem]  font-Finlandica p8 font-[600] uppercase"} px={'px-4'}>See more stories</Button>
        </div>
      </div>
    </div>
  )
}

export default Stories
