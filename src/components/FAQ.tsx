import { useId, useMemo, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type Faq = { question: string; answer: string };

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  const faqs: Faq[] = useMemo(() => [
    {
      question: "¿Cuál es el plazo de entrega?",
      answer:
        "Web a medida: 5–7 días hábiles. Sistema a medida: 10–15 días. Web + Sistema: 12–20 días. Depende del alcance y de que recibamos tus contenidos a tiempo."
    },
    {
      question: "¿Qué incluye exactamente el servicio?",
      answer:
        "Desarrollo 100% a medida, hosting y dominio administrados por nosotros, certificado SSL, optimización para móviles, monitoreo, copias de seguridad y soporte/mantenimiento mensual según el plan."
    },
    {
      question: "¿Qué pasa si no pago a tiempo?",
      answer:
        "La suscripción es requisito para mantener el servicio activo. Si vence y no se regulariza, se suspende temporalmente. Al pagar, se reactiva. No eliminamos tus datos durante la suspensión."
    },
    {
      question: "¿Quién es dueño del sitio o del código?",
      answer:
        "El servicio es administrado (SaaS). La infraestructura y el código son de la empresa. Si deseas operar por tu cuenta, puedes solicitar licencia de entrega y migración con costo adicional."
    },
    {
      question: "¿Cómo pido cambios y soporte?",
      answer:
        "Por WhatsApp o email. Cada plan incluye un número de cambios al mes; cambios adicionales se cotizan (desde S/50 por hora)."
    },
    {
      question: "¿Qué formas de pago aceptan?",
      answer:
        "Transferencia bancaria, Yape, Plin y tarjetas. Pago anual anticipado con descuento opcional."
    },
    {
      question: "¿Atienden en todo el Perú?",
      answer:
        "Sí. Atendemos de forma remota a todo el país. Reuniones por videollamada y canal de WhatsApp durante el proyecto."
    },
    {
      question: "¿Incluyen capacitación?",
      answer:
        "Sí, incluimos una sesión de capacitación para gestión de contenidos (y uso del sistema si aplica)."
    }
  ], []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800" aria-labelledby={`${baseId}-faq-title`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id={`${baseId}-faq-title`} className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros servicios a medida
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const headerId = `${baseId}-faq-header-${index}`;
            const panelId = `${baseId}-faq-panel-${index}`;
            return (
              <div
                key={index}
                className="mb-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
              >
                <button
                  id={headerId}
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* SEO: Rich Results */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
};

export default FAQ;
