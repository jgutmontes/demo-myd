import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { experts } from '@/data/mockData';

export default function ExpertsSection() {
  return (
    <section className="py-20 bg-[#FDFDFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2D4E71] mb-6">
            ¡Los <span className="text-[#1A8C5D]">mejores expertos</span> del mundo agrícola a un solo{' '}
            <span className="text-[#1A8C5D]">click de distancia</span>!
          </h2>
          <p className="text-lg md:text-xl text-[#8A99B2] max-w-4xl mx-auto leading-relaxed mb-8">
            Contamos con un staff de expertos de toda América Latina, especialistas en cultivos de exportación, control de plagas, manejo de tecnologías agrícolas y mucho más!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#2D4E71] hover:bg-[#1A8C5D] text-[#FDFDFC] px-8 py-3">
              Ver Especialistas
            </Button>
            <Button variant="outline" className="border-[#2D4E71] text-[#2D4E71] hover:bg-[#8A99B2]/10 hover:border-[#1A8C5D] hover:text-[#1A8C5D] px-8 py-3">
              Quiero ser un Especialista
            </Button>
          </div>
        </div>

        {/* Specialists Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1A8C5D]">
            Especialistas
          </h3>
        </div>

        {/* Expert Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {experts.map((expert) => (
            <Card 
              key={expert.id} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden bg-[#FDFDFC] border-[#DEDEDE]"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold text-[#2D4E71] mb-2">
                  {expert.name}
                </h4>
                <p className="text-[#8A99B2] text-sm leading-relaxed">
                  {expert.title}
                </p>
                <div className="mt-4">
                  <span className="text-xs font-semibold text-[#1A8C5D] bg-[#1A8C5D]/10 px-3 py-1 rounded-full">
                    {expert.specialization}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-[#DEDEDE]/30 to-[#8A99B2]/20 rounded-2xl p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#2D4E71] mb-4">
            Disfruta y aprende donde estés
          </h3>
          <p className="text-lg text-[#8A99B2] mb-8 max-w-2xl mx-auto">
            M&D Academy está diseñado para que puedas disfrutar de nuestros cursos en cualquier lugar del mundo.
          </p>
          <Button 
            size="lg" 
            className="bg-[#2D4E71] hover:bg-[#1A8C5D] text-[#FDFDFC] px-8 py-4 text-lg font-semibold rounded-full"
          >
            Comprar ahora
          </Button>
        </div>
      </div>
    </section>
  );
}