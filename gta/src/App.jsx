import { useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import "remixicon/fonts/remixicon.css"

export default function GTALandingPage() {
  const [showBg, setShowBg] = useState(false)

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.inOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "expo.inOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          const svgElement = document.querySelector(".svg-loader")
          if (svgElement) {
            svgElement.remove()
          }
          this.kill()
          setShowBg(true)
        }
      },
    })
  })

  useGSAP(() => {
    if (!showBg) return

    gsap.to(".main-container", {
      rotate: 0,
      scale: 1,
      duration: 2,
      delay: -0.8,
      ease: "expo.inOut",
    })

    gsap.to(".sky-layer", {
      rotate: 0,
      scale: 1.3,
      duration: 2,
      delay: -0.8,
      ease: "expo.inOut",
    })

    gsap.to(".bg-layer", {
      rotate: 0,
      scale: 1.1,
      duration: 2,
      delay: -0.8,
      ease: "expo.inOut",
    })

    gsap.to(".character-layer", {
      rotate: 0,
      x: "-50%",
      bottom: "-58%",
      scale: 0.75,
      duration: 2,
      delay: -0.8,
      ease: "expo.inOut",
    })

    gsap.to(".hero-text", {
      rotate: 0,
      scale: 1,
      duration: 2,
      delay: -0.8,
      ease: "expo.inOut",
    })

    const mainContainer = document.querySelector(".main-container")
    const handleMouseMove = (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40

      gsap.to(".hero-text", {
        x: `${xMove*0.4}%`,
        duration:0.3,
      })
      gsap.to(".sky-layer", {
        x: xMove,
        duration: 0.3,
      })
      gsap.to(".bg-layer", {
        x: xMove,
        duration: 0.3,
      })
    }

    mainContainer?.addEventListener("mousemove", handleMouseMove)

    return () => {
      mainContainer?.removeEventListener("mousemove", handleMouseMove)
    }
  }, [showBg])

  return (
    <>
      <div className="svg-loader fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
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
                  fontFamily="Arial Black, sans-serif"
                  className="select-none"
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

      {showBg && (
        <div className="main-container w-full rotate-[-10deg] scale-[1.7] origin-center">
          <div className="landing-page w-full min-h-screen bg-black ">
            <nav className="navbar fixed top-0 left-0 w-full z-40 px-4 sm:px-6 lg:px-9 py-6 lg:py-9">
              <div className="logo flex items-center gap-4 lg:gap-7">
                <div className="lines flex flex-col gap-1">
                  <div className="line w-8 sm:w-10 lg:w-12 h-0.5 lg:h-1 bg-white"></div>
                  <div className="line w-6 sm:w-7 lg:w-8 h-0.5 lg:h-1 bg-white"></div>
                  <div className="line w-4 sm:w-5 lg:w-5 h-0.5 lg:h-1 bg-white"></div>
                </div>
                <h3 className="text-2xl lg:text-3xl text-white font-bold -mt-1 lg:-mt-2">Rockstar</h3>
              </div>
            </nav>

            <section className="hero-section relative overflow-hidden w-full h-screen">
              <img
                src="/sky.png"
                alt="Sky background"
                className="absolute sky-layer scale-[1.8] rotate-[-10deg] inset-0 w-full h-full object-cover"
              />
              <img
                src="/bg.png"
                alt="City background"
                className="absolute bg-layer scale-[1.8] rotate-[-3deg] inset-0 w-full h-full object-cover"
              />

              <div className="hero-text absolute top-28 lg:top-20 left-1/2 -translate-x-1/4 text-white flex flex-col gap-1 sm:gap-2 lg:gap-3 leading-none">
                <h1 className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl font-bold -ml-32 sm:-ml-36 lg:-ml-48">
                  grand
                </h1>
                <h1 className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl font-bold   sm:ml-4 lg:ml-6">
                  theft
                </h1>
                <h1 className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl font-bold -ml-32 sm:-ml-36 lg:-ml-48">
                  auto
                </h1>
              </div>

              <img
                src="/girlbg.png"
                alt="Game character"
                className="absolute character-layer -bottom-[158%] left-1/2 -translate-x-1/2 scale-[1.5] rotate-[-20deg] w-auto h-auto max-w-none"
              />
            <div className="bottom-bar absolute bottom-0 left-0 w-full px-6 sm:px-8 lg:px-10 py-6 sm:py-8 lg:py-10 bg-gradient-to-t from-black to-transparent">
              <div className="hidden md:flex gap-3 sm:gap-4 items-center text-white">
                <i className="ri-arrow-down-long-line text-xl sm:text-2xl"></i>
                <h3 className="text-sm sm:text-base lg:text-lg font-mono">Scroll Down</h3>
              </div>
              <img
                src="/ps5.png"
                alt="PlayStation 5 logo"
                className="absolute h-10 sm:h-12 lg:h-14 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            </section>


            <section className="content-section w-full min-h-screen text-white flex flex-col lg:flex-row items-center justify-center bg-black px-4 sm:px-6 lg:px-0">
              <div className="image-container relative w-full lg:w-1/2 h-[460px] sm:h-[560px] md:h-[660px] mt-16 md:mt-0 lg:h-full overflow-hidden flex items-center justify-center">
                <img
                  src="/imag.png"
                  alt="Game screenshot"
                  className="scale-75 sm:scale-90 lg:scale-90 max-w-none"
                />
              </div>

              <div className="content-text pb-24 w-full lg:w-[30%] py-6 sm:py-8 lg:py-10 px-4 lg:px-0 ">
                <h1 className="text-3xl mt sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-0">Still Running,</h1>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 lg:mb-10">Not Hunting</h1>

                <div className="space-y-4 lg:space-y-6 text-sm sm:text-base lg:text-base leading-relaxed">
                  <p>
                    Experience the most immersive open-world adventure yet. Navigate through a sprawling metropolis
                    filled with endless possibilities and dynamic storytelling that adapts to your choices.
                  </p>
                  <p>
                    From high-speed chases through neon-lit streets to strategic heists that require careful planning,
                    every moment delivers heart-pounding excitement and unprecedented freedom.
                  </p>
                  <p>
                    Join millions of players in the ultimate crime saga where your decisions shape the narrative and
                    your skills determine your survival in the concrete jungle.
                  </p>
                </div>

                <button className="bg-yellow-500 hover:bg-yellow-400 transition-colors duration-300 px-6 sm:px-8 lg:px-5 py-3 sm:py-4 lg:py-5 text-black font-bold mt-6 sm:mt-8 lg:mt-10 text-base sm:text-lg lg:text-xl rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Download Now
                </button>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  )
}