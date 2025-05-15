



import React from 'react';
import { Card } from "@/components/ui/card"
import { Check, FileText, Cloud, Headphones, CheckCircle } from "lucide-react"




const AboutSection = () => {
  return (

       <section id="about" className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Nosotros</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">Conoce más sobre nuestra empresa y los valores que nos impulsan a crear soluciones innovadoras para tu negocio.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-t-4 border-t-teal-500">
                <div className="flex items-center mb-4">
                  <div className="bg-teal-100 p-3 rounded-full mr-4">
                    <FileText className="w-6 h-6 text-teal-500" />
                  </div>
                  <h3 className="text-2xl font-bold">Misión</h3>
                </div>
                <p className="text-gray-600">
                  En Aurora Solutions, nuestra misión es ofrecer soluciones innovadoras y personalizadas de software que impulsan el crecimiento y éxito de las empresas. Nos comprometemos a proporcionar herramientas tecnológicas de alta calidad que optimicen procesos, mejoren la eficiencia y faciliten la toma de decisiones, permitiendo que nuestros clientes se concentren en lo que mejor hacen: hacer crecer su negocio.
                </p>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-t-4 border-t-red-500">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <Cloud className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold">Visión</h3>
                </div>
                <p className="text-gray-600">
                  Ser la empresa líder en el desarrollo de software para empresas de todos los tamaños, reconocida por nuestra capacidad para ofrecer soluciones inteligentes, eficientes y adaptadas a las necesidades de nuestros clientes. Aspiramos a ser el socio tecnológico confiable que transforma la forma en que las empresas operan, mediante la implementación de soluciones innovadoras que faciliten su evolución en un mundo digital.
                </p>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-t-4 border-t-gray-800">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <CheckCircle className="w-6 h-6 text-gray-800" />
                  </div>
                  <h3 className="text-2xl font-bold">Valores</h3>
                </div>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Innovación:</strong> Buscamos las mejores y más avanzadas soluciones tecnológicas para ayudar a nuestros clientes.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Compromiso:</strong> Nos dedicamos a entender las necesidades de cada cliente y garantizar soluciones de impacto real.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Calidad:</strong> Desarrollamos productos robustos, seguros y fáciles de usar, asegurando la satisfacción del cliente.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Adaptabilidad:</strong> Nuestras soluciones son flexibles y personalizables para responder a las necesidades del mercado.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Trabajo en equipo:</strong> La colaboración dentro de nuestro equipo y con nuestros clientes es clave para resultados excepcionales.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Responsabilidad:</strong> Actuamos con integridad y transparencia, priorizando el bienestar y la confianza.</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>
  );
}
export default AboutSection;