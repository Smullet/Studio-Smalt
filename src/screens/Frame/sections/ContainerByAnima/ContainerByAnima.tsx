import type { JSX } from "@emotion/react"

export const ContainerByAnima = (): JSX.Element => {
  // Footer links data for easy maintenance
  const footerLinks = [
    { text: "Design & Dev @Studio Smalt", width: "149.24px" },
    { text: "Mentions légales", width: "88.34px" },
    { text: "Politique de confidentialité", width: "137.99px" },
  ]

  return (
    <footer className="flex justify-between items-center w-full px-10 py-8">
      <div className="flex items-center">
        <div className="text-[#123293] text-xl font-bold font-['Inter']">smalt</div>
      </div>

      <div className="flex gap-8">
        {footerLinks.map((link, index) => (
          <a
            key={index}
            href="#"
            className="font-['Inter',Helvetica] font-normal text-[#191818] text-[11px] leading-[15.4px] whitespace-nowrap hover:underline"
            style={{ width: link.width }}
          >
            {link.text}
          </a>
        ))}
      </div>
    </footer>
  )
}
