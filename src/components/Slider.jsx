import React, { useEffect, useState } from 'react'
import { slides } from '../data';


const Slider = () => {

    const [currentIndex,setCurrentIndex] = useState(0);
    const [dotPosition , setDotPosition] = useState();

    // useEffect(()=>{

    //     const pos = Math.abs(`400px - ${currentIndex*20}px`);
    //     setDotPosition(pos);

    // },[currentIndex])

    // console.log(dotPosition);

  return (
    <div className='relative w-full mt-4 overflow-hidden '>
        {/* Pagination Dots */}
      <div className='relative flex  w-full mt-4 overflow-hidden'>
        <div className={`flex  w-full min-h-8   justify-center  items-center `}
             
        >

            {slides.map((item,index) =>{

                const distance = Math.abs(currentIndex - index);
                const size = Math.max(25-distance*5,5);


                return(
                    <button key={index} 
                    className={`rounded-full mr-1 ml-4  transition-transform duration-500 font font-Finlandica p8  ${index === currentIndex ?"bg-ui-1":"bg-gray-700"}`}
                    style={{
                      width : `${size}px`,
                      height : `${size}px`,
                      transform : `translateX(calc(100% - ${currentIndex * 25}px + 8px))`
                      
                    }}
                    onClick={()=>setCurrentIndex(index)}    

                    >{
                      currentIndex === index ? `${item.num}` : ""
                    }</button>
                )
            })}

        </div>
      </div>

      {/* Slides */}
      <div>

      </div>
    </div>
  )
}

export default Slider
