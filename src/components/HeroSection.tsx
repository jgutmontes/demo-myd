import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#FDFDFC] via-[#DEDEDE]/30 to-[#8A99B2]/20 py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#2D4E71] rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-[#1A8C5D] rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-[#8A99B2] rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#2D4E71] mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            ¡Bienvenido a{' '}
            <span className="bg-gradient-to-r from-[#2D4E71] to-[#1A8C5D] bg-clip-text text-transparent">
              M&D Academy
            </span>
            !
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#2D4E71] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Cursos agrícolas grabados desde el campo.
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-[#8A99B2] max-w-4xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            ¡El agro no puede detenerse y tú tampoco! Aprende todo lo que quieras conocer sobre el cultivo de tu preferencia de manera fácil y rápida.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
            <Button 
              size="lg" 
              className="bg-[#2D4E71] hover:bg-[#1A8C5D] text-[#FDFDFC] px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Ver cursos
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-[#2D4E71] text-[#2D4E71] hover:bg-[#8A99B2]/10 hover:border-[#1A8C5D] hover:text-[#1A8C5D] px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Play className="w-5 h-5 mr-2" />
              Ver demo
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#1A8C5D] mb-2">1000+</div>
              <div className="text-[#8A99B2] font-medium">Profesionales capacitados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#1A8C5D] mb-2">50+</div>
              <div className="text-[#8A99B2] font-medium">Cursos disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#1A8C5D] mb-2">15+</div>
              <div className="text-[#8A99B2] font-medium">Expertos internacionales</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}