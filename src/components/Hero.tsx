import React from 'react';
import { MessageCircle, Car, ShoppingBag, Scissors, IceCream } from 'lucide-react';

const Hero: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5595991740090?text=Olá! Gostaria de saber mais sobre os serviços do Auto Posto Estrela D\'Alva', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-red-600 via-red-500 to-orange-500 text-white py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="./layout.png" 
          alt="Auto Posto Estrela D'Alva" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">


        {/* Service Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-20">
          <div 
            onClick={() => scrollToSection('servicos')}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white transition-all cursor-pointer transform hover:scale-105 group shadow-lg"
          >
            <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-red-200 transition-all">
              <Car className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">Posto</h3>
            <p className="text-gray-600 text-sm font-medium">Combustível de qualidade</p>
          </div>

          <div 
            onClick={() => scrollToSection('servicos')}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white transition-all cursor-pointer transform hover:scale-105 group shadow-lg"
          >
            <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-yellow-200 transition-all">
              <ShoppingBag className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">Conveniência</h3>
            <p className="text-gray-600 text-sm font-medium">Snacks e bebidas</p>
          </div>

          <div 
            onClick={() => scrollToSection('servicos')}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white transition-all cursor-pointer transform hover:scale-105 group shadow-lg"
          >
            <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-purple-200 transition-all">
              <Scissors className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">Barbearia</h3>
            <p className="text-gray-600 text-sm font-medium">Atendimento masculino</p>
          </div>

          <div 
            onClick={() => scrollToSection('servicos')}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white transition-all cursor-pointer transform hover:scale-105 group shadow-lg"
          >
            <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-orange-200 transition-all">
              <IceCream className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">Açaiteria</h3>
            <p className="text-gray-600 text-sm font-medium">Açaí natural e cremoso</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;