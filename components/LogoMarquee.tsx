'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const logos = [
  { src: '/logos/Monabanq logo.svg', alt: 'Monabanq' },
  { src: '/logos/ovh cloud logo.svg', alt: 'OVH Cloud' },
  { src: '/logos/université catho logo.svg', alt: 'Université Catholique' },
  { src: '/logos/menea logo.svg', alt: 'Menea' },
  { src: '/logos/etp logo.svg', alt: 'ETP' },
  { src: '/logos/fresh data logo.svg', alt: 'Fresh Data' },
  { src: '/logos/devtrotter logo.svg', alt: 'Devtrotter' },
  { src: '/logos/noe logo.svg', alt: 'Noe' },
  { src: '/logos/dthinking logo.svg', alt: 'Design Thinking' },
];

const LogoMarquee = () => {
  return (
    <div className="w-full overflow-hidden bg-white/5 backdrop-blur-sm py-6">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex gap-16 items-center"
          animate={{
            x: [0, -50 * logos.length * 8], // Réduit la distance de défilement
          }}
          transition={{
            duration: 40, // Augmenté la durée pour un défilement plus lent
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Premier groupe de logos */}
          {logos.map((logo, index) => (
            <div key={index} className="w-[180px] h-[50px] flex items-center justify-center flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="object-contain filter brightness-0 invert w-auto h-auto"
              />
            </div>
          ))}
          {/* Deuxième groupe de logos (copie) */}
          {logos.map((logo, index) => (
            <div key={`clone-${index}`} className="w-[180px] h-[50px] flex items-center justify-center flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="object-contain filter brightness-0 invert w-auto h-auto"
              />
            </div>
          ))}
          {/* Troisième groupe de logos (copie) */}
          {logos.map((logo, index) => (
            <div key={`clone2-${index}`} className="w-[180px] h-[50px] flex items-center justify-center flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="object-contain filter brightness-0 invert w-auto h-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoMarquee; 