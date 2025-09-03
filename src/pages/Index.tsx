import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import CourseCarousel from '@/components/CourseCarousel';
import ExpertsSection from '@/components/ExpertsSection';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <WhyChooseSection />
      <CourseCarousel />
      <ExpertsSection />
      <Footer />
    </div>
  );
}