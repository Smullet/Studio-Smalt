export const ContainerByAnima = (): JSX.Element => {
  // Footer links data for easy maintenance
  const footerLinks = [
    { text: "Design & Dev @Studio Smalt", width: "149.24px" },
    { text: "Mentions légales", width: "88.34px" },
    { text: "Politique de confidentialité", width: "137.99px" },
  ]

  return (
    <footer className="flex justify-between items-center w-full px-10 py-8">
      <div className="relative w-32 h-[67.11px] [background:url(..//link-1.png)_50%_50%_/_cover]" />

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
