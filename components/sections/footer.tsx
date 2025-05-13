"use client"

export const Footer = () => {
  // Footer links data for easy maintenance
  const footerLinks = [
    { text: "Design & Dev @Studio Smalt", href: "#" },
    { text: "Mentions légales", href: "#" },
    { text: "Politique de confidentialité", href: "#" },
  ]

  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto w-full px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-2">
            <div className="relative w-24 h-[40px] [background:url(/link-1.png)_50%_50%_/_cover]" />
            <p className="text-[#191818]/50 text-xs">Agence full-service à Paris, Nantes & Lyon</p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-6">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-[#191818]/70 text-sm hover:text-[#123293] transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-[#123293]">
                    ★
                  </span>
                ))}
              </div>
              <span className="text-[#191818]/70 text-sm">4.95 (31 reviews) | Top digital agency 2023-2024</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
