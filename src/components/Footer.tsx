import React from 'react';
import { MapPin, Phone, Clock, Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5595991740090?text=Olá! Gostaria de saber mais sobre os serviços do Auto Posto Estrela D\'Alva', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/autopostoestreladalvarr', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="inline-block mb-4">
              <img 
                src="./Logotipo.png" 
                alt="Auto Posto Estrela D'Alva" 
                className="h-12 md:h-14 lg:h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Seu destino completo em Boa Vista - RR. Combustível de qualidade, conveniência, barbearia e açaí em um só lugar, com atendimento 24 horas.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 p-3 rounded-full transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </button>
              <button
                onClick={handleInstagramClick}
                className="bg-purple-500 hover:bg-purple-600 p-3 rounded-full transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-yellow-400">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500" />
                <span className="text-gray-400">(95) 99174-0090</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-green-500" />
                <span className="text-gray-400">Aberto 24 horas</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-500 mt-1" />
                <span className="text-gray-400">
                  R. Estrela D'álva, 1794<br />
                  Boa Vista - RR
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-yellow-400">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Posto de Combustível</li>
              <li>• Loja de Conveniência</li>
              <li>• Barbearia</li>
              <li>• Açaiteria</li>
              <li>• Troca de Óleo</li>
              <li>• Ar Comprimido</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Auto Posto Estrela D'Alva. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            "Abasteça, aproveite e relaxe!" - Boa Vista, Roraima
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;