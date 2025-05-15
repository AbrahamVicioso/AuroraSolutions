import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, FileText, Cloud, Headphones, CheckCircle } from "lucide-react"
import imageLogo from "../public/logo.png"
import HeroSection from "@/components/sections/HeroSection"
import FeaturesSection from "@/components/sections/FeaturesSection"
import PricingSection from "@/components/sections/PricingSection"

import AboutSection from "@/components/sections/AboutSection"

export default function Home() {
  <div>
    
  </div>
  return (
    
    <div className="flex flex-col min-h-screen">  
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Logo />
            <nav className="hidden md:flex ml-10 space-x-6">
              <a href="#" className="text-gray-700 hover:text-teal-500 font-medium">
                Soluciones
              </a>
              <a href="#" className="text-gray-700 hover:text-teal-500 font-medium">
                Planes
              </a>
              <a href="#" className="text-gray-700 hover:text-teal-500 font-medium">
                Contacto
              </a>
              <a href="#about" className="text-gray-700 hover:text-teal-500 font-medium">
              Sobre nosotros
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            {/* <Button variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-50">
              Soy Contador
            </Button> */}
            <Button variant="outline">Ingresa</Button>
            <Button className="bg-red-500 hover:bg-red-600 text-white">Ver Planes</Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <HeroSection/>

        {/* Features Section */}
        <FeaturesSection/>

        {/*Priciong Section*/}
        <PricingSection/>

        
       <AboutSection/>
       

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <BenefitCard
                icon={<FileText className="w-10 h-10 text-teal-500" />}
                title="Facturación Electrónica"
                description="Certifícate gratis como facturador electrónico con el apoyo de un especialista."
              />
              <BenefitCard
                icon={<Cloud className="w-10 h-10 text-teal-500" />}
                title="Sin descargas"
                description="Accedes a tu información solo con acceso a internet."
              />
              <BenefitCard
                icon={<Headphones className="w-10 h-10 text-teal-500" />}
                title="Con soporte gratis 24/7"
                description="Recibe ayuda de un equipo especializado por teléfono, correo o chat, disponible para ti las 24 horas, todos los días."
              />
              <BenefitCard
                icon={<CheckCircle className="w-10 h-10 text-teal-500" />}
                title="Al día con la DGII"
                description="Cumple fácilmente con los requisitos fiscales gracias a nuestras actualizaciones automáticas."
              />
            </div>
          </div>
        </section>
      </main>

        {/* Testimonial Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Mira cómo nuestros clientes <span className="text-gray-800 font-extrabold">ganan superpoderes</span>
                </h2>
              </div>
              <div className="md:w-1/2 bg-gray-800 text-white p-8 rounded-lg relative">
                <div className="text-4xl absolute -top-4 left-8">"</div>
                <p className="text-lg mb-6">
                  Iniciamos nuestra empresa con Aurora Solutions, en ese momento nos ayudó bastante y nos sigue ayudando con el
                  control de inventarios, control de items, los descuentos se manejan muy fácil.
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-bold">Kelvin Acosta</p>
                    <p className="text-gray-300">Gerente General</p>
                  </div>
                  <div className="ml-auto">
                    <Image
                      src="@imagenes/imgen.png"
                      alt="Kelvin Acosta"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-teal-500 text-white">
          <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Más de 42.000 pymes en Dominicana están ganando tiempo y tranquilidad con Aurora Solutions
              </h2>
              <p className="text-xl mb-8">
                Hoy llegó tu turno, elige tu solución favorita y prueba sin límites tus nuevos superpoderes.
              </p>
              <Button variant="outline" className="bg-white text-teal-500 hover:bg-gray-100 px-6 py-3 text-lg">
                Empieza tus 15 días gratis
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Usuario usando Aurora Solutions"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

      

      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Logo white />
              <p className="mt-4">Software de gestión empresarial para pymes</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Productos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-teal-300">
                    Contabilidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-300">
                    POS
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-300">
                    Nómina
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-300">
                    Facturación
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-teal-300">
                    Sobre nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-300">
                    Planes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-300">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-300">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Soporte</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-teal-300">
                    Centro de ayuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-300">
                    Tutoriales
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-300">
                    Preguntas frecuentes
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/+18094309959" className="hover:text-teal-300">
                    Contáctanos
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p>© {new Date().getFullYear()} Aurora Solutions. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function Logo({ white = false }: { white?: boolean }) {
  return (
    <div className={`flex items-center font-bold text-2xl ${white ? "text-white" : "text-red-600"}`}>
      <img className="w-12" src={imageLogo.src || "/placeholder.svg"}/>
      Aurora Solutions
    </div>
  )
}
