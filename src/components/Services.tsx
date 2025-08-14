import { Monitor, ShoppingCart, Settings, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Monitor className="h-12 w-12" />,
      title: 'Páginas web corporativas',
      description: 'Sitios web profesionales que reflejan la imagen de tu empresa y generan confianza en tus clientes.',
      features: ['Diseño personalizado', 'Hasta 10 páginas', 'Formularios de contacto', 'Galería de imágenes']
    },
    {
      icon: <ShoppingCart className="h-12 w-12" />,
      title: 'Tiendas online',
      description: 'E-commerce completo con sistema de pagos integrado para vender tus productos las 24 horas.',
      features: ['Catálogo ilimitado', 'Pagos online seguros', 'Panel administrativo', 'Reportes de ventas']
    },
    {
      icon: <Settings className="h-12 w-12" />,
      title: 'Sistemas a medida',
      description: 'Desarrollo personalizado para necesidades específicas de tu negocio o industria.',
      features: ['Sistema de reservas', 'Control de inventarios', 'Facturación electrónica', 'Integraciones API']
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      title: 'Mantenimiento y soporte',
      description: 'Mantén tu sitio web actualizado, seguro y funcionando perfectamente todos los días.',
      features: ['Actualizaciones mensuales', 'Soporte técnico 24/7', 'Copias de seguridad', 'Monitoreo continuo']
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nuestros servicios
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Soluciones digitales completas para hacer crecer tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;