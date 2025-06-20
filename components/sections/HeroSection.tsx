import Image from "next/image";
import { Button } from "../ui/button";
import imageBanner from "../../public/banner.jpg"

export default function HeroSection(){
    return <>
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
                <a href="https://wa.me/+18094309959" className="text-red-500 hover:text-teal-600">
                <Button  className="bg-red-500 hover:bg-teal-600 text-white px-8 py-6 text-lg">
                    Contactanos
                </Button>
                </a>
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
                    alt="Dashboard de Auorora Solutions"
                    width={600}
                    height={500}
                    className="rounded-lg shadow-xl"
                />
                </div>
            </div>
        </section>
    </>
}