import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { courses } from '@/data/mockData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function CourseCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const coursesPerView = 4;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + coursesPerView >= courses.length ? 0 : prevIndex + coursesPerView
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - coursesPerView < 0 ? Math.max(0, courses.length - coursesPerView) : prevIndex - coursesPerView
    );
  };

  const visibleCourses = courses.slice(currentIndex, currentIndex + coursesPerView);

  return (
    <section className="py-20 bg-gradient-to-br from-[#DEDEDE]/20 to-[#8A99B2]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2D4E71] mb-6">
            CURSOS
          </h2>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-center mb-8 space-x-4">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="rounded-full p-2 hover:bg-[#8A99B2]/10 border-[#8A99B2] text-[#2D4E71] hover:border-[#1A8C5D] hover:text-[#1A8C5D]"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="rounded-full p-2 hover:bg-[#8A99B2]/10 border-[#8A99B2] text-[#2D4E71] hover:border-[#1A8C5D] hover:text-[#1A8C5D]"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {visibleCourses.map((course, index) => (
            <Card 
              key={course.id} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden bg-[#FDFDFC] border-[#DEDEDE]"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="text-xs font-semibold text-[#1A8C5D] bg-[#1A8C5D]/10 px-2 py-1 rounded-full">
                    {course.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#2D4E71] mb-4 line-clamp-2">
                  {course.title}
                </h3>
                <Button 
                  className="w-full bg-[#2D4E71] hover:bg-[#1A8C5D] text-[#FDFDFC]"
                  size="sm"
                >
                  Ver el curso
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Membership CTA */}
        <div className="text-center bg-gradient-to-r from-[#2D4E71] to-[#1A8C5D] rounded-2xl p-12 text-[#FDFDFC]">
          <h3 className="text-2xl md:text-4xl font-bold mb-4">MEMBRESÍA</h3>
          <h4 className="text-xl md:text-2xl font-semibold mb-4">
            ¡Es <span className="text-[#DEDEDE]">momento de empezar</span> y nosotros te apoyamos!
          </h4>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Comienza con los mejores expertos del rubro para tu educación
            <br />
            ¡<span className="text-[#DEDEDE]">Vamos por tu objetivo</span>!
          </p>
          <Button 
            size="lg" 
            className="bg-[#FDFDFC] text-[#2D4E71] hover:bg-[#DEDEDE] hover:text-[#1A8C5D] px-8 py-4 text-lg font-semibold rounded-full"
          >
            Comprar ahora
          </Button>
        </div>
      </div>
    </section>
  );
}