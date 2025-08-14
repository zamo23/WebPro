import { Zap, Globe, Shield, Headphones, Smartphone, Search } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Carga rápida y optimizada',
      description: 'Sitios web que cargan en menos de 3 segundos'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Hosting y dominio incluidos',
      description: 'Todo lo necesario para estar online desde el día uno'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Seguridad y copias de seguridad',
      description: 'Tu sitio web protegido con respaldos automáticos'
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: 'Soporte local y mantenimiento',
      description: 'Atención personalizada cuando lo necesites'
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Diseño adaptable a móviles',
      description: 'Perfecto en cualquier dispositivo y tamaño'
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: 'Optimización SEO básica',
      description: 'Configurado para aparecer en Google desde el inicio'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ¿Por qué elegir nuestros servicios?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ofrecemos todo lo que necesitas para tener una presencia digital exitosa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;