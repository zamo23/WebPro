import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Nelli Diestra',
      role: 'Jefa de Recursos Humanos',
      company: 'Bugatti SAC',
      image: 'https://cdn-icons-png.flaticon.com/512/9131/9131529.png',
      text: 'Excelente trabajo. El sitio web de alquiler de maquinaria superó nuestras expectativas, alcanzó el primer lugar en posicionamiento local y sigue mejorando a nivel internacional. El soporte post-venta es increíble. Definitivamente los recomiendo.',
      rating: 5
    },
    {
      name: 'Mili Alegre',
      role: 'Propietaria',
      company: 'CVPX PREMIUM',
      image: 'https://cdn-icons-png.flaticon.com/512/9131/9131529.png',
      text: 'Mi sistema de soporte de clientes funciona perfecto. La atención es más rápida, los códigos se gestionan sin errores y mis clientes están más satisfechos. ¡Gracias por todo!',
      rating: 5
    },
    {
      name: 'Jaime Viera',
      role: 'Propietario',
      company: 'Yeimix LAT',
      image: 'https://cdn-icons-png.flaticon.com/512/9131/9131529.png',
      text: 'El sistema de gestión para mis revendedores de streaming ha hecho que todo sea más fácil y rápido. Ahora los procesos están automatizados y tengo más control del negocio.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Testimonios reales de clientes satisfechos con nuestro trabajo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Quote className="h-4 w-4 text-white" />
                </div>
              </div>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    {testimonial.company}
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

export default Testimonials;