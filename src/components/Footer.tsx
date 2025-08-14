import { Code2, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">WebPro</span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 text-sm leading-relaxed">
              Tu socio digital de confianza. Creamos sitios web y sistemas que impulsan tu negocio 
              y te ayudan a crecer en el mundo digital.
            </p>
          </div>

          {/* Servicios */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Servicios</h3>
            <ul className="space-y-2 text-sm text-gray-300 dark:text-gray-400">
              <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Páginas web corporativas</a></li>
              <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Tiendas online</a></li>
              <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Sistemas a medida</a></li>
              <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Mantenimiento y soporte</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href="tel:+51933826740" className="hover:text-blue-400 transition-colors">
                  (+51) 933 826 740
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:info@webpro.pe" className="hover:text-blue-400 transition-colors">
                  info@webpro.pe
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5" />
                <span>Chimbote, Perú<br />Atendemos todo el país</span>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Síguenos</h3>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-gray-800 rounded-lg hover:bg-pink-600 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            
            <div className="space-y-2 text-sm text-gray-300">
              <p>Horarios de atención:</p>
              <p>Lun - Vie: 9:00 AM - 7:00 PM</p>
              <p>Sáb: 9:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Footer inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-400">
          <p>
            © {currentYear} WebPro. Todos los derechos reservados.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;