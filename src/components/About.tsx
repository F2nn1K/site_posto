import React from 'react';
import { Target, Eye, Heart, Users, Clock, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sobre o <span className="text-red-600">Auto Posto Estrela D'Alva</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Há anos servindo a comunidade de Boa Vista com excelência, qualidade e compromisso com nossos clientes.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-red-100 rounded-full p-4 w-16 h-16 mb-6">
              <Target className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Nossa Missão</h3>
            <p className="text-gray-600">
              Oferecer produtos e serviços de qualidade superior, proporcionando uma experiência completa e conveniente para nossos clientes, sempre com atendimento humanizado e eficiente.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mb-6">
              <Eye className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Nossa Visão</h3>
            <p className="text-gray-600">
              Ser reconhecido como o melhor auto posto de Boa Vista, referência em qualidade, inovação e atendimento ao cliente, expandindo nossos serviços para atender todas as necessidades da comunidade.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mb-6">
              <Heart className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Nossos Valores</h3>
            <p className="text-gray-600">
              Integridade, qualidade, respeito ao cliente, responsabilidade ambiental e compromisso com a comunidade são os pilares que guiam todas as nossas ações e decisões.
            </p>
          </div>
        </div>

        {/* Differentials */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Nossos <span className="text-orange-500">Diferenciais</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-6 w-20 h-20 mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600 mx-auto" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Atendimento Personalizado</h4>
              <p className="text-gray-600">
                Equipe treinada e dedicada para oferecer o melhor atendimento, sempre com um sorriso e disposição para ajudar.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 w-20 h-20 mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600 mx-auto" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Aberto 24 Horas</h4>
              <p className="text-gray-600">
                Funcionamento ininterrupto para atender você a qualquer hora do dia ou da noite, com total segurança e comodidade.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-6 w-20 h-20 mx-auto mb-4">
                <Star className="w-8 h-8 text-orange-600 mx-auto" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Qualidade Garantida</h4>
              <p className="text-gray-600">
                Combustível de alta qualidade, produtos selecionados e serviços executados com excelência e responsabilidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;