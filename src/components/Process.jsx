import React, { useRef } from 'react'
import Video from "/process/process_vd.mp4";
import { stackCards } from '../data';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Process = () => {


    // const boxes = document.querySelectorAll('.box');

    useGSAP(() => {

        const process = gsap.timeline({
            scrollTrigger:{
                trigger:".processContainer",
                pin:true,
                start:"top top",
                end:"+=3000",
                scrub:1,
            
            }
    })

    const boxes = gsap.utils.toArray(".box");

{
    const length = stackCards.length;

    console.log(length)
}

        process.fromTo('.box', {
            height:"5%"
        },{
            height:"100%",
            opacity:1,
            stagger:0.75,
            pin:true
  
        })
        process.to(".midBox", {
        height:"5%",
        delay:1,
        stagger:0.75,
    
            },"<")
        // process.to(".boxLast", {
        //         height:"100%",
        //         stagger:1,
        //     },)


    }, [])

    return (
        <div className='processContainer relative flex flex-col  w-full bg-[#ffffff]  items-center '>

            <div className='w-full xl:w-[60%]  flex flex-col  p-8  h-screen mb-12'>
                <span className='text-text-1 p6 font-finlandica font-[600] uppercase'>Process</span>
                <div className='flex flex-col md:flex-row gap-8 justify-between my-8 items-center '>
                    <div className='w-full lg:w-[50%] '>
                        <h1 className=' text-[38px] md:text-[42px] text-text-1 font-Anton font-extrabold tracking-[0.01em] leading-none'>How we grow <br />
                            our greens.</h1>
                        <p className='p5  text-text-4 font-Open font-[500] pt-4 pr-8 leading-5'>
                            With BoweryOS,the proprietary <br />
                            technology that powers our farms,<br />
                            every crop is the cream of the crop.</p>
                    </div>
                    <div className='rounded-2xl w-full overflow-hidden'>
                        <video src={Video} autoPlay={true} loop={true}  />
                    </div>
                </div>
            </div>

            <div className=' absolute  flex  flex-col justify-end h-screen overscroll-none top-0  w-full p-2 '>



                {
                    stackCards.map((item,index)=>{

                        return(
                        <div key={index} className={` box ${index >= stackCards.length-1?"lastBox":"midBox"} relative flex flex-col justify-between h-[2rem] rounded-2xl w-full p-4 overflow-hidden`}
                        style={{
                            background :`${item.color}`
                        }}>
                    <div className=' title  py-2 '>
                        <h1 className='font-Anton text-[5vh] text-white mb-12'>{item.title}</h1>
                    </div>
                    <div className='subText flex items-end justify-between h-[50%] mt-40'>
                        <p className='font-Finlandica p5 font-[500] text-white'>{item.text}</p>
                        <img src={item.img} />
                    </div>
                    <span className='absolute right-0 top-0 px-4 py-2 font-Finlandica text-[3vh]'>{item.num}</span>
                </div>
                        )
                        
                    })

                
                }


                {/* <div className='box  flex flex-col justify-between    h-[10vh]  rounded-2xl w-full  bg-ui-2 p-4 overflow-hidden'>
                    <div className=' title flex opacity-0   border-2 border-purple-800 py-2 '>
                        <h1 className='font-Anton text-[5rem] '>PICK 'EM</h1>
                    </div>
                    <div className='subText opacity-0 hidden   justify-between h-[50%] '>
                        <p className='font-Finlandica p5 font-[500]'>Good food starts with good seeds. We take pride in selecting uniquely flavorful cultivars that have their own recipe for ideal and
                            optimized growing conditions within our farms to reach
                            each plant’s intended and unusually pure flavor</p>
                        <img src='/sub_hero_leaf.svg' />
                    </div>
                    <span className='absolute right-0 top-0 px-4 py-2 font-Finlandica text-[3vh]'>01</span>
                </div> */}
                {/* <div className='box  flex flex-col justify-normal lg:justify-between h-[10vh]   rounded-2xl w-full  bg-ui-2 p-4 overflow-hidden'>
                    <div className=' title flex   justify-normal lg:justify-between border-2 border-purple-800 py-2'>
                        <h1 className='font-Anton text-[12vh]'>PICK 'EM</h1>
                    </div>
                    <div className='subText flex justify-between '>
                        <p className='font-Finlandica p5 font-[500]'>Good food starts with good seeds. We take pride in selecting uniquely flavorful cultivars that have their own recipe for ideal and
                            optimized growing conditions within our farms to reach
                            each plant’s intended and unusually pure flavor</p>
                        <img src='/sub_hero_leaf.svg' />
                    </div>
                    <span className='absolute right-0 top-0 px-4 py-2 font-Finlandica text-[3vh]'>01</span>
                </div>
                <div className='box h-8 rounded-xl w-full bg-text-3'></div>
                <div className='box h-8 rounded-xl w-full bg-text-4'></div>
                <div className='box h-8 rounded-xl w-full bg-text-2'></div> */}
            </div>

        </div>
    )
}

export default Process
