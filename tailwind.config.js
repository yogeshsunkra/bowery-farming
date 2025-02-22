/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontFamily:{
        Anton : ['var(--font-anton)'],
        Open : ['var(--font-open)'],
        Finlandica : ['var(--font-finlandica)'],
      },
      colors: {

        ui : {
          1 : "#0F6EFD",
          2 : "#0D3A25"
        },

        bg:{

          main:"#D6E6FF",
          secondary:"#E6F7FQ"

        },
        text:{
            1:"#0D3A25",
            2:"#009F67",
            3:"#91B820",
            4:"#04180F",
        }

      },
    },
  },
  plugins: [
    plugin(function({addBase,addComponents,addUtilities}){
      addBase({});
      addComponents({
        '.h1':{
          "@media (max-width:378px)":{
            "@apply text-[min(12vw+11vh,70px)] leading-none":{}
          },
          "@media (max-width:768px) and (min-width:379px)":{
            "@apply text-[min(14.5vw+14.5vh,96px)] leading-none":{}
          },
          "@media (min-width:769px) and (max-width:1024px)":{
            "@apply text-[210px] leading-none":{}
          },
          "@media (min-width:1024px) and (max-width:1239px)":{
            "@apply text-[250px] leading-none":{}
          },
          "@media (min-width:1239px) ":{
            "@apply text-[280px] leading-none":{}
          }

        },
        '.h2':{

          "@media (max-width:328px)":{
            "@apply text-[min(12vw+11vh,30px)] leading-none":{}
          },
          "@media (max-width:425px) and (min-width:329px)":{
            "@apply text-[min(14.5vw+14.5vh,50px)] leading-none":{}
          },
          "@media (max-width:568px) and (min-width:425px)":{
            "@apply text-[min(14.5vw+14.5vh,80px)] leading-none":{}
          },
          "@media (max-width:768px) and (min-width:569px)":{
            "@apply text-[min(14.5vw+14.5vh,150px)] leading-none":{}
          },
          "@media (min-width:769px) ":{
            "@apply text-[160px] leading-none":{}
          },




        },
        '.h3':{
          "@media (max-width:378px)":{
            "@apply text-[23px] leading-none":{}
          },
          "@media (max-width:768px) and (min-width:379px)":{
            "@apply text-[38px] leading-none":{}
          },
          "@media (min-width:769px) and (max-width:1024px)":{
            "@apply text-[84px] leading-none":{}
          },
          "@media (min-width:1024px) and (max-width:1239px)":{
            "@apply text-[103px] leading-none":{}
          },
          "@media (min-width:1239px)":{
            "@apply text-[120px] leading-none":{}
          },


        },
        '.h4':{
          "@media (max-width:378px)":{
            "@apply text-[15px] leading-none":{}
          },
          "@media (max-width:768px) and (min-width:379px)":{
            "@apply text-[22px] leading-none":{}
          },
          "@media (min-width:769px) and (max-width:1024px)":{
            "@apply text-[32px] leading-none":{}
          },
          "@media (min-width:1024px) and (max-width:1239px)":{
            "@apply text-[46px] leading-none":{}
          },
          "@media (min-width:1239px)":{
            "@apply text-[60px] leading-none":{}
          },
        },
        '.h5':{
          "@apply text-[76px] leading-none":{}
        },
        '.h6':{
          "@apply text-[56px] leading-none":{}
        },
        '.p1':{
          "@apply text-[22px] leading-none":{}
        },
        '.p2':{
          "@apply text-[20px] leading-none":{}
        },
        '.p3':{
          "@apply text-[18px] leading-none":{}
        },
        '.p4':{
          "@apply text-[17px] leading-none":{}
        },
        '.p5':{
          "@apply text-[14px] leading-none":{}
        },
        '.p6':{
          "@apply text-[12px] leading-none":{}
        },
        '.p7':{
          "@apply text-[10px] leading-none":{}
        },
        '.p8':{
          "@apply text-[8px] leading-none":{}
        },

      });
      addUtilities({
        '.hero-bg':{
          background: "radial-gradient(at 50% 80%, #0a00008c 15%, rgb(0, 0, 0, 0) 46%), url(/hero_leaf.webp) no-repeat ",
          backgroundPositionX:"center"
        },
        '.hero-md':{
          background : "url('/hero_bg_md.svg') no-repeat ",
          backgroundPositionX:"center"
        },
        '.hero-sm':{
          background : "url('/hero_bg_sm.svg') no-repeat ",
          backgroundPositionX:"center",
          backgroundSize:"cover"
        },
      });
    })
  ],
}

