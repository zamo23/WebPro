import { MessageCircle, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            ¿Listo para tener tu página web?
          </h2>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
            No esperes más. Da el primer paso hacia el éxito digital de tu negocio. 
            Conversemos hoy mismo y hagamos realidad tu proyecto.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://wa.me/51933826740?text=Hola,%20quiero%20información%20sobre%20sus%20servicios%20de%20desarrollo%20web"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="h-6 w-6" />
              <span>Hablemos por WhatsApp</span>
            </a>
            
            <a
              href="tel:+51933826740"
              className="inline-flex items-center space-x-2 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Llámanos: (+51) 933 826 740</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-blue-100 dark:text-blue-200">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Respuesta en menos de 1 hora</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
              <span>Consulta gratuita</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
              <span>Sin compromiso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;