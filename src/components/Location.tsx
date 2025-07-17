import React from 'react';
import { MapPin, Navigation, Clock } from 'lucide-react';

const Location: React.FC = () => {
  const address = "R. Estrela D'álva, 1794 - Profa. Araceli Souto Maior, Boa Vista - RR, 69315-076";
  
  const handleDirections = () => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
  };

  return (
    <section id="localizacao" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nossa <span className="text-red-600">Localização</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos estrategicamente localizados para melhor atendê-lo. Venha nos visitar!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.9776886772194!2d-60.67454142555618!3d2.820464754353847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d93f6e8e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sR.%20Estrela%20D'%C3%A1lva%2C%201794%20-%20Profa.%20Araceli%20Souto%20Maior%2C%20Boa%20Vista%20-%20RR%2C%2069315-076!5e0!3m2!1spt-BR!2sbr!4v1638360000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Location Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 rounded-full p-3">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Endereço</h3>
                  <p className="text-gray-600">{address}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-3">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Horário de Funcionamento</h3>
                  <p className="text-gray-600">Aberto 24 horas</p>
                  <p className="text-gray-500 text-sm mt-1">Todos os dias da semana</p>
                </div>
              </div>
            </div>

            <button
              onClick={handleDirections}
              className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-4 px-6 rounded-xl font-semibold hover:from-red-700 hover:to-orange-600 transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Navigation className="w-5 h-5" />
              <span>Como Chegar</span>
            </button>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;