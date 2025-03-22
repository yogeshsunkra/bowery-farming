//

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(MotionPathPlugin);

const Logo = () => {
  const lettersRef = useRef([]);

  useGSAP(() => {
    lettersRef.current.forEach((el, index) => {
        gsap.fromTo(
          el,
          {
            motionPath: {
              path: "#curvedPath",
              align: "#curvedPath",
              alignOrigin: [0.5, 0.5], // Keep letters centered
              start: 1, // Start from endpoint
              end: 1, 
            },
            opacity: 0,
          },
          {
            motionPath: {
              path: "#curvedPath",
              align: "#curvedPath",
              alignOrigin: [0.5, 0.5],
              start: 1,
              end: index / 5, // Adjust spacing to match image
              autoRotate: false, // Prevent tilting
            },
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            delay: index * 0.2,
          }
        );
      });
  }, []);

  return (


        <svg width="500" height="400" viewBox="0 0 200 200">
        <defs>
          <path id="curvedPath" d="M 50,150 A 100,100 0 0,1 170,150" fill="none"/>
        </defs>
  
        <path d="M 50,150 A 200,200 0 0,1 120,150" fill="none" stroke="black"/>
  
        {["B", "O", "W", "E", "R", "Y"].map((letter, index) => (
          <text key={index} ref={(el) => (lettersRef.current[index] = el)} fontSize="30" fontFamily="Arial" fill="blue">
            <textPath href="#curvedPath" startOffset={`${(index + 1) * 15}%`} textAnchor="middle">
              {letter}
            </textPath>
          </text>
        ))}
      </svg>
  );
};

export default Logo;


