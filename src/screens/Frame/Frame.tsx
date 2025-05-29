import { Button } from "../../components/ui/button"
import { ContactByAnima } from "./sections/ContactByAnima/ContactByAnima"
import { ContainerByAnima } from "./sections/ContainerByAnima"
import { ContainerWrapperByAnima } from "./sections/ContainerWrapperByAnima/ContainerWrapperByAnima"
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima"
import { HeroHeaderByAnima } from "./sections/HeroHeaderByAnima"
import { SectionIntroByAnima } from "./sections/SectionIntroByAnima/SectionIntroByAnima"
import { SectionProjectsByAnima } from "./sections/SectionProjectsByAnima/SectionProjectsByAnima"
import { SectionProjectsWrapperByAnima } from "./sections/SectionProjectsWrapperByAnima"

export const Frame = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start w-full bg-white">
      <header className="flex w-full items-center justify-center py-4 px-8 sticky top-0 z-10 bg-[#ffffffbf] backdrop-blur-[32px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(32px)_brightness(100%)]">
        <div className="flex w-full max-w-[980px] items-center justify-between">
          <div className="relative w-32 h-[53px] [background:url(..//link-1.png)_50%_50%_/_cover]" />

          <div className="flex items-center justify-end gap-4 rounded-[10px] border border-solid border-black">
            <Button
              variant="outline"
              className="bg-white rounded-lg border border-solid border-black font-body-emphasis-m text-black"
            >
              Discuter de votre projet
            </Button>
          </div>
        </div>
      </header>

      <main className="w-full">
        <HeroHeaderByAnima />
        <SectionIntroByAnima />
        <SectionProjectsByAnima />
        <ContainerWrapperByAnima />
        <SectionProjectsWrapperByAnima />
        <DivWrapperByAnima />
        <ContactByAnima />
        <ContainerByAnima />
      </main>
    </div>
  )
}
