import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: '+10',
      label: 'Clientes satisfechos'
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: '+9',
      label: 'Proyectos completados'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      number: '2+',
      label: 'Años de experiencia'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      number: '100%',
      label: 'Compromiso y dedicación'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg" 
              alt="Equipo de desarrollo web"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Sobre nosotros
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Somos un equipo de desarrolladores web comprometidos con crear soluciones digitales 
                  que impulsan negocios de todo tipo a crecer en el mundo online. En estos más de 2 años, 
                  hemos acompañado a más de 10 clientes a llevar sus ideas al siguiente nivel, completando 
                  más de 9 proyectos que transmiten confianza y generan resultados.
                </p>
                <p>
                  No solo construimos sitios web, creamos herramientas que aumentan ventas, mejoran la comunicación 
                  y fortalecen la presencia online. Nuestra prioridad es ofrecer siempre un servicio cercano, 
                  profesional y adaptado a cada necesidad.
                </p>
                <p>
                  Somos un equipo que avanza, aprende y mejora día a día para brindarte siempre 
                  el mejor servicio posible.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
