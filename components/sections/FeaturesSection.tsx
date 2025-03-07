import React from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Check} from "lucide-react";

function FeaturesSection() {
    return <>
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
                            <Button className="mt-8 bg-red-500 hover:bg-red-600 text-white">Prueba 15 días sin costo</Button>
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
                            <Button className="mt-8 bg-red-500 hover:bg-red-600 text-white">Prueba 15 días sin costo</Button>
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
                            <Button className="mt-8 bg-red-500 hover:bg-red-600 text-white">Prueba 15 días sin costo</Button>
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
    </>
}

function FeatureItem({ children }: { children: React.ReactNode }) {
    return (
        <li className="flex items-start">
            <Check className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
            <span>{children}</span>
        </li>
    )
}

export default FeaturesSection;