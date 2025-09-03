import { Card, CardContent } from '@/components/ui/card';
import { Users, Lightbulb, Globe, Award } from 'lucide-react';

export default function WhyChooseSection() {
  const features = [
    {
      icon: Users,
      title: 'Expertos de primer nivel',
      description: 'Los cursos de M&D Academy son brindados por asesores TOP de todo el mundo.'
    },
    {
      icon: Lightbulb,
      title: 'Cursos innovadores',
      description: 'Capacitaciones sobre las tendencias agrícolas más actuales dentro y fuera del campo'
    },
    {
      icon: Globe,
      title: 'Educación online a tu alcance',
      description: 'Para capacitarte estés donde estés ¡La distancia ya no es una excusa!'
    },
    {
      icon: Award,
      title: 'Proveemos certificación',
      description: 'Te brindaremos un certificado a nombre de M&D Academy por cada curso que termines.'
    }
  ];

  return (
    <section className="py-20 bg-[#FDFDFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2D4E71] mb-6">
            ¿Por qué{' '}
            <span className="text-[#1A8C5D]">miles de Profesionales</span>{' '}
            escogen M&D Academy?
          </h2>
          <p className="text-lg md:text-xl text-[#8A99B2] max-w-4xl mx-auto leading-relaxed">
            El conocimiento y la innovación continua siempre harán que un profesional se desarrolle más en su sector ¿Qué mejor que hacerlo de la mano de los expertos más reconocidos del mundo agrícola?
          </p>
        </div>

        {/* Why Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1A8C5D] mb-12">
            ¿PORQUÉ?
          </h3>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-[#FDFDFC] to-[#DEDEDE]/20"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-[#1A8C5D]/10 rounded-full group-hover:bg-[#1A8C5D]/20 transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-[#1A8C5D]" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-[#2D4E71] mb-4">
                  {feature.title}
                </h4>
                <p className="text-[#8A99B2] leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}