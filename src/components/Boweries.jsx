import React from 'react'

const Boweries = () => {
    return (
        <div className='flex flex-col items-center    bg-[#ffffff] text-black p-4 '>
            <div className='mt-8 w-full md:w-[70%] lg:w-[55%] h-screen mx-auto'>
                <div>
                    <span></span>
                    <p className='text-ui-2'> Our Boweries</p>
                </div>
                <div className='relative h-full'>
                    <div className='my-4 flex flex-col gap-4 mb-10'>
                        <h1 className='text-[2.5rem] text-text-1 font-Finlandica  font-[900] leading-none -tracking-[0.060em]'>More with less?<br />
                            Oh yes.</h1>

                        <span className='text-text-1 font-Open font-[500] p7 leading-4 '>Inspired by the Dutch word for “farm,” our Boweries<br />
                            {/* What even is a bowery?
                    A nod to the Bowery, a historic NYC neighborhood historically known for connecting the city to fresh farm produce in the 1600s. */}

                            are indoor smart farms teeming with technology that <br />
                            helps us bring local foods closer to the communities <br />
                            we’re apart of. Our Boweries provide 100x more<br />
                            produce per square foot of land than traditional<br />
                            farms with the same footprint—with 100% <br />
                            renewable energy and 90% less water.</span>
                    </div>

                    <div className=' flex xs:hidden  gap-4 overflow-x-scroll md:overflow-hidden'>
                        <div className='block  min-w-[14rem]   min-h-56 rounded-xl overflow-hidden'>
                            <img src='/boweries/boweries-1.webp' className='object-cover w-full h-full object-center ' />
                        </div>
                        <div className='block  min-w-[14rem] min-h-56 rounded-xl overflow-hidden shadow-inner  shadow-black'>
                            <img src='/boweries/boweries-2.webp' className='object-cover w-full h-full object-center ' />
                        </div>
                        <div className='block   min-w-[14rem] min-h-56 rounded-xl overflow-hidden '>
                            <img src='/boweries/boweries-3.webp' className='object-cover w-full h-full object-center ' />
                        </div>
                    </div>
                    <div className='hidden xs:block'>
                        <div className=' absolute  w-[13rem]  h-64 rounded-xl overflow-hidden '>
                            <img src='/boweries/boweries-1.webp' className='object-cover w-full h-full object-center ' />
                        </div>
                        <div className='absolute top-20 right-0 w-[14rem] h-64 rounded-xl overflow-hidden shadow-inner  shadow-black'>
                            <img src='/boweries/boweries-2.webp' className='object-cover w-full h-full object-center ' />
                        </div>
                        <div className='absolute bottom-20 right-0 max-w-[14rem] max-h-64 rounded-xl overflow-hidden '>
                            <img src='/boweries/boweries-3.webp' className='object-cover w-full h-full object-center ' />
                        </div>
                    </div>


                </div>


            </div>
        </div>
    )
}

export default Boweries
