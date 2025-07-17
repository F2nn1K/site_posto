import React, { useState } from 'react';
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-red-600 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>(95) 99174-0090</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>Aberto 24 horas</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span className="hidden sm:inline">Boa Vista - RR</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/Logotipo.png" 
                alt="Auto Posto Estrela D'Alva" 
                className="h-12 md:h-14 lg:h-16 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('localizacao')}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Localização
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Contato
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-red-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left"
                >
                  Início
                </button>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left"
                >
                  Sobre
                </button>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left"
                >
                  Serviços
                </button>
                <button 
                  onClick={() => scrollToSection('localizacao')}
                  className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left"
                >
                  Localização
                </button>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left"
                >
                  Contato
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;