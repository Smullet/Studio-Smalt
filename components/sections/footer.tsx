"use client"

export const Footer = () => {
  // Footer links data for easy maintenance
  const footerLinks = [
    { text: "Design & Dev @Studio Smalt", width: "149.24px" },
    { text: "Mentions légales", width: "88.34px" },
    { text: "Politique de confidentialité", width: "137.99px" },
  ]

  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center w-full px-4 sm:px-10 py-10 sm:py-12 gap-4 sm:gap-0 bg-white border-t border-gray-100">
      <div className="relative w-24 sm:w-32 h-[50px] sm:h-[67.11px] [background:url(/link-1.png)_50%_50%_/_cover]" />

      <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
        {footerLinks.map((link, index) => (
          <a
            key={index}
            href="#"
            className="font-['Helvetica_Neue-Regular',Helvetica] font-normal text-[#191818] text-[11px] leading-[15.4px] whitespace-nowrap text-center hover:underline transition-all"
          >
            {link.text}
          </a>
        ))}
      </div>
    </footer>
  )
}
