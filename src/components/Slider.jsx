import React, { useEffect, useState } from 'react'
import { slides } from '../data';


const Slider = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [dotPosition, setDotPosition] = useState();

  // useEffect(()=>{

  //     const pos = Math.abs(`400px - ${currentIndex*20}px`);
  //     setDotPosition(pos);

  // },[currentIndex])

  // console.log(dotPosition);

  return (
    <div className='relative flex flex-col justify-center items-center w-full mt-4 overflow-hidden 
    lg:hidden'>
      {/* Pagination Dots */}
      <div className=' w-full relative flex  mt-4 justify-center items-center '>
        <div className={`flex items-center ml-14 gap-2 min-h-8 `}

        >

          {slides.map((item, index) => {

            const distance = Math.abs(currentIndex - index);
            const size = Math.max(20- distance * 5, 5);
            const opacity = Math.max(1 - distance * 0.20, 0.20);


            return (
              <button key={index}
                className={`rounded-full transition-transform duration-200  font-Finlandica p6 text-white ${index === currentIndex ? "bg-ui-2  " : "bg-gray-700"}`}
                style={{
                  minWidth: `${size}px`,
                  minHeight: `${size}px`,
                  opacity:opacity,
                  transform: `translateX(calc(50% - ${currentIndex * 20}px))`

                }}
                onClick={() => setCurrentIndex(index)}

              >{
                  currentIndex === index ? `${item.num}` : ""
                }</button>
            )
          })}

        </div>
      </div>

      {/* Slides */}
      <div className='w-[70%] overflow-hidden flex mb-8 mt-2'>


        {slides.map((item, index) => {
          return (
            <div key={index} className='min-w-full  transition-transform duration-200 flex flex-col justify-center items-center text-center'
            style = {{
              transform: `translateX( -${currentIndex * 100}%)`
            }}>
              <h1 className='p6 leading-3 font-Finlandica font-[600] text-text-1 mt-4'>{item.title}</h1>
              <span className='p5  font-Finlandica font-[400] text-text-1 mt-4'>{item.text}</span>
            </div>
          )
        })}
      </div>


    </div>
  )
}

export default Slider
