import React, { useState } from 'react'
// import bg from "../public/bg.png"
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import 'remixicon/fonts/remixicon.css'

const App = () => {
  const [ShowBg, setShowBg] = useState(false)
  useGSAP(() => {
    const tl = gsap.timeline()
    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%"
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          this.kill()
          setShowBg(true)
        }
      }
    })
  })

  useGSAP(()=>{
    if(!ShowBg)return;
    gsap.to(".main",{
      rotate:0,
      scale:1,
      duration:2,
      delay:"-0.8",
      ease:"Expo.easeInOut"
    })

    gsap.to(".sky",{
      rotate:0,
      scale:1.3,
      duration:2,
      delay:"-0.8",
      ease:"Expo.easeInOut"
    })

    gsap.to(".bg",{
      rotate:0,
      scale:1.1,
      duration:2,
      delay:"-0.8",
      ease:"Expo.easeInOut"
    })

    gsap.to(".character",{
      rotate:0,
      x:"-50%",
      bottom:"-58%",
      scale:0.75,
      duration:2,
      delay:"-0.8",
      ease:"Expo.easeInOut"
    })

    gsap.to(".text",{
      rotate:0,
      scale:1,
      duration:2,
      delay:"-0.8",
      ease:"Expo.easeInOut"
    })

    const main=document.querySelector(".main")
    main?.addEventListener("mousemove",function(e){
      const xMove=(e.clientX/window.innerWidth - 0.5)*40
      gsap.to(".main .text",{
        x:`${xMove*0.4}%`
      })
      gsap.to(".sky",{
        x:xMove
      })
      gsap.to(".bg",{
        x:xMove
      })
    })
  },[ShowBg])
  
  return (
    <>
    <div className='svg flex items-center justify-center fixed top-0 left-0 z-[2] w-full h-screen overflow-hidden bg-[#000]'>
      <svg viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'>
        <defs>
          <mask id="viMask">
            <rect width="100%" height="100%" fill="black" />
            <g className="vi-mask-group">
              <text
                x="50%"
                y="50%"
                fontSize="250"
                textAnchor="middle"
                fill="white"
                dominantBaseline="middle"
                fontFamily="Arial Black"
              >
                VI
              </text>
            </g>
          </mask>
        </defs>
        <image
          href="/bg.png"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#viMask)"
        />
      </svg>
    </div>

    {ShowBg && (<div className='main w-full rotate-[-10deg] scale-[1.7]'>
      <div className='landing w-full h-screen bg-black'>
        <div className='navbar px-9 py-9 absolute z-[100] w-full top-0 left-0'>
          <div className='logo flex items-center gap-7'>
            <div className='lines flex flex-col gap-1'>
              <div className='line w-12 h-1 bg-white'></div>
              <div className='line w-8 h-1 bg-white'></div>
              <div className='line w-5 h-1 bg-white'></div>
            </div>
            <h3 className='text-3xl -mt-[9px] text-white'>Rockstar</h3>
          </div>
          
        </div>
        <div className='imagesdiv relative  overflow-hidden w-full h-screen'>
          <img src="/sky.png" className='absolute sky scale-[1.8] rotate-[-10deg] top-0 left-0 w-full h-full object-cover'/>
          <img src="/bg.png" className='absolute bg scale-[1.8] rotate-[-3deg] top-0 left-0 w-full h-full object-cover'/>
          <div className='text-white flex flex-col gap-3 top-20 left-1/2 -translate-x-1/4 absolute leading-none'>
            <h1 className='text-[8rem] text -ml-40 '>grand</h1>
            <h1 className='text-[8rem] text ml-20'>theft</h1>
            <h1 className='text-[8rem] text -ml-40'>auto</h1>
          </div>
          <img src="/girlbg.png" className='absolute character -bottom-[158%] left-1/2 -translate-x-1/2 scale-[1.5] rotate-[-20deg]'/>
        </div>
        <div className='btmBar absolute text-white bottom-0 left-0 w-full px-10 py-10 bg-gradient-to-t from-black to to-transparent'>
          <div className='flex gap-4 items-center'>
            <i className="ri-arrow-down-long-line text-2xl"></i>
            <h3 className='text-l font-mono '>Scroll Down</h3>
          </div>
          <img src="/ps5.png" className='absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
        </div>
        <div className='w-full h-screen text-white flex items-center justify-center bg-black'>
          <div className='limg relative w-1/2 h-full overflow-hidden  '>
          <img src="/imag.png" className='absolute scale-[0.9] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
          </div>
          <div className="rg w-[30%] py-10 overflow-hidden">
                <h1 className="text-5xl">Still Running,</h1>
                <h1 className="text-5xl">Not Hunting</h1>
                <p className="mt-10 font-[Helvetica_Now_Display]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Distinctio possimus, asperiores nam, omnis inventore nesciunt
                  a architecto eveniet saepe, ducimus necessitatibus at
                  voluptate.
                </p>
                <p className="mt-3 font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit eligendi nesciunt quia similique velit
                  excepturi soluta tenetur illo repellat consectetur laborum
                  eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                  autem sapiente.
                </p>
                <p className="mt-8 font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit eligendi nesciunt quia similique velit
                  excepturi soluta tenetur illo repellat consectetur laborum
                  eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                  autem sapiente.
                </p>
                <button className="bg-yellow-500 px-5 py-5 text-black mt-10 text-xl rounded">
                  Download Now
                </button>
              </div>
        </div>
      </div>
    </div>)}
    </>
  )
}

export default App