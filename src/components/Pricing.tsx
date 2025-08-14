import { Check, MessageCircle, Star, AlertTriangle } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Web a medida',
      description: 'Sitio web personalizado',
      initialPrice: 'S/300',
      originalInitialPrice: 'S/600',
      monthlyPrice: 'S/100',
      originalMonthlyPrice: 'S/200',
      popular: false,
      features: [
        'Diseño único y personalizado',
        'Hasta 5 secciones incluidas',
        'Optimización responsive completa',
        'SEO básico incluido',
        'Hosting y dominio incluidos',
        'Certificado SSL de seguridad',
        'Hasta 2 cambios básicos al mes',
        'Soporte y mantenimiento mensual',
        'Copias de seguridad automáticas'
      ],
      note: 'Precio puede variar según funcionalidades adicionales'
    },
    {
      name: 'Sistema a medida',
      description: 'Sistema web personalizado',
      initialPrice: 'S/500',
      originalInitialPrice: 'S/1,000',
      monthlyPrice: 'S/150',
      originalMonthlyPrice: 'S/300',
      popular: true,
      features: [
        'Sistema web completamente a medida',
        'Hasta 3 módulos personalizados',
        'Interfaz adaptada a tu identidad',
        'Optimización de rendimiento',
        'Hosting y dominio incluidos',
        'Certificado SSL de seguridad',
        'Hasta 3 cambios básicos al mes',
        'Soporte prioritario 24/7',
        'Monitoreo continuo',
        'Copias de seguridad diarias'
      ],
      note: 'Precio varía según complejidad y módulos'
    },
    {
      name: 'Web + Sistema',
      description: 'Solución completa integrada',
      initialPrice: 'S/599',
      originalInitialPrice: 'S/1,200',
      monthlyPrice: 'S/200',
      originalMonthlyPrice: 'S/400',
      popular: false,
      features: [
        'Todo del Plan Web y Sistema',
        'Integración completa web-sistema',
        'Panel de administración personalizado',
        'Hasta 5 secciones + 3 módulos',
        'Hosting y dominio incluidos',
        'Certificado SSL de seguridad',
        'Hasta 5 cambios básicos al mes',
        'Soporte prioritario completo',
        'Monitoreo y backups diarios',
        'Mantenimiento integral'
      ],
      note: 'Precio según requerimientos especiales'
    }
  ];

  return (
    <section id="planes" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Planes y precios
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Soluciones profesionales con precios especiales de lanzamiento
          </p>
          <div className="mt-4 inline-flex items-center space-x-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-4 py-2 rounded-full text-sm font-medium">
            <AlertTriangle className="h-4 w-4" />
            <span>Oferta limitada: 50% descuento por 3 meses</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 ${
                plan.popular ? 'ring-4 ring-blue-500 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-current" />
                    <span>Más popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {plan.description}
                </p>
                
                {/* Precio inicial */}
                <div className="mb-4">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Pago inicial</div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      {plan.initialPrice}
                    </span>
                    <span className="text-lg text-gray-400 dark:text-gray-500 line-through">
                      {plan.originalInitialPrice}
                    </span>
                  </div>
                </div>

                {/* Precio mensual */}
                <div className="mb-4">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Mensualidad</div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {plan.monthlyPrice}
                    </span>
                    <span className="text-sm text-gray-400 dark:text-gray-500 line-through">
                      {plan.originalMonthlyPrice}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">/mes</span>
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-400 font-medium mt-1">
                    Por 3 meses, luego tarifa regular
                  </div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.note && (
                <div className="mb-6 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                  <p className="text-xs text-yellow-700 dark:text-yellow-300">
                    <strong>Nota:</strong> {plan.note}
                  </p>
                </div>
              )}

              <a
                href={`https://wa.me/51999999999?text=Hola,%20quiero%20contratar%20el%20plan%20${plan.name}%20(Inicial:%20${plan.initialPrice},%20Mensual:%20${plan.monthlyPrice})`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-bold transition-all duration-200 ${
                  plan.popular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105' 
                    : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                }`}
              >
                <MessageCircle className="h-5 w-5" />
                <span>Contratar ahora</span>
              </a>
            </div>
          ))}
        </div>

        {/* Condiciones generales */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Condiciones generales para todos los planes
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600 dark:text-gray-300">
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>El pago inicial cubre análisis, diseño, desarrollo y puesta en marcha completa.</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>La mensualidad incluye hosting, dominio, soporte, mantenimiento y actualizaciones.</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Cambios básicos:</strong> Actualizar textos, imágenes, datos de contacto, agregar productos simples o contenido menor (máximo 30 min de trabajo).</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>En caso de impago, el servicio se suspenderá hasta regularizar el pago.</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Los precios pueden variar según las funcionalidades o requisitos adicionales acordados con el cliente.</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Cambios que requieran más de 30 min o nuevas funcionalidades se cotizan por separado desde S/50/hora.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;