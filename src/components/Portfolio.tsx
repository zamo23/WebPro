import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      image: 'img/proyectos/1.png',
      client: 'Plataforma de recordatorios por WhatsApp',
      type: 'Sistema de notificaciones automáticas',
      result: 'Reducción de pagos atrasados con recordatorios grupales'
    },
    {
      image: 'img/proyectos/2.png',
      client: 'Portal web para alquiler de maquinaria',
      type: 'Sitio web corporativo con catálogo y cotizaciones',
      result: 'Incremento del 35% en solicitudes de alquiler'
    },
    {
      image: 'img/proyectos/3.png',
      client: 'Sistema de gestión de clientes VIP',
      type: 'Aplicación web de control y seguimiento',
      result: 'Centralización de datos y gestión de clientes más eficiente'
    },
    {
      image: 'img/proyectos/4.png',
      client: 'Sistema de códigos para Netflix',
      type: 'Web con integración de soporte por correo',
      result: 'Atención al cliente más rápida y organizada'
    },
    {
      image: 'img/proyectos/5.png',
      client: 'Sistema de códigos para Disney+',
      type: 'Web con integración de soporte por correo',
      result: 'Atención al cliente más rápida y organizada'
    },
    {
      image: 'img/proyectos/6.png',
      client: 'Bot de Telegram para revendedores',
      type: 'Automatización de gestión de cuentas y plataformas',
      result: 'Aumento de eficiencia y reducción de tiempo de gestión'
    }
  ];

  return (
    <section id="portafolio" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nuestro portafolio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Algunos de los proyectos exitosos que hemos desarrollado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.client}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                  <ExternalLink className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.client}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {project.type}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Resultado:</strong> {project.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;