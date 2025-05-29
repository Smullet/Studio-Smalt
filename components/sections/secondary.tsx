"use client"
import { Button } from "@/components/ui/button"

interface SecondaryProps {
  className?: string
}

export const Secondary = ({ className }: SecondaryProps) => {
  return (
    <Button
      className={`px-6 py-4 bg-[#f9d45c] rounded-2xl text-[#123293] text-base font-bold font-['Inter'] leading-tight ${className}`}
    >
      Discuter de votre projet
    </Button>
  )
}
