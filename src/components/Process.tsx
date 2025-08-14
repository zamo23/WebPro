import { MessageSquare, Palette, Code, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'Reunión y definición de objetivos',
      description: 'Conversamos sobre tus necesidades, objetivos y visión para crear la estrategia perfecta.'
    },
    {
      number: '02',
      icon: <Palette className="h-8 w-8" />,
      title: 'Diseño y revisión',
      description: 'Creamos el diseño visual de tu sitio y lo ajustamos hasta que esté perfecto.'
    },
    {
      number: '03',
      icon: <Code className="h-8 w-8" />,
      title: 'Desarrollo y optimización',
      description: 'Programamos tu sitio web con las mejores prácticas de velocidad y SEO.'
    },
    {
      number: '04',
      icon: <Rocket className="h-8 w-8" />,
      title: 'Lanzamiento y soporte',
      description: 'Publicamos tu sitio web y te acompañamos con soporte continuo.'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nuestro proceso de trabajo
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Un método probado que garantiza resultados excepcionales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-200 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
                    <div className="text-blue-600 dark:text-blue-400">
                      {step.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 dark:from-blue-600/30 to-transparent transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;