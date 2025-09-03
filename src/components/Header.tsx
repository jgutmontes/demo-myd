import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    '¿Quiénes somos?',
    'Cursos',
    'Servicios',
    'Especialistas',
    'Productos',
    'Blog',
    'Contacto',
    'Membresías'
  ];

  return (
    <header className="bg-[#FDFDFC] shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-[#2D4E71]">
                M&D<span className="text-[#1A8C5D]">Academy</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[#2D4E71] hover:text-[#1A8C5D] px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>

          {/* Auth Buttons */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#2D4E71]"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-[#DEDEDE]">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[#2D4E71] hover:text-[#1A8C5D] block px-3 py-2 text-base font-medium"
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 pb-3 border-t border-[#DEDEDE]">
                <div className="flex items-center px-3 space-x-3">
                  <Button variant="ghost" className="text-[#2D4E71] hover:text-[#1A8C5D] hover:bg-[#DEDEDE]/20 w-full">
                    Iniciar Sesión
                  </Button>
                  <Button className="bg-[#2D4E71] hover:bg-[#1A8C5D] text-[#FDFDFC] w-full">
                    Regístrate
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}