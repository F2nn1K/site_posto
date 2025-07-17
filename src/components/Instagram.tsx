import React from 'react';
import { Instagram as InstagramIcon, ExternalLink } from 'lucide-react';

const Instagram: React.FC = () => {
  const instagramPosts = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=400",
      caption: "Combustível de qualidade sempre!"
    },
    {
      id: 2,
      image: "/conveniencia.png",
      caption: "Nossa loja de conveniência tem tudo o que você precisa"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=400",
      caption: "Corte profissional na nossa barbearia"
    },
    {
      id: 4,
      image: "/acai.png",
      caption: "Açaí fresquinho todos os dias"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=400",
      caption: "Atendimento 24 horas para sua comodidade"
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/2449457/pexels-photo-2449457.jpeg?auto=compress&cs=tinysrgb&w=400",
      caption: "Variedade de produtos na conveniência"
    }
  ];

  const handleInstagramClick = () => {
    window.open('https://instagram.com/autopostoestreladalvarr', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Siga no <span className="text-purple-600">Instagram</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Acompanhe nosso dia a dia, promoções especiais e novidades através do nosso perfil oficial no Instagram.
          </p>
          
          <button
            onClick={handleInstagramClick}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <InstagramIcon className="w-6 h-6" />
            <span>@autopostoestreladalvarr</span>
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <div 
              key={post.id}
              onClick={handleInstagramClick}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-48 object-cover object-center group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium">{post.caption}</p>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <InstagramIcon className="w-4 h-4 text-purple-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <InstagramIcon className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Não perca nenhuma novidade!</h3>
            <p className="text-gray-600 mb-6">
              Siga nosso Instagram para ficar por dentro das promoções, novidades e muito mais.
            </p>
            <button
              onClick={handleInstagramClick}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Seguir Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;