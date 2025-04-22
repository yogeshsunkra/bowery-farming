import React from 'react'

const Footer = () => {
  return (
    <div className="flex items-center justify-center w-full bg-ui-1">

      <div className='relative flex flex-col px-4 py-8  w-full h-full lg:w-[55%] items-center justify-center'>
        <div className='flex flex-col md:flex-row  h-full gap-32'>
          {/* 1 */}
          <div className='flex flex-col gap-4'>
            <span className='font-Finlandica text-[1.5rem] leading-none'>Get the latest<br/>
              and tastiest</span>
            {/* EMAIL */}
            <div>
              <input className='input bg-inherit border border-white  rounded-lg w-full px-2 py-2 text-[12px]' 
              placeholder='Email Address'/>
            </div>
            <span className='font-Finlandica text-[10px]'>Fresh updates on product launches, farm events, and so much more</span>
          </div>

          {/* 2 */}
          <div className='flex gap-24 font-Finlandica font-[500] text-[12px]'>
            <div className='flex flex-col'>
              
                <a>Produce</a>
                <a>About Us</a>
                <a>Recipes</a>
                <a>Stories</a>
                <a>Find in Store</a>
                <a>Contact</a>
                <a>Sell</a>
              
            </div>
            <div  className='flex flex-col'>
              
                <a className='hover:border-2 hover:border-b-white'>Join Us</a>
                <a>LeaderShip</a>
                <a>Terms of Service</a>
                <a>Privacy Policy</a>
                <a>Support</a>
            
            </div>
            <div className='hidden md:flex flex-col font-Finlandica text-[12px]'>
              <div>
                <span>Office
                </span>
                <p>151 W 26th St
                  12th Floor, New York
                  NY 10001</p>
              </div>
              <div>
                View on Maps
              </div>
            </div>
          </div>

        </div>

        {/* 3 */}
        <div className='flex flex-col w-full  items-center mx-auto mt-8 mb-24 text-[10px] text-center font-Finlandica font-[500]'>
          <div>
            {/* <svg></svg> */}
            <span>
              ©2023 Bowery Farming Inc.<br />
              All rights reserved
            </span>
          </div>
          <div>
            {/* social media handles logo */}
          </div>
        </div>

        {/* bg img */}
        <div></div>

      </div>
    </div>
  )
}

export default Footer;
