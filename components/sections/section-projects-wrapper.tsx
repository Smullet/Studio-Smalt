"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export const SectionProjectsWrapper = (): JSX.Element => {
  // Bio paragraphs data
  const bioParagraphs = [
    {
      id: 1,
      content: (
        <>
          <span className="font-medium text-[#00000099] tracking-[-0.12px] leading-[22.1px]">
            Je suis designer indépendante spécialisée
          </span>
          <span className="font-medium text-[#0f0f0f] tracking-[-0.12px] leading-[22.1px]">
            {" "}
            en Product Design, facilitation et Web design.
          </span>
        </>
      ),
    },
    {
      id: 2,
      content: (
        <>
          <span className="font-medium text-[#00000099] tracking-[-0.12px] leading-[22.1px]">
            Après plusieurs années en entreprise et en startup,
          </span>
          <span className="font-medium text-[#0f0f0f] tracking-[-0.12px] leading-[22.1px]">
            {" "}
            j&apos;ai choisi de me lancer seule{" "}
          </span>
          <span className="font-medium text-[#00000066] tracking-[0] leading-[0.1px]">
            pour travailler <br />
            différemment :
          </span>
          <span className="font-medium text-[#0f0f0f] tracking-[0] leading-[0.1px]">
            {" "}
            plus près des gens, plus à l&apos;écoute des vrais besoins.
          </span>
        </>
      ),
    },
    {
      id: 3,
      content: (
        <>
          <span className="font-medium text-[#00000099] tracking-[-0.12px] leading-[22.1px]">
            Aujourd&apos;hui, je mets mes compétences au service de{" "}
          </span>
          <span className="font-medium text-[#0f0f0f] tracking-[-0.12px] leading-[22.1px]">
            projets concrets, utiles et accessibles.{" "}
          </span>
          <span className="font-medium text-[#00000099] tracking-[-0.12px] leading-[22.1px]">
            J&apos;aime <br />
            travailler avec celles et ceux qui veulent rendre leur{" "}
          </span>
          <span className="font-medium text-[#0f0f0f] tracking-[-0.12px] leading-[22.1px]">
            communication plus claire, leur produit plus fluide, leur <br />
            idée plus tangible.
          </span>
        </>
      ),
    },
    {
      id: 4,
      content: (
        <>
          <span className="font-medium text-[#00000099] tracking-[-0.12px] leading-[22.1px]">Je suis basée à</span>
          <span className="font-medium text-[#0f0f0f] tracking-[-0.12px] leading-[22.1px]">
            {" "}
            Douai, mobile à Lille, et je travaille aussi très bien à distance.
          </span>
        </>
      ),
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * i,
        duration: 0.5,
      },
    }),
  }

  return (
    <section className="py-24 flex flex-col w-full items-center justify-center relative">
      <div className="flex flex-col w-full max-w-[1200px] items-center justify-center px-6 py-0 relative">
        <motion.div
          className="flex flex-col items-start gap-[60px] py-[100px] relative self-stretch w-full"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* About section header and bio */}
          <div className="flex flex-col max-w-[1200px] items-start justify-center gap-2.5 relative w-full">
            {/* "A propos" badge */}
            <motion.div variants={itemVariants}>
              <Badge className="flex items-center gap-[7px] pl-0.5 pr-2.5 py-0.5 bg-[#f6f7f9] rounded-[25px] text-[#0f0f0f] font-relevant-places-631301-framer-app-inter-medium">
                <div className="inline-flex items-center justify-center p-[9px] bg-relevant-places-631301framerapptorea-bay rounded-[40px]">
                  <img className="w-[11px]" alt="Component" src="/component-1-1.svg" />
                </div>
                A propos
              </Badge>
            </motion.div>

            {/* Bio paragraphs */}
            <div className="flex flex-col max-w-[800px] w-[800px] items-start gap-[21.2px] relative">
              {bioParagraphs.map((paragraph) => (
                <motion.div
                  key={paragraph.id}
                  className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-transparent text-[17px] leading-[17px]"
                  variants={itemVariants}
                >
                  {paragraph.content}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Profile and collaboration cards */}
          <div className="flex max-w-[1200px] items-start gap-2.5 relative w-full">
            {/* Profile card */}
            <motion.div variants={cardVariants} custom={0}>
              <Card className="relative w-[292.5px] h-[491.5px] bg-[#f6f7f9] rounded-[30px] border-none">
                <div className="absolute w-[282px] h-[362px] top-0 left-0">
                  {/* Profile image */}
                  <div className="absolute w-[272px] h-[352px] top-2.5 left-2.5 rounded-[25px] bg-[url(/atcd5am1fncx4hnnypmrqtplhvo-jpeg.png)] bg-cover bg-[50%_50%]" />

                  {/* Role badge */}
                  <div className="absolute w-[153px] h-[39px] top-0 left-0 bg-relevant-places-631301framerapptorea-bay rounded-[30px_30px_0px_30px]">
                    <div className="absolute w-[91px] top-2.5 left-[43px] [font-family:'Inter',Helvetica] font-normal text-relevant-places-631301framerappblack-white text-[11px] tracking-[0] leading-[15.4px] whitespace-nowrap">
                      Product Designer
                    </div>
                    <img
                      className="absolute w-[19px] h-[19px] top-2.5 left-3.5"
                      alt="Component"
                      src="/component-1.svg"
                    />
                  </div>
                </div>

                {/* Profile info */}
                <CardContent className="flex flex-col w-[272px] items-center justify-center gap-2 pt-0 pb-2.5 px-2.5 absolute top-[382px] left-2.5">
                  <div className="flex flex-col w-[252.5px] items-start justify-center gap-[2.75px]">
                    <div className="relative w-fit mt-[-1.00px] font-relevant-places-631301-framer-app-semantic-heading-3 font-[number:var(--relevant-places-631301-framer-app-semantic-heading-3-font-weight)] text-[#0f0f0f] text-[length:var(--relevant-places-631301-framer-app-semantic-heading-3-font-size)] tracking-[var(--relevant-places-631301-framer-app-semantic-heading-3-letter-spacing)] leading-[var(--relevant-places-631301-framer-app-semantic-heading-3-line-height)] whitespace-nowrap [font-style:var(--relevant-places-631301-framer-app-semantic-heading-3-font-style)]">
                      Salomé Mullet
                    </div>
                    <div className="relative w-fit opacity-60 font-relevant-places-631301-framer-app-inter-medium font-[number:var(--relevant-places-631301-framer-app-inter-medium-font-weight)] text-[#0f0f0f] text-[length:var(--relevant-places-631301-framer-app-inter-medium-font-size)] tracking-[var(--relevant-places-631301-framer-app-inter-medium-letter-spacing)] leading-[var(--relevant-places-631301-framer-app-inter-medium-line-height)] whitespace-nowrap [font-style:var(--relevant-places-631301-framer-app-inter-medium-font-style)]">
                      Product Designer
                    </div>
                  </div>

                  <div className="flex w-[252.5px] min-h-[30px] items-center relative">
                    <div className="flex w-[30px] h-[30px] items-center justify-center p-px relative bg-[#0000000d] rounded-[5px]">
                      <img className="relative self-stretch w-7" alt="Component" src="/component-1-4.svg" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Collaboration card */}
            <motion.div variants={cardVariants} custom={1}>
              <Card className="flex-1 flex flex-col items-center gap-20 px-5 py-[30px] bg-relevant-places-631301framerapptorea-bay rounded-[30px] border-none overflow-hidden">
                <CardContent className="flex flex-col w-full p-0">
                  <div className="flex flex-col w-full items-start justify-center gap-[9px]">
                    <div className="flex flex-col items-start relative self-stretch w-full">
                      <div className="relative self-stretch mt-[-1.00px] font-relevant-places-631301-framer-app-semantic-heading-3 font-[number:var(--relevant-places-631301-framer-app-semantic-heading-3-font-weight)] text-relevant-places-631301framerappblack-white text-[length:var(--relevant-places-631301-framer-app-semantic-heading-3-font-size)] tracking-[var(--relevant-places-631301-framer-app-semantic-heading-3-letter-spacing)] leading-[var(--relevant-places-631301-framer-app-semantic-heading-3-line-height)] [font-style:var(--relevant-places-631301-framer-app-semantic-heading-3-font-style)]">
                        Travaillons ensemble, <br />
                        vraiment
                      </div>
                    </div>

                    <div className="relative w-fit font-relevant-places-631301-framer-app-inter-medium font-[number:var(--relevant-places-631301-framer-app-inter-medium-font-weight)] text-relevant-places-631301framerappblack-white text-[length:var(--relevant-places-631301-framer-app-inter-medium-font-size)] tracking-[var(--relevant-places-631301-framer-app-inter-medium-letter-spacing)] leading-[var(--relevant-places-631301-framer-app-inter-medium-line-height)] [font-style:var(--relevant-places-631301-framer-app-inter-medium-font-style)]">
                      Smalt, c&apos;est aussi une aventure
                      <br />
                      humaine. Je crois aux collaborations
                      <br />
                      durables, basées sur la confiance, la
                      <br />
                      transparence et l&apos;écoute mutuelle.
                      <br />
                      Que vous soyez développeur·se,
                      <br />
                      consultant·e, agence, coworking ou
                      <br />
                      structure publique : je suis toujours
                      <br />
                      ouverte à créer des synergies.&nbsp;&nbsp;Envie
                      <br />
                      de monter un projet à deux, de co-
                      <br />
                      construire une offre ou de faire appel
                      <br />à une expertise design ? Parlons-en.
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-0 w-full">
                  <Button
                    className="w-full px-[50.39px] py-2.5 bg-relevant-places-631301framerappcod-gray rounded-[10px] shadow-[0px_43.96px_17.58px_-4.38px_#0000000a,0px_25.53px_10.21px_-3.75px_#00000010,0px_15.6px_6.24px_-3.12px_#00000012,0px_9.66px_3.86px_-2.5px_#00000014,0px_5.81px_2.32px_-1.88px_#00000015,0px_3.18px_1.27px_-1.25px_#00000016,0px_1.34px_0.54px_-0.62px_#00000017]"
                    asChild
                  >
                    <a
                      className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-relevant-places-631301framerappblack-white text-[15px] tracking-[-0.45px] leading-[22.5px]"
                      href="mailto: salomemullet@gmail.com"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Envie de faire équipe ?
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
