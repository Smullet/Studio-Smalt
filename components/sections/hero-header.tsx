"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import type { JSX } from "react"

export const HeroHeader = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  // Autoplay video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error)
      })
    }
  }, [])

  return (
    <motion.section ref={containerRef} className="relative flex flex-col items-center justify-center w-full py-32 px-4">
      {/* Video Background (optional) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <motion.div style={{ scale, opacity }}>
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/our0caa84upt9a1jyroqg6gdwy4-jpg.png"
          >
            {/* Add your video source here */}
            <source src="/your-video.mp4" type="video/mp4" />
          </video>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
        </motion.div>
      </div>

      {/* Content */}
      <motion.div className="flex flex-col items-start gap-6 max-w-[980px] z-10" style={{ y: textY }}>
        <motion.div
          className="flex flex-col items-start gap-6 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-wrap items-center gap-6 w-full">
            <motion.h1
              className="font-bold text-8xl text-black tracking-[-3.84px] leading-[105.6px] [font-family:'Helvetica_Neue-Bold',Helvetica]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Smart
            </motion.h1>

            <motion.div
              className="inline-flex items-center justify-center px-2.5 py-1.5 bg-[#123293] rounded-md shadow-[2px_2px_0px_#121214]"
              initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
              animate={{ opacity: 1, scale: 1, rotate: -1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="font-bold text-white text-[84.9px] tracking-[-1.08px] leading-[80px] [font-family:'Inter',Helvetica]">
                Alternative
              </span>
            </motion.div>
          </div>

          <motion.h2
            className="w-full font-bold text-[80px] text-[#191818] leading-[80px] [font-family:'Inter',Helvetica]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Studio digital
          </motion.h2>
        </motion.div>

        <motion.p
          className="text-center text-[#191818] font-body-regular-m font-[number:var(--body-regular-m-font-weight)] text-[length:var(--body-regular-m-font-size)] tracking-[var(--body-regular-m-letter-spacing)] leading-[var(--body-regular-m-line-height)] [font-style:var(--body-regular-m-font-style)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Smalt accompagne les TPE, PME, startups et collectivités dans la création de solutions numériques utiles,{" "}
          <br />
          humaines et adaptées à leurs besoins.
          <br />
          De la conception de produits digitaux à la création de sites web en passant par l&apos;animation
          d&apos;ateliers collaboratifs,
          <br />
          nous proposons des services sur- mesure, pensés pour vos utilisateurs et vos réalités terrain.
        </motion.p>
      </motion.div>
    </motion.section>
  )
}
