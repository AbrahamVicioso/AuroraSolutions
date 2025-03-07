import type React from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Check, FileText, Cloud, Headphones, CheckCircle } from "lucide-react"
import imageLogo from "../public/logo.png";
import imageBanner from "../public/banner.jpg";

export default function Home() {
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
        <section className="py-12 md:py-20 px-4">
          <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                <span className="text-red-500">Manejar tu empresa</span> con nosotros es super facil
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Gestiona tus ventas, contabilidad, facturación y nómina de forma automática en un solo lugar, fácil y
                rápido.
              </p>
              <Button className="bg-red-500 hover:bg-teal-600 text-white px-8 py-6 text-lg">
                Contactanos
              </Button>
              <div className="flex items-center mt-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-xl font-bold">4.8</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src={imageBanner.src}
                alt="Dashboard de Alegra"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50 px-4">
          <div className="container mx-auto">
            <Tabs defaultValue="contabilidad" className="w-full">
              <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3 mb-8">
                <TabsTrigger value="contabilidad" className="text-sm md:text-base">
                  CONTABILIDAD
                </TabsTrigger>
                <TabsTrigger value="pos" className="text-sm md:text-base">
                  POS
                </TabsTrigger>
                <TabsTrigger value="nomina" className="text-sm md:text-base">
                  NÓMINA
                </TabsTrigger>
              </TabsList>

              <TabsContent value="contabilidad" className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <Image src="/placeholder.svg?height=50&width=50" alt="Contabilidad Icon" width={50} height={50} />
                    <h2 className="text-2xl font-bold ml-3 text-gray-800">El poder de la Contabilidad Inteligente</h2>
                  </div>
                  <ul className="space-y-4 mt-6">
                    <FeatureItem>Genera con un clic tus reportes 606, 607, 608 e IT-1</FeatureItem>
                    <FeatureItem>Carga los datos de tus clientes con cédula o RNC</FeatureItem>
                    <FeatureItem>Controla fácilmente tus ingresos, gastos y stock</FeatureItem>
                    <FeatureItem>Crea tus facturas electrónicas en segundos</FeatureItem>
                    <FeatureItem>Conecta tus bancos y haz la conciliación bancaria en automático</FeatureItem>
                  </ul>
                  <Button className="mt-8 bg-teal-500 hover:bg-teal-600 text-white">Prueba 15 días sin costo</Button>
                </div>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Dashboard de Contabilidad"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </TabsContent>

              <TabsContent value="pos" className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <Image src="/placeholder.svg?height=50&width=50" alt="POS Icon" width={50} height={50} />
                    <h2 className="text-2xl font-bold ml-3 text-gray-800">El poder de vender fácil en tu local</h2>
                  </div>
                  <ul className="space-y-4 mt-6">
                    <FeatureItem>Usa tu tablet, laptop o celular como punto de venta</FeatureItem>
                    <FeatureItem>Gestiona tu stock y ordénalo en categorías</FeatureItem>
                    <FeatureItem>Protege tu efectivo realizando cierres de caja</FeatureItem>
                    <FeatureItem>Consulta reportes de venta automáticos</FeatureItem>
                    <FeatureItem>Genera facturas en pesos o dólares</FeatureItem>
                  </ul>
                  <Button className="mt-8 bg-teal-500 hover:bg-teal-600 text-white">Prueba 15 días sin costo</Button>
                </div>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Dashboard de POS"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </TabsContent>

              <TabsContent value="nomina" className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <Image src="/placeholder.svg?height=50&width=50" alt="Nómina Icon" width={50} height={50} />
                    <h2 className="text-2xl font-bold ml-3 text-gray-800">El poder de una nómina ágil y confiable</h2>
                  </div>
                  <ul className="space-y-4 mt-6">
                    <FeatureItem>Calcula salarios, horas extras y deducciones automáticamente</FeatureItem>
                    <FeatureItem>Administra pagos mensuales y quincenales</FeatureItem>
                    <FeatureItem>Genera reportes listos para enviar a la TSS</FeatureItem>
                    <FeatureItem>Gestiona empleados y novedades fácilmente</FeatureItem>
                    <FeatureItem>Accede en cualquier momento, con total seguridad</FeatureItem>
                  </ul>
                  <Button className="mt-8 bg-teal-500 hover:bg-teal-600 text-white">Prueba 15 días sin costo</Button>
                </div>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Dashboard de Nómina"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

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
                  Iniciamos nuestra empresa con Alegra, en ese momento nos ayudó bastante y nos sigue ayudando con el
                  control de inventarios, control de items, los descuentos se manejan muy fácil.
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-bold">Kelvin Acosta</p>
                    <p className="text-gray-300">Gerente General</p>
                  </div>
                  <div className="ml-auto">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
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
                Más de 42.000 pymes en Dominicana están ganando tiempo y tranquilidad con Alegra
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
                alt="Usuario usando Alegra"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>
      </main>

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
                  <a href="#" className="hover:text-teal-300">
                    Contáctanos
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p>© {new Date().getFullYear()} Alegra. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start">
      <Check className="w-5 h-5 text-teal-500 mt-1 mr-3 flex-shrink-0" />
      <span>{children}</span>
    </li>
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
      <img className="w-12" src={imageLogo.src}/>
      Aurora Solutions
    </div>
  )
}

