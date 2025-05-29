import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="Studio Smalt" width={150} height={40} className="h-10 w-auto" />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/mes-projets" className="text-gray-700 hover:text-blue-800">
              Mes projets
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-blue-800">
              Resources
            </Link>
            <Link href="/contact" className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition">
              Discuter de votre projet
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-blue-800 py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="w-0 h-0 border-l-[400px] border-l-transparent border-b-[800px] border-b-blue-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 opacity-50"></div>
            </div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <p className="text-white text-lg mb-4">STUDIO DIGITAL</p>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-white text-6xl md:text-7xl font-bold mb-2">Smart</h1>
              <div className="bg-white py-2 px-8 mb-8">
                <span className="text-blue-800 text-6xl md:text-7xl font-bold">Alternative</span>
              </div>
            </div>
            <p className="text-white text-lg mb-8">Design agile, centré utilisateurs, orienté livraison</p>
            <Link
              href="/contact"
              className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full hover:bg-yellow-300 transition inline-block font-medium"
            >
              Discuter de votre projet
            </Link>
          </div>
        </section>

        {/* Clients/Partners */}
        <section className="py-6 border-t border-b border-gray-200 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              {["nestor", "monibanq", "apple", "devroter", "fresh-data", "peopland", "ovhcloud", "meneo"].map(
                (partner) => (
                  <div key={partner} className="h-8">
                    <Image
                      src={`/placeholder.svg?height=32&width=100&query=company logo ${partner}`}
                      alt={partner}
                      width={100}
                      height={32}
                      className="h-full w-auto grayscale opacity-70"
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-block bg-blue-800 text-white px-4 py-1 rounded-md mb-6">Studio Smalt</div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Freelance oui,
                <br />
                freestyle non
              </h2>

              <p className="text-lg mb-8">Chez Studio Smalt, je ne fais pas de design "au feeling".</p>

              <p className="text-lg mb-8">
                Je suis <strong>Salomé Mullet</strong>, freelance en product design, et j'accompagne les équipes
                produit, tech et marketing dans la création d'interfaces claires, utiles et testées.
              </p>

              <p className="text-lg mb-8">
                Pas de blabla ni de refontes uniquement cosmétiques :<br />
                chaque mission suit une méthodologie éprouvée, de l'atelier de cadrage jusqu'à la livraison prête à
                intégrer.
              </p>

              <div className="mb-8">
                <p className="text-lg mb-4">❤️ Mon approche :</p>
                <ul className="list-none space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Structurer vos idées avec vos utilisateurs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Prototyper vite pour tester mieux</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Livrer des parcours cohérents, conçus pour durer</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg font-medium">En solo, oui — mais avec une rigueur de studio.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-black text-white border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-8">POURQUOI CHOISIR STUDIO SMALT ?</h2>

                <div className="space-y-6">
                  <div className="flex gap-3">
                    <div className="text-green-500 text-xl">✓</div>
                    <p>
                      <strong>Expertise produit et UX/UI</strong> : de l'idée au produit final, en passant par des
                      ateliers de cadrage, des tests utilisateurs et des itérations rapides.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <div className="text-green-500 text-xl">✓</div>
                    <p>
                      <strong>Approche agile et humaine</strong> : nous travaillons main dans la main avec vos équipes
                      pour co-construire des solutions qui répondent à vos enjeux business et utilisateurs.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <div className="text-green-500 text-xl">✓</div>
                    <p>
                      <strong>Transparence et réactivité</strong> : devis sous 24h, planning clair, livrables concrets,
                      accompagnement sur-mesure.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Studio Smalt Workshop"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 mt-auto border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <Image src="/logo-white.svg" alt="Studio Smalt" width={150} height={40} className="h-10 w-auto mb-4" />
              <div className="flex space-x-4 mt-4">
                <Link href="#" className="text-white hover:text-gray-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-gray-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold mb-4">Mes projets</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white text-sm">
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white text-sm">
                      Mentions légales
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-2">
                <h3 className="text-sm font-semibold mb-4">Contact</h3>
                <address className="text-gray-400 text-sm not-italic">
                  Installés à la BGE
                  <br />
                  8, Rue Denis Papin
                  <br />
                  Business Pôle Les Prés,
                  <br />
                  59650 Villeneuve-d'Ascq
                </address>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
