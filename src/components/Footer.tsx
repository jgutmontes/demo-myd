import { Facebook, Instagram, Youtube, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2D4E71] text-[#FDFDFC]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <div className="text-center mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="text-2xl font-bold text-[#1A8C5D] mb-4">M&D Academy</div>
            <p className="text-[#8A99B2] mb-8">
              Aprende todo lo que necesitas saber sobre agricultura de la mano de los expertos más reconocidos de Latinoamérica de forma virtual. Suscríbete ahora y obtén todos nuestros cursos de manera ilimitada.
            </p>
            
            {/* Social Media Links */}
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-[#8A99B2] hover:text-[#1A8C5D] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#8A99B2] hover:text-[#1A8C5D] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#8A99B2] hover:text-[#1A8C5D] transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#8A99B2] hover:text-[#1A8C5D] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#8A99B2] hover:text-[#1A8C5D] transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FDFDFC]">Acerca de</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#8A99B2] hover:text-[#1A8C5D] transition-colors">¿Quiénes somos?</a></li>
              <li><a href="#" className="text-[#8A99B2] hover:text-[#1A8C5D] transition-colors">Blog</a></li>
              <li><a href="#" className="text-[#8A99B2] hover:text-[#1A8C5D] transition-colors">Contacto</a></li>
              <li><a href="#" className="text-[#8A99B2] hover:text-[#1A8C5D] transition-colors">Membresías</a></li>
            </ul>
          </div>

          {/* Courses Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FDFDFC]">Cursos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#8A99B2] hover:text-[#1A8C5D] transition-colors">Cambio Climático en la agricultura</a></li>
              <li><a href="#" className="text-[#8A99B2] hover:text-[#1A8C5D] transition-colors">Cosecha de palta</a></li>
              <li><a href="#" className="text-[#8A99B2] hover:text-[#1A8C5D] transition-colors">Estrategias de manejo de arándanos</a></li>
              <li><a href="#" className="text-[#8A99B2] hover:text-[#1A8C5D] transition-colors">Manejo y uso seguro de plaguicidas</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FDFDFC]">Contáctanos</h3>
            <ul className="space-y-2">
              <li className="text-[#8A99B2]">info@mdacademy.pe</li>
              <li className="text-[#8A99B2]">+51 900118354</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#8A99B2]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#8A99B2] text-sm">
              © 2024 M&D Academy. Todos los derechos reservados
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-[#8A99B2] hover:text-[#1A8C5D] text-sm transition-colors">
                Términos y condiciones
              </a>
              <a href="#" className="text-[#8A99B2] hover:text-[#1A8C5D] text-sm transition-colors">
                Políticas de privacidad
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Help Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-[#1A8C5D] text-[#FDFDFC] p-3 rounded-full shadow-lg hover:bg-[#2D4E71] transition-colors cursor-pointer">
          <MessageCircle className="w-6 h-6" />
        </div>
      </div>
    </footer>
  );
}