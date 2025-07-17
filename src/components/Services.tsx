import React from 'react';
import { Car, ShoppingBag, Scissors, IceCream, Fuel, Coffee, Zap, Smile } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Car className="w-12 h-12" />,
      title: "Posto de Combustível",
      description: "Combustível de alta qualidade com preços competitivos",
      features: ["Gasolina Comum e Aditivada", "Etanol", "Diesel", "Atendimento Rápido"],
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      icon: <ShoppingBag className="w-12 h-12" />,
      title: "Loja de Conveniência",
      description: "Tudo o que você precisa em um só lugar",
      features: ["Snacks e Bebidas", "Produtos de Higiene", "Utensílios Domésticos", "Revistas e Jornais"],
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
    {
      icon: <Scissors className="w-12 h-12" />,
      title: "Barbearia",
      description: "Corte e cuidado masculino enquanto você abastece",
      features: ["Corte de Cabelo", "Barba e Bigode", "Sobrancelha", "Atendimento Profissional"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: <IceCream className="w-12 h-12" />,
      title: "Açaiteria",
      description: "Açaí natural e cremoso, perfeito para o calor de Roraima",
      features: ["Açaí Natural", "Vitaminas e Sucos", "Variedade de Complementos", "Ambiente Climatizado"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nossos <span className="text-red-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços para tornar sua parada mais conveniente e prazerosa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`${service.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group`}
            >
              <div className={`bg-gradient-to-br ${service.color} rounded-full p-4 w-20 h-20 mb-6 group-hover:scale-110 transition-transform`}>
                <div className="text-white flex items-center justify-center h-full">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Extra Services */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Serviços <span className="text-red-600">Adicionais</span>
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-md">
                <Fuel className="w-8 h-8 text-red-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Troca de Óleo</h4>
              <p className="text-gray-600 text-sm">Serviço rápido e eficiente</p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-md">
                <Coffee className="w-8 h-8 text-yellow-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Café Fresh</h4>
              <p className="text-gray-600 text-sm">Café sempre fresco e quentinho</p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-md">
                <Zap className="w-8 h-8 text-purple-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Ar Comprimido</h4>
              <p className="text-gray-600 text-sm">Calibragem gratuita</p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-md">
                <Smile className="w-8 h-8 text-orange-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Atendimento VIP</h4>
              <p className="text-gray-600 text-sm">Experiência diferenciada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;